import React from 'react';
import { Quote } from 'lucide-react';

export default function CEOQuote() {
  return (
    <section className="ceo-quote">
      <div className="container">
        <div className="ceo-quote-grid">
          <div className="ceo-image-wrapper">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArFgZ8vWrY5td97VSR-ptI6IQIVDfIfgd85tUfAm54qM6U7H9nYYPu7lmtYhQBbxRUYCHfC56SQUz_pABTUJ1CX51SdapibPWxWc7v8_fzSoJfdU-zYxO-o4SoqzrJPUDGhrBI_T9hAKN_kSLZmY_1L0e2-yYGGrwbQi55WX8_n-rs6U5Ef7gBBcsl4Fu9_fi-BiYjBAXruDWSn8uFloIRGcXmQfJZgzElV1y14VQ6dOHbeXmQ44aiqZwNP5ywK00nNvGc6ie8CQ" 
              alt="CEO Portrait" 
              className="ceo-image"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="ceo-text-content">
            <Quote size={48} className="ceo-quote-icon" />
            <blockquote className="ceo-quote-text">
              "Our goal is not just to sell solar panels, but to empower communities with the tools they need to build a sustainable and prosperous future."
            </blockquote>
            <div className="ceo-author">
              <h4 className="ceo-name">Sarah Jenkins</h4>
              <p className="ceo-title">CEO & Founder, Paygo Solar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
