import React from 'react';

export default function TrustTechStrip() {
  const technologies = [
    { name: 'Laravel', highlight: false },
    { name: 'PHP', highlight: false },
    { name: 'React', highlight: true },
    { name: 'Next.js', highlight: true },
    { name: 'Node.js', highlight: true },
    { name: 'Python', highlight: false },
    { name: 'FastAPI', highlight: false },
    { name: 'Vue.js', highlight: false },
    { name: 'Flutter', highlight: true },
    { name: 'React Native', highlight: false },
    { name: 'MySQL', highlight: true },
    { name: 'TypeScript', highlight: false },
  ];

  return (
    <div className="bg-[#2A2E30] border-y border-white/[0.08] py-5 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Strip Label */}
        <div className="flex items-center gap-2 flex-shrink-0 text-xs font-semibold uppercase tracking-wider text-[#A0A4A6]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6600]"></span>
          <span>Core Engineering Stack:</span>
        </div>

        {/* Technologies List */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2 text-sm font-medium">
          {technologies.map((tech, idx) => (
            <React.Fragment key={tech.name}>
              <span
                className={`transition-colors duration-200 cursor-default ${
                  tech.highlight
                    ? 'text-white font-semibold hover:text-[#FF6600]'
                    : 'text-[#A0A4A6] hover:text-white'
                }`}
              >
                {tech.name}
              </span>
              {idx < technologies.length - 1 && (
                <span className="text-[#5A5D5C] select-none">·</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
