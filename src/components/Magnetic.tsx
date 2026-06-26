"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: ReactNode;
  range?: number; // Strength of the pull (multiplier)
  speed?: number; // Transition duration in seconds
}

export default function Magnetic({ children, range = 0.3, speed = 0.8 }: MagneticProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    // quickTo is highly optimized for high-frequency updates like mousemove
    const xTo = gsap.quickTo(element, "x", { duration: speed, ease: "power3.out" });
    const yTo = gsap.quickTo(element, "y", { duration: speed, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      
      const moveX = (clientX - centerX) * range;
      const moveY = (clientY - centerY) * range;

      xTo(moveX);
      yTo(moveY);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [range, speed]);

  return (
    <div ref={container} className="inline-block">
      {children}
    </div>
  );
}
