import { NextPage, GetServerSideProps } from "next"
import classNames from "classnames"

import styles from "../styles/common.module.css"

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

export const getServerSideProps: GetServerSideProps<Props> = async ({
  res,
  req,
}) => {
  return {
    props: {
      errorCode: res.statusCode,
    },
  }
}

export default _Error
