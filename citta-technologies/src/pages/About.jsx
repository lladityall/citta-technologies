import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lightbulb,
  Eye,
  Users,
  CheckCircle,
  ShieldCheck,
  Mail,
  Phone,
  Briefcase,
  Target,
  Sparkles
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We consistently push boundaries to deliver cutting-edge solutions.",
  },
  {
    icon: Eye,
    title: "Client Focus",
    desc: "Your success is our measure. We build lasting partnerships.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    desc: "Great solutions emerge from diverse minds working together.",
  },
  {
    icon: CheckCircle,
    title: "Quality Excellence",
    desc: "Every line of code meets our rigorous standards.",
  },
];

const advisors = [
  {
    name: "Mr. Nikhil Mahadeshwar",
    role: "Cyber Security Expert",
    image: "/advisors/Mr. Nikhil Mahadeshwar.jpeg",
  },
  {
    name: "Mr. Suresh Londhe",
    role: "Government Project Consultant",
    image: "/advisors/Mr. Suresh Londhe.jpeg",
  },
  {
    name: "Mr. Girish Kopper",
    role: "Digital Transformation Advisor",
    image: "/advisors/girish-k.jpg",
  },
  {
    name: "Mr. Himanshu Modi",
    role: "Technical Advisor (Software Development & Cloud Infrastructure)",
    image: "/advisors/Mr. Himanshu Modi.jpeg",
  },
  {
    name: "Mr. Manish Rangari",
    role: "Chief Strategic Advisor / Mentorship Consultant",
    image: "/advisors/Mr. Manish Rangari.jpeg",
  },
];

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={{ paddingTop: 64 }}>
      {/* Hero Section */}
      <section className="page-hero" style={{ padding: isMobile ? '60px 20px' : '100px 0' }}>
        <div className="container">
          <div className="page-hero-label">ABOUT CITTA</div>
          <h1 style={{ fontSize: isMobile ? '2.5rem' : '3.5rem' }}>Intellect + Passion</h1>
          <p style={{ fontSize: isMobile ? '1rem' : '1.2rem' }}>
            "Citta" — an ancient Sanskrit word signifying "the mind associated
            with the heart." This philosophy drives everything we do.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-pad" style={{ background: "white", padding: isMobile ? '40px 20px' : '80px 0' }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 32 : 64,
              alignItems: "center",
            }}
          >
            <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                alt="CITTA team"
                style={{
                  width: "100%",
                  display: "block",
                  aspectRatio: isMobile ? "16/9" : "4/3",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
              <h2 className="section-title" style={{ marginBottom: 20 }}>
                Our Story
              </h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>
                Founded in 2009, CITTA Technologies began with a clear mission:
                to evolve with time and provide compelling, cutting-edge
                solutions that help customers maximize their reach — online and
                offline.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                With a team of 80+ skilled engineers and a track record of 250+
                successful projects, we combine deep technical expertise with an
                unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO / Managing Director Section */}
      <section style={{ 
        background: "#010126", 
        padding: isMobile ? "60px 20px" : "100px 0", 
        color: "white", 
        overflow: 'hidden', 
        position: 'relative' 
      }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'minmax(300px, 1fr) 1.5fr', 
            gap: isMobile ? 40 : 60, 
            alignItems: 'center' 
          }}>
            <div style={{ position: 'relative', justifySelf: 'center' }}>
              <div style={{
                width: isMobile ? 260 : 320,
                height: isMobile ? 260 : 320,
                borderRadius: '40px',
                padding: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
              }}>
                <img 
                  src="/leaders/vijay-jadhav.jpeg" 
                  alt="Mr. Vijay Jadhav"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '32px' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: -10,
                right: isMobile ? 10 : -10,
                background: 'var(--blue-accent)',
                padding: '8px 16px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: 12,
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              }}>
                <Sparkles size={12} style={{ display: 'inline', marginRight: 6 }} /> FOUNDER
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28, textAlign: isMobile ? 'center' : 'left' }}>
              <div>
                <h3 style={{ color: 'var(--blue-accent)', fontWeight: 700, letterSpacing: '0.15em', fontSize: 11, marginBottom: 12 }}>
                  CEO / MANAGING DIRECTOR
                </h3>
                <h2 style={{ fontSize: isMobile ? '2.2rem' : '2.8rem', fontWeight: 800, marginBottom: 6 }}>
                  Mr. Vijay Jadhav
                </h2>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)' }}>
                  Founder & Managing Director of CITTA Technologies Pvt. Ltd.
                </p>
              </div>

              {/* Restored Role & Focus Sections */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'flex', gap: 16, textAlign: 'left', alignItems: 'flex-start' }}>
                  <div style={{ padding: 10, borderRadius: 12, background: 'rgba(255,255,255,0.05)', flexShrink: 0 }}>
                    <Briefcase size={20} color="var(--blue-accent)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Role</h4>
                    <p style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.6 }}>As the founding leader, he oversees the company’s overall strategy, operations, and growth initiatives.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 16, textAlign: 'left', alignItems: 'flex-start' }}>
                  <div style={{ padding: 10, borderRadius: 12, background: 'rgba(255,255,255,0.05)', flexShrink: 0 }}>
                    <Target size={20} color="var(--blue-accent)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>Focus</h4>
                    <p style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.6 }}>Delivering mission-critical IT solutions, driving digital transformation, and ensuring alignment with regulatory standards like the DPDP Act (2023).</p>
                  </div>
                </div>
              </div>

              {/* Contact Pill */}
              <div style={{ 
                padding: '24px', 
                borderRadius: '24px', 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: 20
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                  <Mail size={18} color="var(--blue-accent)" />
                  <span style={{ fontSize: 13, fontWeight: 600 }}>cittatechnologies@gmail.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: isMobile ? 'center' : 'flex-start' }}>
                  <Phone size={18} color="var(--blue-accent)" />
                  <span style={{ fontSize: 13, fontWeight: 600 }}>+91 90048 91015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-pad" style={{ background: "var(--gray-100)", padding: isMobile ? '40px 20px' : '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">OUR VALUES</div>
            <h2 className="section-title">What Defines Us</h2>
          </div>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4,1fr)", 
            gap: 24 
          }}>
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ textAlign: "center", padding: "32px 20px", background: "white", borderRadius: 12 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "var(--blue-accent)" }}>
                  <Icon size={20} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Team */}
      <section style={{ background: "#010126", padding: isMobile ? "60px 20px" : "100px 0", color: "white" }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label" style={{ color: 'var(--blue-accent)' }}>STRATEGIC MENTORSHIP</div>
            <h2 className="section-title" style={{ color: 'white' }}>Our Advisory Team</h2>
          </div>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: isMobile ? 20 : 32,
          }}>
            {advisors.map((advisor) => (
              <div 
                key={advisor.name} 
                style={{ 
                  textAlign: "center", 
                  padding: "30px 20px", 
                  background: "rgba(255, 255, 255, 0.03)", 
                  borderRadius: 32, 
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  width: isMobile ? "100%" : "300px",
                  maxWidth: "350px"
                }}
              >
                <div style={{ width: 120, height: 120, borderRadius: "50%", marginBottom: "20px", overflow: "hidden", border: "2px solid var(--blue-accent)", margin: '0 auto 20px' }}>
                  <img src={advisor.image} alt={advisor.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>{advisor.name}</h3>
                <p style={{ fontSize: 11, color: "var(--blue-accent)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: 8 }}>{advisor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner" style={{ padding: isMobile ? '60px 20px' : '80px 0' }}>
        <div className="container">
          <div style={{ display: isMobile ? 'block' : 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: isMobile ? 'center' : 'left' }}>
            <div style={{ marginBottom: isMobile ? 24 : 0 }}>
              <h2 style={{ fontSize: isMobile ? '1.8rem' : '2.4rem' }}>Ready to get the future you want?</h2>
              <p>Let's discuss how CITTA Technologies can help you.</p>
            </div>
            <Link to="/contact" className="btn-outline" style={{ display: 'inline-flex' }}>
              Contact us <ArrowRight size={15} style={{ marginLeft: 8 }} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}