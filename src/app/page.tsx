'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import HeroSection from '@/components/home/HeroSection';
import StatsBar from '@/components/home/StatsBar';

// Import JSON Data Files
import servicesData from '@/data/services.json';
import projectsData from '@/data/projects.json';
import technologiesData from '@/data/technologies.json';
import testimonialsData from '@/data/testimonials.json';
import faqsData from '@/data/faqs.json';
import companyData from '@/data/company.json';
import { FAQJsonLd } from '@/components/seo/JsonLd';

import {
  ArrowRight,
  Code2,
  Smartphone,
  ShoppingBag,
  ShieldCheck,
  Users2,
  Server,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Lock,
  Check,
  CheckCircle2,
  X,
  Calendar,
  Send,
  FileText,
  TrendingUp,
  Palette,
} from 'lucide-react';

interface ProjectModalItem {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  industry: string;
  summary: string;
  fullOverview: string;
  challenge: string;
  requirements: string[];
  solution: string;
  keyFeatures: string[];
  techs: string[];
  impact: string;
  timeline: string;
  color?: string;
}

export default function HomePage() {
  // Modal states
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectModalItem | null>(null);
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  
  // Contact / Consultation form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'web',
    message: '',
  });
  const [contactErrors, setContactErrors] = useState<Record<string, string>>({});

  const [consultData, setConsultData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [consultErrors, setConsultErrors] = useState<Record<string, string>>({});

  const validateContact = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contactData.name.trim()) {
      errors.name = 'Your name is required';
    } else if (contactData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!contactData.email.trim()) {
      errors.email = 'Work email is required';
    } else if (!emailRegex.test(contactData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (contactData.phone.trim() && !/^[+0-9\s\-()]{7,20}$/.test(contactData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!contactData.message.trim()) {
      errors.message = 'Project brief & requirements are required';
    } else if (contactData.message.trim().length < 8) {
      errors.message = 'Please provide at least 8 characters';
    }

    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateConsult = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!consultData.name.trim()) {
      errors.name = 'Your name is required';
    } else if (consultData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!consultData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(consultData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!consultData.phone.trim()) {
      errors.phone = 'Phone / WhatsApp is required';
    } else if (!/^[+0-9\s\-()]{7,20}$/.test(consultData.phone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }

    setConsultErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Active filter states
  const [techCategory, setTechCategory] = useState('all');
  const [portfolioCategory, setPortfolioCategory] = useState('all');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Icon mapping for services from JSON
  const serviceIconMap: Record<string, React.ElementType> = {
    mobile: Smartphone,
    web: Code2,
    backend: Server,
    marketing: TrendingUp,
    uiux: Palette,
    crm: Users2,
    ecommerce: ShoppingBag,
    cms: FileText,
  };

  // 1. Digital Services (Loaded from JSON)
  const services = servicesData.map(s => ({
    ...s,
    icon: serviceIconMap[s.slug] || Code2,
  }));

  // 2. Solutions & Enterprise Specializations (3 Specializations)
  const solutions = [
    {
      num: '01',
      title: 'Enterprise ERP & Custom CRM',
      desc: 'Custom-crafted management portals uniting customer relations, automated invoices, staff scheduling, lead scoring, and granular analytics under one intuitive dashboard.',
      pills: ['Lead Pipelines', 'Custom Workflows', 'Role Matrix', 'Automated Invoicing'],
    },
    {
      num: '02',
      title: 'HealthTech & Care Portals',
      desc: 'HIPAA & GDPR aligned digital care platforms with real-time patient scheduling, verified caregiver credentials, telemedicine integration, and secure record management.',
      pills: ['HIPAA / GDPR Aligned', 'Care Assessment', 'Video Consultations', 'EHR Integration'],
    },
    {
      num: '03',
      title: 'High-Throughput Logistics & IoT',
      desc: 'Sub-second GPS fleet tracking, dispatch automation, AI driver route optimization, and digital proof-of-delivery engines handling thousands of simultaneous transactions.',
      pills: ['Live Telematics', 'Route AI Engine', 'Instant Dispatch', 'IoT Sensor Mesh'],
    },
  ];

  // 3. Technologies & Frameworks (Loaded from JSON)
  const allTechnologies = technologiesData;
  const filteredTechnologies = techCategory === 'all'
    ? allTechnologies
    : allTechnologies.filter((t) => t.category === techCategory);

  // 4. Why Businesses Choose Flipcode (6 Value Proposition Cards)
  const whyChooseUs = [
    {
      title: 'Experienced Development Team',
      desc: 'Senior software engineers, solutions architects, and QA specialists with proven execution across enterprise and startup landscapes.',
      icon: Users2,
    },
    {
      title: 'Scalable Architecture',
      desc: 'Built from day one to handle traffic spikes, multi-tenant requirements, and modular microservices growth without expensive rewrites.',
      icon: Server,
    },
    {
      title: 'Clean & Maintainable Code',
      desc: 'Strict coding standards, comprehensive documentation, automated unit tests, and CI/CD pipelines ensuring hassle-free long term maintenance.',
      icon: Code2,
    },
    {
      title: 'On-Time Delivery',
      desc: 'Predictable 2-week agile sprints, milestone demos, transparent burndown tracking, and a 99% track record of hitting target launch dates.',
      icon: Clock,
    },
    {
      title: 'Transparent Communication',
      desc: 'Direct Slack/Teams channels, weekly sprint reviews, clear progress reports, and zero hidden costs or technical jargon.',
      icon: HeartHandshake,
    },
    {
      title: 'Long-Term Technical Support',
      desc: 'Post-launch warranty, 24/7 server health monitoring, security audits, OS updates, and continuous optimization as your business scales.',
      icon: ShieldCheck,
    },
  ];

  // 5. Featured Recent Work (Loaded from JSON)
  const projects = projectsData.map(p => ({
    ...p,
    color: 'from-[#202323] via-[#2C3030] to-[#1A1D1D]',
  }));

  const filteredProjects = portfolioCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === portfolioCategory || (portfolioCategory === 'web' && p.categoryLabel.includes('Web')));

  // 6. 7-Stage Methodology Workflow
  const processStages = [
    { num: '01', title: 'Discover', desc: 'Requirement scoping, tech audit, and architecture alignment.' },
    { num: '02', title: 'Plan', desc: 'Milestone roadmap, sprint backlog, and system design.' },
    { num: '03', title: 'Design', desc: 'Wireframing, UI/UX clickable prototypes, and design tokens.' },
    { num: '04', title: 'Develop', desc: 'Clean frontend, secure backend APIs, and database build.' },
    { num: '05', title: 'Test', desc: 'Automated unit testing, QA regression, and security check.' },
    { num: '06', title: 'Launch', desc: 'CI/CD production deployment, cloud DNS, and live monitoring.' },
    { num: '07', title: 'Support', desc: 'Continuous SLA maintenance, patches, and feature growth.' },
  ];

  // 7. Client Testimonials (Loaded from JSON)
  const testimonials = testimonialsData;

  // 8. FAQ Accordion Data (Loaded from JSON)
  const faqs = faqsData;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#303333] font-sans selection:bg-[#FF6600] selection:text-white">
      <FAQJsonLd faqs={faqs} />
      <SiteHeader />

      <main className="flex-1">
        
        {/* ========================================================
            1. HERO SECTION (100vh with Criss-Cross Pattern & IDE)
        ======================================================== */}
        <HeroSection onOpenContact={() => setIsConsultModalOpen(true)} />

        {/* ========================================================
            2. STATS & TRUST COUNTER BAR
        ======================================================== */}
        <StatsBar />

        {/* ========================================================
            3. CORE DIGITAL SERVICES (8 CARDS FROM JSON)
        ======================================================== */}
        <section className="bg-[#F7F8F8] py-24 lg:py-32 border-b border-[#E5E7E9]" id="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202323] tracking-tight leading-tight">
                Our Digital Services
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5A5D5C] leading-relaxed">
                We deliver scalable technology solutions designed around your business goals, operational agility, and commercial ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.id}
                    className="card-lift rounded-2xl bg-white border border-[#E5E7E9] p-7 flex flex-col justify-between group hover:border-[#FF6600]/40 transition-all shadow-sm"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] flex items-center justify-center text-[#202323] group-hover:bg-[#FF6600] group-hover:text-white group-hover:border-[#FF6600] transition-all duration-300 shadow-2xs mb-5">
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="text-[11px] font-bold font-mono text-[#FF6600] uppercase tracking-wider mb-1">
                        {item.badge}
                      </div>

                      <h3 className="text-lg font-bold font-heading text-[#202323] group-hover:text-[#FF6600] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm text-[#5A5D5C] leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-5 space-y-2 pt-4 border-t border-[#E5E7E9]/70">
                        {item.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#303333] font-medium">
                            <Check className="w-3.5 h-3.5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E5E7E9]">
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#202323] group-hover:text-[#FF6600] transition-colors"
                      >
                        <span>Explore Service &amp; Specs</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================
            4. SOLUTIONS & ENTERPRISE SPECIALIZATIONS
        ======================================================== */}
        <section className="bg-white py-24 lg:py-32 border-b border-[#E5E7E9]" id="solutions">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                Industry Solutions
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202323] tracking-tight leading-tight">
                Engineered For Scale &amp; Impact
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5A5D5C] leading-relaxed">
                Specialized engineering frameworks tailored for high-growth sectors, data pipelines, and mission-critical enterprise platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solutions.map((sol) => (
                <div
                  key={sol.num}
                  className="rounded-2xl bg-[#F7F8F8] border border-[#E5E7E9] p-8 hover:border-[#FF6600]/40 transition-all hover:shadow-md group relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-4 right-4 text-4xl font-extrabold font-mono text-[#E5E7E9] group-hover:text-[#FF6600]/15 transition-colors select-none">
                    {sol.num}
                  </div>

                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-[#202323] text-white text-xs font-mono font-bold mb-4">
                      SOLUTION {sol.num}
                    </span>

                    <h3 className="text-xl font-bold font-heading text-[#202323] group-hover:text-[#FF6600] transition-colors mb-3">
                      {sol.title}
                    </h3>

                    <p className="text-sm text-[#5A5D5C] leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#E5E7E9] flex flex-wrap gap-2">
                    {sol.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2.5 py-1 rounded-full bg-white border border-[#E5E7E9] text-[11px] font-semibold text-[#303333] shadow-2xs"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================
            5. TECHNOLOGIES & FRAMEWORKS (Dark Charcoal Theme, from JSON)
        ======================================================== */}
        <section className="bg-[#202323] text-white py-24 lg:py-32 relative overflow-hidden" id="technologies">
          <div className="absolute inset-0 bg-cross-pattern-dark pointer-events-none opacity-40"></div>
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF6600]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                Enterprise Technology Stack
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                IT Technologies &amp; Frameworks We Engineer With
              </h2>
              <p className="mt-4 text-base text-slate-300/90 leading-relaxed">
                From reactive web frontends and high-throughput microservices to cloud orchestration, AI integration, and robust database architectures.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {[
                { id: 'all', label: 'All Technologies', count: allTechnologies.length },
                { id: 'frontend', label: 'Frontend & UI' },
                { id: 'backend', label: 'Backend & APIs' },
                { id: 'mobile', label: 'Mobile Apps' },
                { id: 'cloud', label: 'Cloud & DevOps' },
                { id: 'database', label: 'Databases' },
                { id: 'ai', label: 'AI & Data' },
                { id: 'cms', label: 'CMS & Web' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setTechCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    techCategory === tab.id
                      ? 'bg-[#FF6600] text-white shadow-md shadow-[#FF6600]/30'
                      : 'bg-white/[0.06] text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className="ml-1.5 px-1.5 py-0.5 rounded-full bg-white/20 text-[10px] font-mono">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {filteredTechnologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#2C3030]/80 border border-white/10 hover:border-[#FF6600]/50 transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-extrabold text-white group-hover:text-[#FF6600] transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                      {tech.badge}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {tech.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================
            6. WHY CHOOSE US (6 VALUE PROPOSITION CARDS)
        ======================================================== */}
        <section className="bg-[#F7F8F8] py-24 lg:py-32 border-b border-[#E5E7E9]" id="why-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                Value Proposition
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202323] tracking-tight leading-tight">
                Why Businesses Choose Flipcode Solutions
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5A5D5C] leading-relaxed">
                We operate as your dedicated technology arm, combining deep engineering competence with corporate reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="card-lift rounded-2xl bg-white border border-[#E5E7E9] p-8 group hover:border-[#FF6600]/40 transition-all shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] flex items-center justify-center text-[#202323] group-hover:bg-[#FF6600] group-hover:text-white group-hover:border-[#FF6600] transition-colors shadow-2xs mb-6">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold font-heading text-[#202323] group-hover:text-[#FF6600] transition-colors mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#5A5D5C] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================
            7. PORTFOLIO & RECENT WORK (Loaded from JSON + Modal)
        ======================================================== */}
        <section className="bg-white py-24 lg:py-32 border-b border-[#E5E7E9]" id="portfolio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                Featured Case Studies
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202323] tracking-tight leading-tight">
                Our Recent Work
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5A5D5C] leading-relaxed">
                Explore digital products, portals, mobile applications, and enterprise systems delivered for clients worldwide.
              </p>
            </div>

            {/* Portfolio Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'web', label: 'Web Platforms' },
                { id: 'mobile', label: 'Mobile Apps' },
                { id: 'ecommerce', label: 'E-commerce' },
                { id: 'custom', label: 'Custom Software' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPortfolioCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    portfolioCategory === tab.id
                      ? 'bg-[#FF6600] text-white shadow-md shadow-[#FF6600]/25'
                      : 'bg-[#F7F8F8] text-[#5A5D5C] hover:bg-white hover:text-[#202323] border border-[#E5E7E9]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="rounded-2xl bg-white border border-[#E5E7E9] overflow-hidden group hover:border-[#FF6600]/40 transition-all hover:shadow-lg flex flex-col justify-between"
                >
                  {/* Card Visual Header */}
                  <div className={`p-6 bg-gradient-to-br ${project.color} text-white relative overflow-hidden min-h-[160px] flex flex-col justify-between`}>
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-md bg-white/10 text-white text-[11px] font-mono backdrop-blur-sm border border-white/10">
                        {project.categoryLabel}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/25">
                        {project.timeline}
                      </span>
                    </div>

                    <div className="z-10 mt-6">
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#FF6600] transition-colors leading-snug">
                        {project.name}
                      </h3>
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FF6600]/20 rounded-full blur-2xl pointer-events-none"></div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-[#5A5D5C] leading-relaxed">
                        {project.summary}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.techs.map((tech: string, tIdx: number) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-[#F7F8F8] border border-[#E5E7E9] text-[11px] font-mono font-medium text-[#303333]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E5E7E9] flex items-center justify-between">
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="btn-secondary-outline px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <Link
                        href="/our-work"
                        className="text-xs font-semibold text-[#5A5D5C] hover:text-[#FF6600] transition-colors"
                      >
                        All Works →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================
            8. 7-STAGE METHODOLOGY WORKFLOW
        ======================================================== */}
        <section className="bg-[#F7F8F8] py-24 lg:py-32 border-b border-[#E5E7E9]" id="process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                Methodology
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202323] tracking-tight leading-tight">
                Our 7-Stage Development Process
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5A5D5C] leading-relaxed">
                A systematic engineering lifecycle designed for transparency, agility, and precision delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {processStages.map((stg) => (
                <div
                  key={stg.num}
                  className="p-5 rounded-2xl bg-white border border-[#E5E7E9] hover:border-[#FF6600]/40 transition-all hover:shadow-md group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#202323] text-white flex items-center justify-center font-mono font-bold text-sm group-hover:bg-[#FF6600] transition-colors mb-4 shadow-sm">
                      {stg.num}
                    </div>

                    <h3 className="text-base font-bold font-heading text-[#202323] group-hover:text-[#FF6600] transition-colors mb-2">
                      {stg.title}
                    </h3>

                    <p className="text-xs text-[#5A5D5C] leading-relaxed">
                      {stg.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================
            9. ABOUT US SECTION (Loaded with company data)
        ======================================================== */}
        <section className="bg-white py-24 lg:py-32 border-b border-[#E5E7E9]" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Visual Illustration Mockup */}
              <div className="lg:col-span-6 relative">
                <div className="p-8 rounded-3xl bg-[#202323] text-white border border-white/10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6600]/15 rounded-full blur-2xl pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <div className="text-xs font-mono text-[#FF6600] font-bold uppercase tracking-wider">
                      FLIPCODE CORPORATE PROFILE
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      ISO ALIGNED
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#2C3030] border border-white/10">
                      <div className="text-xs text-slate-400">Incorporation Date</div>
                      <div className="text-lg font-bold text-white mt-0.5">{companyData.founded}</div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#2C3030] border border-white/10">
                      <div className="text-xs text-slate-400">Headquarters</div>
                      <div className="text-sm font-semibold text-white mt-0.5">
                        {companyData.headquarters.street}, {companyData.headquarters.city}, {companyData.headquarters.state} {companyData.headquarters.postalCode}, {companyData.headquarters.country}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#2C3030] border border-white/10">
                      <div className="text-xs text-slate-400">Global Service Reach</div>
                      <div className="text-sm font-semibold text-[#FF6600] mt-0.5">
                        {companyData.globalReach.join(' • ')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                  About Company
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202323] tracking-tight leading-tight">
                  Your Trusted Digital Transformation Partner
                </h2>

                <p className="text-base sm:text-lg text-[#303333] font-medium leading-relaxed">
                  {companyData.description}
                </p>

                <p className="text-sm sm:text-base text-[#5A5D5C] leading-relaxed">
                  We operate across {companyData.globalReach.join(', ')}, helping startups, scaleups, and enterprises turn complex business challenges into seamless web applications, mobile apps, CRM systems, and cloud infrastructure.
                </p>

                {/* 4 Pillars Checklist */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-sm text-[#202323] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
                    <span>ISO Aligned Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#202323] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
                    <span>Dedicated Tech Leads</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#202323] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
                    <span>Full IP Ownership</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#202323] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6600] flex-shrink-0" />
                    <span>Strict NDA Guarantee</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary-orange px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-sm"
                  >
                    <span>Work With Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`tel:${companyData.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="btn-secondary-outline px-6 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-[#FF6600]" />
                    <span>{companyData.contact.phone}</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            10. CLIENT TESTIMONIALS (FROM JSON)
        ======================================================== */}
        <section className="bg-[#F7F8F8] py-24 lg:py-32 border-b border-[#E5E7E9]" id="testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                Client Reviews
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202323] tracking-tight leading-tight">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5A5D5C] leading-relaxed">
                Read authentic feedback from founders, directors, and executives who trust Flipcode Solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <div
                  key={idx}
                  className="card-lift rounded-2xl bg-white border border-[#E5E7E9] p-8 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-[#FF6600] mb-5">
                      {[...Array(test.rating || 5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-[#303333] leading-relaxed italic">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#E5E7E9] flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#202323] text-white flex items-center justify-center font-bold text-sm font-mono shadow-2xs">
                      {test.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold font-heading text-[#202323]">
                        {test.author}
                      </div>
                      <div className="text-xs text-[#5A5D5C]">
                        {test.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================
            11. FAQ ACCORDION SECTION (FROM JSON)
        ======================================================== */}
        <section className="bg-white py-24 lg:py-32 border-b border-[#E5E7E9]" id="faq">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202323] tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5A5D5C]">
                Everything you need to know about partnering with Flipcode Solutions.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, fIdx) => {
                const isOpen = activeFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="rounded-2xl border border-[#E5E7E9] bg-white overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold font-heading text-base sm:text-lg text-[#202323] hover:text-[#FF6600] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="w-8 h-8 rounded-full bg-[#F7F8F8] flex items-center justify-center text-[#5A5D5C] flex-shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4 text-[#FF6600]" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 text-sm sm:text-base text-[#5A5D5C] leading-relaxed border-t border-[#E5E7E9]/70 pt-4 bg-[#F7F8F8]/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================
            12. HIGH IMPACT ORANGE CTA SECTION
        ======================================================== */}
        <section className="bg-[#FF6600] text-white py-20 lg:py-24 relative overflow-hidden" id="cta">
          <div className="absolute inset-0 bg-cross-pattern-dark opacity-10 pointer-events-none"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Have a Project in Mind? Let&apos;s Build It Together.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Tell us about your idea and our team of senior architects will help you turn it into a powerful, scalable digital solution.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#202323] hover:bg-[#202323] hover:text-white text-base font-bold transition-all shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsConsultModalOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#202323] text-white hover:bg-[#2C3030] text-base font-bold transition-all border border-white/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#FF6600]" />
                <span>Book 30-Min Discovery Call</span>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================
            13. CONTACT US SECTION (Dual Grid from JSON)
        ======================================================== */}
        <section className="bg-[#F7F8F8] py-24 lg:py-32" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Contact Info */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-bold text-[#5A5D5C] uppercase tracking-wider mb-3.5 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                    Get In Touch
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323] tracking-tight">
                    Let&apos;s Discuss Your Next Big Product
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-[#5A5D5C] leading-relaxed">
                    Reach out directly via email, phone, or by submitting your project specifications. Our solution architect team responds within 24 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E5E7E9] flex items-start gap-4 shadow-2xs">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] flex items-center justify-center text-[#FF6600] flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#202323]">Registered Office</h4>
                      <p className="text-xs text-[#5A5D5C] mt-1">{companyData.headquarters.street}</p>
                      <p className="text-xs text-[#5A5D5C]">{companyData.headquarters.city}, {companyData.headquarters.state} {companyData.headquarters.postalCode}, {companyData.headquarters.country}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E5E7E9] flex items-start gap-4 shadow-2xs">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] flex items-center justify-center text-[#FF6600] flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#202323]">Direct Emails</h4>
                      <p><a href={`mailto:${companyData.contact.emails.general}`} className="text-xs text-[#5A5D5C] hover:text-[#FF6600]">{companyData.contact.emails.general}</a></p>
                      <p><a href={`mailto:${companyData.contact.emails.info}`} className="text-xs text-[#5A5D5C] hover:text-[#FF6600]">{companyData.contact.emails.info}</a></p>
                      <p><a href={`mailto:${companyData.contact.emails.careers}`} className="text-xs text-[#5A5D5C] hover:text-[#FF6600]">{companyData.contact.emails.careers}</a></p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E5E7E9] flex items-start gap-4 shadow-2xs">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] flex items-center justify-center text-[#FF6600] flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#202323]">Phone &amp; WhatsApp</h4>
                      <p><a href={`tel:${companyData.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-xs font-bold text-[#202323] hover:text-[#FF6600]">{companyData.contact.phone}</a></p>
                      <p className="text-[11px] text-[#5A5D5C] mt-1 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#FF6600]" />
                        <span>{companyData.contact.hours}</span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Interactive Form */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7E9] shadow-lg">
                  <h3 className="text-2xl font-extrabold font-heading text-[#202323]">
                    Send Us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A5D5C] mt-1 mb-8">
                    Fill out this form and we&apos;ll prepare a custom technical estimate for your project.
                  </p>

                  {formSubmitted ? (
                    <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                      <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center font-bold">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-emerald-900">Inquiry Received!</h4>
                      <p className="text-sm text-emerald-700">
                        Thank you for reaching out. Our solution architect will contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!validateContact()) return;
                        setFormSubmitted(true);
                      }}
                      noValidate
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#202323] mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Rahul Sharma"
                            value={contactData.name}
                            onChange={(e) => {
                              setContactData({ ...contactData, name: e.target.value });
                              if (contactErrors.name) setContactErrors({ ...contactErrors, name: '' });
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border text-sm text-[#202323] focus:outline-none transition-colors ${
                              contactErrors.name ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6600]'
                            }`}
                          />
                          {contactErrors.name && (
                            <p className="text-xs text-red-500 mt-1 font-medium">{contactErrors.name}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#202323] mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. rahul@company.com"
                            value={contactData.email}
                            onChange={(e) => {
                              setContactData({ ...contactData, email: e.target.value });
                              if (contactErrors.email) setContactErrors({ ...contactErrors, email: '' });
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border text-sm text-[#202323] focus:outline-none transition-colors ${
                              contactErrors.email ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6600]'
                            }`}
                          />
                          {contactErrors.email && (
                            <p className="text-xs text-red-500 mt-1 font-medium">{contactErrors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#202323] mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            placeholder="e.g. +91 98765 43210"
                            value={contactData.phone}
                            onChange={(e) => {
                              setContactData({ ...contactData, phone: e.target.value });
                              if (contactErrors.phone) setContactErrors({ ...contactErrors, phone: '' });
                            }}
                            className={`w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border text-sm text-[#202323] focus:outline-none transition-colors ${
                              contactErrors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6600]'
                            }`}
                          />
                          {contactErrors.phone && (
                            <p className="text-xs text-red-500 mt-1 font-medium">{contactErrors.phone}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-[#202323] mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Acme Innovations"
                            value={contactData.company}
                            onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] text-sm text-[#202323] focus:outline-none focus:border-[#FF6600] focus:bg-white transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#202323] mb-1.5">
                          Project Type *
                        </label>
                        <select
                          value={contactData.projectType}
                          onChange={(e) => setContactData({ ...contactData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] text-sm text-[#202323] focus:outline-none focus:border-[#FF6600] focus:bg-white transition-colors"
                        >
                          <option value="web">Web Application Development</option>
                          <option value="mobile">Mobile App (iOS / Android / Flutter)</option>
                          <option value="crm">Custom CRM / ERP / Software</option>
                          <option value="ecommerce">E-Commerce / Marketplace Platform</option>
                          <option value="api">API, Backend &amp; Cloud DevOps</option>
                          <option value="uiux">UI/UX Design &amp; Prototype</option>
                          <option value="maintenance">Maintenance &amp; SLA Support</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#202323] mb-1.5">
                          Project Brief &amp; Requirements *
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your project goals, timelines, and technical requirements..."
                          value={contactData.message}
                          onChange={(e) => {
                            setContactData({ ...contactData, message: e.target.value });
                            if (contactErrors.message) setContactErrors({ ...contactErrors, message: '' });
                          }}
                          className={`w-full px-4 py-3 rounded-xl bg-[#F7F8F8] border text-sm text-[#202323] focus:outline-none transition-colors ${
                            contactErrors.message ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6600]'
                          }`}
                        ></textarea>
                        {contactErrors.message && (
                          <p className="text-xs text-red-500 mt-1 font-medium">{contactErrors.message}</p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="w-full btn-primary-orange py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#FF6600]/25 hover:shadow-[#FF6600]/40 transition-all"
                      >
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </button>

                      <div className="flex items-center justify-center gap-2 text-xs text-[#5A5D5C] pt-2">
                        <Lock className="w-3.5 h-3.5 text-[#FF6600]" />
                        <span>All project information is protected under strict NDA.</span>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <SiteFooter />

      {/* ========================================================
          CASE STUDY DETAIL MODAL
      ======================================================== */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5E7E9]">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F7F8F8] hover:bg-[#202323] hover:text-white flex items-center justify-center transition-colors text-[#5A5D5C]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-mono font-bold">
              {selectedCaseStudy.categoryLabel}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#202323] mt-3 leading-snug">
              {selectedCaseStudy.name}
            </h3>

            <div className="mt-4 p-4 rounded-2xl bg-[#F7F8F8] border border-[#E5E7E9] space-y-1">
              <div className="text-xs text-[#5A5D5C] font-semibold">Key Impact &amp; Results</div>
              <div className="text-sm font-bold text-[#FF6600]">
                {selectedCaseStudy.impact}
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm text-[#5A5D5C] leading-relaxed">
              <div>
                <h4 className="font-bold text-[#202323] mb-1">Project Overview</h4>
                <p>{selectedCaseStudy.fullOverview}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#202323] mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.techs.map((t: string, i: number) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-[#202323] text-white text-xs font-mono font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E5E7E9] flex items-center justify-between">
              <Link
                href="/contact"
                onClick={() => setSelectedCaseStudy(null)}
                className="btn-primary-orange px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="text-xs font-semibold text-[#5A5D5C] hover:text-[#202323]"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          CONSULTATION ("LET'S TALK") MODAL
      ======================================================== */}
      {isConsultModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5E7E9]">
            <button
              onClick={() => setIsConsultModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F7F8F8] hover:bg-[#202323] hover:text-white flex items-center justify-center transition-colors text-[#5A5D5C]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-[#FF6600]/10 text-[#FF6600] text-xs font-mono font-bold">
              Let&apos;s Connect
            </span>

            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#202323] mt-2">
              Schedule a Free Technical Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5D5C] mt-1 mb-6">
              Speak with a senior solutions architect about your requirements, tech stack, and roadmap.
            </p>

            {consultSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-emerald-900">Consultation Scheduled!</h4>
                <p className="text-xs text-emerald-700">
                  We&apos;ll be in touch with calendar invite details within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!validateConsult()) return;
                  setConsultSubmitted(true);
                }}
                noValidate
                className="space-y-3.5"
              >
                <div>
                  <label className="block text-xs font-bold text-[#202323] mb-1">Your Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. John Doe"
                    value={consultData.name}
                    onChange={(e) => {
                      setConsultData({ ...consultData, name: e.target.value });
                      if (consultErrors.name) setConsultErrors({ ...consultErrors, name: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F7F8F8] border text-sm focus:outline-none transition-colors ${
                      consultErrors.name ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6600]'
                    }`}
                  />
                  {consultErrors.name && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{consultErrors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#202323] mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="e.g. john@enterprise.com"
                    value={consultData.email}
                    onChange={(e) => {
                      setConsultData({ ...consultData, email: e.target.value });
                      if (consultErrors.email) setConsultErrors({ ...consultErrors, email: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F7F8F8] border text-sm focus:outline-none transition-colors ${
                      consultErrors.email ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6600]'
                    }`}
                  />
                  {consultErrors.email && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{consultErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#202323] mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 99794 04044"
                    value={consultData.phone}
                    onChange={(e) => {
                      setConsultData({ ...consultData, phone: e.target.value });
                      if (consultErrors.phone) setConsultErrors({ ...consultErrors, phone: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#F7F8F8] border text-sm focus:outline-none transition-colors ${
                      consultErrors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6600]'
                    }`}
                  />
                  {consultErrors.phone && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{consultErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#202323] mb-1">What would you like to discuss?</label>
                  <textarea
                    rows={3}
                    placeholder="Brief outline of your software requirement or timeline..."
                    value={consultData.notes}
                    onChange={(e) => setConsultData({ ...consultData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F8F8] border border-[#E5E7E9] text-sm focus:outline-none focus:border-[#FF6600]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary-orange py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-[#FF6600]/25"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Discovery Consultation</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
