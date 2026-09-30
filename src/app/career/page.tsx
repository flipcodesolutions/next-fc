'use client';

import React, { useState } from 'react';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  Send,
  Zap,
  Users2,
  TrendingUp,
  HeartHandshake,
  Code2,
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  type: string;
  experience: string;
  location: string;
  salary: string;
  desc: string;
  skills: string[];
}

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [applyForm, setApplyForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    portfolio: '',
    message: '',
  });
  const [applyErrors, setApplyErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const perks = [
    {
      title: 'Work on Real Products',
      desc: 'Build high-impact software, SaaS platforms, and mobile apps used by thousands of global users.',
      icon: Zap,
    },
    {
      title: 'Learn Modern Technologies',
      desc: 'Master cutting-edge tech: Next.js 16, React 19, Node.js, Laravel, Python, FastAPI, Flutter, and AWS.',
      icon: Code2,
    },
    {
      title: 'Collaborative Environment',
      desc: 'Work directly alongside experienced architects and designers who prioritize mentoring and clean code.',
      icon: Users2,
    },
    {
      title: 'Challenging Projects',
      desc: 'Solve non-trivial engineering problems: high concurrency, distributed caching, and microservices.',
      icon: TrendingUp,
    },
    {
      title: 'Career Growth',
      desc: 'Transparent promotion milestones, tech conference stipends, and continuous learning allowances.',
      icon: Sparkles,
    },
    {
      title: 'Flexible Work Culture',
      desc: 'Hybrid and remote flexibility with healthy work-life balance and outcome-driven productivity.',
      icon: HeartHandshake,
    },
  ];

  const jobs = [
    {
      id: 'sr-laravel',
      title: 'Senior Laravel Developer',
      type: 'Full Time',
      experience: '3+ Years',
      location: 'Bangalore, India (Hybrid / Remote)',
      salary: 'Competitive + Performance Bonuses',
      desc: 'Looking for a seasoned Laravel & PHP backend engineer with experience building scalable REST APIs, MySQL query optimization, queues, and multi-tenant architectures.',
      skills: ['Laravel 11', 'PHP 8.3', 'MySQL 8.0', 'Redis', 'Docker', 'REST APIs', 'Unit Testing'],
    },
    {
      id: 'react-dev',
      title: 'React.js Developer',
      type: 'Full Time',
      experience: '2+ Years',
      location: 'Bangalore, India (Hybrid / Remote)',
      salary: 'Competitive + Performance Bonuses',
      desc: 'Seeking a proactive React & Next.js frontend engineer to build responsive, accessible, and high-performance user interfaces with Tailwind CSS and TypeScript.',
      skills: ['React.js', 'Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Redux / Zustand', 'Web Vitals'],
    },
    {
      id: 'node-dev',
      title: 'Node.js Developer',
      type: 'Full Time',
      experience: '2+ Years',
      location: 'Bangalore, India (Hybrid / Remote)',
      salary: 'Competitive + Performance Bonuses',
      desc: 'Passionate Node.js developer to architect high-throughput microservices, WebSocket event gateways, and third-party API payment integrations.',
      skills: ['Node.js', 'Express', 'TypeScript', 'MySQL / PostgreSQL', 'WebSockets', 'AWS / Docker'],
    },
    {
      id: 'uiux-designer',
      title: 'UI/UX Designer',
      type: 'Full Time',
      experience: '2+ Years',
      location: 'Bangalore, India (Hybrid / Remote)',
      salary: 'Competitive + Performance Bonuses',
      desc: 'Product designer with strong visual aesthetic sensibilities to create intuitive B2B web applications, mobile apps, design tokens, and user flow wireframes.',
      skills: ['Figma', 'Design Systems', 'Wireframing', 'Prototyping', 'User Research', 'Micro-Interactions'],
    },
  ];

  const validateApply = () => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!applyForm.name.trim()) {
      errors.name = 'Full name is required';
    } else if (applyForm.name.trim().length < 2) {
      errors.name = 'Full name must be at least 2 characters';
    }

    if (!applyForm.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(applyForm.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!applyForm.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[+0-9\s\-()]{7,20}$/.test(applyForm.phone.trim())) {
      errors.phone = 'Please enter a valid phone number';
    }

    setApplyErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleOpenApply = (job?: Job) => {
    setSelectedJob(job || null);
    setApplyForm({
      ...applyForm,
      role: job ? job.title : 'General Application',
    });
    setApplyErrors({});
    setIsApplyModalOpen(true);
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateApply()) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsApplyModalOpen(false);
      setApplyErrors({});
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        
        {/* Career Hero */}
        <section className="bg-[#202323] text-white pt-36 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] hero-radial-glow pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#A0A4A6] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
              Careers at Flipcode Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Build the Future <span className="text-[#FF6B35]">With Flipcode</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              We are always looking for talented developers, designers, problem solvers, and technology enthusiasts who enjoy building meaningful digital products.
            </p>
          </div>
        </section>

        {/* Why Join Flipcode (6 Cards) */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7F8F8] border border-[#E5E7E9] text-xs font-semibold text-[#5A5D5C] uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                Culture &amp; Growth
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323]">
                Why Join <span className="text-[#FF6B35]">Flipcode?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {perks.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={idx}
                    className="card-lift cursor-pointer p-8 rounded-2xl bg-[#F7F8F8] border border-[#E5E7E9]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E5E7E9] flex items-center justify-center text-[#FF6B35] mb-5 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold font-heading text-[#202323] mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B7070] leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Open Positions Grid */}
        <section id="positions" className="bg-[#F7F8F8] py-20 lg:py-28 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E7E9] text-xs font-semibold text-[#5A5D5C] uppercase tracking-wider mb-3 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
                Current Openings
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#202323]">
                Open <span className="text-[#FF6B35]">Positions</span>
              </h2>
              <p className="mt-3 text-sm text-[#6B7070]">
                Explore roles across engineering and design. Join our team in Bangalore or work remotely.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => handleOpenApply(job)}
                  className="cursor-pointer rounded-2xl bg-white border border-[#E5E7E9] p-7 flex flex-col justify-between hover:shadow-lg transition-all hover:border-[#FF6B35]/40 group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-bold font-mono">
                        {job.type}
                      </span>
                      <span className="text-xs text-[#5A5D5C] font-semibold">
                        Exp: {job.experience}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-[#202323] group-hover:text-[#FF6B35] transition-colors mb-2">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-[#5A5D5C] mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>{job.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#303333] leading-relaxed mb-5">
                      {job.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E5E7E9]">
                      {job.skills.map((skill: string, sIdx: number) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-[#F7F8F8] text-[#5A5D5C] border border-[#E5E7E9]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 pt-4 border-t border-[#E5E7E9] flex items-center justify-between">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenApply(job);
                      }}
                      className="text-xs font-bold text-[#202323] group-hover:text-[#FF6B35] transition-colors cursor-pointer"
                    >
                      View Position Details
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenApply(job);
                      }}
                      className="btn-primary-orange px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* General Application Banner */}
            <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#202323] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                  Don&apos;t see the right position? Send us your profile.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  We are always on the lookout for standout engineering and design talent.
                </p>
              </div>

              <button
                onClick={() => handleOpenApply()}
                className="btn-primary-orange px-7 py-3 rounded-xl text-xs font-bold flex-shrink-0"
              >
                Submit Resume
              </button>
            </div>

          </div>
        </section>

        {/* Application Modal */}
        {isApplyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202323]/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E5E7E9] overflow-hidden">
              
              <div className="p-6 bg-[#202323] text-white flex items-center justify-between border-b border-white/10">
                <div>
                  <div className="text-xs text-[#FF6B35] font-mono font-bold uppercase">
                    Job Application
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white mt-0.5">
                    {selectedJob ? `${selectedJob.title} • ${selectedJob.location}` : applyForm.role}
                  </h3>
                </div>
                <button
                  onClick={() => setIsApplyModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold font-heading text-[#202323]">
                      Application Submitted!
                    </h4>
                    <p className="text-xs text-[#6B7070]">
                      Our talent acquisition team will review your credentials and contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleApplySubmit} noValidate className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#202323] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={applyForm.name}
                        onChange={(e) => {
                          setApplyForm({ ...applyForm, name: e.target.value });
                          if (applyErrors.name) setApplyErrors({ ...applyErrors, name: '' });
                        }}
                        className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none transition-colors ${
                          applyErrors.name ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6B35]'
                        }`}
                      />
                      {applyErrors.name && (
                        <p className="text-xs text-red-500 mt-1 font-medium">{applyErrors.name}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#202323] mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          placeholder="rahul@example.com"
                          value={applyForm.email}
                          onChange={(e) => {
                            setApplyForm({ ...applyForm, email: e.target.value });
                            if (applyErrors.email) setApplyErrors({ ...applyErrors, email: '' });
                          }}
                          className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none transition-colors ${
                            applyErrors.email ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6B35]'
                          }`}
                        />
                        {applyErrors.email && (
                          <p className="text-xs text-red-500 mt-1 font-medium">{applyErrors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#202323] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={applyForm.phone}
                          onChange={(e) => {
                            setApplyForm({ ...applyForm, phone: e.target.value });
                            if (applyErrors.phone) setApplyErrors({ ...applyErrors, phone: '' });
                          }}
                          className={`w-full px-3.5 py-2 rounded-xl border text-sm focus:outline-none transition-colors ${
                            applyErrors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6B35]'
                          }`}
                        />
                        {applyErrors.phone && (
                          <p className="text-xs text-red-500 mt-1 font-medium">{applyErrors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#202323] mb-1">
                        LinkedIn / GitHub / Portfolio URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://github.com/yourprofile"
                        value={applyForm.portfolio}
                        onChange={(e) => setApplyForm({ ...applyForm, portfolio: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#E5E7E9] text-sm focus:outline-none focus:border-[#FF6B35]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#202323] mb-1">
                        Brief Cover Note / Highlights
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about key systems you have built..."
                        value={applyForm.message}
                        onChange={(e) => setApplyForm({ ...applyForm, message: e.target.value })}
                        className="w-full p-3 rounded-xl border border-[#E5E7E9] text-sm focus:outline-none focus:border-[#FF6B35]"
                      />
                    </div>

                    <div className="pt-3 flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsApplyModalOpen(false)}
                        className="px-4 py-2 text-xs font-semibold text-[#5A5D5C] hover:text-[#202323]"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-primary-orange px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Application</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        )}

      </main>

      <SiteFooter />
    </div>
  );
}
