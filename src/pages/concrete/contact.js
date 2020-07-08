import React from 'react'
//import { Link } from 'gatsby'

import AddressSVG from '../../../content/svg/address.svg'
import MailSVG from '../../../content/svg/mail.svg'
import PhoneSVG from '../../../content/svg/phone.svg'

import ContactCard from '../../components/ContactCard/ContactCard'
import ContactForm from '../../components/ContactForm/ContactForm'
import Layout from "../../components/layout"
import contactPageStyles from "./contact.module.scss"

const ContractorsContactPage = () => {
  return (
    <Layout>
      <div className={contactPageStyles.ContactPage}>
        <div className={contactPageStyles.containerContactInfoArea}>
          <ContactCard
            svg={AddressSVG}
            title={"ADDRESS"}
            details={"231 S Jefferies Blvd"}
            secondaryDetails={"Walterboro, SC 29488"}
          />
          <ContactCard
            svg={MailSVG}
            title={"E-MAIL"}
            details={"pacific.concrete.division@gmail.com"}
          />
          <ContactCard
            svg={PhoneSVG}
            title={"PHONE"}
            details={"843-782-3388"}
          />
        </div>
        <span className={contactPageStyles.contact100FormTitle}>
          Have a building plan? Submit now, and we will work to evaluate a quote.
        </span>
        <div className={contactPageStyles.background}>
        </div>
        <div className={`${contactPageStyles.containerContact100}`}>
          <ContactForm
            thanksPageURL="/concrete/thanks"
          />
        </div>
        {/* <div className={contactPageStyles.map}> 
          <iframe 
            width="100%" 
            height="450" 
            marginHeight="0"
            marginWidth="0"
            frameborder="0" 
            style={{border:0}}
            allowfullscreen="" 
            aria-hidden="false" 
            tabindex="0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13399.69483520212!2d-80.6670485!3d32.9001853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa353ff1364dc993f!2sPacific%20Contractors!5e0!3m2!1sen!2sus!4v1591125192352!5m2!1sen!2sus" >
          </iframe>
        </div> */}
      </div>
    </Layout>
  )
}

export default ContractorsContactPage