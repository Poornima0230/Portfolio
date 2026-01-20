import { useState } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSend = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    emailjs
      .send(
        "service_f4n9gcn",
        "template_zuuwelk",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "jGn3gqjdJbmvIIngY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
        }
      );
  };
  // console.log("Form data:", formData);
  // alert("Message sent successfully!");

  // setFormData({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });
  //   };

  return (
    <>
      <div className="contact">
        <div className="common-heading">
          <h1 className="common-title">Contact Me</h1>
          <hr className="common-underline" />
        </div>
        <div className="contact-overlay">
          <div className="contact-container">
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              placeholder=" "
              className="form__input"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="contact-container">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              placeholder=" "
              className="form__input"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="contact-container">
            <input
              type="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              autoComplete="off"
              placeholder=" "
              className="form__input"
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="contact-container">
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              autoComplete="off"
              placeholder="Message"
              className="form__input"
            ></textarea>
          </div>
          <button className="sendBtn" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};
