"use client";

import * as React from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
}

export function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  React.useEffect(() => {
    if (!isInView) return;

    const start = 0;
    const end = value;
    const duration = 1500; // 1.5 seconds count-up
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentCount = Math.floor(easeProgress * (end - start) + start);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
