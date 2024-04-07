import React from "react";
import Facebook from "./facebook.svg";
import Instagram from "./instagram.svg";
import InputBlock from "../../components/inputBlock/inputblock";
import axios from "axios";
import "./contact.css";

class Contact extends React.Component {
  state = {
    formData: {
      firtsname: "",
      lastname: "",
      email: "",
      message: "",
    },
    submitted: false,
  };

  handleForm = (e) => {
    axios
      .post("https://formcarry.com/s/FZRZQqNhvjc", this.state.formData, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
    let formData = { firtsname: "", lastname: "", email: "", message: "" };

    this.setState({ formData, submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 3000);
    });
  };

  handleFields = (e) => {
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };

  render() {
    const { email } = this.state.formData;
    const { submitted } = this.state;
    return (
      <section id="contact">
        <div>
          <div className="container">
            <div style={{ width: "100%", display: "flex" }} className="footer-container">
              <div
                style={{
                  flex: 1,
                }}
              >
                <h3 style={{ color: "#fff" }}>Contact</h3>
                <p style={{ color: "#fff", margin: "20px 0" }}>
                  Email: miljananikolicmail@gmail.com
                </p>

                <div className="social-media">
                  <a
                    href="https://www.facebook.com/miljanaNikolicc"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img alt="fb icon" src={Facebook} className="icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/mmiljananikolicc/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img alt="ig icon" src={Instagram} className="icon" />
                  </a>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#fff" }}>Mailing list</h3>
                <p style={{ color: "#fff", margin: "20px 0" }}>
                  leave your email address to get updates like new shows or
                  store launch
                </p>

                <form
                  className="form"
                  action="https://formcarry.com/s/bSDXP50dneiP"
                  method="POST"
                  acceptCharset="UTF-8"
                  encType="multipart/form-data"
                  style={{ flex: 1 }}
                >
                  <div className="name-block">
                    <InputBlock
                      handleFields={this.handleFields}
                      type="email"
                      value={email}
                      name="email"
                      labelName="email"
                      labelConent="Email"
                      required
                    />
                  </div>

                  <button
                    id="button"
                    type="submit"
                    name="button"
                    disabled={submitted}
                  >
                    {(submitted && "Message Sent") ||
                      (!submitted && "Send Message")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
