import dynamic from "next/dynamic"
const Frame = dynamic(() => import("../../components/framer"), { ssr: false })

const Framer = () => {
  return <Frame />
}

export default Framer
