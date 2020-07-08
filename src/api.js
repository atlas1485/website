const API_URL = 'https://email-forward.vercel.app'
//const API_URL = 'http://localhost:3000'

export default {
  forwardEmail: (emailBody)=> fetch(`${API_URL}/api/email`, {
      method: 'POST',
      body: emailBody,
    }).then(res=>res.json())
}