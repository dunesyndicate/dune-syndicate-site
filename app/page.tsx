import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dune Syndicate</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        <Image src="/images/ds.jpg" alt="Dune Syndicate" width={400} height={300} />
        <Image src="/images/dsfront.jpg" alt="Front" width={400} height={300} />
        <Image src="/images/dsback.jpg" alt="Back" width={400} height={300} />
      </div>
    </main>
  );
}
