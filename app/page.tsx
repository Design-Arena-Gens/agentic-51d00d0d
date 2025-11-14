import Logo from "./components/Logo";

const brandPillars = [
  "Precision Systems Engineering",
  "Client-First Support Culture",
  "Future-Ready Cloud Solutions"
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <article className="brand-card">
            <div className="brand-card-inner">
              <div className="logo-wrapper">
                <div className="logo-card">
                  <Logo />
                </div>
              </div>
            </div>
          </article>
          <article className="brand-copy">
            <h1>Elevated Identity for A.S Computer-Tech</h1>
            <p>
              The refreshed emblem merges a confident monogram with precise geometric
              contours to embody the company&apos;s commitment to reliable infrastructure,
              forward-looking services, and premium client partnerships.
            </p>
            <ul className="brand-pillars">
              {brandPillars.map((pillar) => (
                <li key={pillar}>{pillar}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>
      <footer className="footer">
        Crafted brand direction &amp; responsive preview for the next chapter of
        A.S Computer-Tech.
      </footer>
    </main>
  );
}
