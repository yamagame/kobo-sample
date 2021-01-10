import React from "react";

import { Header } from "./Header";
import { Button } from "./Button";
import "./page.css";

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page: React.FC<PageProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <article>
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />
    <section>
      <h2>Pages in Storybook</h2>
      <div>
        <Button label="Button" onClick={() => {}} primary size="medium" />{" "}
      </div>
    </section>
  </article>
);
