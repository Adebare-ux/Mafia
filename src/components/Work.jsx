const PROJECTS = [
  {
    num: "01",
    title: "$WOPEN",
    role: "Growth Strategist / Head Raider",
    tags: ["Telegram", "Raids", "Growth"],
    link: "https://t.me/+kzFS2Vz_VXY5MmYx",
  },
  {
    num: "02",
    title: "Copper Penguin",
    role: "Growth Manager",
    tags: ["Growth", "Raids", "Moderation"],
    link: "https://t.me/copperpenguinportal",
  },
  {
    num: "03",
    title: "Baby Dolphin Knight",
    role: "Project Manager",
    tags: ["Operations", "Marketing", "Community"],
    link: "https://t.me/TheBabyDolphinKnight",
  },
];

function Work() {
  return (
    <section className="section section--b" id="work">
      <div className="section__inner">
        <div className="section__label reveal">03 — Case Files</div>
        <h2 className="section__title reveal delay-1">
          Selected <em>Work</em>
        </h2>
        <div className="work__list">
          {PROJECTS.map((p, i) => (
            <div
              className="work-item reveal"
              key={p.num}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="work-item__index">{p.num}</div>
              <div>
                <div className="work-item__title">{p.title}</div>
                <div className="work-item__role">{p.role}</div>
              </div>
              <div className="work-item__tags">
                {p.tags.map((t) => (
                  <span className="work-item__tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="work-item__link"
              >
                View Project ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
