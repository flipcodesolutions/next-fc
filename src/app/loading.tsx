import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#202323]">
      {/* Ambient Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FF6600]/12 rounded-full blur-3xl pointer-events-none"></div>

      {/* Spinner & Brand Container */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Minimal Geometric Dual-Ring Spinner (Vercel/Stripe style) */}
        <div className="relative w-16 h-16 flex items-center justify-center mb-5">
          {/* Outer Track */}
          <div className="absolute inset-0 rounded-full border border-white/[0.07]"></div>

          {/* Primary Gradient Sweep Ring */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin"
            style={{ animationDuration: '0.85s' }}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="spinner-grad-route" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6600" stopOpacity="1" />
                <stop offset="60%" stopColor="#FF8533" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="url(#spinner-grad-route)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="60 130"
            />
          </svg>

          {/* Inner Counter-Rotating Orbit Ring */}
          <svg
            className="w-9 h-9 animate-spin"
            style={{ animationDuration: '1.4s', animationDirection: 'reverse' }}
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="18"
              cy="18"
              r="16"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1.5"
              strokeDasharray="16 35"
              strokeLinecap="round"
            />
          </svg>

          {/* Central Glowing Pulse Core */}
          <div className="absolute w-2.5 h-2.5 rounded-full bg-[#FF6600] shadow-[0_0_12px_#FF6600] animate-pulse"></div>
        </div>

        {/* Minimal Monospace Typography */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[11px] font-semibold tracking-[0.35em] text-white/90 uppercase pl-1 font-mono">
            FLIPCODE SOLUTIONS PRIVATE LIMITED
          </span>
          <span className="text-[9px] tracking-[0.2em] text-white/40 uppercase font-mono">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
}
