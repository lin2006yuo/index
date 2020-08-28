import {
  Frame,
  Color,
  AnimatePresence,
  Stack,
  useAnimation,
  useMotionValue,
  transform,
  Page,
  Scroll,
  useTransform,
} from "framer"
import { useEffect } from "react"
const Framer = () => {
  const x = useMotionValue(0)
  const scale = useTransform(x, [0, 200], [1, 0.5])

  return <Frame drag={"x"} x={x} scale={scale} />
}

export default Framer
