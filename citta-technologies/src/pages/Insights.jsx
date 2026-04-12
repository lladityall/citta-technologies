import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

const eventPhotos = [
  {
    url: "/events/award-stage.jpeg",
    title: "State Level Export Award Recognition",
  },
  {
    url: "/events/ias-collaboration.jpeg",
    title: "Strategic Meeting with Govt. Officials",
  },
  {
    url: "/events/ai-program-flyer.jpeg",
    title: "Ambedkarite Intelligence Empowerment Program",
  },
  {
    url: "/events/student-certificates.jpeg",
    title: "Upskilling the Next Gen of IT Professionals",
  },
  {
    url: "/events/md-speaking.jpeg",
    title: "Expert Sessions on Hi-Tech Education",
  },
  {
    url: "/events/group-ceremony.jpeg",
    title: "Citta Technologies at World Trade Center, Mumbai",
  },
];

export default function Insights() {
  return (
    <main style={{ paddingTop: 64, background: '#ffffff' }}>
      {/* Hero Section */}
      <section className="page-hero" style={{ textAlign: 'left', padding: '100px 0 80px' }}>
        <div className="container">
          
          <h1 style={{ fontSize: '3.8rem', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '16px', color: '#ffffff' }}>
            Impact & Innovation
          </h1>
          <p style={{ maxWidth: '600px', fontSize: '1.2rem', color: '#64748b', lineHeight: 1.6 }}>
            Highlighting our commitment to excellence and community growth through technology.
          </p>
        </div>
      </section>

      {/* Modern Centered Title Section */}
      <section style={{ background: '#f8fafc', padding: '100px 0 80px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ 
              fontSize: '11px', 
              fontWeight: 700, 
              color: '#6366f1', // Indigo/Purple accent for the label
              letterSpacing: '0.2em', 
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              EVENT HIGHLIGHTS
            </div>
            <h2 style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              color: '#0f172a', 
              letterSpacing: '-0.02em' 
            }}>
              Citta in Action
            </h2>
          </div>

          {/* Gallery Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 32,
            }}
          >
            {eventPhotos.map((photo, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "white",
                  aspectRatio: "1/1",
                  boxShadow: "0 4px 25px rgba(0,0,0,0.05)",
                  transition: "all 0.4s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Content Overlay */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "40px 24px 24px",
                  background: "linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end"
                }}>
                  <p style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "white",
                    lineHeight: 1.4,
                  }}>
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800 }}>Ready to shape the future?</h2>
            <p>Connect with CITTA Technologies to start your transformation journey.</p>
          </div>
          <Link to="/contact" className="btn-outline" style={{ borderRadius: '12px' }}>
            Get in touch <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </main>
  )
}