import React from 'react'
//import { Link } from 'gatsby'
import Img from 'gatsby-image';

import RectangleSVG from '../../../content/svg/rectangle.svg'

import indexPageStyles from "./index.module.scss"
import Layout from "../../components/layout"

const ContractorsPage = ({props, data}) => {
  return (
    <Layout>
      <div className={indexPageStyles.background}>
      </div>
      <section className={indexPageStyles.Section1}>
        <div className={indexPageStyles.hero}>
          <p 
            className={`text`}
          >
            Pacific Contractors was founded in 2014, by Owner Jose De La Cruz and wife Yazmin Lopez. Offering quality craftsmanship with more than 15 years of experience. Pacific Contractors serves the Tri-county and surrrounding areas. Residential & Commercial, we do it all. We are always looking to expand, give us a call today.
          </p>
        </div>
        <figure className={indexPageStyles.imageArea}>
          <RectangleSVG 
            data-sal="slide-up"
            data-sal-duration="1800"
            data-sal-delay="550" 
            data-sal-easing="ease-out-circ"
            className={indexPageStyles.square}
          />
          <div
            data-sal="slide-right"
            data-sal-duration="1800"
            data-sal-delay="000" 
            data-sal-easing="ease-out-circ"
            className={indexPageStyles.photo}
          >
            <Img 
              className={indexPageStyles.Image1} 
              fluid={data.product1.childImageSharp.fluid}
            />
          </div>
        </figure>
      </section>
    </Layout>
  )
}

export default ContractorsPage

export const dataQuery = graphql`
  query {
    product1: file(
      sourceInstanceName: { eq: "images" }
      name: { eq: "main1" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`