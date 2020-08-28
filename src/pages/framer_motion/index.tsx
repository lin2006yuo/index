import dynamic from "next/dynamic"
const Motion = dynamic(() => import("../../components/framer_motion"), {
  ssr: false,
})

const FramerMotion = () => {
  return <Motion />
}

export default FramerMotion
