const TICKER_ITEMS = [
  "CRYPTO MAFIA",
  "WEB3 SYNDICATE",
  "UNDERGROUND OPS",
  "BLOCKCHAIN WARFARE",
  "COMMUNITY RAIDS",
  "TELEGRAM CONTROL",
  "ALPHA MOVES",
  "FULL DOMINANCE",
];

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span className="ticker__item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
