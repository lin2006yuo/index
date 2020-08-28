import { NextPage } from "next"

interface PageProps {
  data: any
}

function p() {
  return new Promise<PageProps>((resolve, reject) => {
    reject({ data: "error" })
  })
}

const Page: NextPage<PageProps> = ({ data }) => {
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
