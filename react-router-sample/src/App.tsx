import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

type ContainerProps = {
  title?: string;
};

const Container: React.FC<ContainerProps> = ({ children, title }) => {
  return (
    <>
      <div className="container mx-auto">
        <p className="text-xl m-2">{title}</p>
        <div className="m-2">{children}</div>
      </div>
    </>
  );
};

type LinkHookProps = {
  nextPage: string;
  onClick?: () => void;
};

const StateInfo: React.FC = () => {
  const selector: any = useSelector((state) => state);
  return (
    <div className="border p-2">
      <div>State:</div>
      <div>{JSON.stringify(selector.state, null, "  ")}</div>
    </div>
  );
};

const LinkHook: React.FC<LinkHookProps> = ({ children, nextPage, onClick }) => {
  const history = useHistory();
  return (
    <div className="text-blue-500 underline my-2">
      <p
        onClick={async () => {
          if (onClick) onClick();
          history.push(nextPage);
        }}
      >
        {children}
      </p>
    </div>
  );
};

function useDirectAccessChecker(cb: () => boolean, fallbackUrl = "") {
  const history = useHistory();
  React.useEffect(() => {
    if (!cb()) {
      history.push(fallbackUrl || "/error");
    }
  });
}

function Top() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: "change state",
      payload: {
        state: {},
      },
    });
  }, [dispatch]);

  return (
    <Container title="Top Page">
      <StateInfo />
      <LinkHook
        nextPage="/a"
        onClick={() => {
          dispatch({
            type: "change state",
            payload: {
              state: { start: "OK" },
            },
          });
        }}
      >
        Page A
      </LinkHook>
    </Container>
  );
}

function ErrorPage() {
  const selector: any = useSelector((state) => state);
  const history = useHistory();
  React.useEffect(() => {
    if (selector.state.pageC) {
      history.push("/welcome");
    }
  }, [selector, history]);
  return (
    <Container title="Error">
      <LinkHook nextPage="/">Top</LinkHook>
    </Container>
  );
}

function PageA() {
  const dispatch = useDispatch();
  const selector: any = useSelector((state) => state);
  useDirectAccessChecker(() => {
    return selector.state.start;
  });
  return (
    <Container title="Page A">
      <StateInfo />
      <LinkHook
        nextPage="/b"
        onClick={() => {
          dispatch({
            type: "change state",
            payload: {
              state: { ...selector.state, pageA: "OK" },
            },
          });
        }}
      >
        Page B
      </LinkHook>
    </Container>
  );
}
function PageB() {
  const dispatch = useDispatch();
  const selector: any = useSelector((state) => state);
  useDirectAccessChecker(() => {
    return selector.state.pageA;
  });
  return (
    <Container title="Page B">
      <StateInfo />
      <LinkHook
        nextPage="/c"
        onClick={() => {
          dispatch({
            type: "change state",
            payload: {
              state: { ...selector.state, pageB: "OK" },
            },
          });
        }}
      >
        Page C
      </LinkHook>
    </Container>
  );
}
function PageC() {
  const dispatch = useDispatch();
  const selector: any = useSelector((state) => state);
  useDirectAccessChecker(() => {
    return selector.state.pageB;
  });
  return (
    <Container title="Page C">
      <StateInfo />
      <LinkHook
        nextPage="/welcome"
        onClick={() => {
          dispatch({
            type: "change state",
            payload: {
              state: { ...selector.state, pageC: "OK" },
            },
          });
        }}
      >
        Welcome
      </LinkHook>
    </Container>
  );
}
function Welcome() {
  const selector: any = useSelector((state) => state);
  useDirectAccessChecker(() => {
    return selector.state.pageC;
  }, "/");
  return (
    <Container title="Welcome!">
      <StateInfo />
      {/* <LinkHook nextPage="/">Top</LinkHook> */}
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/a">
          <PageA />
        </Route>
        <Route path="/b">
          <PageB />
        </Route>
        <Route path="/c">
          <PageC />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/error">
          <ErrorPage />
        </Route>
        <Route path="/">
          <Top />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
