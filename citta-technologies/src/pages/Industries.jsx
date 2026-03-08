import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const industries = [
  {
    emoji: '🏦',
    title: 'Finance & Banking',
    desc: 'Secure fintech solutions, trading platforms, and digital banking applications that meet regulatory requirements.',
  },
  {
    emoji: '🏥',
    title: 'Healthcare',
    desc: 'HIPAA-compliant health tech solutions, telemedicine platforms, and patient management systems.',
  },
  {
    emoji: '🎓',
    title: 'Education',
    desc: 'E-learning platforms, LMS systems, and EdTech solutions that transform how knowledge is delivered.',
  },
  {
    emoji: '🛒',
    title: 'Retail & E-Commerce',
    desc: 'Omnichannel commerce platforms, inventory management, and customer engagement solutions.',
  },
  {
    emoji: '🚚',
    title: 'Logistics & Supply Chain',
    desc: 'Route optimization, warehouse management, and real-time tracking systems.',
  },
  {
    emoji: '🏭',
    title: 'Manufacturing',
    desc: 'IoT-enabled smart factory solutions, ERP systems, and production management platforms.',
  },
  {
    emoji: '🏢',
    title: 'Real Estate & Construction',
    desc: 'Property management platforms, CRM systems, and project management tools.',
  },
  {
    emoji: '🍽️',
    title: 'Hospitality & Restaurant',
    desc: 'Booking systems, POS solutions, and guest experience management platforms.',
  },
]

export default function Industries() {
  return (
    <main style={{ paddingTop: 64 }}>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">INDUSTRIES</div>
          <h1>Domain Expertise Across<br />Industries</h1>
          <p>Deep industry knowledge combined with technical excellence enables us to deliver solutions that address sector-specific challenges.</p>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:16 }}>
            {industries.map((ind) => (
              <div key={ind.title} className="card" style={{ display:'flex', flexDirection:'column', gap:10 }}>
                <div style={{ fontSize: 28 }}>{ind.emoji}</div>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:17, fontWeight:700, color:'var(--text-primary)' }}>{ind.title}</h3>
                <p style={{ fontSize:13.5, color:'var(--text-secondary)', lineHeight:1.65 }}>{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
