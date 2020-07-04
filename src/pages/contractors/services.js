import React from 'react'
//import { Link } from 'gatsby'
import Img from 'gatsby-image';
import { Link } from "gatsby"
import * as Button from '../../components/buttons/Button'

import RectangleSVG from '../../../content/svg/rectangle.svg'

import servicesPageStyles from "./services.module.scss"
import Layout from "../../components/layout"

const ContractorsServicesPage = ({props, data}) => {
  return (
    <Layout>
      <section className={servicesPageStyles.Section1}>
        <div className={servicesPageStyles.hero}>
          <p 
            className={`text`}
          >
            Pacific contractors is a professional wood framing company. We are framing contractors specializing in Residentail & Commercial Contracts. Send us your plans & we will gladly give you our best quote!</p>
          <div className={servicesPageStyles.button}>
            <Link
              to="/contractors/contact"
              >
              <Button.Contact
                type='button'
                label={"Contact Us"}
              />
            </Link>
          </div>
        </div>
        <figure className={servicesPageStyles.imageArea}>
          <RectangleSVG 
            data-sal="slide-up"
            data-sal-duration="1800"
            data-sal-delay="550" 
            data-sal-easing="ease-out-circ"
            className={servicesPageStyles.square}
          />
          <div 
            data-sal="slide-right"
            data-sal-duration="1800"
            data-sal-delay="000" 
            data-sal-easing="ease-out-circ"
            className={servicesPageStyles.photo}
          >
            <Img
            className={servicesPageStyles.Image1} fluid={data.product1.childImageSharp.fluid}></Img>
          </div>
        </figure>
      </section>
    </Layout>
  )
}

export default ContractorsServicesPage

export const dataQuery = graphql`
  query {
    product1: file(sourceInstanceName: { eq: "images" }
      name: { eq: "main2" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`