import { Link } from 'react-router-dom'
import { ArrowRight, Lightbulb, Eye, Users, CheckCircle } from 'lucide-react'

const values = [
  { icon: Lightbulb, title: 'Innovation First', desc: 'We consistently push boundaries to deliver cutting-edge solutions.' },
  { icon: Eye, title: 'Client Focus', desc: 'Your success is our measure. We build lasting partnerships.' },
  { icon: Users, title: 'Collaborative Spirit', desc: 'Great solutions emerge from diverse minds working together.' },
  { icon: CheckCircle, title: 'Quality Excellence', desc: 'Every line of code meets our rigorous standards.' },
]

export default function About() {
  return (
    <main style={{ paddingTop: 64 }}>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">ABOUT CITTA</div>
          <h1>Intellect + Passion</h1>
          <p>"Citta" — an ancient Sanskrit word signifying "the mind associated with the heart." This philosophy drives everything we do.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>
            <div style={{ borderRadius:14, overflow:'hidden' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="CITTA team"
                style={{ width:'100%', display:'block', aspectRatio:'4/3', objectFit:'cover' }}
              />
            </div>
            <div>
              <h2 className="section-title" style={{ marginBottom:20 }}>Our Story</h2>
              <p style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:1.8, marginBottom:16 }}>
                Founded in 2009, CITTA Technologies began with a clear mission: to evolve with time and provide compelling, cutting-edge solutions that help customers maximize their reach — online and offline.
              </p>
              <p style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:1.8, marginBottom:16 }}>
                Today, we are a trusted technology partner for enterprises across industries, offering a comprehensive range of IT services from software development to digital transformation consulting.
              </p>
              <p style={{ fontSize:14, color:'var(--text-secondary)', lineHeight:1.8 }}>
                With a team of 80+ skilled engineers and a track record of 250+ successful projects, we combine deep technical expertise with an unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background:'var(--gray-100)' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <div className="section-label">OUR VALUES</div>
            <h2 className="section-title">What Defines Us</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ textAlign:'center', padding:'32px 20px', background:'white', borderRadius:12, border:'1px solid var(--gray-200)' }}>
                <div style={{ width:48, height:48, borderRadius:'50%', background:'#eff6ff', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', color:'var(--blue-accent)' }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:15, fontWeight:700, marginBottom:8 }}>{title}</h3>
                <p style={{ fontSize:13, color:'var(--text-secondary)', lineHeight:1.6 }}>{desc}</p>
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
