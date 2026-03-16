import React from 'react';
import { Globe, ShieldCheck, Zap, Heart, Award } from 'lucide-react';

export default function Partners() {
  const partners = [
    { icon: <Globe size={24} />, name: 'Global Energy' },
    { icon: <ShieldCheck size={24} />, name: 'Secure Power' },
    { icon: <Zap size={24} />, name: 'Flash Grid' },
    { icon: <Heart size={24} />, name: 'Eco Life' },
    { icon: <Award size={24} />, name: 'Trust Solar' },
  ];

  return (
    <section className="partners">
      <div className="container">
        <p className="partners-label">Trusted by Global Partners</p>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item">
              <div className="partner-icon">{partner.icon}</div>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
