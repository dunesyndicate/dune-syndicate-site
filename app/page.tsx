import Image from "next/image";

const officialDrops = [
  {
    title: "Drop 001 — Dune Script Hoodie",
    subtitle: "Official mockup • Back print",
    image: "/images/ds.jpg",
  },
  {
    title: "Drop 001 — Front Mark",
    subtitle: "Official mockup • Chest hit",
    image: "/images/dsfront.jpg",
  },
  {
    title: "Drop 001 — Back Script",
    subtitle: "Official mockup • Signature back",
    image: "/images/dsback.jpg",
  },
];

const gallery = [
  { label: "Female — Front", image: "/images/dsfemale.jpg" },
  { label: "Female — Back", image: "/images/dsfemaleback.jpg" },
  { label: "Logo", image: "/images/logo.jpg" },
];

export default function Home() {
  return (
    <main
  style={{
    minHeight: "100vh",
    color: "#f5f5f5",
    backgroundImage: "url('/images/dunes.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }}
>

      {/* Top bar */}
      <header>
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(10px)",
          background: "rgba(11,11,11,0.75)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0.9rem 1.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.03)",
                position: "relative",
              }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Dune Syndicate Logo"
                fill
                sizes="38px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div>
              <div style={{ fontWeight: 900, letterSpacing: "0.12em", fontSize: 12, opacity: 0.85 }}>
                DUNE SYNDICATE
              </div>
              <div style={{ fontSize: 12, opacity: 0.75 }}>Official drops archive</div>
            </div>
          </div>

          <div style={{ fontSize: 12, opacity: 0.9 }}>
            TikTok: <span style={{ fontWeight: 900 }}>@dunesyndicate</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: "4.5rem 1.25rem 2.75rem",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          background:
            "radial-gradient(1100px 500px at 15% 5%, rgba(255,255,255,0.08), transparent), radial-gradient(900px 450px at 85% 0%, rgba(255,255,255,0.06), transparent)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "1.25rem", alignItems: "center" }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 58, lineHeight: 1.02, letterSpacing: "-0.02em" }}>
                Epic dune culture.
                <br />
                Clean drops.
                <br />
                Zero generic vibes.
              </h1>

              <p style={{ marginTop: "1rem", maxWidth: 720, fontSize: 18, lineHeight: 1.65, opacity: 0.85 }}>
                This is the official Dune Syndicate drop page. The mockups below are considered <b>official releases</b> —
                not “coming soon,” not placeholders. Scroll and admire.
              </p>

              <div style={{ marginTop: "1.6rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a
                  href="#drops"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.95rem 1.1rem",
                    borderRadius: 14,
                    background: "#transparent",
                    color: "#0b0b0b",
                    textDecoration: "none",
                    fontWeight: 900,
                  }}
                >
                  View Official Drops
                </a>

                <a
                  href="#gallery"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.95rem 1.1rem",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "#f5f5f5",
                    textDecoration: "none",
                    fontWeight: 800,
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  See More Angles
                </a>
              </div>
            </div>

            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
                <Image
                  src="/images/ds.jpg"
                  alt="Dune Syndicate Hoodie"
                  fill
                  sizes="(max-width: 900px) 100vw, 450px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div style={{ padding: "0.9rem 1rem" }}>
                <div style={{ fontWeight: 900 }}>Drop 001</div>
                <div style={{ marginTop: 4, fontSize: 13, opacity: 0.75 }}>Black hoodie • signature back script</div>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 900px) {
              section > div > div { grid-template-columns: 1fr !important; }
              h1 { font-size: 40px !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Official Drops */}
      <section id="drops" style={{ padding: "2.75rem 1.25rem 2.25rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <h2 style={{ margin: 0, fontSize: 28, letterSpacing: "-0.01em" }}>Official Drops</h2>
              <p style={{ marginTop: 8, marginBottom: 0, opacity: 0.8 }}>
                These mockups are marked as official releases.
              </p>
            </div>
            <div style={{ fontSize: 12, opacity: 0.7, letterSpacing: "0.12em" }}>LIVE / OFFICIAL</div>
          </div>

          <div
            style={{
              marginTop: "1.4rem",
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "1rem",
            }}
          >
            {officialDrops.map((d) => (
              <article
                key={d.title}
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3", background: "rgba(255,255,255,0.02)" }}>
                  <Image src={d.image} alt={d.title} fill sizes="(max-width: 900px) 100vw, 360px" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "1rem" }}>
                  <div style={{ fontWeight: 900 }}>{d.title}</div>
                  <div style={{ marginTop: 6, fontSize: 14, opacity: 0.8 }}>{d.subtitle}</div>
                </div>
              </article>
            ))}
          </div>

          <style>{`
            @media (max-width: 900px) {
              #drops > div > div:last-child { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{ padding: "0.5rem 1.25rem 4rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h3 style={{ margin: "0 0 0.9rem", fontSize: 18, opacity: 0.9 }}>More angles</h3>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "1rem" }}>
            {gallery.map((g) => (
              <div
                key={g.label}
                style={{
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "4 / 3" }}>
                  <Image src={g.image} alt={g.label} fill sizes="(max-width: 900px) 100vw, 360px" style={{ objectFit: "cover" }} />
                </div>
                <div style={{ padding: "0.85rem 1rem", fontSize: 13, opacity: 0.85 }}>{g.label}</div>
              </div>
            ))}
          </div>

          <style>{`
            @media (max-width: 900px) {
              #gallery > div > div { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "1.75rem 1.25rem", borderTop: "1px solid rgba(255,255,255,0.08)", opacity: 0.85 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <div>© {new Date().getFullYear()} Dune Syndicate</div>
          <div>
            TikTok: <span style={{ fontWeight: 900 }}>@dunesyndicate</span>
          </div>
        </div>
      </footer>
      {/* BUY NOW */}
<div style={{ textAlign: "center", margin: "80px 0" }}>
  <a
    href="https://buy.stripe.com/test_4gM28qgTf0ZoeAu2BbgQE00"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      style={{
        padding: "18px 36px",
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor: "#111",
        color: "#fff",
        border: "2px solid #fff",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      BUY NOW
    </button>
  </a>
</div>
    </main>
  );

