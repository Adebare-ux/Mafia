const ABOUT_TAGS = [
  "Telegram",
  "Web3",
  "Raids",
  "Moderation",
  "Growth",
  "Africa",
  "KOL Strategy",
  "Giveaways",
  "Content",
];

function About() {
  return (
    <section className="section section--b" id="about">
      <div className="section__inner">
        <div className="about__grid">
          <div className="about__portrait-wrap reveal">
            <div className="about__portrait">
              <img
                src="/profile.jpg"
                alt="Crypto Mafia"
                className="about__portrait-img"
              />
            </div>
            <div className="about__portrait-frame" />
            <div className="about__badge">
              <div className="about__badge-num">4+</div>
              <div className="about__badge-label">
                Years In
                <br />
                The Game
              </div>
            </div>
          </div>
          <div className="about__body">
            <div className="section__label reveal">01 — The Mafia</div>
            <h2 className="section__title reveal delay-1">
              I Build <em>Empires</em>
              <br />
              That Thrive
            </h2>
            <blockquote className="about__quote reveal delay-2">
              "The streets respect results. I don't just grow , I dominate."
            </blockquote>
            <p className="reveal delay-3">
              I'm <strong>Crypto Mafia</strong> a Telegram Growth Manager, Web3
              community architect, Head Raider | Marketing Execution Lead, who
              turns ghost towns into thriving ecosystems. Every project I touch
              becomes a movement.
            </p>
            <p className="reveal delay-3">
              From early-stage stealth launches to full-scale ecosystem
              management, I operate deep inside the{" "}
              <strong>African Web3 frontier</strong> — the most explosive growth
              market in crypto today.
            </p>
            <div className="about__tags reveal delay-4">
              {ABOUT_TAGS.map((t) => (
                <span className="about__tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
