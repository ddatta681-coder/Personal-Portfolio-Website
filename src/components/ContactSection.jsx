import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/ContactSection.css";
import styled from "styled-components";

const WHATSAPP_NUMBER = "917908480316"; // country code + number, digits only
const WHATSAPP_DISPLAY = "+91 79084 80316";
const WHATSAPP_MESSAGE = "Hi Debarpan, I found this number to your whatsapp and wanted to reach out to you";

export default function ContactSection() {
  const { state } = useLocation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: state?.subject || "",
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
            Let's collaborate
            <br />
            <em>& Book Adventures.</em>
          </h2>
          <p>
            Whether it is collaboration, exploring places with me through
            booking tours, or just speaking about the fauna over a cup of
            coffee, feel free to contact me!
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

            <div className="form-actions">
              <button
                type="submit"
                className="btn-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send Message →"}
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  WHATSAPP_MESSAGE
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.483 1.34 4.997L2 22l5.144-1.34a9.958 9.958 0 0 0 4.86 1.24h.004c5.514 0 9.997-4.483 9.997-9.997C21.997 6.483 17.518 2 12.004 2zm0 18.183a8.15 8.15 0 0 1-4.157-1.137l-.298-.177-3.055.796.815-2.978-.194-.306a8.15 8.15 0 0 1-1.253-4.384c0-4.51 3.671-8.181 8.185-8.181 4.51 0 8.181 3.671 8.181 8.181 0 4.51-3.671 8.186-8.184 8.186z" />
                </svg>
                <span>WhatsApp</span>
                <span className="btn-whatsapp__number">{WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}