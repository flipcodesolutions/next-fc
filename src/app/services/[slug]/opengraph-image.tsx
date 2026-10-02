import { ImageResponse } from 'next/og';
import servicesData from '@/data/services.json';

export const runtime = 'nodejs';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  const title = service?.title || 'Software Engineering Services';
  const badge = service?.badge || 'Enterprise Capability';
  const description = service?.description || 'Custom digital product engineering and enterprise software development.';
  const features = service?.features?.slice(0, 3) || [];

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#202323',
          backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(255, 107, 53, 0.4), transparent 50%), radial-gradient(circle at 15% 85%, rgba(56, 189, 248, 0.2), transparent 50%)',
          padding: '70px 80px',
          justifyContent: 'space-between',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'flex',
              padding: '8px 20px',
              borderRadius: '9999px',
              backgroundColor: '#FF6B35',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 800,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            <span>{badge}</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              padding: '8px 18px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#CBD5E1',
              fontSize: '14px',
              fontWeight: 700,
            }}
          >
            <span>FLIPCODE SERVICES</span>
          </div>
        </div>

        {/* Center Title & Description */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '1020px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '52px',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
            }}
          >
            <span>{title}</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '22px',
              color: '#94A3B8',
              lineHeight: 1.4,
              maxWidth: '900px',
            }}
          >
            <span>{description}</span>
          </div>
        </div>

        {/* Features Chips & Brand Footer */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '12px' }}>
            {features.map((feat, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#E2E8F0',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                <span>✓ {feat}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#FF6B35', fontSize: '20px', fontWeight: 900 }}>&lt;/&gt;</span>
            <span style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 800 }}>flipcodesolutions.com</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
