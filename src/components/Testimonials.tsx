"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  img: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mr. Luke Jona",
    role: "Trader in Igwuruta",
    text: "Wow, this solar system is like a miracle. The cost savings is enormous..",
    img: "/media/testimonial-1.jpg",
  },
  {
    name: "Mr. Philip David",
    role: "Hair Stylist in Atali Community",
    text: "I never believed I can run my barber's shop on solar power...",
    img: "/media/testimonial-2.jpg",
  },
  {
    name: "Mrs. Adimaboa Mary",
    role: "Business Owner, Port Harcourt",
    text: "The solar system has really helped my business...",
    img: "/media/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const loopData = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeftAtStart = 0;
    let intervalId: NodeJS.Timeout;

    const getScrollAmount = () => {
      const card = container.querySelector<HTMLElement>(".testimonial-card");
      if (!card) return 0;

      const gap = window.innerWidth < 768 ? 16 : 32;
      return card.offsetWidth + gap;
    };

    const handleInfiniteLoop = () => {
      const segmentWidth = container.scrollWidth / 3;

      if (container.scrollLeft >= segmentWidth * 2) {
        container.scrollLeft -= segmentWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += segmentWidth;
      }
    };

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (isDragging) return;

        const scrollAmount = getScrollAmount();

        container.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });

        // 🔥 Fix loop AFTER movement
        setTimeout(() => {
          handleInfiniteLoop();
        }, 400);
      }, 4000);
    };

    // --- DRAG LOGIC (same as partners) ---
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeftAtStart = container.scrollLeft;
      container.classList.add("dragging");
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();

      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.2;

      container.scrollLeft = scrollLeftAtStart - walk;

      handleInfiniteLoop(); // 🔥 critical
    };

    const stopDragging = () => {
      isDragging = false;
      container.classList.remove("dragging");
    };

    // --- TOUCH ---
    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeftAtStart = container.scrollLeft;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;

      const x = e.touches[0].pageX - container.offsetLeft;
      container.scrollLeft = scrollLeftAtStart - (x - startX);

      handleInfiniteLoop();
    };

    // --- INIT ---
    const init = () => {
      container.scrollLeft = container.scrollWidth / 3;
      startAutoScroll();
    };

    const timeout = setTimeout(init, 50);

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDragging);

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", stopDragging);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalId);

      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);

      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Testimonials</h2>
          <p className="testimonials-subtitle">
            Hear from the people we empower.
          </p>
        </div>

        <div className="testimonials-carousel" ref={containerRef}>
          <div className="testimonials-track">
            {loopData.map((item, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f4ca25" color="#f4ca25" />
                  ))}
                </div>

                <p className="testimonial-text">"{item.text}"</p>

                <div className="testimonial-user">
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
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