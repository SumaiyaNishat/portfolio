"use client";

import React, { useRef, useState } from "react";
import { Slider, Button } from "@heroui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { Terminal, RotateCw } from "lucide-react";

export default function Playground() {
  const container = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [stagger, setStagger] = useState(0.04);
  const [rotation, setRotation] = useState(180);
  const [scale, setScale] = useState(0.6);
  const [ease, setEase] = useState("power3.out");

  const { contextSafe } = useGSAP({ scope: container });

  const triggerAnimation = contextSafe(() => {
    if (!gridRef.current) return;
    const boxes = gridRef.current.children;
    
    // Animate grid elements in a yoyo stagger
    gsap.killTweensOf(boxes);
    gsap.fromTo(
      boxes,
      { scale: 1, rotation: 0, opacity: 0.9 },
      {
        scale: scale,
        rotation: rotation,
        opacity: 0.5,
        duration: 1,
        ease: ease,
        stagger: {
          grid: [6, 6],
          from: "center",
          amount: stagger * boxes.length * 0.1,
        },
        yoyo: true,
        repeat: 1,
      }
    );
  });

  return (
    <section id="playground" ref={container} className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-900/60">
      <div className="mb-16 text-center sm:text-left">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2 block animate-pulse"
        >
          Developer Laboratory
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-bold text-white select-none"
        >
          Interactive Playground
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Controls Column */}
        <div className="w-full lg:w-[45%] flex flex-col justify-between p-8 rounded-3xl bg-zinc-950/40 border border-zinc-900/60 backdrop-blur-sm">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-5 h-5 text-purple-450" />
              <h3 className="text-xl font-bold text-white select-none">GSAP Engine Controller</h3>
            </div>
            
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed select-none">
              Adjust parameters below to trigger a coordinate-based stagger animation on the canvas grid when hovered or clicked.
            </p>

            <div className="space-y-6">
              {/* Stagger Slider */}
              <Slider
                label="Stagger Speed"
                size="sm"
                step={0.01}
                maxValue={0.15}
                minValue={0.01}
                value={stagger}
                onChange={(v) => setStagger(v as number)}
                className="max-w-md text-zinc-350"
              />

              {/* Rotation Slider */}
              <Slider
                label="Rotation Angle"
                size="sm"
                step={45}
                maxValue={360}
                minValue={0}
                value={rotation}
                onChange={(v) => setRotation(v as number)}
                className="max-w-md text-zinc-350"
              />

              {/* Scale Slider */}
              <Slider
                label="Scale Compression"
                size="sm"
                step={0.1}
                maxValue={1.5}
                minValue={0.2}
                value={scale}
                onChange={(v) => setScale(v as number)}
                className="max-w-md text-zinc-350"
              />

              {/* Ease Function Select */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-zinc-400">Easing Curve</label>
                <select
                  value={ease}
                  onChange={(e) => setEase(e.target.value)}
                  className="bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-zinc-700 transition"
                >
                  <option value="power3.out">Power 3 Out (Fluid)</option>
                  <option value="back.out(2)">Back Out (Overshoot)</option>
                  <option value="bounce.out">Bounce Out (Elastic)</option>
                  <option value="circ.out">Circular Out (Accelerating)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-900/60">
            <Button
              onPress={triggerAnimation}
              className="w-full bg-white text-black font-semibold py-6 rounded-full hover:bg-zinc-200 flex items-center justify-center gap-2 transition duration-200"
            >
              <RotateCw className="w-4 h-4 animate-spin-slow" />
              Animate Canvas Grid
            </Button>
          </div>
        </div>

        {/* Canvas Column */}
        <div className="w-full lg:w-[55%] flex items-center justify-center p-8 rounded-3xl bg-zinc-950 border border-zinc-900/40 min-h-[350px] sm:min-h-[450px]">
          {/* 6x6 Grid of glowing boxes */}
          <div
            ref={gridRef}
            className="grid grid-cols-6 gap-3 sm:gap-4 p-6 border border-zinc-850 rounded-2xl bg-zinc-900/10"
          >
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                onMouseEnter={triggerAnimation}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-850 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.5)] transition hover:border-zinc-550"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
