'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import {
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react';

interface ProjectItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  industry: string;
  shortDesc: string;
  overview: string;
  challenge: string;
  requirements: string[];
  solution: string;
  keyFeatures: string[];
  techs: string[];
  process: string;
  results: string[];
  gradient: string;
}

export default function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filters = ['All', 'Web', 'Mobile', 'SaaS', 'eCommerce', 'Business Software'];

  const projects = [
    {
      id: 'smvs',
      name: 'Swaminarayan Mandir Vasna Sanstha (SMVS)',
      category: 'Web',
      categoryLabel: 'Web & Mobile Ecosystem',
      industry: 'Spiritual Organization & Community',
      shortDesc: 'A comprehensive digital platform designed to deliver spiritual teachings, organizational information, live event broadcasts, and community services globally.',
      overview: 'SMVS is an international non-profit platform serving over 250,000 devotees across 12 countries. Featuring real-time event streaming, multi-lingual publication readers, donation payment gateway integration, and volunteer management hierarchies.',
      challenge: 'Handling massive spike traffic during annual spiritual festivals while maintaining low-latency live media streaming across low-bandwidth mobile networks.',
      requirements: [
        'Global CDN caching with adaptive bitrate live video streaming.',
        'Multi-lingual e-publication reader with offline caching.',
        'Automated donation tax receipts generation.',
        'Cross-platform Flutter mobile app with push notifications.',
      ],
      solution: 'We engineered a resilient Next.js and React frontend paired with a modular Node.js API and PostgreSQL cluster, orchestrated inside Docker containers on AWS.',
      keyFeatures: [
        'Live Festival HD Video & Audio Webcasting',
        'Interactive Multi-Lingual Spiritual Publication Reader',
        'Secure Multi-Currency Donation Gateway',
        'Devotee Community Directory & Event Scheduler',
      ],
      techs: ['React.js', 'Node.js', 'Flutter', 'PostgreSQL', 'Docker', 'AWS CloudFront'],
      process: 'Scoping & Architecture → Multi-Lingual Design Tokens → Video Streaming Engine QA → Load Testing → Worldwide Rollout',
      results: [
        '250,000+ Active Devotees onboarded worldwide',
        '99.98% System uptime maintained during peak holiday festivals',
        'Sub-second page rendering across mobile devices',
      ],
      gradient: 'from-slate-900 via-[#202323] to-[#2C3030]',
    },
    {
      id: 'argil-tiles',
      name: 'Argil Tiles Digital Showroom & Spec Portal',
      category: 'eCommerce',
      categoryLabel: 'Web & E-Commerce Ecosystem',
      industry: 'Manufacturing & Architecture',
      shortDesc: 'A modern digital platform designed to showcase premium tile collections, highlight architectural aesthetics, and drive B2B export inquiries.',
      overview: 'Argil Tiles is an enterprise manufacturing export platform showcasing thousands of surface finishes, tiles, and slabs with high-resolution 3D asset galleries, square footage calculators, and instant dealer quotations.',
      challenge: 'Presenting heavy high-res tile textures and patterns without degrading mobile performance or international page load speeds.',
      requirements: [
        'Interactive real-time tile surface and texture visualizer.',
        'B2B export quote calculator with tiered quantity pricing.',
        'Sub-second search filtering across 1,500+ SKU variations.',
      ],
      solution: 'Developed an ultra-lightweight Next.js dynamic catalog with automated WebP/AVIF asset optimization on AWS S3/CloudFront and MySQL indexing.',
      keyFeatures: [
        '3D Surface Texture & Visualizer Studio',
        'Automated Export Spec Sheet PDF Generator',
        'Instant Distributor Lead Capture Pipeline',
        'Multi-Country Currency & Measurement Converter',
      ],
      techs: ['Next.js', 'Node.js', 'MySQL 8.0', 'Tailwind CSS', 'AWS S3', 'Redis'],
      process: 'Catalog Mapping → 3D Visualizer UX → Performance Optimization → B2B Ingestion Testing → Production Launch',
      results: [
        '3.4x Increase in international distributor leads within 90 days',
        '98 Google PageSpeed mobile score across all product pages',
        'Over 12,000 architectural spec sheets downloaded',
      ],
      gradient: 'from-slate-900 via-slate-800 to-[#202323]',
    },
    {
      id: 'ubn',
      name: 'United Business Network (UBN)',
      category: 'Business Software',
      categoryLabel: 'Enterprise Platform & Community',
      industry: 'Business Networking & Communities',
      shortDesc: 'A professional networking platform designed to connect entrepreneurs, business owners, and corporate executives with automated matchmaking.',
      overview: 'UBN provides verified business leaders with a structured environment to exchange referrals, manage local chapter meetings, track transaction volume, and attend masterclasses.',
      challenge: 'Fragmented manual attendance tracking and lack of clear financial attribution for peer business referrals.',
      requirements: [
        'Verified membership KYC onboarding with role tiers.',
        'Automated referral tracking and closed-business attribution analytics.',
        'Chapter meeting check-ins with QR codes.',
      ],
      solution: 'Built a unified web and mobile ecosystem on React, Node.js, and Flutter with encrypted direct messaging and real-time referral pipelines.',
      keyFeatures: [
        'Business Referral Pipeline & Closed-Deal Telemetry',
        'Automated Chapter Meeting Scheduler & QR Check-In',
        'Peer-to-Peer Privacy Shielded Direct Messenger',
        'Annual Membership Dues Billing Automation',
      ],
      techs: ['React.js', 'Node.js', 'Flutter', 'PostgreSQL', 'Docker', 'WebSockets'],
      process: 'Community Research → Referral Matrix DB Design → Flutter Mobile App → Beta Testing → Regional Launch',
      results: [
        '5,000+ Verified business owners across 40 chapters',
        '$12M+ Business referrals recorded in system',
        '85% Daily active member engagement rate',
      ],
      gradient: 'from-slate-900 via-[#2C3030] to-emerald-950',
    },
    {
      id: 'aadesh-patola',
      name: 'Aadesh Patola House Luxury Heritage E-Commerce',
      category: 'eCommerce',
      categoryLabel: 'Luxury E-Commerce & Marketplace',
      industry: 'Heritage Fashion & E-Commerce',
      shortDesc: 'A premium digital platform designed to showcase traditional Patola sarees and heritage craftsmanship with international checkout.',
      overview: 'Aadesh Patola House is an internationally renowned heritage textile brand. The platform allows global collectors and diaspora customers to purchase handcrafted authentic Patola sarees.',
      challenge: 'Replicating the tactile luxury showroom experience online and building trust against counterfeit reproductions.',
      requirements: [
        'High-resolution micro-zoom weave inspector.',
        'Digital Certificate of Authenticity generation per serialized saree.',
        'Multi-currency checkout supporting international cards, PayPal, and Apple Pay.',
      ],
      solution: 'Created a bespoke Next.js storefront paired with Stripe international checkout, anti-counterfeit QR certificates, and automated DHL customs documentation.',
      keyFeatures: [
        'Interactive Weave Loom Inspector & Story Timeline',
        'Anti-Counterfeit Serialized QR Digital Authenticity Certificate',
        'Multi-Currency Stripe & PayPal Express Checkout',
        'Automated Global Express Freight Tracking',
      ],
      techs: ['Next.js', 'Node.js', 'Stripe API', 'MySQL', 'Tailwind CSS', 'AWS S3'],
      process: 'Brand Story Discovery → High-Res Media Pipeline → Checkout Integration → Security Audit → Global Launch',
      results: [
        '180% Surge in international NRI orders across USA and UK',
        '0% Payment failure rate during festive season sales',
        'Featured in international textile and luxury heritage publications',
      ],
      gradient: 'from-slate-900 via-slate-800 to-[#202323]',
    },
    {
      id: 'career-culture',
      name: 'Career & Culture – Youth Holistic Growth Platform',
      category: 'Mobile',
      categoryLabel: 'Cross-Platform Mobile App',
      industry: 'Youth Education & EdTech',
      shortDesc: 'A youth-focused holistic development application designed to help young individuals grow physically, mentally, and spiritually through habit tracking.',
      overview: 'Career and Culture is a comprehensive digital wellness and lifestyle coaching app with gamified daily routine trackers, mentor live streaming, audio discourse libraries, and mindfulness exercises.',
      challenge: 'Retaining teenage and young adult engagement over long continuous 30-day spiritual and career habit sprints.',
      requirements: [
        'Gamified daily streak mechanics and community leaderboards.',
        'Offline audio player for meditation and lecture tracks.',
        'Automated push notification reminders tailored to user timezones.',
      ],
      solution: 'Developed an iOS and Android app on Flutter powered by Firebase cloud functions and a scalable Node.js audio streaming backend.',
      keyFeatures: [
        'Gamified Habit Streaks & Level Badges',
        'Curated Audio Discourse Library with Background Play',
        'Live Interactive Workshop Streaming with Q&A',
        'Personalized Daily Journaling & Goal Tracking',
      ],
      techs: ['Flutter', 'Firebase', 'REST API', 'Node.js', 'WebSockets'],
      process: 'Youth Persona Research → Gamification UI Wireframes → Flutter App Build → Beta Cohort → App Stores Release',
      results: [
        '50,000+ Downloads on iOS App Store and Google Play',
        '4.8/5 Star average rating from 1,200+ reviews',
        '68% 30-day user habit completion rate',
      ],
      gradient: 'from-slate-900 via-[#202323] to-[#2C3030]',
    },
    {
      id: 'vaidraj-ayurvedic',
      name: 'Vaidraj Ayurvedic Health & Doctor Consultation Portal',
      category: 'Web',
      categoryLabel: 'HealthTech & Consultation Portal',
      industry: 'Ayurveda & HealthTech',
      shortDesc: 'An online platform for Ayurvedic health services, herbal treatments, wellness products, and online doctor consultations.',
      overview: 'Vaidraj Ayurvedic delivers holistic classical medicine to patients worldwide, offering digital clinical questionnaires, video appointments, prescription management, and herbal e-pharmacy delivery.',
      challenge: 'Standardizing patient dosha diagnostics into structured intake forms and managing doctor appointment schedules across multiple clinical locations.',
      requirements: [
        'Intelligent Ayurvedic dosha assessment questionnaire.',
        'Physician appointment calendar with automated reminders.',
        'Integrated e-pharmacy with formulation dosage notes.',
      ],
      solution: 'Engineered a secure React web app with Node.js backend, automated PDF prescription generation, and integrated inventory management.',
      keyFeatures: [
        'Dosha Diagnostic Interactive Triage Intake',
        'Automated Doctor Video Appointment Booking',
        'Herbal Formulation E-Commerce & Dosage Instructions',
        'Patient Health Progress Telemetry & Follow-Up Reminders',
      ],
      techs: ['React.js', 'Node.js', 'Flutter', 'PostgreSQL', 'Docker', 'Stripe'],
      process: 'Clinical Diagnostic Mapping → HIPAA Privacy Design → Patient Portal Build → Doctor Testing → Live Launch',
      results: [
        '15,000+ Online doctor consultations completed',
        '4.9/5 Patient wellness satisfaction rating',
        '2.8x Growth in authentic Ayurvedic herbal product sales',
      ],
      gradient: 'from-slate-900 via-[#2C3030] to-emerald-950',
    },
    {
      id: 'omni-fleet',
      name: 'OmniFleet IoT Logistics & Route Telemetry',
      category: 'SaaS',
      categoryLabel: 'SaaS & Web',
      industry: 'Logistics & Supply Chain',
      shortDesc: 'A high-throughput IoT fleet management platform processing 1.2M daily telematics events with live route optimization.',
      overview: 'OmniFleet is a cloud-native logistics SaaS platform architected for enterprise transportation fleets operating across North America. It connects 50,000+ IoT hardware sensors in real time to provide sub-second dispatching, predictive engine maintenance, and fuel cost reduction.',
      challenge: 'The client faced severe latency bottlenecks with their legacy MySQL database failing under 50,000 concurrent GPS pings per minute, leading to stale telemetry and delayed route re-calculations.',
      requirements: [
        'Sub-second telemetry ingestion engine with WebSocket live map synchronization.',
        'Automated geofencing and instant driver alert notifications.',
        'Multi-tenant dispatcher portals with customizable analytics dashboards.',
        'Offline mobile driver application for remote proof-of-delivery signatures.',
      ],
      solution: 'We re-architected the system using a distributed microservices pipeline: Next.js 16 with WebSockets for the dispatcher cockpit, Node.js + Redis caching for sub-millisecond ingest, and partitioned MySQL 8.0 cluster storage.',
      keyFeatures: [
        'Live Real-Time Map Telemetry with driver clustering',
        'Automated Dynamic Route Optimization Engine',
        'Driver Native Mobile App with offline proof-of-delivery',
        'Automated Maintenance & Fuel Consumption Analytics',
      ],
      techs: ['Next.js 16', 'Node.js', 'MySQL 8.0', 'Redis', 'WebSockets', 'AWS ECS', 'Docker'],
      process: 'Discover → Schema Partitioning → WebSocket Prototype → Load Testing (100k req/s) → Full Migration → Zero Downtime Launch',
      results: [
        '42% Increase in overall fleet dispatching efficiency',
        '99.99% Telematics stream uptime with 14ms average query latency',
        '18% Reduction in quarterly commercial fuel waste',
      ],
      gradient: 'from-slate-900 via-[#202323] to-[#2C3030]',
    },
    {
      id: 'bill-flow',
      name: 'BillFlow Multi-Tenant Revenue & Subscription Engine',
      category: 'SaaS',
      categoryLabel: 'SaaS & Web',
      industry: 'FinTech & B2B Billing',
      shortDesc: 'Multi-tenant subscription billing platform managing recurring invoices, international tax compliance, and automated dunning.',
      overview: 'BillFlow provides high-growth SaaS enterprises with an automated billing infrastructure that connects directly into Stripe, PayPal, and European banking APIs with granular usage metering.',
      challenge: 'Managing fragmented international VAT tax rules and high involuntary churn due to credit card expiration errors across 30+ jurisdictions.',
      requirements: [
        'Flexible pricing tier modeling (seat-based, tiered usage, hybrid)',
        'Automated dunning retries and multi-channel customer payment reminders',
        'Strict PCI-DSS compliance and encrypted audit log vaults',
      ],
      solution: 'Engineered a resilient event-driven Node.js backend paired with React interactive dashboards, automated webhook listeners, and background dunning cron engines.',
      keyFeatures: [
        'Dynamic Pricing Matrix & Subscription Lifecycles',
        'Automated Multi-Jurisdiction Tax Calculation',
        'Smart Dunning Recovery with 73% payment recapture',
        'Customer Self-Serve Invoice Portal',
      ],
      techs: ['React', 'TypeScript', 'Node.js', 'Stripe Connect', 'MySQL', 'Docker', 'AWS'],
      process: 'Financial Architecture → Sandbox Integration → Dunning Engine QA → SOC2 Audit → Production Rollout',
      results: [
        '$35M+ Processed volume annually with 99.99% billing accuracy',
        '31% Reduction in revenue loss caused by involuntary churn',
        'Instant 30-second tenant provisioning',
      ],
      gradient: 'from-slate-900 via-slate-800 to-[#202323]',
    },
    {
      id: 'care-sync',
      name: 'CareSync HIPAA-Compliant Telehealth & EHR Platform',
      category: 'Mobile',
      categoryLabel: 'Mobile & Web',
      industry: 'Healthcare & Life Sciences',
      shortDesc: 'A complete clinical management ecosystem with encrypted HD video consultations, automated prescription sync, and EHR integration.',
      overview: 'CareSync connects over 120 clinical healthcare networks with 180,000 active patients, providing secure video consultations, digital triage, and real-time electronic health records synchronization.',
      challenge: 'Ensuring absolute HIPAA and SOC2 compliance with end-to-end encrypted WebRTC video streaming and zero client-side patient data caching vulnerabilities.',
      requirements: [
        'End-to-end encrypted peer-to-peer WebRTC video consultations',
        'Cross-platform Flutter patient mobile application for iOS & Android',
        'Instant prescription routing to local licensed pharmacy networks',
      ],
      solution: 'Developed a zero-knowledge encrypted video gateway, paired with a high-performance Next.js physician cockpit and cross-platform Flutter patient mobile application.',
      keyFeatures: [
        'HD Low-Latency WebRTC Telehealth Video Rooms',
        'Encrypted Patient Record Vault (EHR/EMR)',
        'Automated Doctor Scheduling with Timezone Conversion',
        'Mobile E-Prescription Delivery with Pharmacy Sync',
      ],
      techs: ['Next.js', 'Flutter', 'Node.js', 'WebRTC', 'MySQL', 'SOC2 / HIPAA Compliant'],
      process: 'Compliance Review → Architecture Threat Model → Flutter Mobile App → Video Gateway Testing → Production Deployment',
      results: [
        '180,000+ Active patients onboarded in first 12 months',
        '4.9/5 App Store customer satisfaction rating',
        '100% HIPAA & SOC2 Type II audit compliance certification',
      ],
      gradient: 'from-slate-900 via-[#2C3030] to-emerald-950',
    },
    {
      id: 'nexus-erp',
      name: 'NexusFlow Business Management & Warehouse ERP',
      category: 'Business Software',
      categoryLabel: 'Business Software',
      industry: 'Manufacturing & Distribution',
      shortDesc: 'Unified warehouse inventory, procurement workflows, and supplier management platform for multi-location enterprises.',
      overview: 'NexusFlow unifies distributed manufacturing supply chains, barcode asset tracking, purchase order approvals, and ERP financial ledger reconciliation.',
      challenge: 'Disparate Excel spreadsheets and disconnected legacy desktop tools leading to stockouts, ordering delays, and poor operational visibility.',
      requirements: [
        'Real-time barcode scanning and mobile warehouse tablet view',
        'Automated reorder point triggers and supplier dispatch',
        'Role-based approval hierarchies for multi-million dollar procurement',
      ],
      solution: 'Engineered an ultra-fast Next.js + Laravel API platform with optimized MySQL indexing, real-time stock telemetry, and automated invoice PDF generation.',
      keyFeatures: [
        'Multi-Warehouse Inventory Matrix with Barcode Sync',
        'Supplier PO Automation & Price Comparison Engine',
        'Financial Audit Trail & GAAP compliant ledgers',
        'Custom Role Permissions (Warehouse, Admin, Auditor)',
      ],
      techs: ['Laravel / PHP', 'Next.js', 'MySQL 8.0', 'Redis', 'AWS RDS', 'Tailwind'],
      process: 'Warehouse Workflow Mapping → Database Normalization → API Layer → Tablet UI → Rollout & Staff Training',
      results: [
        '65% Decrease in manual data entry processing hours',
        'Zero stockout incidents across 8 national fulfillment centers',
        'Full financial ledger reconciliation in under 3 seconds',
      ],
      gradient: 'from-slate-900 via-slate-800 to-[#202323]',
    },
    {
      id: 'market-hub',
      name: 'Veloce Multi-Vendor Marketplace & Escrow Gateway',
      category: 'eCommerce',
      categoryLabel: 'eCommerce',
      industry: 'Automotive & Parts Retail',
      shortDesc: 'Two-sided digital automotive marketplace featuring automated vendor payouts, catalog syndication, and escrow deposits.',
      overview: 'Veloce is a high-volume B2B/B2C marketplace connecting 450+ certified automotive parts suppliers with over 200,000 vehicle enthusiasts and commercial repair garages.',
      challenge: 'Complex split payments, inventory synchronization with disparate vendor ERPs, and automated return escrow hold mechanisms.',
      requirements: [
        'Automated split payouts with custom marketplace commission logic',
        'Sub-second search across 500,000 SKU auto parts catalog',
        'Vendor dashboard for order fulfillment, bulk CSV upload, and returns',
      ],
      solution: 'Built a high-performance Next.js storefront paired with a Node.js microservices backend, Elasticsearch for sub-50ms parts searching, and Stripe Connect Custom accounts.',
      keyFeatures: [
        'Elasticsearch 500,000+ SKU Catalog with Year/Make/Model Filter',
        'Automated Multi-Vendor Split Escrow Payments',
        'Vendor Management Self-Serve Portal',
        'Real-Time Shipping & Tracking Webhook Updates',
      ],
      techs: ['Next.js', 'Node.js', 'Elasticsearch', 'Stripe Connect', 'MySQL', 'Docker'],
      process: 'Catalog Architecture → Elasticsearch Pipeline → Stripe Escrow Sync → Multi-Vendor Pilot → Public Launch',
      results: [
        '$18M+ GMV processed in year one of launch',
        'Sub-40ms search query response times across 500k parts',
        '98.4% On-time vendor fulfillment rate',
      ],
      gradient: 'from-slate-900 via-[#2C3030] to-indigo-950',
    },
    {
      id: 'apex-portal',
      name: 'Apex Client & Investor Advisory Portal',
      category: 'Web',
      categoryLabel: 'Web Application',
      industry: 'Wealth Management & Private Equity',
      shortDesc: 'Secure client portal with real-time portfolio returns, encrypted capital calls, and automated quarterly statements.',
      overview: 'Apex is a bespoke private wealth portal built for private equity firms managing over $500M in assets under management.',
      challenge: 'Ensuring banking-grade security, instantaneous portfolio visualization, and document e-signature flows for international high-net-worth investors.',
      requirements: [
        'Interactive financial charts with daily yield calculations',
        'End-to-end encrypted document vault with DocuSign API integration',
        'Strict multi-factor authentication with biometric device binding',
      ],
      solution: 'Engineered a zero-vulnerability React + Node.js portal with MySQL 8.0 encryption-at-rest, dynamic SVG performance charts, and AWS S3 encrypted vaults.',
      keyFeatures: [
        'Interactive Capital Distribution & Net IRR Visualizations',
        'Encrypted Tax Document & K-1 Vault',
        'Integrated Capital Call E-Signatures',
        'Multi-Tier Security & Biometric Login Sync',
      ],
      techs: ['React', 'Next.js', 'Node.js', 'MySQL', 'AWS KMS', 'DocuSign API'],
      process: 'Security Review → Financial Engine → UI Prototyping → Penetration Testing → Client Rollout',
      results: [
        '100% Client adoption across 400+ international investors',
        'Zero security incidents with full SOC2 Type II compliance',
        'Instant automated generation of 1,200+ quarterly investor reports',
      ],
      gradient: 'from-slate-900 via-slate-800 to-[#202323]',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter || p.categoryLabel.includes(activeFilter));

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        
        {/* Our Work Hero */}
        <section className="bg-[#202323] text-white pt-36 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] hero-radial-glow pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#A0A4A6] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
              Portfolio &amp; Case Studies
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Turning Ideas Into <span className="text-[#FF6B35]">Digital Products</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Explore our production-grade work across SaaS platforms, mobile ecosystems, enterprise business software, and custom digital portals.
            </p>
          </div>
        </section>

        {/* Filter Tabs & Projects Grid */}
        <section className="bg-white py-16 lg:py-24 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeFilter === f
                      ? 'bg-[#FF6B35] text-white shadow-md shadow-[#FF6B35]/25'
                      : 'bg-[#F7F8F8] text-[#5A5D5C] hover:bg-[#E5E7E9] hover:text-[#202323]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-2xl bg-white border border-[#E5E7E9] overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Card Top */}
                    <div className={`h-52 bg-gradient-to-br ${proj.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                      <div className="flex items-center justify-between relative z-10">
                        <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-white border border-white/15">
                          {proj.industry}
                        </span>
                        <span className="text-[10px] font-mono text-[#FF6B35] font-bold px-2 py-0.5 rounded bg-black/30 border border-[#FF6B35]/30">
                          {proj.categoryLabel}
                        </span>
                      </div>
                      <div className="relative z-10">
                        <div className="text-xs font-bold text-white font-mono">
                          {proj.results[0]}
                        </div>
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-xl font-bold font-heading text-[#202323] group-hover:text-[#FF6B35] transition-colors leading-snug">
                        {proj.name}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-[#303333] leading-relaxed">
                        {proj.shortDesc}
                      </p>

                      <div className="mt-6 pt-5 border-t border-[#E5E7E9] flex flex-wrap gap-1.5">
                        {proj.techs.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F7F8F8] text-[#5A5D5C] border border-[#E5E7E9]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-7 pb-6 pt-2">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="w-full py-2.5 rounded-xl border border-[#E5E7E9] text-xs font-bold text-[#202323] group-hover:bg-[#202323] group-hover:text-white group-hover:border-[#202323] transition-all flex items-center justify-center gap-2"
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF6B35]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Detailed Case Study Interactive Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#202323]/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
            <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E5E7E9] overflow-hidden my-8">
              
              {/* Modal Header */}
              <div className="p-6 sm:p-8 bg-[#202323] text-white flex items-start justify-between border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B35] uppercase font-bold mb-1.5">
                    <span>{selectedProject.industry}</span>
                    <span>·</span>
                    <span>{selectedProject.categoryLabel}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    {selectedProject.name}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Body: 10 Full-Stack Case Study Sections */}
              <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto">
                
                {/* 1. Project Overview */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-2">
                    01. Project Overview
                  </h3>
                  <p className="text-sm sm:text-base text-[#303333] leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* 2. Client Challenge */}
                <div className="p-5 rounded-2xl bg-[#F7F8F8] border border-[#E5E7E9]">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF6B35] font-heading mb-2">
                    02. Client Challenge &amp; Bottlenecks
                  </h3>
                  <p className="text-sm text-[#303333] leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                {/* 3. Business Requirements */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-3">
                    03. Key Business Requirements
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.requirements.map((req: string, rIdx: number) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-sm text-[#303333]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Our Technical Solution */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-2">
                    04. Our Technical Architecture &amp; Solution
                  </h3>
                  <p className="text-sm text-[#303333] leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* 5. Key Features */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-3">
                    05. Core Delivered Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.keyFeatures.map((feat: string, fIdx: number) => (
                      <div key={fIdx} className="p-3.5 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-semibold text-[#202323] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Technology Stack */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-3">
                    06. Technology Stack &amp; Frameworks
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techs.map((t: string, tIdx: number) => (
                      <span key={tIdx} className="px-3 py-1.5 rounded-lg bg-[#202323] text-white text-xs font-mono font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 7. Development Process */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#5A5D5C] font-heading mb-2">
                    07. Execution Process
                  </h3>
                  <div className="p-4 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-mono text-[#303333]">
                    {selectedProject.process}
                  </div>
                </div>

                {/* 8. Delivered Results & Commercial Impact */}
                <div className="p-6 rounded-2xl bg-[#202323] text-white">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#FF6B35] font-heading mb-3">
                    08. Measured Results &amp; ROI
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.results.map((res: string, resIdx: number) => (
                      <div key={resIdx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 font-semibold">
                        {res}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 10. CTA */}
                <div className="pt-4 border-t border-[#E5E7E9] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#5A5D5C]">
                    Ready to engineer a solution with similar performance?
                  </div>
                  <Link
                    href="/contact"
                    onClick={() => setSelectedProject(null)}
                    className="btn-primary-orange px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2"
                  >
                    <span>Request Similar Project Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* Final CTA */}
        <section className="bg-[#202323] text-white py-20 lg:py-28 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white">
              Ready to Turn Your Idea Into a <span className="text-[#FF6B35]">Production-Ready Reality?</span>
            </h2>
            <p className="text-base text-slate-300 max-w-xl mx-auto">
              Schedule a technical discovery session with Flipcode Solutions to outline your architecture and sprint roadmap.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="btn-primary-orange px-8 py-4 rounded-xl text-sm font-bold inline-flex items-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
