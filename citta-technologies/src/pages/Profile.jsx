import { useState } from 'react'
import { CheckCircle } from 'lucide-react'
import './Contact.css'

export default function Profile() {
  const [form, setForm] = useState({
    fullName: '', designation: '', organization: '', location: '',
    emailMobile: '', advisoryRole: '', expertise: '', shortBio: '',
    experience: '', previousRoles: '', achievements: '', education: '',
    certifications: '', links: '', consent: false
  })
  const [photo, setPhoto] = useState(null)
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const formData = new FormData()
    Object.keys(form).forEach(key => formData.append(key, form[key]))
    if (photo) formData.append('photo', photo)

    try {
      const res = await fetch('http://localhost:5000/api/profile', {
        method: 'POST',
        body: formData,
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch (err) { setStatus('error') }
  }

  return (
    <main style={{ paddingTop: 64, background: '#f8fafc' }}>
      <section className="section-pad">
        <div className="container" style={{ maxWidth: 800 }}>
          {status === 'success' ? (
            <div className="success-state">
              <CheckCircle size={60} color="#10b981" />
              <h2>Profile Submitted</h2>
              <p>Thank you, {form.fullName}. Your application is being reviewed.</p>
              <button className="btn-primary" onClick={() => window.location.reload()}>Back</button>
            </div>
          ) : (
            <div className="contact-form-wrap">
              <h1>Professional Profile Application</h1>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group"><label>Full Name *</label><input className="form-input" name="fullName" onChange={handleChange} required /></div>
                  <div className="form-group"><label>Email / Mobile *</label><input className="form-input" name="emailMobile" onChange={handleChange} required /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label>Designation *</label><input className="form-input" name="designation" onChange={handleChange} required /></div>
                  <div className="form-group"><label>Organization *</label><input className="form-input" name="organization" onChange={handleChange} required /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label>Location *</label><input className="form-input" name="location" placeholder="City, Country" onChange={handleChange} required /></div>
                  <div className="form-group">
                    <label>Advisory Role *</label>
                    <select className="form-input" name="advisoryRole" onChange={handleChange} required>
                      <option value="">Select Role</option>
                      <option value="Senior Full-Stack Developer">Senior Full-Stack Developer</option>
                      <option value="React Native Developer">React Native Developer</option>
                      <option value="DevOps Engineer">DevOps Engineer</option>
                      <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Business Analyst">Business Analyst</option>
                      <option value="QA Engineer">QA Engineer</option>
                    </select>
                  </div>
                </div>
                <div className="form-group"><label>Expertise *</label><textarea className="form-input" name="expertise" rows={2} onChange={handleChange} required /></div>
                <div className="form-group"><label>Short Bio *</label><textarea className="form-input" name="shortBio" rows={3} onChange={handleChange} required /></div>
                <div className="form-row">
                  <div className="form-group"><label>Experience (Years + Summary) *</label><input className="form-input" name="experience" onChange={handleChange} required /></div>
                  <div className="form-group"><label>Previous Roles</label><input className="form-input" name="previousRoles" onChange={handleChange} /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label>Education *</label><input className="form-input" name="education" onChange={handleChange} required /></div>
                  <div className="form-group"><label>Achievements</label><input className="form-input" name="achievements" onChange={handleChange} /></div>
                </div>
                <div className="form-row">
                  <div className="form-group"><label>Certifications</label><input className="form-input" name="certifications" onChange={handleChange} /></div>
                  <div className="form-group"><label>LinkedIn / Website</label><input className="form-input" name="links" placeholder="https://..." onChange={handleChange} /></div>
                </div>
                <div className="form-group">
                  <label>Professional Photo *</label>
                  <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} required />
                </div>
                <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                  <input type="checkbox" name="consent" onChange={handleChange} required />
                  <span style={{ fontSize: 13 }}>I consent to data processing.</span>
                </div>
                <button type="submit" className="btn-primary" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Submitting...' : 'Submit Profile'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}