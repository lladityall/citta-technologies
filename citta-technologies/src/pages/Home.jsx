import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Globe, 
  ShoppingCart, 
  Cloud, 
  Shield, 
  Users, 
  Briefcase, 
  Cpu, 
  Award, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';
import './Home.css';

// Highlights section data
const highlights = [
  {
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80',
    title: 'Strategic Technology Partnerships',
    desc: 'Accelerating digital transformation through collaborative, long-term client relationships.',
    color: ''
  },
  {
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
    title: 'Data-Driven Digital Solutions',
    desc: 'Helping organizations harness analytics and AI to unlock actionable intelligence.',
    color: 'blue'
  },
  {
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80',
    title: 'Smart Infrastructure & IoT',
    desc: 'Building connected ecosystems that drive operational efficiency and innovation.',
    color: ''
  },
];

// Key Offerings - Square Box Section Data
const offerings = [
  {
    title: "Cyber Security Training",
    subtitle: "& Workforce Enablement",
    desc: "210+ hours of industry-aligned training and government collaboration to build a security-first workforce.",
    icon: <Users size={24} />
  },
  {
    title: "Data Protection",
    subtitle: "& Privacy Framework",
    desc: "Implementing secure infrastructure and high-performance technology solutions to safeguard digital assets.",
    icon: <Shield size={24} />
  },
  {
    title: "DPDP Act, 2023",
    subtitle: "Compliance & Execution",
    desc: "Strategic consulting to align your organization with the latest regulatory standards and data privacy laws.",
    icon: <Lock size={24} />
  }
];

const services = [
  { icon: Code2, label: 'Software Development', path: '/services#software' },
  { icon: Smartphone, label: 'App Development', path: '/services#app' },
  { icon: Globe, label: 'Web Development', path: '/services#web'},
  { icon: ShoppingCart, label: 'E-Commerce', path: '/services#ecommerce' },
  { icon: Cloud, label: 'Cloud & DevOps', path: '/services#cloud' },
  { icon: Shield, label: 'Cybersecurity', path: '/services#cyber' },
];

const stats = [
  { value: '2,200+', label: 'Clients Worldwide', icon: Users },
  { value: '250+', label: 'Projects Delivered', icon: Briefcase },
  { value: '80+', label: 'Expert Engineers', icon: Cpu },
  { value: '15+', label: 'Years of Excellence', icon: Award },
];
const engagements = [
  { title: "CMEGP e-Portal", desc: "Driving employment generation." },
  { title: "PSI-2019 Portal", desc: "Enhancing transparency & efficiency." },
  { title: "COVID Assistant", desc: "Critical pandemic response systems." },
  { title: "Export Portal", desc: "Streamlining trade & export processes." },
  { title: "Enterprise Digital", desc: "Solutions for IBMA, NSEL & 63 Moons." },
];

const certifications = [
  { name: "ISO/IEC 27001:2013", detail: "Information Security" },
  { name: "NSIC Certified", detail: "Govt. Recognized" },
  { name: "NSDC Partner", detail: "Training Excellence" },
];
// Complete Client List from Corporate Profile
const clients = [
  { name: 'Maharashtra Government', logo: '/logos/image.png' },
  { name: 'MahaIT', logo: '/logos/mahait.png' },
  { name: 'Metta Global Foundation', logo: '/logos/mettanew.png' },
  { name: 'MCED', logo: '/logos/mced.png' },
  { name: 'JSSL JSW', logo: '/logos/jsw.png' },
  { name: 'Tata Power', logo: '/logos/tata.png' },
  { name: 'Honeywell', logo: '/logos/honeywell.png' },
  { name: 'WTC Mumbai', logo: '/logos/wtc.png' },
  { name: 'NSIC', logo: '/logos/nsic.png' },
  { name: 'MSKVI Board', logo: '/logos/mskvi.png' },
  { name: 'Gewinn', logo: '/logos/gewinn.png' },
  { name: 'Blue Scope', logo: '/logos/bluescope.png' },
  { name: 'Softlink Infotech', logo: '/logos/softlink.png' }, 
];

export default function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
            alt="Technology background"
            className="hero-bg-img"
          />
          <div className="hero-overlay" />
        </div>
        <div className="container hero-content">
          <div className="hero-text animate-fade-up">
            
            <h1>Intelligent Solutions for<br />Your <em>Digital Future</em></h1>
            <p>Combining intellect and passion to deliver transformative technology solutions that drive measurable business outcomes.</p>
            <Link to="/services" className="btn-primary" style={{ marginTop: 24 }}>
              Explore our services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-pad" style={{ background: 'white' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: 36 }}>Highlights</h2>
          <div className="highlights-grid">
            {highlights.map((h) => (
              <div className="highlight-card" key={h.title}>
                <div className="highlight-img-wrap">
                  <img src={h.img} alt={h.title} />
                </div>
                <h3 className={`highlight-title ${h.color === 'blue' ? 'highlight-title--blue' : ''}`}>{h.title}</h3>
                <p className="highlight-desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Offerings Section - Security & Compliance */}
      <section className="offerings-section section-pad">
        <div className="container">
          <div className="offerings-header">
            <div className="section-label" style={{ color: 'var(--teal-accent)' }}>Governance Excellence</div>
            <h2 className="section-title text-white">Key Offerings</h2>
            <p className="section-subtitle text-gray">
              Providing integrated Cyber Security and Data Protection solutions designed to safeguard digital assets and ensure full regulatory compliance.
            </p>
          </div>
          <div className="offerings-grid">
            {offerings.map((item, index) => (
              <div key={index} className="offering-box">
                <div className="offering-icon-wrap">
                  {item.icon}
                </div>
                <div className="offering-content">
                  <h3>{item.title} <span>{item.subtitle}</span></h3>
                  <p>{item.desc}</p>
                  <div className="offering-badge">Strategic Service</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-pad clients-section" style={{ background: '#f8faff' }}>
        <div className="container">
          <div className="clients-header">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Prestigious Partners & Clients</h2>
            <p className="clients-desc" style={{ textAlign: 'center' }}>
              We have successfully partnered with leading Government bodies and Enterprises to enable digital efficiency.
            </p>
          </div>
          <div className="clients-grid" style={{ marginTop: '48px' }}>
            {clients.map((client) => (
              <div key={client.name} className="client-logo-card">
                <img src={client.logo} alt={client.name} title={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {/* Professional Services Grid */}
<section className="services-dark-section">
  <div className="container">
    <div className="services-header-row">
      <h2 className="services-main-title">Our Services</h2>
      <Link to="/services" className="explore-link">
        Explore all services <ArrowRight size={14} />
      </Link>
    </div>

    <div className="services-bento-grid">
      {services.map(({ icon: Icon, label, path }) => (
        <Link to={path} key={label} className="services-bento-card">
          <div className="card-inner-content">
            <div className="icon-box">
              <Icon size={22} strokeWidth={2.5} />
            </div>
            <h3 className="card-label">{label}</h3>
            <div className="card-arrow-wrapper">
              <ArrowRight size={18} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>
      {/* Strategic Engagements & Certifications Section */}
<section className="section-pad engagement-box-area">
  <div className="container">
    <div className="engagement-top">
      <div className="section-label">Strategic Impact</div>
      <h2 className="section-title">Resilient & Security-First Ecosystems</h2>
      <p className="section-subtitle">We enable organizations to thrive through mission-critical digital engagements.</p>
    </div>

    {/* Project Grid */}
    <div className="engagement-mini-grid">
      {engagements.map((item, i) => (
        <div key={i} className="engagement-item">
          <div className="engagement-dot" />
          <div>
            <h4 className="engagement-item-title">{item.title}</h4>
            <p className="engagement-item-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Trust Ribbon */}
    <div className="trust-ribbon">
      {certifications.map((cert, i) => (
        <div key={i} className="trust-badge">
          <CheckCircle2 size={16} className="trust-icon" />
          <div className="trust-content">
            <span className="trust-name">{cert.name}</span>
            <span className="trust-detail">{cert.detail}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map(({ value, label }) => (
              <div key={label} className="stat-item">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to get the future you want?</h2>
            <p>Partner with CITTA Technologies for secure, scalable, and mission-critical digital solutions.</p>
          </div>
          <Link to="/contact" className="btn-outline">Contact us <ArrowRight size={15} /></Link>
        </div>
      </section>
    </main>
  );
}