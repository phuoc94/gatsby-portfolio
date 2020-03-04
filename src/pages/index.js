import React from "react"
import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"
//import PortfolioPage from "./portfolio"
import { useStaticQuery, graphql, Link } from "gatsby"
import BgVideo from "../images/bgvideo.webm"
import { Button } from "react-bootstrap"

const title = "Home"
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(ext: { eq: ".pdf" }) {
        publicURL
      }
      placeholderImage: file(relativePath: { eq: "poster.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout pageTitle={title}>
      <SEO title={title} />
      <header>
        <div className="overlay"></div>
        <video
          loop
          autoPlay
          muted
          id="myVideo"
          poster={data.placeholderImage.childImageSharp.fluid}
        >
          <source src={BgVideo} type="video/webm" />
          <track kind="No Track" srcLang="en" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-4 h1-responsive font-weight-bold">
                I Build Amazing experiences
              </h1>
              <p className="lead mb-0">Web Developer From Turku, Finland</p>
              <Link to="contact">
                <Button className="mx-3 my-2" variant="primary">
                  Get In Touch
                </Button>
              </Link>
              <a href={data.file.publicURL}>
                <Button className="mx-3 my-2" variant="primary">
                  View resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  )
}

export default IndexPage
