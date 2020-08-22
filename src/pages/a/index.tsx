import App, { AppContext } from "next/app"
import { InferGetServerSidePropsType } from "next"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next"
import { NextPage } from "next"
import { observer } from "mobx-react"
import { useStores } from "../../stores/index"

interface Props {
  name: string
}

const Home: NextPage<Props> = (props) => {
  const { testStore } = useStores()
  return (
    <div>
      <div>aa.js{props.name}</div>
      <div>
        <button
          onClick={() => {
            testStore.add()
          }}
        >
          add
        </button>
        {testStore.count}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const name = query.name instanceof Array ? query.name.join(", ") : query.name
  return {
    props: {
      name: name || "",
    },
  }
}

export default observer(Home)
