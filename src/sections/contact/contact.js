import React from 'react';
import Facebook from './facebook.svg'
import Instagram from './instagram.svg'
import InputBlock from '../../components/inputBlock/inputblock'
import axios from 'axios'
import './contact.css'

class Contact extends React.Component{

  state = {
    formData: {
      firtsname: "",
      lastname: "",
      email: "",
      message: ""
    },
    submitted: false
  }

  handleForm = e => {

    axios.post(
      "https://formcarry.com/s/FZRZQqNhvjc",
      this.state.formData,
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });


    e.preventDefault();
    let formData = { firtsname:'',lastname:'',email:'',message:''}


    this.setState({ formData, submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 3000);
    });
  }


  handleFields = e => {
    const { formData } = this.state
    formData[e.target.name] = e.target.value
    this.setState({ formData })
  };


  render() {
    const { firtsname,lastname,email,message } = this.state.formData
    const { submitted } = this.state
    return (
    <section id="contact">
    <div>
      <div className="container">
        {(submitted) ? <h2 id="msg_sent">Message Sent</h2> : ''}
        <div className="connect">
          <h1>Let's Connect</h1>
          <div className="social-media">
            <a href="https://www.facebook.com/miljanaNikolicc" rel="noopener noreferrer"  target="_blank"><img alt="fb icon" src={Facebook} className="icon"/></a>
            <a href="https://www.instagram.com/mmiljananikolicc/" rel="noopener noreferrer"  target="_blank"><img alt="ig icon" src={Instagram} className="icon"/></a>
          </div>
        </div>
        <div className="form-block">
          <form className="form" action="https://formcarry.com/s/bSDXP50dneiP" method="POST" acceptCharset="UTF-8" encType="multipart/form-data">
            <div className="name-block">
              <InputBlock handleFields={this.handleFields} type="text" value={firtsname} name="firtsname" labelName="firtsname" labelConent="First Name" required />
              <InputBlock handleFields={this.handleFields} type="text" value={lastname} name="lastname" labelName="lastname" labelConent="Last Name" required />
              <InputBlock handleFields={this.handleFields} type="email" value={email} name="email" labelName="email" labelConent="Email" required />
            </div>

            <div className="textarea-block">
              <textarea onChange={this.handleFields} value={message} type="text" name="message" rows="8" cols="80" placeholder="Type your message here..." wrap="off" autoComplete="off"></textarea>
            </div>

            <button id="button" type="submit" name="button" disabled={submitted}>
              {
                   (submitted && 'Message Sent')
                   || (!submitted && 'Send Message')
               }
             </button>

          </form>
        </div>

      </div>
      </div>
    </section>
  )};
}

export default Contact;
