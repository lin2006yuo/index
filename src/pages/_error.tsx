import { NextPage, GetServerSideProps, NextPageContext } from "next"
import classNames from "classnames"

import styles from "../styles/common.module.css"
import { ServerResponse } from "http"

interface Props {
  errorCode: number
}

const errorToText = (errorCode: number) => {
  switch (errorCode) {
    case 404:
      return "404"
    default:
      return "未知错误"
  }
}
const _Error: NextPage<{
  errorCode: number
}> = ({ errorCode }) => {
  return (
    <div className={classNames("text-center full-screen")}>
      <p
        className="flex"
        style={{
          fontSize: "100px",
        }}
      >
        {errorToText(errorCode)}
      </p>
    </div>
  )
}

_Error.getInitialProps = async ({ res }) => {
  const code = res ? 500 : (res as unknown as ServerResponse).statusCode
  return {
    errorCode: code,
  }
}

export default _Error
