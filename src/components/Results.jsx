const RESULTS = [
  {
    num: "10K",
    sup: "+",
    label: "Members Grown",
    desc: "Across all Web3 projects combined",
    bg: "1K",
  },
  {
    num: "20",
    sup: "+",
    label: "Projects Completed",
    desc: "Web3 projects successfully supported",
    bg: "10",
  },
  {
    num: "50",
    sup: "+",
    label: "Raid Campaigns",
    desc: "Executed with precision & results",
    bg: "50",
  },
  {
    num: "100",
    sup: "%",
    label: "Client Satisfaction",
    desc: "Zero complaints. Only results.",
    bg: "100",
  },
];

function Results() {
  return (
    <section className="section section--c" id="results">
      <div className="section__inner">
        <div className="section__label reveal">04 — Track Record</div>
        <h2 className="section__title reveal delay-1">
          Real <em>Results</em>
        </h2>
        <div className="results__grid">
          {RESULTS.map((r, i) => (
            <div
              className="result-card reveal"
              key={r.label}
              data-bg={r.bg}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="result-card__num">
                {r.num}
                <em>{r.sup}</em>
              </div>
              <div className="result-card__label">{r.label}</div>
              <div className="result-card__desc">{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
