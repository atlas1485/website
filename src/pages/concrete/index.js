import React from 'react'
//import { Link } from 'gatsby'
import Img from 'gatsby-image';

import RectangleSVG from '../../../content/svg/rectangle.svg'
import indexPageStyles from "./index.module.scss"
import Layout from "../../components/layout"

const ConcreteDivisionPage = ({props, data}) => {
  return (
    <Layout>
    <section className={indexPageStyles.Section1}>
      <div className={indexPageStyles.background}>
      </div>
      <figure className={indexPageStyles.imageArea}>
        <RectangleSVG 
          data-sal="slide-up"
          data-sal-duration="1800"
          data-sal-delay="550" 
          data-sal-easing="ease-out-circ"
          className={indexPageStyles.square}
        />
        {/* <div
          data-sal="slide-right"
          data-sal-duration="1800"
          data-sal-delay="000" 
          data-sal-easing="ease-out-circ" 
          className={indexPageStyles.photo}
        >
          <Img className={indexPageStyles.Image1} fluid={data.image1.childImageSharp.fluid}></Img>
        </div> */}
      </figure>
      <div className={indexPageStyles.hero}>
        <p 
          className={`text`}
        >
          Pacific Concrete Division was founded in 2019, based out of Walterboro, South Carolina. The Concrete Division was founded by Jose De La Cruz, and Juan Lopez. We specialize in residential and commercial projects all over the low country area. Offering 19 years of experience in the concrete business. We treat every job with the same importance and quality craftsmanship.
        </p>
      </div>
    </section>
    </Layout>
  )
}

export default ConcreteDivisionPage

export const dataQuery = graphql`
  query {
    image1: file(sourceInstanceName: { eq: "images" }
      name: { eq: "concrete1" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`