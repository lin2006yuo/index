import Link from "next/link"
import { NextPage } from "next"

import styles from "../styles/index.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/a">
            <h3 className={styles.card}>Documentation</h3>
          </Link>
          <Link href="/framer">
            <h3 className={styles.card}>FRAMER</h3>
          </Link>
          <Link href="/framer_motion">
            <h3 className={styles.card}>FRAMER_MOTION</h3>
          </Link>
        </div>
      </main>
    </div>
  )
}
