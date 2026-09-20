const pillars = [
  ['01', 'Quality', 'Carefully sourced products.'],
  ['02', 'Reliability', 'Consistent business coordination.'],
  ['03', 'Value', 'Competitive and practical trade.'],
  ['04', 'Partnership', 'Long-term business relationships.'],
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section why-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span /> WHY SKANDA TRADERS</div>
            <h2>
              TRADE BUILT ON
              <br />
              <em>QUALITY & TRUST.</em>
            </h2>
          </div>
          <p>A quiet, disciplined approach to sourcing, communication and supply coordination.</p>
        </div>

        <div className="why-grid">
          {pillars.map(([number, title, text]) => (
            <article key={number} className="reveal">
              <b>{number}</b>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
