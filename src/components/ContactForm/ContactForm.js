import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import api from '../../api'
import Recaptcha from 'react-recaptcha'

import * as Button from '../buttons/Button'
import contactFormStyles from "./ContactForm.module.scss"

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default (props) => {
  const [state, setState] = React.useState({})
  const [verified, setVerified] = useState(false)

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleAttachment = (e) => {
    setState({ ...state, [e.target.name]: e.target.files[0] })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (verified) {
      alert('You have successfully subscribed!');
    } else {
      alert('Please verify that you are a human!');
    }

   /*  const form = e.target
    const body = encode({
        'form-name': form.getAttribute('name'),
        ...state,
      });

    api.forwardEmail(body)
    navigate(form.getAttribute('action')) */
  }

  const recaptchaLoaded = () => {
    console.log('capcha successfully loaded');
  }

  const verifyCallback = (response) => {
    if (response) {
      console.log('verify response:', response)
      setVerified(true)
    }
  }
  
  const expiredCallback = (response) => {
    setVerified(false)
  }

  return (
    <>
      <form 
        name="building_plan_online"
        method="POST"
        action={props.thanksPageURL}
        data-netlify="true"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        className={`
          ${contactFormStyles.contactForm} 
          ${contactFormStyles.validateFor}
        `}
        onSubmit={handleSubmit}
      >
        <div className={`${contactFormStyles.wrapInput} ${contactFormStyles.validateInput}`} data-validate="Name is required">
          <label className={contactFormStyles.labelInput} for="name">Full name</label>
          <input 
            id="name" 
            className={contactFormStyles.input} 
            type="text" 
            name="name" 
            placeholder="Enter your name..."
            onChange={handleChange}
            required
            ></input>
          <span className={contactFormStyles.focusInput}></span>
        </div>
        <div className={`${contactFormStyles.wrapInput} ${contactFormStyles.validateInput}`} data-validate = "Valid email is required: ex@abc.xyz">
          <label className={contactFormStyles.labelInput} for="email">Email Address</label>
          <input 
            id="email" 
            className={contactFormStyles.input} 
            type="email" 
            name="email" 
            placeholder="Enter your email..."
            onChange={handleChange}
            required
            ></input>
          <span className={contactFormStyles.focusInput}></span>
        </div>
        <div className={`${contactFormStyles.wrapInput} ${contactFormStyles.validateInput}`}>
          <label className={contactFormStyles.labelInput} for="subject">Subject</label>
          <input 
            id="subject" 
            className={contactFormStyles.input} 
            type="text" 
            name="subject" 
            placeholder="Add a subject line..."
            onChange={handleChange}
            ></input>
          <span className={contactFormStyles.focusInput}></span>
        </div>
        <div className={`${contactFormStyles.wrapInput} ${contactFormStyles.validateInput}`} data-validate = "Message is required">
          <label className={contactFormStyles.labelInput} for="message">Message</label>
          <textarea 
            id="message" 
            className={contactFormStyles.input}
            name="message" 
            placeholder="Type your message here..."
            onChange={handleChange}
            required
            ></textarea>
          <span className={contactFormStyles.focusInput}></span>
        </div>
        <div className={``}>
          <label className={contactFormStyles.labelInputFile}>Add Attachment</label>
          <input 
            id="file" 
            className={contactFormStyles.inputFile} 
            type="file" 
            name="attachment" 
            placeholder="Upload a file"
            onChange={handleAttachment}
          >
          </input>
        </div>
        <div>
          <div data-netlify-recaptcha="true"></div>
        </div>
        <div className={contactFormStyles.containerFormBtn}>
          <Button.SubmitForm
            type='submit'
            label={"Send"}
          />
        </div>
        <div>
          <Recaptcha
            sitekey="6Lc-Oq0ZAAAAANUIw-qChGwCWIQ7pdOyI4VgSQPP"
            render="explicit"
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifyCallback}
            expiredCallback={expiredCallback}
          />
        </div>
      </form>
    </>
  )
}