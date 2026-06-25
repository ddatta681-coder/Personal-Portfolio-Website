import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './styles/ContactSection.css';

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

export default function ContactSection() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setStatus('error');
      });
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

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
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

          {/* Status messages */}
          {status === 'success' && (
            <p className="form-status form-status--success">
              Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-status--error">
              Something went wrong. Please try again or email me directly.
            </p>
          )}

          <button
            type="submit"
            className="btn-submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
}