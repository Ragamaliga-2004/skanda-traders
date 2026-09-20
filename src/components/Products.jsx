import { useEffect, useMemo, useState } from 'react';
import { productCategories } from '../data/products';

export default function Products() {
  const [activeId, setActiveId] = useState(productCategories[0].id);
  const active = useMemo(
    () => productCategories.find((category) => category.id === activeId) || productCategories[0],
    [activeId]
  );

  useEffect(() => {
    const selectCategory = (event) => {
      const categoryId = event.detail;

      if (productCategories.some((category) => category.id === categoryId)) {
        setActiveId(categoryId);
      }
    };

    window.addEventListener('skanda:select-product-category', selectCategory);
    return () => window.removeEventListener('skanda:select-product-category', selectCategory);
  }, []);

  return (
    <section id="products" className="section products-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow dark"><span /> SIGNATURE PRODUCTS</div>
            <h2>
              AN IMMERSIVE
              <br />
              PRODUCT <em>EXPLORER.</em>
            </h2>
          </div>
          <p>Four focused categories, presented for clear B2B conversations without unnecessary claims.</p>
        </div>

        <div className="product-explorer">
          <div className="category-tabs" role="tablist" aria-label="Product categories">
            {productCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={active.id === category.id}
                className={active.id === category.id ? 'active' : ''}
                onClick={() => setActiveId(category.id)}
              >
                <span>{category.number}</span>
                {category.label}
              </button>
            ))}
          </div>

          <article className="product-stage" key={active.id}>
            <div className="product-image-wrap">
              <img src={active.image} alt={`${active.label} products`} loading="lazy" />
              <span>{active.eyebrow}</span>
            </div>
            <div className="product-details">
              <small>{active.number}</small>
              <h3>{active.label}</h3>
              <p>{active.description}</p>
              <ul>
                {active.products.map((product) => (
                  <li key={product}>{product}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
