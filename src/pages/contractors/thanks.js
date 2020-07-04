import React from 'react'

import thanksPageStyles from "./thanks.module.scss"
import Layout from "../../components/layout"

const ContractorsThanksPage = ({props, data}) => {
  return (
    <Layout>
      <div className={thanksPageStyles.container}>
        <div className={thanksPageStyles.messageCard}>
          <h3 className={thanksPageStyles.header}>Thank you for submitting!</h3>
          <p className={thanksPageStyles.message}>Give us a call at 843-782-3388. We would love to talk with you further about your plans.</p>
        </div>
      </div>
    </Layout>
  )
}

export default ContractorsThanksPage