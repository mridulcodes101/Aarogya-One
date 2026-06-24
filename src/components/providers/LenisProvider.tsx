"use client";

import * as React from "react";
import { ReactLenis, useLenis, type LenisRef } from "lenis/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import "lenis/dist/lenis.css";

interface LenisProviderProps {
  children: React.ReactNode;
}

function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  }, []);

  return null;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = React.useRef<LenisRef>(null);

  React.useEffect(() => {
    // Drive Lenis updates using GSAP's centralized ticker loop
    const updateTicker = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };
    
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0); // Prevent frame drops and jumpiness

    return () => {
      // Clean up ticker on unmount
      gsap.ticker.remove(updateTicker);
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        autoRaf: false, // Disable default Raf; handled by GSAP Ticker
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}
