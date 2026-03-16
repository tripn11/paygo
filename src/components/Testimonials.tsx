import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'Small Business Owner',
      text: 'Paygo has completely transformed how I run my shop. Reliable energy means more business hours and more income.',
      img: 'https://picsum.photos/seed/person1/100/100'
    },
    {
      name: 'Jane Smith',
      role: 'Farmer',
      text: 'The solar irrigation system from Paygo has doubled my crop yield. The payment plan is very affordable.',
      img: 'https://picsum.photos/seed/person2/100/100'
    },
    {
      name: 'Michael Brown',
      role: 'Teacher',
      text: 'My children can now study at night without any interruptions. It has made a huge difference in their education.',
      img: 'https://picsum.photos/seed/person3/100/100'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Stories of Light</h2>
          <p className="testimonials-subtitle">Hear from the communities we empower.</p>
        </div>
        <div className="testimonials-scroll-container">
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f4ca25" color="#f4ca25" />)}
                </div>
                <p className="testimonial-text">"{item.text}"</p>
                <div className="testimonial-user">
                  <img src={item.img} alt={item.name} className="testimonial-avatar" referrerPolicy="no-referrer" />
                  <div className="testimonial-user-info">
                    <h4 className="testimonial-name">{item.name}</h4>
                    <p className="testimonial-role">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
