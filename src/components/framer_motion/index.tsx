import {
  motion,
  useTransform,
  useMotionValue,
  useAnimation,
} from "framer-motion"
import React from "react"
import style from "./style.module.css"

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const FramerMotion = () => {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
  const controls = useAnimation()
  controls.start({
    x: "100%",
    backgroundColor: "#f00",
    transition: { duration: 3 },
  })
  controls.start({
    y: "100%",
    backgroundColor: "#f00",
    transition: { duration: 2 },
  })
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  }

  const [isOn, setIsOn] = React.useState(false)

  const toggleSwitch = () => setIsOn(!isOn)

  return (
    <div className={style["bg"]}>
      <div className={style["switch"]} data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className={style["handle"]} layout transition={spring} />
      </div>
    </div>
  )
}

export default FramerMotion
