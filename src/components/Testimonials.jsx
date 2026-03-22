const TESTIMONIALS = [
  {
    stars: "★★★★★",
    text: "Crypto mafia improved our engagement and structured our community growth effectively. Raid strategies alone 10x'd our Twitter visibility in two weeks.",
    initials: "WO",
    name: "$WOPEN",
    role: "Growth Strategist / Head Raider",
  },
  {
    stars: "★★★★★",
    text: "He improves and increase our social media growth, and we're seeing a 10x increase in our downloads.",
    initials: "TT",
    name: "$Trippy Trunkz",
    role: "Social Media/Growth Manager",
  },
  {
    stars: "★★★★★",
    text: "The African Web3 market is untapped gold. Crypto Mafia knows exactly how to reach this audience and convert them into loyal community members. Highly recommend.",
    initials: "RE",
    name: "$Rescue",
    role: "Assistant DEV · Growth Manager",
  },
];

function Testimonials() {
  return (
    <section className="section section--b" id="reviews">
      <div className="section__inner">
        <div className="section__label reveal">05 — The Word</div>
        <h2 className="section__title reveal delay-1">
          Client <em>Reviews</em>
        </h2>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div
              className="testi-card reveal"
              key={t.name}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="testi-card__stars">{t.stars}</div>
              <p className="testi-card__text">"{t.text}"</p>
              <div className="testi-card__author">
                <div className="testi-card__avatar">{t.initials}</div>
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
