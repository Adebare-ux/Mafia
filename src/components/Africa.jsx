const AFRICA_STATS = [
  { num: "1.4B", sup: "+", label: "Total Population" },
  { num: "#1", sup: "", label: "Global Crypto Adoption" },
  { num: "60", sup: "%", label: "Population Under 25" },
  { num: "650M", sup: "+", label: "Mobile Internet Users" },
];

const AFRICA_BADGES = [
  "High Engagement Rates",
  "Active Crypto Community",
  "Rapid Growth Market",
  "Mobile-First Audience",
];

function Africa() {
  return (
    <section className="section section--a" id="africa">
      <div className="section__inner">
        <div className="section__label reveal">06 — Regional Edge</div>
        <h2 className="section__title reveal delay-1">
          African Web3 <em>Growth</em>
        </h2>
        <div className="africa__grid">
          <div className="africa__copy reveal delay-2">
            <p>
              We operate deep inside the fastest-growing crypto market on the
              planet. High mobile adoption, young demographics, and rapid growth
              potential make
              <strong> Africa</strong> the most exciting frontier in Web3 today.
            </p>
            <p>
              We don't just know this market — we{" "}
              <strong>live inside it</strong>. That insider advantage is what
              separates our campaigns from everyone else's.
            </p>
            <div className="africa__badges">
              {AFRICA_BADGES.map((b) => (
                <div className="africa__badge" key={b}>
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="africa__stats reveal delay-3">
            {AFRICA_STATS.map((s) => (
              <div className="africa__stat" key={s.label}>
                <div className="africa__stat-num">
                  {s.num}
                  <em>{s.sup}</em>
                </div>
                <div className="africa__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Africa;
