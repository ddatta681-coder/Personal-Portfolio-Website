import { useState } from 'react';
import './styles/ContactSection.css';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: ''
  });

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Wire up your backend / EmailJS / Formspree here
    console.log('Form submitted:', form);
  };

  return (
    <section className="contact-cta" id="contact">
      <div className="contact-inner fade-up">
        <div className="section-label">Contact</div>
        <h2>Let's work<br /><em>together.</em></h2>
        <p>
          Whether it is collaboration or just speaking about the fauna over a
          cup of coffee, feel free to contact me!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Debarpan Datta"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="deb@gmail.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Print enquiry / Commission / Licensing…"
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project…"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}