import { useState } from 'react';
import { productCategories } from '../data/products';

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  quantity: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit = (event) => {
    event.preventDefault();
    const subject = `Trade enquiry from ${form.company || form.name}`;
    const body = [
      '𝗦𝗞𝗔𝗡𝗗𝗔 𝗧𝗥𝗔𝗗𝗘𝗥𝗦 𝗘𝗡𝗤𝗨𝗜𝗥𝗬',
      '────────────────────────',
      '',
      `𝗙𝘂𝗹𝗹 𝗡𝗮𝗺𝗲: ${form.name}`,
      `𝗖𝗼𝗺𝗽𝗮𝗻𝘆 𝗡𝗮𝗺𝗲: ${form.company}`,
      `𝗕𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗘𝗺𝗮𝗶𝗹: ${form.email}`,
      `𝗣𝗵𝗼𝗻𝗲: ${form.phone}`,
      `𝗣𝗿𝗼𝗱𝘂𝗰𝘁 𝗜𝗻𝘁𝗲𝗿𝗲𝘀𝘁𝗲𝗱 𝗜𝗻: ${form.product}`,
      `𝗤𝘂𝗮𝗻𝘁𝗶𝘁𝘆 / 𝗥𝗲𝗾𝘂𝗶𝗿𝗲𝗺𝗲𝗻𝘁: ${form.quantity}`,
      '',
      '𝗠𝗘𝗦𝗦𝗔𝗚𝗘',
      '────────',
      form.message,
    ].join('\n');

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=skandatraderspondy@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <div className="eyebrow dark"><span /> TRADE ENQUIRY</div>
          <h2>
            LET'S BUILD
            <br />
            A <em>TRADE CONNECTION.</em>
          </h2>
          <p>Send a product requirement or start a conversation with the Skanda Traders team.</p>

          <div className="contact-details">
            <span>
              <small>LOCATION</small>
              Puducherry, India
            </span>
            <a href="tel:+918903004756">
              <small>CALL US</small>
              +91 89030 04756
            </a>
            <a href="mailto:skandatraderspondy@gmail.com">
              <small>EMAIL US</small>
              skandatraderspondy@gmail.com
            </a>
            <a href="https://wa.me/918903004756" target="_blank" rel="noreferrer">
              <small>WHATSAPP US</small>
              https://wa.me/918903004756
            </a>
          </div>
          <p className="gst">GSTIN <b>34VBTPS7272D1ZM</b></p>
        </div>

        <form className="enquiry-form reveal" onSubmit={submit}>
          <div className="form-row">
            <label htmlFor="name">
              Full Name
              <input id="name" name="name" required value={form.name} onChange={updateField} />
            </label>
            <label htmlFor="company">
              Company Name
              <input id="company" name="company" required value={form.company} onChange={updateField} />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="email">
              Business Email
              <input id="email" name="email" required type="email" value={form.email} onChange={updateField} />
            </label>
            <label htmlFor="phone">
              Phone
              <input id="phone" name="phone" required value={form.phone} onChange={updateField} />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="product">
              Product Interested In
              <select id="product" name="product" required value={form.product} onChange={updateField}>
                <option value="" disabled>
                  Select a category
                </option>
                {productCategories.map((category) => (
                  <option key={category.id}>{category.label}</option>
                ))}
              </select>
            </label>
            <label htmlFor="quantity">
              Quantity / Requirement
              <input id="quantity" name="quantity" required value={form.quantity} onChange={updateField} />
            </label>
          </div>
          <label htmlFor="message">
            Message
            <textarea id="message" name="message" required rows="5" value={form.message} onChange={updateField} />
          </label>
          <button className="dark-button" type="submit">
            Open Email With Enquiry <span aria-hidden="true">↗</span>
          </button>
          {sent && <p className="form-message">Your email app has been opened with the enquiry details.</p>}
        </form>
      </div>
    </section>
  );
}
