import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from '../components/Layout'
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
    <section className={styles.header}>
      <div>
        <h2>Gatidifren</h2>
        <h3>Meow Officer</h3>
        <p>React devmeowsers</p>
        <Link className={styles.btn} to="/projects">My portfolio projects</Link>
      </div>
      <img src="/banner.png" alt="sites banner" style={{ maxWidth: '100%'}}/>
      <p>{ title } - { description }</p>    
    </section>
    </Layout>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`