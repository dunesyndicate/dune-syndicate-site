cat > app/page.tsx << 'EOF'
import Image from "next/image";

const drops = [
  {
    title: "Dune Syndicate Hoodie — Front Hit",
    subtitle: "Clean chest mark. Heavy statement.",
    image: "/images/dsfemale.jpg",
    tag: "Official Drop",
  },
  {
    title: "Dune Syndicate Hoodie — Back Graphic",
    subtitle: "Full-size back hit for the dunes.",
    image: "/images/dsfemaleback.jpg",
    tag: "Official Drop",
  },
  {
    title: "Dune Syndicate Hoodie — Back (Studio)",
    subtitle: "Product view for the detail-heads.",
    image: "/images/dsback.jpg",
    tag: "Official Drop",
  },
  {
    title: "Dune Syndicate — Back (Lifestyle)",
    subtitle: "Built for Glamis nights and day runs.",
    image: "/images/ds.jpg",
    tag: "Official Drop",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.06)",
        fontSize: 12,
        letterSpacing: 0.5,
        textTransform: "uppercase",
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: "#7CFF7A",
          boxShadow: "0 0 14px rgba(124,255,122,0.7)",
        }}
      />
      {children}
    </span>
  );
}

function Card({
  title,
  subtitle,
  image,
  tag,
}: {
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}) {
  return (
    <div
      style={{
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.10)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
        boxShadow: "0 14px 40px rgba(0,0,0,0.45)",
      }}
    >
      <div style={{ position: "relative", aspectRatio: "1 / 1" }}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          priority={false}
        />
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
          <div style={{ fontSize: 14, opacity: 0.9 }}>{tag}</div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>@dunesyndicate</div>
        </div>
        <div style={{ marginTop: 10, fontSize: 18, fontWeight: 800, letterSpacing: 0.2 }}>
          {title}
        </div>
        <div style={{ marginTop: 6, fontSize: 14, opacity: 0.78, lineHeight: 1.4 }}>
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 20% 0%, rgba(255,180,90,0.22), transparent 55%), radial-gradient(900px 500px at 90% 20%, rgba(120,200,255,0.14), transparent 60%), #070707",
        color: "white",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          backdropFilter: "blur(12px)",
          background: "rgba(7,7,7,0.55)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Dune Syndicate"
                width={84}
                height={84}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontWeight: 900, letterSpacing: 0.6 }}>DUNE SYNDICATE</div>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 6 }}>
                Official drops • Built for dune culture
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Pill>Live Drop</Pill>
            <a
              href="https://www.tiktok.com/@dunesyndicate"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "white",
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.06)",
                fontWeight: 700,
              }}
            >
              TikTok @dunesyndicate
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "52px 18px 26px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 22,
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <Pill>Official Drop</Pill>
              <span style={{ fontSize: 12, opacity: 0.75 }}>
                Built for riders • Glamis energy • Clean + aggressive
              </span>
            </div>

            <h1
              style={{
                marginTop: 16,
                fontSize: 54,
                lineHeight: 1.02,
                letterSpacing: -1,
                fontWeight: 950,
              }}
            >
              Dune gear for people who live the dunes.
            </h1>

            <p style={{ marginTop: 14, fontSize: 16, opacity: 0.82, maxWidth: 680, lineHeight: 1.6 }}>
              This is the official <b>Dune Syndicate</b> drop page. No placeholders. No “coming soon.”
              Just the first drop, shown exactly how it looks on-body and in product shots.
            </p>

            <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href="#drop"
                style={{
                  textDecoration: "none",
                  color: "#070707",
                  background: "white",
                  padding: "12px 16px",
                  borderRadius: 12,
                  fontWeight: 900,
                }}
              >
                View the Drop
              </a>
              <a
                href="#gallery"
                style={{
                  textDecoration: "none",
                  color: "white",
                  background: "rgba(255,255,255,0.06)",
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.14)",
                  fontWeight: 900,
                }}
              >
                Gallery
              </a>
            </div>
          </div>

          <div
            style={{
              borderRadius: 22,
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.04)",
              padding: 14,
              boxShadow: "0 14px 40px rgba(0,0,0,0.45)",
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", borderRadius: 16, overflow: "hidden" }}>
              <Image
                src="/images/logo.jpg"
                alt="Dune Syndicate Logo"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div style={{ marginTop: 12, fontSize: 13, opacity: 0.78, lineHeight: 1.5 }}>
              Follow the builds + drops on TikTok: <b>@dunesyndicate</b>
            </div>
          </div>
        </div>
      </section>

      {/* Drop grid */}
      <section id="drop" style={{ maxWidth: 1120, margin: "0 auto", padding: "26px 18px 18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
          <h2 style={{ margin: 0, fontSize: 26, fontWeight: 950, letterSpacing: -0.4 }}>The Drop</h2>
          <div style={{ fontSize: 13, opacity: 0.72 }}>
            Official imagery • Real mockups • Ready to buy (when you add a store link)
          </div>
        </div>

        <div
          style={{
            marginTop: 16,
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {drops.map((d) => (
            <Card key={d.title} title={d.title} subtitle={d.subtitle} image={d.image} tag={d.tag} />
          ))}
        </div>
      </section>

      {/* Gallery strip */}
      <section id="gallery" style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 18px 64px" }}>
        <h2 style={{ margin: "10px 0 12px", fontSize: 26, fontWeight: 950, letterSpacing: -0.4 }}>Gallery</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: 12,
          }}
        >
          {["/images/dsfemale.jpg", "/images/dsfemaleback.jpg", "/images/ds.jpg", "/images/dsback.jpg"].map((src, i) => (
            <div
              key={src}
              style={{
                gridColumn: i % 2 === 0 ? "span 6" : "span 6",
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
                <Image src={src} alt={`Dune Syndicate ${i + 1}`} fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            </div>
          ))}
        </div>

        <footer style={{ marginTop: 28, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.08)", opacity: 0.8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div style={{ fontWeight: 900, letterSpacing: 0.6 }}>DUNE SYNDICATE</div>
            <div style={{ fontSize: 13 }}>
              TikTok: <b>@dunesyndicate</b>
            </div>
          </div>
          <div style={{ fontSize: 12, marginTop: 10, opacity: 0.75 }}>
            © {new Date().getFullYear()} Dune Syndicate • Built for dune enthusiasts
          </div>
        </footer>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1.2fr 0.8fr"] {
            grid-template-columns: 1fr !important;
          }
          #drop > div[style*="grid-template-columns: repeat(2"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

CTRL + D

