import { storyProducts } from '../data/products';

export default function QualityStory() {
  return (
    <section className="section quality-story">
      <div className="container">
        <div className="quality-header">
          <div className="eyebrow dark"><span /> PRODUCT STORY</div>
          <h2>
            INDIA'S HARVEST,
            <br />
            READY FOR <em>THE WORLD.</em>
          </h2>
        </div>

        <div className="story-grid">
          {storyProducts.map((item) => (
            <article key={item.title} className="story-card reveal">
              <img src={item.image} alt={`${item.title} product story`} loading="lazy" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
