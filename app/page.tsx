export default function Home() {
  return (
    <main style={{ minHeight: "100vh", padding: "48px 24px", fontFamily: "system-ui, sans-serif" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <p style={{ letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.7 }}>
          Glamis • Off-road • Lifestyle
        </p>

        <h1 style={{ fontSize: 56, margin: "14px 0 10px" }}>Dune Syndicate</h1>

        <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 680, opacity: 0.9 }}>
          Built for the dunes — late nights, cold starts, wide open throttle.
          Limited drops. Real riders. Glamis tested.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
          <a
            href="#"
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              background: "black",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Shop the Drop
          </a>

          <a
            href="#"
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid #ddd",
              color: "black",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Follow on TikTok
          </a>
        </div>

        <div style={{ marginTop: 40, display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
            <h3 style={{ margin: 0 }}>Limited Drops</h3>
            <p style={{ marginTop: 8, opacity: 0.85 }}>
              Small runs, fast sellouts. Get in early.
            </p>
          </div>

          <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
            <h3 style={{ margin: 0 }}>Glamis Energy</h3>
            <p style={{ marginTop: 8, opacity: 0.85 }}>
              Dunes, RZRs, quads, motos — the lifestyle first.
            </p>
          </div>

          <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 16 }}>
            <h3 style={{ margin: 0 }}>Built to Wear</h3>
            <p style={{ marginTop: 8, opacity: 0.85 }}>
              Heavyweight feel, clean graphics, desert-ready.
            </p>
          </div>
        </div>

        <p style={{ marginTop: 34, opacity: 0.65 }}>
          © {new Date().getFullYear()} Dune Syndicate
        </p>
      </div>
    </main>
  );
}
