import React from 'react'
//import { Link } from 'gatsby'
import Img from 'gatsby-image';
import { Link } from "gatsby"
import * as Button from '../../components/buttons/Button'

import RectangleSVG from '../../../content/svg/rectangle.svg'

import servicesPageStyles from "./services.module.scss"
import Layout from "../../components/layout"

const ConcreteDivisionServicesPage = ({props, data}) => {
  return (
    <Layout>
      <div className={servicesPageStyles.background}>
      </div>
      <section className={servicesPageStyles.Section1}>
        <div className={servicesPageStyles.subsection1}>
            <div className={servicesPageStyles.hero}>
            <p 
                className={`text`}
            >
                Our company specializes in concrete slab foundation and concrete block foundation. No job is too big or too small, we offer residential and commercial services.</p>
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
        </div>
        <div className={servicesPageStyles.hero1}>
          <p 
            className={`text`}
          >
            Email us at pacific.concrete.division@gmail.com if you have any questions, we'll be happy to assist you.</p>
          <div className={servicesPageStyles.button}>
            <Link
              to="/concrete/contact"
              >
              <Button.Contact
                type='button'
                label={"Contact Us"}
              />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ConcreteDivisionServicesPage

export const dataQuery = graphql`
  query {
    product1: file(sourceInstanceName: { eq: "images" }
      name: { eq: "concrete2" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`