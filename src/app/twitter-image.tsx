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
              FLIPCODE SOLUTIONS
            </span>
          </div>

          <span style={{ color: '#94A3B8', fontSize: '16px', fontWeight: 600 }}>@flipcodesolutions</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '1000px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: '54px',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              gap: '12px',
            }}
          >
            <span>Enterprise</span>
            <span style={{ color: '#FF6B35' }}>Full-Stack Software</span>
            <span>&amp;</span>
            <span style={{ color: '#FF6B35' }}>Mobile Engineering</span>
          </div>
          <div style={{ display: 'flex', fontSize: '22px', color: '#94A3B8', lineHeight: 1.4 }}>
            <span>Reliable, scalable, and production-ready web, mobile, and SaaS architectures built for global businesses.</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '28px' }}>
          <span style={{ fontSize: '16px', color: '#CBD5E1', fontWeight: 600 }}>
            Next.js • React • Node.js • Laravel • Flutter • React Native • AWS
          </span>
          <span style={{ color: '#FF6B35', fontSize: '18px', fontWeight: 800 }}>flipcodesolutions.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
