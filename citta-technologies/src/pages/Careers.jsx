import { ArrowRight, Briefcase, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const positions = [
  { title: 'Senior Full-Stack Developer', dept: 'Engineering', location: 'Maharashtra, India', type: 'Full-Time', highlighted: false },
  { title: 'React Native Developer', dept: 'Mobile', location: 'Remote', type: 'Full-Time', highlighted: false },
  { title: 'DevOps Engineer', dept: 'Infrastructure', location: 'Maharashtra, India', type: 'Full-Time', highlighted: false },
  { title: 'UI/UX Designer', dept: 'Design', location: 'Hybrid', type: 'Full-Time', highlighted: false },
  { title: 'Business Analyst', dept: 'Consulting', location: 'Maharashtra, India', type: 'Full-Time', highlighted: false },
  { title: 'QA Engineer', dept: 'Quality', location: 'Remote', type: 'Contract', highlighted: false },
]

export default function Careers() {
  return (
    <main style={{ paddingTop: 64 }}>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-label">CAREERS</div>
          <h1>Join Our Team</h1>
          <p>Build your career at CITTA Technologies. We're looking for passionate people who want to make an impact.</p>
        </div>
      </section>

      <section className="section-pad" style={{ background:'white' }}>
        <div className="container">
          <div style={{ marginBottom: 32 }}>
            <h2 className="section-title" style={{ marginBottom: 6 }}>Open Positions</h2>
            <p style={{ fontSize:14, color:'var(--text-secondary)' }}>Find the role that's right for you.</p>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
            {positions.map((pos) => (
              <div
                key={pos.title}
                style={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-between',
                  padding:'20px 24px',
                  background: pos.highlighted ? '#f0f4ff' : 'white',
                  border:'1px solid var(--gray-200)',
                  borderRadius:10,
                  transition:'all 0.2s',
                  gap:16,
                }}
                className="career-row"
              >
                <div>
                  <h3 style={{ fontFamily:'var(--font-display)', fontSize:15.5, fontWeight:700, color: pos.highlighted ? 'var(--blue-accent)' : 'var(--text-primary)', marginBottom:6 }}>
                    {pos.title}
                  </h3>
                  <div style={{ display:'flex', alignItems:'center', gap:16, flexWrap:'wrap' }}>
                    <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:12, color:'var(--gray-400)' }}>
                      <Briefcase size={12} /> {pos.dept}
                    </span>
                    <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:12, color:'var(--gray-400)' }}>
                      <MapPin size={12} /> {pos.location}
                    </span>
                    <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:12, color:'var(--gray-400)' }}>
                      <Clock size={12} /> {pos.type}
                    </span>
                  </div>
                </div>
                <Link
                  to="/profile"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:4,
                    fontSize:13, fontWeight:600,
                    color:'var(--blue-accent)', textDecoration:'none',
                    whiteSpace:'nowrap',
                    flexShrink:0,
                  }}
                >
                  Apply <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2>Don't see your role?</h2>
            <p>We're always looking for talented people. Send us your resume and let's talk.</p>
          </div>
          <Link to="/profile" className="btn-outline">Get in touch <ArrowRight size={15} /></Link>
        </div>
      </section>
    </main>
  )
}
