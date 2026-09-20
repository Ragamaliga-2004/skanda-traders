export default function About() {
  const flow = ['Source', 'Select', 'Supply', 'Deliver'];

  return (
    <section id="about" className="section about-section">
      <div className="container about-grid">
        <div className="about-media reveal">
          <img
            className="about-large"
            src="/src/assets/about-rice.jpg"
            alt="Indian agricultural landscape"
            loading="lazy"
          />
          <img
            className="about-small"
            src="/src/assets/about-rice-2.jpg"
            alt="Rice grains prepared for trade"
            loading="lazy"
          />
          <div className="location-card" aria-label="Puducherry location">
            <b>INDIA</b>
            <span>Puducherry</span>
          </div>
        </div>

        <div className="about-copy reveal">
          <div className="eyebrow dark"><span /> THE SKANDA STANDARD</div>
          <h2>
            ROOTED IN INDIA.
            <br />
            CONNECTED TO <em>THE WORLD.</em>
          </h2>
          <p>
            Skanda Traders is a Puducherry-based trading company focused on sourcing and supplying
            agricultural, edible oil and traditional Indian products for markets in India and beyond.
          </p>
          <div className="trade-flow" aria-label="Trade flow">
            {flow.map((item, index) => (
              <div key={item}>
                <small>{String(index + 1).padStart(2, '0')}</small>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <a className="text-link" href="#products">
            Discover Our Product Range
          </a>
        </div>
      </div>
    </section>
  );
}
