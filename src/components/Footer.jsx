import logo from '../assets/skanda-traders-logo.jpg';
import { productCategories } from '../data/products';

const footerLinks = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Products', 'products'],
  ['Global Trade', 'global-trade'],
  ['Process', 'process'],
  ['Contact', 'contact'],
];

export default function Footer() {
  const selectProductCategory = (categoryId) => {
    window.dispatchEvent(new CustomEvent('skanda:select-product-category', { detail: categoryId }));
  };

  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img className="footer-logo" src={logo} alt="Skanda Traders logo" />
          <h2>SKANDA TRADERS</h2>
          <p>From India to the World - Trusted Trade, Quality Delivered.</p>
        </div>

        <div>
          <h4>Navigation</h4>
          {footerLinks.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>

        <div>
          <h4>Products</h4>
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

        <div>
          <h4>Contact</h4>
          <span>Puducherry, India</span>
          <a href="tel:+918903004756">+91 89030 04756</a>
          <a href="mailto:skandatraderspondy@gmail.com">skandatraderspondy@gmail.com</a>
          <span>GSTIN: 34VBTPS7272D1ZM</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>(c) 2026 Skanda Traders. All Rights Reserved.</span>
        <span>From India's Farms to Markets Worldwide.</span>
      </div>
    </footer>
  );
}
