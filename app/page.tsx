"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";


export default function Home() {

  const container = useRef<HTMLDivElement>(null);


  const {
    scrollYProgress
  } = useScroll({
    target: container,
    offset: [
      "start start",
      "end end",
    ],
  });


  // 背景变化
  const background = useTransform(
    scrollYProgress,
    [
      0,
      0.25,
      0.5,
      0.75,
      1,
    ],
    [
      "#00131f", // deep ocean
      "#d8d0bd", // plain
      "#8c9198", // mountain
      "#8ec8ef", // sky
      "#f8f7f2", // final
    ]
  );


  // 中心物体上升
  const y = useTransform(
    scrollYProgress,
    [
      0,
      1,
    ],
    [
      120,
      -120,
    ]
  );


  // 圆形变化
  const scale = useTransform(
    scrollYProgress,
    [
      0,
      0.5,
      1,
    ],
    [
      1,
      1.4,
      0.5,
    ]
  );


  // 边框透明度
  const borderOpacity = useTransform(
    scrollYProgress,
    [
      0,
      0.7,
    ],
    [
      0.5,
      0,
    ]
  );


  // 最终文字出现
  const logoOpacity = useTransform(
    scrollYProgress,
    [
      0.85,
      1,
    ],
    [
      0,
      1,
    ]
  );


  return (

    <main
      ref={container}
      className="
        h-[500vh]
        relative
      "
    >

      <motion.section
        style={{
          background,
        }}

        className="
          fixed
          inset-0
          flex
          items-center
          justify-center
        "
      >


        {/* 中心变化物体 */}

        <motion.div

          style={{
            y,
            scale,
            borderColor:
              useTransform(
                borderOpacity,
                (v)=>`rgba(255,255,255,${v})`
              )
          }}

          className="
            w-32
            h-32
            rounded-full
            border-2
            backdrop-blur-xl
            bg-white/10
          "

        />



        {/* 最终 OhHoBa */}

        <motion.div

          style={{
            opacity: logoOpacity,
          }}

          className="
            absolute
            text-6xl
            font-bold
            tracking-tight
            text-neutral-900
          "

        >

          OhHoBa


        </motion.div>



        {/* 阶段提示 */}

        <div
          className="
            absolute
            bottom-20
            text-xs
            tracking-widest
            opacity-50
          "
        >

          OHHOBA

        </div>


      </motion.section>


    </main>

  );
}
