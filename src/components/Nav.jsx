import useScrolled from "../hooks/useScrolled";

const NAV_LINKS = [
  "About",
  "Services",
  "Work",
  "Results",
  "Reviews",
  "Contact",
];

function Nav() {
  const scrolled = useScrolled();
  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav__logo">
        CRYPTO<span>.</span>MAFIA
      </div>
      <ul className="nav__links">
        {NAV_LINKS.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="nav__cta">
        Hire The Mafia
      </a>
    </nav>
  );
}

export default Nav;
