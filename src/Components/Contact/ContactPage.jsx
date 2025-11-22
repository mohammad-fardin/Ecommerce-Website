import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank You ${name} for Contacting Us. We will Get Back to You Soon.\n\nYour Mail Id - ${email}.\nYour Message is - ${message}`
    );
    setname("");
    setEmail("");
    setmessage("");
  };

  return (
    <>
      <div className="contactSection">
        <h2>Contact Us</h2>
        <div className="contactMap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.957000469991!2d90.35813621501327!3d23.760157005283187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755be1a661e50d7%3A0x215b5b3f966e385f!2sNoorjahan%20Rd%2C%20Mohammadpur%2C%20Dhaka%201207!5e0!3m2!1sen!2sbd!4v1708801234567!5m2!1sen!2sbd"
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="uomomap"
          ></iframe>
        </div>
        <div className="contactInfo">
          <div className="contactAddress">
            <div className="address">
              <h3>Store in Mohammadpur</h3>
              <p>
                O 26,Nurjahan Road, Mohammadpur,Dhaka. 
                <br /> Bangladesh
              </p>
              <p>
              mohammadfardindewan@gmail.com

                <br />
                +8801984454211
              </p>
            </div>
            <div className="address">
              <h3>Store in Mohakhali</h3>
              <p>
                A-791, A-791, Amtoli, Mohakhali.
                <br /> Mohakhali
              </p>
              <p>
              mohammadfardindewan@gmail.com
                <br />
                +8801984454211
              </p>
            </div>
          </div>
          <div className="contactForm">
            <h3>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                placeholder="Name *"
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Email address *"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                rows={10}
                cols={40}
                placeholder="Your Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
