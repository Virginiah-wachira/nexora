export default function LiveBackground() {
  return (
    <div
      className="nexora-live-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* GRID */}
      <div className="nexora-grid absolute inset-0" />

      {/* LIVE BLUE / CYAN RIBBONS */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1600 1000"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="siteRibbonA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
            <stop offset="34%" stopColor="#2563EB" stopOpacity="0.82" />
            <stop offset="60%" stopColor="#00E5FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="siteRibbonB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
            <stop offset="48%" stopColor="#0EA5E9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
          </linearGradient>

          <filter id="siteGlow">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className="nexora-site-ribbon-a"
          d="M-240 760 C120 450 390 440 690 600 C970 748 1210 650 1810 210"
          stroke="url(#siteRibbonA)"
          strokeWidth="34"
          strokeLinecap="round"
          filter="url(#siteGlow)"
        />

        <path
          className="nexora-site-ribbon-b"
          d="M1080 -170 C1190 100 1060 300 980 470 C900 665 1030 800 1780 930"
          stroke="url(#siteRibbonB)"
          strokeWidth="25"
          strokeLinecap="round"
          filter="url(#siteGlow)"
        />

        <path
          className="nexora-site-ribbon-c"
          d="M1450 -140 C1270 130 1220 330 1320 500 C1430 685 1605 635 1780 520"
          stroke="#22D3EE"
          strokeOpacity="0.48"
          strokeWidth="11"
          strokeLinecap="round"
          filter="url(#siteGlow)"
        />
      </svg>

      {/* MOVING GLOWS */}
      <div className="nexora-site-glow-a absolute -left-[180px] top-[4%] h-[680px] w-[680px] rounded-full bg-blue-600/30 blur-[170px]" />

      <div className="nexora-site-glow-b absolute right-[-220px] top-[30%] h-[720px] w-[720px] rounded-full bg-cyan-400/20 blur-[185px]" />

      <div className="nexora-site-glow-c absolute bottom-[-260px] left-[22%] h-[760px] w-[760px] rounded-full bg-indigo-600/25 blur-[200px]" />

      {/* DEPTH */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,7,17,0.18)_55%,rgba(2,7,17,0.72)_100%)]" />
    </div>
  );
}