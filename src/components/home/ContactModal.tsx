'use client';

import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles, Building2, Mail, Phone, User } from 'lucide-react';
import FlipcodeLogo from '@/components/ui/FlipcodeLogo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export default function ContactModal({ isOpen, onClose, prefilledService }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: prefilledService || 'Web Application Development',
    budget: '$10k - $25k',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Your name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Corporate email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief project details';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Please enter at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call / save to backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setErrors({});
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#202426]/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E5E7E9] overflow-hidden">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#202426] text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <FlipcodeLogo variant="light" size="sm" showSubtitle={false} />
            <div className="h-4 w-[1px] bg-white/20"></div>
            <span className="text-xs font-semibold text-slate-300">Project Discovery</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#202426]">
                Consultation Request Received!
              </h3>
              <p className="text-sm text-[#73787A] max-w-md mx-auto">
                Thank you for contacting Flipcode Solutions. One of our lead technical architects will review your scope and get in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <h3 className="text-xl font-bold font-heading text-[#202426]">
                  Let&apos;s Build Your Next Digital Product
                </h3>
                <p className="text-xs sm:text-sm text-[#73787A] mt-1">
                  Share your requirements and our team will engineer a tailored proposal with technical specifications.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#202426] mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#A0A4A6] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. John Miller"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6600]'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202426] mb-1.5">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#A0A4A6] absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6600]'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#202426] mb-1.5">
                    Company / Organization
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#A0A4A6] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Acme Health Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-[#E5E7E9] focus:outline-none focus:border-[#FF6600]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#202426] mb-1.5">
                    Target Solution
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-[#E5E7E9] focus:outline-none focus:border-[#FF6600] bg-white text-[#3F4446]"
                  >
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="eCommerce Development">eCommerce Development</option>
                    <option value="CRM & ERP Solutions">CRM &amp; ERP Solutions</option>
                    <option value="Cloud & Backend Solutions">Cloud &amp; Backend Solutions</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#202426] mb-1.5">
                  Project Scope &amp; Vision *
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your current system or what you are looking to build..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  className={`w-full p-3 text-sm rounded-lg border focus:outline-none transition-colors ${
                    errors.message ? 'border-red-400 focus:border-red-500' : 'border-[#E5E7E9] focus:border-[#FF6600]'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-[#A0A4A6]">
                  Protected by standard Non-Disclosure Agreement (NDA).
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-orange-primary px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
