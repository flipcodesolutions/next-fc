'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Paperclip,
  Calendar,
  Building2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  User,
  X,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: 'Web Application Development',
    budget: '$25,000 - $50,000',
    timeline: '1 - 3 Months',
    message: '',
    attachmentName: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [scheduleDate, setScheduleDate] = useState('');
  const [scheduleEmail, setScheduleEmail] = useState('');
  const [scheduleErrors, setScheduleErrors] = useState<Record<string, string>>({});
  const [scheduleDone, setScheduleDone] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone.trim() && !/^[+0-9\s\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project description & scope is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a brief description (at least 10 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setErrors({});
    }, 1000);
  };

  const validateSchedule = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!scheduleDate) {
      newErrors.date = 'Please select a preferred date';
    }

    if (!scheduleEmail.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(scheduleEmail.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    setScheduleErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        attachmentName: e.target.files[0].name,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        
        {/* Contact Hero */}
        <section className="bg-[#202323] text-white pt-36 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] hero-radial-glow pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-dark opacity-35 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-semibold text-[#A0A4A6] uppercase tracking-wider mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]"></span>
              Get In Touch
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Let&apos;s Build Something <span className="text-[#FF6B35]">Great Together</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Tell us about your project, business requirement, or technical challenge. Our team will help you explore the right solution.
            </p>
          </div>
        </section>

        {/* Contact Content Grid (Form + Contact Info) */}
        <section className="bg-white py-20 lg:py-28 border-b border-[#E5E7E9]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Comprehensive Contact Form (7 cols) */}
              <div className="lg:col-span-7">
                <div className="p-8 sm:p-12 rounded-3xl bg-[#F7F8F8] border border-[#E5E7E9] shadow-sm">
                  <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#202323]">
                      Project Scoping &amp; Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-[#6B7070] mt-1.5">
                      Fill in your specifications below for a confidential estimate and architectural review.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="p-8 rounded-2xl bg-white border border-emerald-500/30 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold font-heading text-[#202323]">
                        Inquiry Received!
                      </h3>
                      <p className="text-sm text-[#303333] max-w-md mx-auto">
                        Thank you for reaching out to Flipcode Solutions. One of our lead technical architects will review your details and respond within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs font-bold text-[#FF6B35] hover:underline"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      
                      {/* Full Name & Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#202323] mb-1.5 uppercase tracking-wider">
                            Full Name *
                          </label>
                          <div className="relative">
                            <User className="w-4 h-4 text-[#A0A4A6] absolute left-3.5 top-3" />
                            <input
                              type="text"
                              placeholder="e.g. David Vance"
                              value={formData.fullName}
                              onChange={(e) => {
                                setFormData({ ...formData, fullName: e.target.value });
                                if (errors.fullName) setErrors({ ...errors, fullName: '' });
                              }}
                              className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-xl text-sm focus:outline-none transition-colors ${
                                errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6B35]'
                              }`}
                            />
                          </div>
                          {errors.fullName && (
                            <p className="text-xs text-red-500 mt-1 font-medium">{errors.fullName}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#202323] mb-1.5 uppercase tracking-wider">
                            Company Name
                          </label>
                          <div className="relative">
                            <Building2 className="w-4 h-4 text-[#A0A4A6] absolute left-3.5 top-3" />
                            <input
                              type="text"
                              placeholder="e.g. Acme Tech Corp"
                              value={formData.companyName}
                              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                              className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-[#E5E7E9] rounded-xl text-sm focus:outline-none focus:border-[#FF6B35]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#202323] mb-1.5 uppercase tracking-wider">
                            Work Email *
                          </label>
                          <div className="relative">
                            <Mail className="w-4 h-4 text-[#A0A4A6] absolute left-3.5 top-3" />
                            <input
                              type="email"
                              placeholder="david@company.com"
                              value={formData.email}
                              onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (errors.email) setErrors({ ...errors, email: '' });
                              }}
                              className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-xl text-sm focus:outline-none transition-colors ${
                                errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6B35]'
                              }`}
                            />
                          </div>
                          {errors.email && (
                            <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#202323] mb-1.5 uppercase tracking-wider">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="w-4 h-4 text-[#A0A4A6] absolute left-3.5 top-3" />
                            <input
                              type="tel"
                              placeholder="+1 (555) 019-2834"
                              value={formData.phone}
                              onChange={(e) => {
                                setFormData({ ...formData, phone: e.target.value });
                                if (errors.phone) setErrors({ ...errors, phone: '' });
                              }}
                              className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-xl text-sm focus:outline-none transition-colors ${
                                errors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6B35]'
                              }`}
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      {/* Service Required */}
                      <div>
                        <label className="block text-xs font-semibold text-[#202323] mb-1.5 uppercase tracking-wider">
                          Service Required *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7E9] rounded-xl text-sm focus:outline-none focus:border-[#FF6B35] text-[#303333]"
                        >
                          <option value="Web Application Development">Web Application Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="SaaS Development">SaaS Development</option>
                          <option value="Custom Software Development">Custom Software Development</option>
                          <option value="eCommerce Development">eCommerce Development</option>
                          <option value="API & System Integration">API &amp; System Integration</option>
                        </select>
                      </div>

                      {/* Budget & Timeline */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#202323] mb-1.5 uppercase tracking-wider">
                            Estimated Budget
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7E9] rounded-xl text-sm focus:outline-none focus:border-[#FF6B35] text-[#303333]"
                          >
                            <option value="$10,000 - $25,000">$10,000 – $25,000</option>
                            <option value="$25,000 - $50,000">$25,000 – $50,000</option>
                            <option value="$50,000 - $100,000">$50,000 – $100,000</option>
                            <option value="$100,000+">$100,000+</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#202323] mb-1.5 uppercase tracking-wider">
                            Project Timeline
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-3.5 py-2.5 bg-white border border-[#E5E7E9] rounded-xl text-sm focus:outline-none focus:border-[#FF6B35] text-[#303333]"
                          >
                            <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                            <option value="1 - 3 Months">1 – 3 Months</option>
                            <option value="3 - 6 Months">3 – 6 Months</option>
                            <option value="Exploring Feasibility">Exploring Feasibility</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-semibold text-[#202323] mb-1.5 uppercase tracking-wider">
                          Project Description &amp; Scope *
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Provide details on user flows, required integrations, legacy systems, or specific milestones..."
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                            if (errors.message) setErrors({ ...errors, message: '' });
                          }}
                          className={`w-full p-3.5 bg-white border rounded-xl text-sm focus:outline-none transition-colors ${
                            errors.message ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6B35]'
                          }`}
                        />
                        {errors.message && (
                          <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>
                        )}
                      </div>

                      {/* Attachment Input Simulation */}
                      <div>
                        <label className="block text-xs font-semibold text-[#202323] mb-1.5 uppercase tracking-wider">
                          Attach Specification / RFP (Optional)
                        </label>
                        <div className="relative flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E5E7E9] border-dashed">
                          <Paperclip className="w-4 h-4 text-[#FF6B35] flex-shrink-0" />
                          <input
                            type="file"
                            onChange={handleFileChange}
                            className="text-xs text-[#5A5D5C] file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#F7F8F8] file:text-[#202323] hover:file:bg-[#E5E7E9] cursor-pointer"
                          />
                        </div>
                        {formData.attachmentName && (
                          <span className="text-[11px] text-[#FF6B35] font-mono mt-1 block">
                            Attached: {formData.attachmentName}
                          </span>
                        )}
                      </div>

                      {/* Submit */}
                      <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <span className="text-[11px] text-[#5A5D5C] flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
                          <span>Protected by Non-Disclosure Agreement (NDA).</span>
                        </span>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:w-auto btn-primary-orange px-8 py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-[#FF6B35]/25"
                        >
                          <Send className="w-4 h-4" />
                          <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                        </button>
                      </div>

                    </form>
                  )}
                </div>
              </div>

              {/* Right Column: Contact Info & Consultation CTA (5 cols) */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Contact Card */}
                <div className="p-8 rounded-3xl bg-[#202323] text-white space-y-6 shadow-xl border border-white/10">
                  <div className="border-b border-white/10 pb-5">
                    <h3 className="text-xl font-bold font-heading text-white">
                      Flipcode Solutions Private Limited
                    </h3>
                    <p className="text-xs text-[#A0A4A6] mt-1">
                      Full-Stack Software Development Agency
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B35] flex-shrink-0">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A0A4A6] uppercase font-bold block">Email Inquiries</span>
                        <a href="mailto:contact@flipcodesolutions.com" className="hover:text-white font-medium">
                          contact@flipcodesolutions.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B35] flex-shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A0A4A6] uppercase font-bold block">Phone &amp; WhatsApp</span>
                        <span className="font-medium">+91 (0) 80 4920 1800</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B35] flex-shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A0A4A6] uppercase font-bold block">Corporate Headquarters</span>
                        <span className="font-medium">Flipcode Towers, Silicon Tech Innovation Hub, Bangalore, Karnataka, India</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#FF6B35] flex-shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#A0A4A6] uppercase font-bold block">Operating Hours</span>
                        <span className="font-medium">Monday – Friday: 9:00 AM – 7:00 PM IST (24/7 SLA Client Support)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Consultation Scheduler CTA */}
                <div className="p-8 rounded-3xl bg-[#F7F8F8] border border-[#E5E7E9] space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF6B35]">
                    <Sparkles className="w-4 h-4" />
                    <span>Instant Consultation</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-[#202323]">
                    Have an idea, existing application, or technical challenge?
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B7070] leading-relaxed">
                    Book a direct 30-minute video session with our principal architect to discuss tech stack suitability and architectural feasibility.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setScheduleModalOpen(true)}
                      className="w-full btn-primary-orange py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Schedule a Consultation</span>
                    </button>
                  </div>
                </div>

                {/* Office Location Interactive Map Card Placeholder */}
                <div className="rounded-3xl border border-[#E5E7E9] overflow-hidden bg-[#F7F8F8] shadow-sm">
                  <div className="p-4 bg-white border-b border-[#E5E7E9] flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#202323]">
                      <MapPin className="w-4 h-4 text-[#FF6B35]" />
                      <span>Bangalore Technology Park Campus</span>
                    </div>
                    <span className="text-[10px] text-[#5A5D5C] font-mono">12.9716° N, 77.5946° E</span>
                  </div>

                  {/* Visual Map Rendering Canvas */}
                  <div className="h-44 bg-[#202323] p-6 relative flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-grid-dark opacity-40"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] text-white border border-white/10 font-mono">
                        Global Engineering HQ
                      </span>
                    </div>

                    <div className="relative z-10 flex items-center gap-2 text-white text-xs">
                      <div className="w-3 h-3 rounded-full bg-[#FF6B35] animate-ping"></div>
                      <span className="font-bold">Flipcode Solutions Towers</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Schedule Consultation Modal */}
        {scheduleModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202323]/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#E5E7E9] p-7">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7E9]">
                <h3 className="text-lg font-bold font-heading text-[#202323]">
                  Book 30-Min Discovery Session
                </h3>
                <button
                  onClick={() => setScheduleModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-[#202323]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {scheduleDone ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-[#202323]">Consultation Reserved!</h4>
                  <p className="text-xs text-[#6B7070]">Calendar invite with Google Meet link sent.</p>
                </div>
              ) : (
                <div className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#202323] mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={scheduleDate}
                      onChange={(e) => {
                        setScheduleDate(e.target.value);
                        if (scheduleErrors.date) setScheduleErrors({ ...scheduleErrors, date: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        scheduleErrors.date ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6B35]'
                      }`}
                    />
                    {scheduleErrors.date && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{scheduleErrors.date}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#202323] mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={scheduleEmail}
                      onChange={(e) => {
                        setScheduleEmail(e.target.value);
                        if (scheduleErrors.email) setScheduleErrors({ ...scheduleErrors, email: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        scheduleErrors.email ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6B35]'
                      }`}
                    />
                    {scheduleErrors.email && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{scheduleErrors.email}</p>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      if (!validateSchedule()) return;
                      setScheduleDone(true);
                      setTimeout(() => {
                        setScheduleDone(false);
                        setScheduleModalOpen(false);
                        setScheduleErrors({});
                      }, 2000);
                    }}
                    className="w-full btn-primary-orange py-3 rounded-xl text-xs font-bold mt-2"
                  >
                    Confirm Video Meeting
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </main>

      <SiteFooter />
    </div>
  );
}
