"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Partners() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const partners = [
    { img: "/media/allon.jpeg", name: "All on" },
    { img: "/media/usaid.png", name: "USAID" },
    { img: "/media/allon.jpeg", name: "Partner 3" },
    { img: "/media/usaid.png", name: "Partner 4" },
    { img: "/media/allon.jpeg", name: "Partner 5" },
    { img: "/media/usaid.png", name: "Partner 6" },
  ];

  // Triple the data to create a seamless infinite loop (Left, Middle, Right)
  const loopPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    let isDragging = false;
    let startX = 0;
    let scrollLeftAtStart = 0;
    const SPEED = 1; // Pixels per frame

    const handleInfiniteLoop = () => {
      // One-third of the total scrollable width
      const segmentWidth = container.scrollWidth / 3;

      // If we scroll into the last third, jump back to the middle third
      if (container.scrollLeft >= segmentWidth * 2) {
        container.scrollLeft -= segmentWidth;
      } 
      // If we scroll into the first third, jump forward to the middle third
      else if (container.scrollLeft <= 0) {
        container.scrollLeft += segmentWidth;
      }
    };

    const update = () => {
      if (!isDragging) {
        container.scrollLeft += SPEED;
        handleInfiniteLoop();
      }
      rafId = requestAnimationFrame(update);
    };

    // --- Interaction Handlers ---
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
      const walk = (x - startX) * 1.2; // Drag sensitivity
      container.scrollLeft = scrollLeftAtStart - walk;
      handleInfiniteLoop(); // Check loop during drag
    };

    const stopDragging = () => {
      isDragging = false;
      container.classList.remove("dragging");
    };

    // --- Initial Setup ---
    // Wait for the browser to render so scrollWidth is accurate
    const initScroll = () => {
      container.scrollLeft = container.scrollWidth / 3;
      rafId = requestAnimationFrame(update);
    };

    const timeout = setTimeout(initScroll, 50);

    container.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDragging);
    
    // Touch support
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

    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", stopDragging);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
      container.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <section className="partners">
      <div className="container">
        <p className="partners-label">Trusted by Global Partners</p>
        <div className="partners-carousel" ref={containerRef}>
          <div className="partners-track">
            {loopPartners.map((partner, index) => (
              <div key={index} className="partner-item">
                <Image
                  src={partner.img}
                  alt={partner.name}
                  className="partner-logo"
                  width={150}
                  height={100}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}