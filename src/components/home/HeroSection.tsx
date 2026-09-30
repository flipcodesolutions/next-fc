'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Layers,
  Cloud,
  Zap,
  Smartphone,
  CheckCircle2,
  Sparkles,
  FileCode,
  Box,
  Terminal,
  ShieldCheck,
  Calendar,
  Laptop,
  Smile,
  Globe2,
} from 'lucide-react';

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<'ts' | 'go'>('ts');

  return (
    <section
      className="relative bg-[#202323] text-white min-h-screen lg:h-screen flex items-center justify-center pt-28 pb-16 lg:pt-24 lg:pb-0 overflow-hidden"
      id="home"
    >
      {/* 1. Base Criss-Cross Pattern (Diagonal Crosses + Grid) */}
      <div className="absolute inset-0 bg-cross-pattern-dark pointer-events-none"></div>

      {/* 2. Additional Subtle Crosshair Plus-Grid Layer */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255, 102, 0, 0.25) 1.5px, transparent 1.5px),
            linear-gradient(45deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px, 24px 24px, 24px 24px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
        }}
      ></div>

      {/* 3. Top-Right Brand Orange Radial Glow Blob */}
      <div className="absolute -top-24 right-0 w-[650px] h-[650px] bg-gradient-to-br from-[#FF6600]/22 via-[#FF6600]/6 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* 4. Bottom-Left Subtle Ambient Glow Blob */}
      <div className="absolute -bottom-24 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-[#38BDF8]/12 via-[#FF6600]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      {/* 5. Center Radial Fade Overlay for High Contrast Legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#202323]/40 via-transparent to-[#202323]/80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================
              LEFT COLUMN: HERO CONTENT & METRICS (7 Cols)
          ======================================================== */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge with Cross Accent */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-slate-200 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6600] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6600]"></span>
              </span>
              <span>Next-Gen Enterprise Engineering Partner</span>
              <span className="text-slate-500">✕</span>
              <span className="text-[#FF6600] font-mono text-[11px]">Flipcode Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-extrabold font-heading tracking-tight leading-[1.08] text-white">
              We Build <span className="text-[#FF6600]">Digital Solutions</span> That Help Your Business <span className="text-[#FF6600]">Grow</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              Flipcode Solutions helps startups, SMEs, and growing enterprises build reliable, scalable, and production-ready web, mobile, SaaS, and custom software solutions.
            </p>

            {/* CTA Buttons Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF6600] hover:bg-[#E85C00] text-white text-base font-bold transition-all shadow-lg shadow-[#FF6600]/30 hover:shadow-[#FF6600]/45 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/our-work"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white text-base font-semibold border border-white/15 transition-all hover:border-white/30 hover:-translate-y-0.5"
              >
                <Layers className="w-4 h-4 text-[#FF6600]" />
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Trust Metrics Strip */}
            <div className="pt-7 border-t border-white/10 grid grid-cols-3 gap-4">
              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                  Sep 2023
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  Founded in Gujarat
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-[#FF6600]">
                  70+
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  Projects Delivered
                </div>
              </div>

              <div className="space-y-0.5">
                <div className="text-xl sm:text-2xl font-extrabold font-heading text-[#FF6600]">
                  70+
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  Happy Clients
                </div>
              </div>
            </div>

          </div>

          {/* ========================================================
              RIGHT COLUMN: INTERACTIVE TECH IDE & METRIC CARDS (5 Cols)
          ======================================================== */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Connecting Circuits SVG Overlay */}
              <svg
                className="absolute -inset-6 w-[calc(100%+48px)] h-[calc(100%+48px)] pointer-events-none z-0 overflow-visible opacity-80"
                viewBox="0 0 680 540"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 120 L220 120 L280 180 L440 180 L500 120 L600 120"
                  stroke="url(#heroCircuitGradOrange)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <path
                  d="M120 420 L240 420 L300 360 L460 360 L520 420 L620 420"
                  stroke="url(#heroCircuitGradCyan)"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
                <circle cx="280" cy="180" r="4" fill="#FF6600" className="animate-pulse" />
                <circle cx="460" cy="360" r="4" fill="#38BDF8" className="animate-pulse" />
                <defs>
                  <linearGradient id="heroCircuitGradOrange" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6600" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#FF6600" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#FF6600" stopOpacity="0.1" />
                  </linearGradient>
                  <linearGradient id="heroCircuitGradCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Central Glassmorphic IDE Window */}
              <div className="relative z-10 rounded-2xl bg-[#2C3030]/95 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
                
                {/* Window Top Controls & Tab Header */}
                <div className="bg-[#202323] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  {/* Traffic Light Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444] inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block"></span>
                  </div>

                  {/* Interactive Tab Switchers */}
                  <div className="flex items-center gap-1 bg-[#1A1D1D] p-1 rounded-lg border border-white/10">
                    <button
                      onClick={() => setActiveTab('ts')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all ${
                        activeTab === 'ts'
                          ? 'bg-[#2C3030] text-white shadow-sm border border-white/15'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <FileCode className="w-3.5 h-3.5 text-[#FF6600]" />
                      <span>AppEngine.ts</span>
                      {activeTab === 'ts' && <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>}
                    </button>

                    <button
                      onClick={() => setActiveTab('go')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all ${
                        activeTab === 'go'
                          ? 'bg-[#2C3030] text-white shadow-sm border border-white/15'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Box className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>CloudApi.go</span>
                      {activeTab === 'go' && <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>}
                    </button>
                  </div>
                </div>

                {/* Code Editor Body */}
                <div className="p-5 font-mono text-xs leading-relaxed bg-[#202323]/90 flex gap-4 overflow-x-auto">
                  {/* Line Numbers */}
                  <div className="text-slate-600 select-none space-y-1 text-right font-mono text-[11px] pr-2 border-r border-white/10">
                    <div>01</div>
                    <div>02</div>
                    <div>03</div>
                    <div>04</div>
                    <div>05</div>
                    <div>06</div>
                    <div>07</div>
                    <div>08</div>
                  </div>

                  {/* Code Syntax Highlighting */}
                  <div className="flex-1 space-y-1 text-[12px]">
                    {activeTab === 'ts' ? (
                      <>
                        <div>
                          <span className="text-[#C084FC]">import</span> <span className="text-white">&#123;</span> <span className="text-[#FF6600] font-semibold">FlipEngine</span> <span className="text-white">&#125;</span> <span className="text-[#C084FC]">from</span> <span className="text-[#34D399]">&apos;@flipcode/core&apos;</span>;
                        </div>
                        <div className="text-slate-500 italic">
                          // Initializing Enterprise Scalable Engine
                        </div>
                        <div>
                          <span className="text-[#38BDF8]">export const</span> <span className="text-[#FBBF24]">solution</span> <span className="text-white">=</span> <span className="text-[#C084FC]">new</span> <span className="text-[#FF6600]">FlipEngine</span><span className="text-white">(&#123;</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-[#93C5FD]">scale:</span> <span className="text-[#34D399]">&apos;Global Multi-Cloud&apos;</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-[#93C5FD]">uptime:</span> <span className="text-[#F43F5E]">99.99</span>, <span className="text-[#93C5FD]">security:</span> <span className="text-[#34D399]">&apos;Zero-Trust&apos;</span>,
                        </div>
                        <div className="pl-4">
                          <span className="text-[#93C5FD]">speed:</span> <span className="text-[#38BDF8]">&apos;&lt; 24ms Realtime&apos;</span>
                        </div>
                        <div>
                          <span className="text-white">&#125;);</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[#FBBF24]">solution</span>.<span className="text-[#60A5FA]">deployToProduction</span><span className="text-white">();</span> <span className="text-[#34D399] font-sans font-semibold">// 🚀 Live in Production</span>
                          <span className="w-2 h-4 bg-[#FF6600] inline-block animate-pulse"></span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <span className="text-[#C084FC]">package</span> <span className="text-[#FBBF24]">main</span>
                        </div>
                        <div>
                          <span className="text-[#C084FC]">import</span> <span className="text-[#34D399]">&quot;github.com/flipcode/cloud&quot;</span>
                        </div>
                        <div className="text-slate-500 italic">
                          // Multi-Region Edge Mesh Controller
                        </div>
                        <div>
                          <span className="text-[#C084FC]">func</span> <span className="text-[#60A5FA]">main</span><span className="text-white">() &#123;</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-[#FBBF24]">mesh</span> <span className="text-white">:=</span> <span className="text-[#FF6600]">cloud</span>.<span className="text-[#60A5FA]">NewMesh</span><span className="text-white">(&quot;global-cluster&quot;)</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-[#FBBF24]">mesh</span>.<span className="text-[#60A5FA]">ScaleAuto</span><span className="text-white">(1000000)</span>
                        </div>
                        <div className="pl-4">
                          <span className="text-[#FBBF24]">mesh</span>.<span className="text-[#60A5FA]">Deploy</span><span className="text-white">()</span> <span className="text-[#38BDF8] font-sans font-semibold">// ⚡ Peak Performance</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-white">&#125;</span>
                          <span className="w-2 h-4 bg-[#38BDF8] inline-block animate-pulse"></span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Window Status Footer Bar */}
                <div className="bg-[#202323] px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-medium">Production Ready • All systems operational</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] flex items-center gap-1">
                    <Zap className="w-3 h-3 text-[#FF6600]" />
                    <span>v2.4.0 Live</span>
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Cloud Scalability (Top Right) */}
              <div className="absolute -top-6 -right-6 z-20 p-3 rounded-xl bg-[#2C3030]/95 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-[#38BDF8] flex items-center justify-center">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Cloud Scalability</div>
                  <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>✦ 99.99% Guaranteed</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Ultra-Fast APIs (Bottom Left) */}
              <div className="absolute -bottom-6 -left-6 z-20 p-3 rounded-xl bg-[#2C3030]/95 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="w-9 h-9 rounded-lg bg-[#FF6600]/20 text-[#FF6600] flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Ultra-Fast APIs</div>
                  <div className="text-[10px] text-slate-300">
                    Response: <strong className="text-[#FF6600] font-mono">18ms</strong>
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Web, Mobile & Cloud (Bottom Right) */}
              <div className="absolute -bottom-8 right-8 z-20 hidden sm:flex items-center gap-3 p-3 rounded-xl bg-[#2C3030]/95 backdrop-blur-xl border border-white/10 shadow-xl">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Web, Mobile &amp; Cloud</div>
                  <div className="text-[10px] text-slate-400">iOS • Android • React • Next</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
