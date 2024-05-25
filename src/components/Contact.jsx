import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3kruajw", "template_arl7nke", form.current, {
        publicKey: "wUdWJTEdmN3pBSvho",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Contact</h2>
      <p>
        If you'd like to get in touch, you can reach me using the following
        methods.
      </p>
      <div className="contact-methods">
        <div className="contact-info">
          <h3>Email</h3>
          <a href="mailto:martin.kapraal@gmail.com">martin.kapraal@gmail.com</a>
        </div>
        <div className="contact-info">
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/martinkapral/"
            target="_blank"
            rel="noopener noreferrer"
          >
            in/martinkapral
          </a>
        </div>
        <div className="contact-info">
          <h3>GitHub</h3>
          <a
            href="https://github.com/martinkapral"
            target="_blank"
            rel="noopener noreferrer"
          >
            gh/martinkapral
          </a>
        </div>
        <div className="contact-info">
          <h3>Resume</h3>
          <a>CV pdf</a>
        </div>
      </div>
      <p>Or use this email form down below. &darr;</p>
      <div className="email-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name*</label>
          <input type="text" name="user_name" />
          <label>Email*</label>
          <input type="email" name="user_email" />
          <label>Message*</label>
          <textarea name="message" />
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
