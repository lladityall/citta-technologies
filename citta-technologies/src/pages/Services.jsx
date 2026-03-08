import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Code2, Smartphone, Globe, ShoppingCart, Cloud, Shield, ArrowRight } from 'lucide-react'
import './Services.css'

const services = [
  {
    id: 'software',
    icon: Code2,
    title: 'Software Development',
    desc: 'We build robust, scalable enterprise software solutions tailored to your unique business processes. From ERP systems to custom CRM platforms, our team delivers solutions that drive operational efficiency.',
    features: ['Custom Enterprise Applications', 'System Integration', 'Legacy Modernization', 'API Development'],
    bg: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'App Development',
    desc: 'Native and cross-platform mobile applications crafted with intuitive UI/UX design. We deliver apps that engage users and drive measurable business outcomes across iOS and Android.',
    features: ['iOS & Android Native', 'Cross-Platform (React Native)', 'UI/UX Design', 'App Store Optimization'],
    bg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    reverse: true,
  },
  {
    id: 'web',
    icon: Globe,
    title: 'Web Development',
    desc: 'Modern, responsive web applications built with cutting-edge frameworks. We create performant, accessible digital experiences that scale with your business.',
    features: ['Progressive Web Apps', 'Single Page Applications', 'CMS Development', 'Performance Optimization'],
    bg: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    desc: 'End-to-end digital commerce platforms that drive revenue growth. From storefront design to payment integration, we build seamless shopping experiences.',
    features: ['Custom Storefronts', 'Payment Gateway Integration', 'Inventory Management', 'Multi-channel Commerce'],
    bg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    reverse: true,
  },
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Cloud migration, infrastructure management, and CI/CD pipeline automation. We help you leverage cloud technologies for agility and cost optimization.',
    features: ['AWS / Azure / GCP', 'CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration'],
    bg: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
  },
  {
    id: 'cyber',
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Comprehensive security assessments, implementations, and monitoring. Protect your digital assets with our proactive, multi-layered security approach.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance (GDPR, HIPAA)', 'Incident Response'],
    bg: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80',
    reverse: true,
  },
]

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    }
  }, [location])

  return (
    <main style={{ paddingTop: 64 }}>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">OUR SERVICES</div>
          <h1>Technology Solutions That<br />Drive Growth</h1>
          <p>From strategy to execution, we deliver comprehensive IT services designed to transform your business.</p>
        </div>
      </section>

      <div className="services-list">
        {services.map((svc) => {
          const Icon = svc.icon
          return (
            <section
              key={svc.id}
              id={svc.id}
              className={`service-section ${svc.reverse ? 'service-section--reverse' : ''}`}
            >
              <div className="container service-inner">
                <div className="service-content">
                  <div className="service-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h2 className="service-title">{svc.title}</h2>
                  <p className="service-desc">{svc.desc}</p>
                  <ul className="service-features">
                    {svc.features.map((f) => (
                      <li key={f}>• {f}</li>
                    ))}
                  </ul>
                  <Link to="/contact" className="link-arrow" style={{ marginTop: 20, display:'inline-flex', alignItems:'center', gap:4, fontSize:14, fontWeight:500, color:'var(--blue-accent)', textDecoration:'none' }}>
                    Discuss This Service <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="service-visual">
                  <div className="service-img-wrap">
                    <img src={svc.bg} alt={svc.title} />
                    <div className="service-img-overlay">
                      <Icon size={64} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

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
