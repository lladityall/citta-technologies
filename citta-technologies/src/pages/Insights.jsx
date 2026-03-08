import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'

const insights = [
  {
    tag: 'DIGITAL TRANSFORMATION',
    title: 'The Future of Enterprise Software Development in 2026',
    desc: 'Exploring how AI, low-code platforms, and cloud-native architectures are reshaping enterprise software development.',
    date: 'Feb 28, 2026',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
  },
  {
    tag: 'CLOUD COMPUTING',
    title: 'Multi-Cloud Strategy: Best Practices for Enterprises',
    desc: 'A comprehensive guide to implementing a robust multi-cloud strategy that maximizes flexibility and minimizes vendor lock-in.',
    date: 'Feb 15, 2026',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
  },
  {
    tag: 'CYBERSECURITY',
    title: 'Zero Trust Architecture: Implementation Guide',
    desc: 'Understanding the principles and practical steps for adopting Zero Trust security in your organization.',
    date: 'Jan 30, 2026',
    img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&q=80',
  },
  {
    tag: 'AI & MACHINE LEARNING',
    title: 'Leveraging AI for Business Process Automation',
    desc: 'How intelligent automation powered by AI is transforming operational efficiency across industries.',
    date: 'Jan 13, 2026',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80',
  },
]

export default function Insights() {
  return (
    <main style={{ paddingTop: 64 }}>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">INSIGHTS</div>
          <h1>Thought Leadership</h1>
          <p>Perspectives on technology, innovation, and digital transformation from our experts.</p>
        </div>
      </section>

      <section className="section-pad" style={{ background:'white' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:24 }}>
            {insights.map((ins) => (
              <article key={ins.title} className="card" style={{ padding:0, overflow:'hidden', display:'flex', flexDirection:'column' }}>
                <div style={{ aspectRatio:'16/9', overflow:'hidden' }}>
                  <img src={ins.img} alt={ins.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s ease' }} />
                </div>
                <div style={{ padding:'24px', display:'flex', flexDirection:'column', gap:10, flex:1 }}>
                  <div style={{ fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--blue-accent)' }}>{ins.tag}</div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontSize:17, fontWeight:700, color:'var(--text-primary)', lineHeight:1.3 }}>{ins.title}</h3>
                  <p style={{ fontSize:13.5, color:'var(--text-secondary)', lineHeight:1.65 }}>{ins.desc}</p>
                  <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'auto', paddingTop:12 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:12, color:'var(--gray-400)' }}>
                      <Calendar size={13} />
                      <span>{ins.date}</span>
                    </div>
                    <Link to="#" style={{ display:'flex', alignItems:'center', gap:4, fontSize:13, fontWeight:600, color:'var(--blue-accent)', textDecoration:'none' }}>
                      Read <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
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
