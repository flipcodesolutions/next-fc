import React from 'react';
import {
  Code,
  Server,
  Smartphone,
  Database,
  Network,
  Cloud,
  CheckCircle2,
} from 'lucide-react';

export default function TechnologyExpertiseSection() {
  const categories = [
    {
      title: 'Frontend Engineering',
      icon: Code,
      techs: ['React.js', 'Next.js (App Router)', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Redux Toolkit'],
    },
    {
      title: 'Backend & Microservices',
      icon: Server,
      techs: ['Node.js (Express & Fastify)', 'Laravel / PHP', 'Python (FastAPI & Django)', 'NestJS', 'REST & GraphQL'],
    },
    {
      title: 'Mobile App Ecosystems',
      icon: Smartphone,
      techs: ['Flutter (iOS & Android)', 'React Native', 'Kotlin / Swift', 'Offline Sync', 'App Store / Play Store CI'],
    },
    {
      title: 'Databases & In-Memory Stores',
      icon: Database,
      techs: ['MySQL 8.0', 'PostgreSQL', 'MongoDB', 'Redis Caching', 'Prisma ORM', 'ElasticSearch'],
    },
    {
      title: 'APIs & Integration Gateways',
      icon: Network,
      techs: ['Payment APIs (Stripe, Razorpay)', 'Webhooks & Event Stream', 'OAuth2 / JWT Auth', 'CRM / ERP Connectors', 'Twilio / SendGrid'],
    },
    {
      title: 'Cloud & DevOps Infrastructure',
      icon: Cloud,
      techs: ['AWS (ECS, Lambda, S3, RDS)', 'Docker & Kubernetes', 'GitHub Actions CI/CD', 'Vercel & Cloudflare', 'Nginx & Load Balancing'],
    },
  ];

  return (
    <section id="technologies" className="bg-white py-24 lg:py-32 border-b border-[#E5E7E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: 5 cols Left, 7 cols Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F8F9] border border-[#E5E7E9] text-xs font-semibold text-[#5A5D5C] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
              Stack &amp; Frameworks
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#202426] tracking-tight leading-tight">
              Modern Technology. <br />
              <span className="text-[#FF6600]">Practical Engineering.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#3F4446] leading-relaxed">
              We choose battle-tested, high-performance technology stacks that prioritize long-term maintainability, security, and effortless horizontal scalability.
            </p>

            <div className="pt-4 space-y-3.5 text-sm text-[#3F4446]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                <span>Zero bloated dependencies; strict clean code and modular microservices architecture.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                <span>Strict type safety with TypeScript &amp; schema validation across the full stack.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6600] flex-shrink-0 mt-0.5" />
                <span>Automated testing suites, continuous integration, and seamless zero-downtime rollouts.</span>
              </div>
            </div>

            <div className="pt-6">
              <div className="p-5 rounded-2xl bg-[#F7F8F9] border border-[#E5E7E9]">
                <div className="text-xs font-semibold text-[#5A5D5C] uppercase tracking-wider mb-1">
                  Need a custom tech stack evaluation?
                </div>
                <div className="text-sm font-bold text-[#202426]">
                  Our architects will audit and recommend the optimal stack for your project.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Technology Categories Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="card-lift cursor-pointer rounded-2xl bg-[#F7F8F9] border border-[#E5E7E9] p-6 hover:border-[#FF6600]/40 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E7E9] flex items-center justify-center text-[#202426] shadow-2xs">
                      <Icon className="w-4 h-4 text-[#FF6600]" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-[#202426]">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.techs.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-[#E5E7E9] text-xs font-medium text-[#3F4446] hover:border-[#FF6600]/50 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
