import { Link } from 'react-router-dom'
import { ArrowRight, Code2, Smartphone, Globe, ShoppingCart, Cloud, Shield,
         Users, Briefcase, Cpu, Award, ChevronRight } from 'lucide-react'
import './Home.css'

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
]

const services = [
  { icon: Code2, label: 'Software Development', path: '/services#software' },
  { icon: Smartphone, label: 'App Development', path: '/services#app' },
  { icon: Globe, label: 'Web Development', path: '/services#web'},
  { icon: ShoppingCart, label: 'E-Commerce', path: '/services#ecommerce' },
  { icon: Cloud, label: 'Cloud & DevOps', path: '/services#cloud' },
  { icon: Shield, label: 'Cybersecurity', path: '/services#cyber' },
]

const stats = [
  { value: '2,200+', label: 'Clients Worldwide', icon: Users },
  { value: '250+', label: 'Projects Delivered', icon: Briefcase },
  { value: '80+', label: 'Expert Engineers', icon: Cpu },
  { value: '15+', label: 'Years of Excellence', icon: Award },
]

const latestInsights = [
  { tag: 'PERSPECTIVE', title: 'Cloud-Native Architecture: A Strategic Imperative', desc: 'Why organizations must embrace cloud-native approaches to remain competitive.', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80' },
  { tag: 'CASE STUDY', title: 'Digital Transformation for a Leading Manufacturer', desc: 'How CITTA helped a manufacturing enterprise modernize operations with IoT and data analytics.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&q=80' },
]

const industries = [
  { icon: '🏦', label: 'Finance & Banking' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🎓', label: 'Education' },
  { icon: '🛒', label: 'Retail' },
  { icon: '🚚', label: 'Logistics' },
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🏢', label: 'Real Estate' },
  { icon: '🍽️', label: 'Hospitality' },
]

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
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

      {/* Highlights */}
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

      {/* Value prop */}
      <section className="value-section">
        <div className="container" style={{ textAlign:'center' }}>
          <h2 className="section-title">We deliver real value</h2>
          <p className="section-subtitle" style={{ maxWidth: 460, margin: '12px auto 0' }}>
            through our people-centric approach and commitment to <strong>intellect + passion</strong>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header-row">
            <h2 className="section-title">Our services</h2>
            <Link to="/services" className="link-arrow">Explore all services <ArrowRight size={14} /></Link>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, label, path, accent }) => (
              <Link to={path} key={label} className={`service-card ${accent ? 'service-card--accent' : ''}`}>
                <Icon size={22} className="service-icon" />
                <span className="service-label">{label}</span>
                <ArrowRight size={14} className="service-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Latest Insights */}
      <section className="section-pad" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header-row">
            <h2 className="section-title">Latest insights</h2>
            <Link to="/insights" className="link-arrow">View all insights <ArrowRight size={14} /></Link>
          </div>
          <div className="insights-layout">
            <div className="insight-main">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80"
                alt="Insights"
                className="insight-main-img"
              />
              <div className="insight-tag" style={{ marginTop: 16 }}>RESEARCH</div>
              <h3 className="insight-main-title">The Future of Enterprise Software in the Age of AI</h3>
              <p className="insight-desc">How generative AI and intelligent automation are redefining enterprise application development.</p>
            </div>
            <div className="insight-side">
              {latestInsights.map((ins) => (
                <div key={ins.title} className="insight-side-card">
                  <img src={ins.img} alt={ins.title} className="insight-side-img" />
                  <div>
                    <div className="insight-tag">{ins.tag}</div>
                    <h4 className="insight-side-title">{ins.title}</h4>
                    <p className="insight-desc">{ins.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-pad" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="section-header-row">
            <h2 className="section-title">Industries we serve</h2>
            <Link to="/industries" className="link-arrow">View all industries <ArrowRight size={14} /></Link>
          </div>
          <div className="industries-grid">
            {industries.map(({ icon, label, accent }) => (
              <Link to="/industries" key={label} className={`industry-chip ${accent ? 'industry-chip--accent' : ''}`}>
                <span>{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Ready to get the future you want?</h2>
            <p>Let's discuss how CITTA Technologies can help you navigate your digital transformation journey.</p>
          </div>
          <Link to="/contact" className="btn-outline">Contact us <ArrowRight size={15} /></Link>
        </div>
      </section>
    </main>
  )
}
