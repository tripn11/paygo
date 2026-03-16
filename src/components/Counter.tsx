"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = target / (duration / 16);

          const updateCount = () => {
            start += increment;

            if (start < target) {
              setCount(Math.floor(start));
              requestAnimationFrame(updateCount);
            } else {
              setCount(target);
            }
          };

          updateCount();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}