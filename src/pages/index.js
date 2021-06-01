import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"

export default function Home({data}) {
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Gatidifren</h2>
          <h3>Meow Officer</h3>
          <p>React devmeowsers</p>
          <Link className={styles.btn} to="/projects">
            My portfolio projects
          </Link>
        </div>
        <Img fluid ={data.file.childImageSharp.fluid}/>
      </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`