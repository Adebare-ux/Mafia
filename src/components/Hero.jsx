const HERO_STATS = [
  { num: "50", sup: "+", label: "Campaigns" },
  { num: "1", sup: "+", label: "Members" },
  { num: "20", sup: "+", label: "Projects" },
  { num: "5", sup: "yr", label: "Experience" },
];

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg" />
      <div className="hero__grid" />
      <div className="hero__side">The Syndicate · Web3 · Since 2021</div>
      <div className="hero__content">
        <div className="hero__eyebrow">
          Web3 Community Architect · Raid Strategist
        </div>
        <h1 className="hero__title">
          <div className="hero__title-line1">CRYPTO</div>
          <div className="hero__title-line2">MAFIA</div>
          <div className="hero__title-line3">RUNS WEB3</div>
        </h1>
        <p className="hero__sub">
          I don't just grow communities — I build{" "}
          <em style={{ fontStyle: "italic", color: "var(--ivory)" }}>
            empires
          </em>
          . Underground ops, precision raids, and Telegram ecosystems that
          outlast every competitor.
        </p>
        <div className="hero__actions">
          <a href="#work" className="btn-primary">
            <span className="btn-primary__text">View The Operation →</span>
          </a>
          <a href="#contact" className="btn-ghost">
            Join The Syndicate →
          </a>
        </div>
      </div>
      <div className="hero__stats">
        {HERO_STATS.map(({ num, sup, label }) => (
          <div key={label}>
            <div className="hero__stat-num">
              {num}
              <em>{sup}</em>
            </div>
            <div className="hero__stat-label">{label}</div>
          </div>
        ))}
      </div>
      <div className="hero__scroll">Scroll Down</div>
    </section>
  );
}

export default Hero;
