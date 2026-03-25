"use client";

import { useEffect } from "react";

export default function Solutions() {

  const solutions = [
  {
    title: 'Commercial Solar',
    desc: 'Reliable solar power systems designed to reduce energy costs and keep businesses running without interruptions.',
    image: 'media/commercial-solution.jpg',
    link: 'https://wa.me/09121111163'
  },
  {
    title: 'Residential Solar',
    desc: 'Flexible pay-as-you-go solar solutions that give homes and communities access to clean, dependable electricity.',
    image: 'media/residential-solution.jpeg',
    link: 'https://wa.me/09121111163'
  },
  {
    title: 'Maintenance',
    desc: 'Continuous monitoring and expert servicing to ensure your solar system performs efficiently for years.',
    image: 'media/maintenance.jpeg',
    link: 'https://wa.me/09121111163'
  },
  {
    title: 'Electric Mobility',
    desc: 'Clean transportation powered by renewable energy, supporting the shift to sustainable mobility.',
    image: 'media/electric-vehicle.jpg',
    link: 'https://enerplazevs.com'
  }
];


  useEffect(() => {
    const cards = document.querySelectorAll(".solution-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.6
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="solutions section-padding" id="solutions">
      <div className="container">

        <div className="solutions-header">
          <h2 className="solutions-title">Our Solutions</h2>
          <p className="solutions-subtitle">
            Comprehensive energy services designed for impact.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="solution-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="solution-card-overlay"></div>
              <div className="solution-card-content">

                <h3 className="solution-card-title">
                  {item.title}
                </h3>

                <div className="solution-card-extra-content">
                  <p className="solution-card-desc">
                    {item.desc}
                  </p>

                  <a
                    className="solution-learn-more"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}


