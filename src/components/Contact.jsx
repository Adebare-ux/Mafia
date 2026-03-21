const CHANNELS = [
  {
    icon: "✈",
    name: "Telegram",
    handle: "@crypto_mafia0110",
    link: "https://t.me/crypto_mafia0110",
  },
  {
    icon: "𝕏",
    name: "Twitter / X",
    handle: "@MafiaCaptain001",
    link: "https://x.com/mafiacaptain001?s=21",
  },
  {
    icon: "◈",
    name: "Discord",
    handle: "@maestrocrypt",
    link: "https://discord.com/users/maestrocrypt",
  },
];

function Contact() {
  return (
    <section className="section section--inv" id="contact">
      <div className="contact__bg-text">CONTACT</div>
      <div className="section__inner">
        <div className="section__label reveal">07 — The Meet</div>
        <h2 className="section__title reveal delay-1">
          Let's <em>Work</em>
        </h2>
        <div className="contact__layout">
          <div>
            <p className="contact__intro reveal delay-2">
              Ready to build something that dominates? Whether it's a long-term
              community management role or a precision raid campaign — the
              family is open for business.
            </p>
            <div className="contact__channels reveal delay-3">
              {CHANNELS.map((c) => (
                <a
                  href={c.link}
                  target="_blank"
                  rel="noreferrer"
                  key={c.name}
                  className="contact__channel"
                >
                  <div className="contact__channel-left">
                    <div className="contact__channel-icon">{c.icon}</div>
                    <div>
                      <div className="contact__channel-name">{c.name}</div>
                      <div className="contact__channel-handle">{c.handle}</div>
                    </div>
                  </div>
                  <span className="contact__channel-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>
          <div className="contact__cta-block reveal delay-2">
            <h3 className="contact__cta-title">
              Usually responds
              <br />
              within <em>24 hours.</em>
            </h3>
            <div className="contact__availability">
              <span className="contact__dot" />
              Available for long-term &amp; short-term projects
            </div>
            <a
              href="https://t.me/crypto_mafia0110"
              target="_blank"
              rel="noreferrer"
              className="contact__btn"
            >
              <span>Start The Conversation →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
