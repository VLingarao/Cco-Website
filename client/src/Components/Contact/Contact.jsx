import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.mobile && formData.message) {
      const templateParams = {
        to_name: formData.name,   // User's Name (to_name)
        from_name: formData.name, // User's Name (from_name)
        email: formData.email,    // User's Email
        mobile: formData.mobile,  // User's Mobile Number
        message: formData.message, // Message content
      };

      // Send the email using EmailJS
      emailjs
        .send(
          "service_ewxip1j", // Your Service ID
          "template_zfwo1c8", // Your Template ID
          templateParams,     // Data to send to template
          "9_-XMY0rTDOI3Wm_t" // Your User ID (Private Key)
        )
        .then(
          () => {
            setSubmitted(true);
            setFormData({ name: "", email: "", mobile: "", message: "" }); 
            setTimeout(() => setSubmitted(false), 3000); 
            setError(null); 
          },
          (error) => {
            setError("There was an error sending the message. Please try again.");
            console.error("EmailJS Error:", error);
          }
        );
    } else {
      setError("Please fill out all fields before submitting.");
    }
  };

  return (
    <div className="contact-page-main">
      <div className="contact-page">
        <div className="contact-container">
          <div className="contact-form-section">
            <h1>Contact Us</h1>

            {submitted && (
              <p className="success-message">Thank you for reaching out!</p>
            )}

            {error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Your Mobile Number"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>

          <div className="map-section">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.1837561651796!2d80.41792567514113!3d16.313552484401878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755db0eda4c3%3A0x6dc4a6cdecbedc2d!2sCLOUD%20CAREER%20OVERSEAS!5e0!3m2!1sen!2sin!4v1731915570872!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
