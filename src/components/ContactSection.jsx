import { useState } from "react";
import "./styles/ContactSection.css";
import styled from 'styled-components';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const [res] = await Promise.all([
        fetch("/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }),
        new Promise((resolve) => setTimeout(resolve, 2000)),
      ]);

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {status === "sending" && (
        <div className="sending-overlay">
          <div className="loader">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <defs>
                <mask id="clipping">
                  <polygon points="0,0 100,0 100,100 0,100" fill="black" />
                  <polygon points="25,25 75,25 50,75" fill="white" />
                  <polygon points="50,25 75,75 25,75" fill="white" />
                  <polygon points="35,35 65,35 50,65" fill="white" />
                  <polygon points="35,35 65,35 50,65" fill="white" />
                  <polygon points="35,35 65,35 50,65" fill="white" />
                  <polygon points="35,35 65,35 50,65" fill="white" />
                </mask>
              </defs>
            </svg>
            <div className="box" />
          </div>
          <p>Sending your message…</p>
        </div>
      )}
      <section className="contact-cta" id="contact">
        <div className="contact-inner fade-up">
          <div className="section-label">Contact</div>
          <h2>
            Let's work
            <br />
            <em>together.</em>
          </h2>
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

            {status === "success" && (
              <p className="form-status form-status--success">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="form-status form-status--error">
                Something went wrong. Please try again or email directly.
              </p>
            )}

            <button
              type="submit"
              className="btn-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message →"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
