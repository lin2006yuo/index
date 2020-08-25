import { NextPage } from "next"

function p() {
  return new Promise((resolve, reject) => {
    reject({ data: "error" })
  })
}

const Page: NextPage = ({ data }) => {
  return <div>dynamic route {data}</div>
}

export const getServerSideProps = async () => {
  const { data } = await p()
  return {
    props: {
      data: data,
    },
  }
}

export default Page
