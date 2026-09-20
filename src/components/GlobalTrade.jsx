export function GlobalTrade() {
  return (
    <section id="global-trade" className="global-trade">
      <div className="container global-content">
        <div className="global-copy">
          <div className="eyebrow"><span /> GLOBAL TRADE</div>
          <h2>
            FROM INDIA
            <br />
            <em>TO THE WORLD.</em>
          </h2>
          <p>Bringing Indian agricultural products closer to global markets.</p>
          <a className="gold-button" href="#contact">
            Start A Conversation
          </a>
        </div>

        <div className="world-panel" aria-label="Animated trade routes from India to global markets">
          <svg viewBox="0 0 720 430" role="img">
            <path
              className="world-shape"
              d="M85 150c28-35 80-44 127-28 39 13 62 2 98-22 41-27 83-16 112 15 28 30 62 32 105 18 45-15 84-3 106 30 21 31 16 73-10 97-31 28-71 21-113 20-52-2-72 42-121 52-49 10-78-19-117-38-43-21-87 2-128-20-48-25-81-80-59-124z"
            />
            <path
              className="world-shape faint"
              d="M159 238c50-18 89 20 126 35 44 18 84-4 123-22 45-21 81 2 126 5 48 4 82-29 113-8 21 15 15 58-13 75-42 26-97-7-143 13-54 23-89 65-147 47-44-13-68-49-122-44-39 4-78-4-101-34-22-30-6-51 38-67z"
            />
            <path className="trade-route route-one" d="M414 258 C480 212 527 162 620 126" />
            <path className="trade-route route-two" d="M414 258 C497 253 555 276 650 252" />
            <path className="trade-route route-three" d="M414 258 C341 216 281 180 190 154" />
            <circle className="india-pulse" cx="414" cy="258" r="7" />
            <circle className="route-end" cx="620" cy="126" r="5" />
            <circle className="route-end" cx="650" cy="252" r="5" />
            <circle className="route-end" cx="190" cy="154" r="5" />
          </svg>
          <div className="ship-card">
            <span>CARGO / CONTAINERS / TRADE ROUTES</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const steps = [
    ['01', 'Source', 'Identify suitable products around the requirement.'],
    ['02', 'Select', 'Review category, quantity and practical quality needs.'],
    ['03', 'Prepare', 'Coordinate packing, order details and trade communication.'],
    ['04', 'Ship', 'Move the enquiry toward dependable dispatch coordination.'],
  ];

  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark"><span /> TRADE FLOW</div>
            <h2>
              FROM SOURCE
              <br />
              TO <em>SHIPMENT.</em>
            </h2>
          </div>
          <p>Simple stages keep product conversations clear from first enquiry to dispatch planning.</p>
        </div>

        <div className="process-grid">
          {steps.map(([number, title, text]) => (
            <article key={number} className="reveal">
              <b>{number}</b>
              <span aria-hidden="true">{title.slice(0, 1)}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
