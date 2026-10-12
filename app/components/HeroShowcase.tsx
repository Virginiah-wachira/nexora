"use client";

import { useState } from "react";
import Image from "next/image";
import nexoraIcon from "../icon.png";
import nexoraWordmark from "../wordmark.png";

export default function HeroShowcase() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 14;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * -10;

    setTilt({ x, y });
  };

  return (
    <div
      className="nexora-hero-stage relative hidden min-h-[570px] lg:block"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {/* CENTRAL GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-[120px]" />

      {/* WHOLE 3D SCENE */}
      <div
        className="nexora-card-scene absolute inset-0"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        {/* BACK CARD 1 */}
        <div className="nexora-back-card nexora-back-one absolute left-[12%] top-[18%] h-[400px] w-[68%]" />

        {/* BACK CARD 2 */}
        <div className="nexora-back-card nexora-back-two absolute left-[18%] top-[22%] h-[400px] w-[68%]" />

        {/* MAIN SHOWCASE */}
        <div className="nexora-main-showcase absolute left-[23%] top-[14%] h-[430px] w-[68%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.11] via-transparent to-cyan-300/[0.05]" />

          <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.38),transparent_68%)]" />

          {/* ABSTRACT LANDSCAPE */}
          <div className="absolute inset-x-0 bottom-0 h-[150px] opacity-80">
            <svg
              viewBox="0 0 600 180"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="mountainGlow"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#020711" />
                  <stop offset="55%" stopColor="#0b1f4a" />
                  <stop offset="100%" stopColor="#020711" />
                </linearGradient>
              </defs>

              <path
                d="M0 160 L85 105 L150 138 L250 68 L330 126 L420 88 L510 138 L600 72 L600 180 L0 180 Z"
                fill="url(#mountainGlow)"
              />

              <path
                d="M120 180 C230 140 300 120 420 180"
                stroke="#2563eb"
                strokeOpacity="0.8"
                strokeWidth="5"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative flex h-full flex-col items-center justify-center pb-10">
            <Image
              src={nexoraIcon}
              alt="Nexora"
              width={88}
              height={88}
              className="h-16 w-16 object-contain"
            />

            <Image
              src={nexoraWordmark}
              alt="Nexora"
              width={240}
              height={54}
              className="mt-4 h-auto w-[200px] object-contain"
            />

            <p className="mt-4 text-[8px] uppercase tracking-[0.44em] text-slate-400">
              Ideas · Systems · Growth
            </p>
          </div>
        </div>

        {/* FLOATING CARD — WEBSITES */}
        <div className="nexora-float-card nexora-float-web absolute left-[4%] top-[17%]">
          <span className="nexora-float-icon">◎</span>

          <div>
            <p className="text-sm font-medium text-white">Websites</p>
            <p className="text-xs text-slate-400">That perform</p>
          </div>
        </div>

        {/* FLOATING CARD — MOBILE */}
        <div className="nexora-float-card nexora-float-mobile absolute right-[-2%] top-[38%]">
          <span className="nexora-float-icon">▯</span>

          <div>
            <p className="text-sm font-medium text-white">Mobile Apps</p>
            <p className="text-xs text-slate-400">For real impact</p>
          </div>
        </div>

        {/* FLOATING CARD — SYSTEMS */}
        <div className="nexora-float-card nexora-float-system absolute bottom-[10%] left-[5%]">
          <span className="nexora-float-icon">◉</span>

          <div>
            <p className="text-sm font-medium text-white">
              Custom Systems
            </p>
            <p className="text-xs text-slate-400">
              Built around you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}