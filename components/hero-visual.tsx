"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const x = useSpring(pointerX, { stiffness: 80, damping: 22, mass: 0.5 });
  const y = useSpring(pointerY, { stiffness: 80, damping: 22, mass: 0.5 });
  const imageX = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const imageY = useTransform(y, [-0.5, 0.5], [-5, 5]);
  const imageScale = useTransform(x, [-0.5, 0.5], [1.015, 1.025]);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!ref.current || event.pointerType === "touch") return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div className="hero-art-work">
      <div className="hero-art-frame">
        <div className="hero-art-label" aria-hidden="true">
          <span>UNKNOWN SEED</span>
          <span>001</span>
        </div>
        <div
          ref={ref}
          className="hero-visual"
          onPointerMove={onPointerMove}
          onPointerLeave={resetPointer}
        >
          <div className="hero-visual-frame">
            <motion.div className="hero-visual-image" style={{ x: imageX, y: imageY, scale: imageScale }}>
              <Image
                src="/images/ohhoba-unknown-seed.png"
                alt="Unknown Seed, an imagined organic object suspended in a quiet architectural landscape."
                fill
                priority
                sizes="(max-width: 620px) calc(100vw - 24px), (max-width: 1200px) 94vw, 88vw"
              />
            </motion.div>
          </div>
        </div>
        <div className="hero-art-caption" aria-hidden="true">
          <span>OBSERVE / IMAGINE / TOGETHER</span>
          <span>COLLECTION 001</span>
        </div>
      </div>
    </div>
  );
}
