import { memo, FC } from "react"

interface Props {
  show: boolean
}

const Loading: FC<Props> = memo(({ show }) => {
  return (
    <>
      <style jsx global>{`
        .loading {
          position: fixed;
          width: 100vw;
          top: 50%;
          transform: translateY(-50%);
          text-align: center;
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          font-weight: bold;
          visibility: ${show ? 'visible': 'hidden'}
        }
      `}</style>
      <p className="loading">loading...</p>
    </>
  )
})
export default Loading
