import { Link } from "gatsby"
import * as React from "react"
import Layout from '../components/Layout'
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
    <section className={styles.header}>
      <div>
        <h2>Gatidifren</h2>
        <h3>Meow Officer</h3>
        <p>React devmeowsers</p>
        <Link className={styles.btn} to="/projects">My portfolio projects</Link>
      </div>
    </section>
    </Layout>
  )

}
