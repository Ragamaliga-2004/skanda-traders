import { productCategories } from '../data/products';

export default function Hero() {
  const selectProductCategory = (categoryId) => {
    window.dispatchEvent(new CustomEvent('skanda:select-product-category', { detail: categoryId }));
  };

  return (
    <section id="home" className="hero">
      <div className="hero-map" aria-hidden="true">
        <svg viewBox="0 0 520 360" role="img">
          <path className="map-line" d="M35 178 C115 112 160 219 250 144 S385 95 485 170" />
          <path className="map-line faint" d="M78 245 C158 198 213 263 302 210 S414 189 498 244" />
          <path className="route-line-svg" d="M307 207 C352 180 398 154 465 120" />
          <circle className="india-dot" cx="307" cy="207" r="5" />
          <circle className="market-dot" cx="465" cy="120" r="4" />
        </svg>
      </div>

      <div className="container hero-grid">
        <div className="hero-copy-block reveal">
          <div className="eyebrow"><span /> INDIAN AGRICULTURAL TRADE</div>
          <div className="hero-kicker">PUDUCHERRY · INDIA <span /> EST. 2026</div>
          <h1>
            FROM INDIA'S
            <br />
            FARMS
            <br />
            TO <em>GLOBAL MARKETS.</em>
          </h1>
          <p>Connecting carefully sourced Indian agricultural and traditional products with markets worldwide.</p>
          <div className="hero-buttons" aria-label="Primary actions">
            <a className="gold-button" href="#products">
              Explore Products
            </a>
            <a className="outline-button" href="#contact">
              Start A Trade Enquiry
            </a>
          </div>
        </div>

        <div className="hero-art reveal" aria-label="Indian agriculture and global trade visual">
          <img
            className="hero-photo hero-photo-main"
            src="/src/assets/hero-banner-rice.jpg"
            alt="Indian agricultural field"
          />
          <img
            className="hero-photo hero-photo-cargo"
            src="/src/assets/vegies-hero.png"
            alt="Cargo containers prepared for trade"
          />
          <img
            className="hero-photo hero-photo-produce"
            src="/src/assets/hero-banner-oil.jpg"
            alt="Coconut produce"
          />
          <div className="hero-coordinate">PUDUCHERRY / INDIA</div>
        </div>
      </div>

      <div className="container hero-strip" aria-label="Product categories">
        {productCategories.map((category) => (
          <a
            key={category.id}
            href="#products"
            onClick={() => selectProductCategory(category.id)}
          >
            {category.label}
          </a>
        ))}
      </div>

    </section>
  );
}
