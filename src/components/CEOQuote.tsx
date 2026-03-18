import { Quote } from 'lucide-react';
import Image from 'next/image';

export default function CEOQuote() {
  return (
    <section className="ceo-quote">
      <div className="container">
        <div className="ceo-quote-grid">
          <div className="ceo-image-wrapper">
            <Image
              src="/media/ceo.jpeg" 
              alt="CEO Portrait" 
              className="ceo-image"
              referrerPolicy="no-referrer"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="ceo-text-content">
            <Quote size={48} className="ceo-quote-icon" />
            <blockquote className="ceo-quote-text">
              "Millions of Nigerians deserve reliable electricity — not next decade, not next year, but today. PayGo is our answer to that urgency. We built it so that clean energy is no longer a privilege reserved for those who can afford it all at once, but a right accessible to every home, every business, every community."
            </blockquote>
            <div className="ceo-author">
              <h4 className="ceo-name">Prisca Ezuzu</h4>
              <p className="ceo-title">CEO & Founder, Enerplaz Paygo Solutions </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
