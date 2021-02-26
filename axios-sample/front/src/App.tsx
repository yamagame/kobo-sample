import React from 'react'
import './App.css'
import axios from 'axios'

type ExampleType = {
  Member1: string
  Member2: string
  Member3: string
}

function App() {
  const [state, setState] = React.useState<any>({
    '/sample-api': {
      data: '',
      status: '',
      headers: '',
      code: '',
    },
    '/notfound-api': {
      data: '',
      status: '',
      headers: '',
      code: '',
    },
    '/forbidden': {
      data: '',
      status: '',
      headers: '',
      code: '',
    },
    'http://1.1.1.1/api': {
      data: '',
      status: '',
      headers: '',
      code: '',
    },
    '/timeout': {
      data: '',
      status: '',
      headers: '',
      code: '',
    },
  })
  const onRequest = (url: string) => {
    return async () => {
      console.log(`call ${url}`)
      try {
        const res = await axios(url, { timeout: 3 * 1000 })
        setState({
          ...state,
          [url]: {
            ...res,
          },
        })
        console.log('done')
        return res
      } catch (err) {
        if (err.response) {
          setState({
            ...state,
            [url]: {
              ...err.response,
              code: err.code,
              message: err.message,
            },
          })
        } else if (err.request) {
          setState({
            ...state,
            [url]: {
              ...err.request,
              code: err.code,
              message: err.message,
            },
          })
        } else {
          setState({
            ...state,
            [url]: {
              code: err.code,
              message: err.message,
            },
          })
        }
        console.log(err.toJSON())
      }
      console.log('done')
    }
  }

  type ResponseItemProps = {
    title?: string
    text: string
  }

  const ResponseItem: React.FC<ResponseItemProps> = ({
    title,
    text,
  }) => {
    return (
      <div className="flex ">
        <div className="ml-4 w-24 flex-none">{title}</div>
        <div>{text}</div>
      </div>
    )
  }

  type RequestPaneProps = {
    title?: string
    url: string
  }

  const RequestPane: React.FC<RequestPaneProps> = ({
    title,
    url,
  }) => {
    return (
      <>
        <div>
          <div className="text-blue-400 my-4">{title}</div>
        </div>
        <div className="divide-y">
          <ResponseItem
            title="status"
            text={state[url]?.status}
          />
          <ResponseItem
            title="code"
            text={state[url]?.code}
          />
          <ResponseItem
            title="data"
            text={state[url]?.data}
          />
          <ResponseItem
            title="message"
            text={state[url]?.message}
          />
        </div>
        <button
          className="ml-4 mt-2 mb-4 text-blue-500 underline"
          onClick={onRequest(url)}
        >
          REQUEST
        </button>
      </>
    )
  }

  const onClickHander = (target: string) => {
    return () => {
      const ex: ExampleType = {
        Member1: 'A',
        Member2: 'B',
        Member3: 'C',
      }
      Object.keys(ex).some((key) => {
        if (key === target) {
          console.log(ex[key as keyof ExampleType])
          return true
        }
        return false
      })
    }
  }

  return (
    <div className="container mx-auto">
      <div className="px-4">
        <RequestPane
          title="VALID REQUEST"
          url="/sample-api"
        />
        <RequestPane
          title="NOT FOUND"
          url="/notfound-api"
        />
        <RequestPane title="FORBIDDEN" url="/forbidden" />
        <RequestPane
          title="INVALID IP"
          url="http://1.1.1.1/api"
        />
        <RequestPane title="TIMEOUT" url="/timeout" />
      </div>
    </div>
  )
}

export default App
