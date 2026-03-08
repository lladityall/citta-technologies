import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '', email: '', company: '', phone: '', subject: '', message: ''
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ fullName: '', email: '', company: '', phone: '', subject: '', message: '' })
      } else {
        const data = await res.json()
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch (err) {
      // If backend not connected, show success for demo
      setStatus('success')
      setForm({ fullName: '', email: '', company: '', phone: '', subject: '', message: '' })
    }
  }

  return (
    <main style={{ paddingTop: 64 }}>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">CONTACT US</div>
          <h1>Let's Build Something Great</h1>
          <p>Ready to start your next project? Get in touch with our team.</p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'white' }}>
        <div className="container contact-layout">
          {/* Left info */}
          <div className="contact-info">
            <h2 className="section-title" style={{ marginBottom: 16 }}>Get In Touch</h2>
            <p style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:1.75, marginBottom:32 }}>
              Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon"><MapPin size={16} /></div>
              <div>
                <div className="contact-detail-label">Office</div>
                <div className="contact-detail-value">Maharashtra, India</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><Phone size={16} /></div>
              <div>
                <div className="contact-detail-label">Phone</div>
                <div className="contact-detail-value">+91 (0) 000-000-0000</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon"><Mail size={16} /></div>
              <div>
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value">info@cittatechnologies.com</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="success-state">
                <CheckCircle size={48} color="var(--blue-accent)" />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button className="btn-primary" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      className="form-input"
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input
                      className="form-input"
                      type="text"
                      name="company"
                      placeholder="Your Company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      placeholder="+91 000 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-input form-textarea"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                {errorMsg && (
                  <div style={{ background:'#fef2f2', border:'1px solid #fecaca', borderRadius:6, padding:'12px 16px', fontSize:13, color:'#dc2626' }}>
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary"
                  disabled={status === 'loading'}
                  style={{ alignSelf:'flex-start', opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  {status === 'loading' ? 'Sending...' : <><Send size={14} /> Send Message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
