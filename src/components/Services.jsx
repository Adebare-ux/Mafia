const SERVICES = [
  {
    num: "01",
    name: "TELEGRAM GROWTH & MANAGEMENT",
    desc: "End-to-end Telegram ecosystem engineering setup, organic growth, retention systems, and deep community bonding that outlasts hype cycles.",
    tags: ["Telegram", "Growth", "Retention"],
  },
  {
    num: "02",
    name: "Telegram / Discord Growth Systems ",
    desc: "Coordinated visibility strikes on X (Twitter) with KOL distribution. We hit hard, fast, and with surgical precision across the right audiences.",
    tags: ["X / Twitter", "KOLs", "Raids"],
  },
  {
    num: "03",
    name: "MODERATION SYSTEMS",
    desc: "Bot configuration, anti-spam protocols, threat detection, and elite human moderation. Your community stays clean, safe, and on-message.",
    tags: ["Bots", "Security", "Control"],
  },
  {
    num: "04",
    name: "Community Architecture & Management",
    desc: "Designing and scaling community ecosystems that encourage engagement, strengthen user relationships, and support product or brand growth.",
    tags: ["Community-Led Growth", "DAO Operations", "Contributor Management"],
  },
  {
    num: "05",
    name: "Team Leadership & Execution Management",
    desc: "Leading a team while effectively planning, coordinating, and delivering projects to achieve defined goals.",
    tags: ["Task Management", "Strategic planning", "Decision-making"],
  },
  {
    num: "06",
    name: "Conversion & Audience Activation",
    desc: "Driving user engagement and converting traffic into active users through optimized experiences and strategic interaction design.",
    tags: ["Audience Growth", "User Experience", "Conversion Rate"],
  },
];

function Services() {
  return (
    <section className="section section--a" id="services">
      <div className="section__inner">
        <div className="section__label reveal">02 — The Offerings</div>
        <h2 className="section__title reveal delay-1">
          Our <em>Ops</em>
        </h2>
        <div className="services__list">
          {SERVICES.map((s, i) => (
            <div
              className="service-row reveal"
              key={s.num}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="service-row__num">{s.num}</div>
              <div>
                <div className="service-row__name">{s.name}</div>
                <div className="service-row__desc">{s.desc}</div>
              </div>
              <div className="service-row__tags">
                {s.tags.map((t) => (
                  <span className="service-row__tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="service-row__arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
