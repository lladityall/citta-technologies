import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display:'flex', alignItems:'baseline', gap:4, marginBottom:12 }}>
              <span style={{ fontFamily:'var(--font-display)', fontSize:20, fontWeight:800, color:'white' }}>CITTA</span>
              <span style={{ fontFamily:'var(--font-body)', fontSize:10, fontWeight:500, color:'var(--teal-accent)', letterSpacing:'0.08em', textTransform:'uppercase' }}>TECHNOLOGIES</span>
            </div>
            <p className="footer-brand-desc">
              Intellect + Passion. Empowering businesses with intelligent, scalable technology solutions since 2009.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/girish-koppar-0a296020/" aria-label="LinkedIn"><Linkedin size={14} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={14} /></a>
              <a href="https://github.com/lladityall" aria-label="GitHub"><Github size={14} /></a>
            </div>
          </div>

          <div>
            <p className="footer-col-title">Our Services</p>
            <ul className="footer-links">
              <li><Link to="/services#software">Software Development</Link></li>
              <li><Link to="/services#app">App Development</Link></li>
              <li><Link to="/services#web">Web Development</Link></li>
              <li><Link to="/services#ecommerce">E-Commerce Solutions</Link></li>
              <li><Link to="/services#cloud">Cloud & DevOps</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Company</p>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Contact Us</p>
            <div className="footer-contact-item">
              <MapPin size={14} />
              <span>Mumbai, Maharashtra</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={14} />
              <span>+91 90048 91015</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={14} />
              <span>cittatechnologies@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 CITTA Technologies Pvt. Ltd. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
