import { useState } from 'react'
import { CheckCircle, MapPin, Phone, Mail } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('http://localhost:5000/api/contact-general', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <main style={{ paddingTop: 64, background: '#f8fafc' }}>
      <section className="section-pad">
        {/* Widened container to accommodate the two-column layout */}
        <div className="container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
          <div className="contact-layout">
            
            {/* Left Side: Map and Info */}
            <div className="contact-info">
              <h2 style={{ marginBottom: 24, fontSize: 24, fontWeight: 700 }}>Our Location</h2>
              <div style={{ width: '100%', height: '350px', borderRadius: '14px', overflow: 'hidden', marginBottom: '24px', border: '1.5px solid var(--gray-200)' }}>
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.441584880598!2d72.87158307520779!3d19.17590898205166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b70868870335%3A0xb304b8686d1ec2a7!2sNNP%20Colony%2C%20Dindoshi%2C%20Goregaon%2C%20Mumbai%2C%20Maharashtra%20400065!5e0!3m2!1sen!2sin!4v1712780000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>

              {/* Contact Details from provided image */}
              <div className="contact-detail">
                <div className="contact-detail-icon"><MapPin size={18} /></div>
                <div>
                  <p className="contact-detail-label">Address</p>
                  <p className="contact-detail-value">"Sharda" CHSL, 2nd Floor, Plot No.6, NNP Colony, Film City Road, Dindoshi, Goregaon (E), Mumbai 400 065</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Phone size={18} /></div>
                <div>
                  <p className="contact-detail-label">Contact</p>
                  <p className="contact-detail-value">022 28402833 • 9004891015</p>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><Mail size={18} /></div>
                <div>
                  <p className="contact-detail-label">Email</p>
                  <p className="contact-detail-value">vsjadhav122448@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="contact-right">
              {status === 'success' ? (
                <div className="success-state">
                  <CheckCircle size={60} color="#10b981" />
                  <h3>Message Sent</h3>
                  <p>Thank you for reaching out. We will get back to you soon.</p>
                  <button className="btn-primary" onClick={() => setStatus('idle')}>Back</button>
                </div>
              ) : (
                <div className="contact-form-wrap">
                  <h1 style={{ marginBottom: 24, fontSize: 24, fontWeight: 700 }}>Send a Message</h1>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input className="form-input" name="name" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address</label>
                      <input className="form-input" type="email" name="email" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input className="form-input" name="subject" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea className="form-input" name="message" rows={5} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}