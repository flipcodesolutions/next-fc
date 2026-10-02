import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'Flipcode Solutions — Enterprise Full-Stack Software & Mobile Engineering';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#202323',
          backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(255, 107, 53, 0.35), transparent 50%), radial-gradient(circle at 15% 85%, rgba(56, 189, 248, 0.2), transparent 50%)',
          padding: '70px 80px',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top Header / Pill */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 22px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <div style={{ display: 'flex', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF6B35' }} />
            <span style={{ fontSize: '15px', fontWeight: 700, color: '#E2E8F0', letterSpacing: '1px' }}>
              ENTERPRISE DIGITAL ENGINEERING
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '16px', fontWeight: 600 }}>
            <span>flipcodesolutions.com</span>
          </div>
        </div>

        {/* Main Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '1000px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: '56px',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              gap: '12px',
            }}
          >
            <span>We Build</span>
            <span style={{ color: '#FF6B35' }}>Digital Solutions</span>
            <span>That Help Business</span>
            <span style={{ color: '#FF6B35' }}>Grow</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '22px',
              color: '#94A3B8',
              lineHeight: 1.4,
              maxWidth: '850px',
            }}
          >
            <span>Custom Web Applications, iOS &amp; Android Apps, SaaS Platforms &amp; Cloud Systems.</span>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '28px' }}>
          <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '30px', fontWeight: 900, color: '#FF6B35' }}>70+</span>
              <span style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 600 }}>Projects Delivered</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '30px', fontWeight: 900, color: '#38BDF8' }}>70+</span>
              <span style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 600 }}>Happy Clients</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '30px', fontWeight: 900, color: '#34D399' }}>99.99%</span>
              <span style={{ fontSize: '14px', color: '#94A3B8', fontWeight: 600 }}>Uptime SLA</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#1A1D1D',
              padding: '12px 24px',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <span style={{ color: '#FF6B35', fontSize: '24px', fontWeight: 900 }}>&lt;/&gt;</span>
            <span style={{ color: '#FFFFFF', fontSize: '18px', fontWeight: 800 }}>Flipcode Solutions</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
