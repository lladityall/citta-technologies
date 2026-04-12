import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, Code2, Smartphone, Globe, ShoppingCart, Cloud, Shield } from 'lucide-react'
import './Navbar.css'

const services = [
  { icon: Code2, label: 'Software Development', hash: '#software' },
  { icon: Smartphone, label: 'App Development', hash: '#app' },
  { icon: Globe, label: 'Web Development', hash: '#web' },
  { icon: ShoppingCart, label: 'E-Commerce Solutions', hash: '#ecommerce' },
  { icon: Cloud, label: 'Cloud & DevOps', hash: '#cloud' },
  { icon: Shield, label: 'Cybersecurity', hash: '#cyber' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <img 
            src="/logos/cittalogo.png" 
            alt="CITTA TECHNOLOGIES" 
            className="brand-logo-img" 
          />
        </Link>

        <div className="navbar-links">
          <div className="nav-item-services" ref={dropdownRef}>
            <button
              className={`nav-link nav-link--dropdown ${location.pathname === '/services' ? 'nav-link--active' : ''}`}
              onClick={() => setServicesOpen(!servicesOpen)}
              onMouseEnter={() => setServicesOpen(true)}
            >
              Services <ChevronDown size={14} className={`chevron ${servicesOpen ? 'chevron--open' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="services-dropdown" onMouseLeave={() => setServicesOpen(false)}>
                {services.map(({ icon: Icon, label, hash }) => (
                  <Link
                    key={hash}
                    to={`/services${hash}`}
                    className="dropdown-item"
                    onClick={() => setServicesOpen(false)}
                  >
                    <Icon size={15} />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/industries" className={`nav-link ${isActive('/industries') ? 'nav-link--active' : ''}`}>Industries</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link--active' : ''}`}>About</Link>
          <Link to="/insights" className={`nav-link ${isActive('/insights') ? 'nav-link--active' : ''}`}>Insights</Link>
          <Link to="/careers" className={`nav-link ${isActive('/careers') ? 'nav-link--active' : ''}`}>Careers</Link>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-nav-link mobile-services-btn"
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          >
            Services <ChevronDown size={14} className={mobileServicesOpen ? 'chevron--open' : ''} />
          </button>
          {mobileServicesOpen && (
            <div className="mobile-services-list">
              {services.map(({ icon: Icon, label, hash }) => (
                <Link key={hash} to={`/services${hash}`} className="mobile-service-item">
                  <Icon size={14} /> {label}
                </Link>
              ))}
            </div>
          )}
          <Link to="/industries" className="mobile-nav-link">Industries</Link>
          <Link to="/about" className="mobile-nav-link">About</Link>
          <Link to="/insights" className="mobile-nav-link">Insights</Link>
          <Link to="/careers" className="mobile-nav-link">Careers</Link>
          <Link to="/contact" className="mobile-nav-link mobile-nav-cta">Contact Us</Link>
        </div>
      )}
    </nav>
  )
}
