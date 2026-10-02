import { ImageResponse } from 'next/og';
import blogsData from '@/data/blogs.json';

export const runtime = 'nodejs';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogsData.find((b) => b.slug === slug);

  const title = post?.title || 'Engineering Guide & Architecture Insight';
  const category = post?.category || 'Engineering';
  const readTime = post?.readTime || '5 min read';
  const author = post?.author?.name || 'Flipcode Architecture Team';

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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              <span>{category}</span>
            </div>
            <span style={{ color: '#94A3B8', fontSize: '15px', fontWeight: 600 }}>
              {readTime}
            </span>
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
            <span>FLIPCODE BLOG</span>
          </div>
        </div>

        {/* Center Title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1020px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: title.length > 60 ? '46px' : '54px',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.18,
              letterSpacing: '-1.5px',
            }}
          >
            <span>{title}</span>
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                display: 'flex',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FF6B35',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '18px',
              }}
            >
              <span>{author.charAt(0)}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 700 }}>{author}</span>
              <span style={{ color: '#94A3B8', fontSize: '13px' }}>Flipcode Solutions</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#FF6B35', fontSize: '20px', fontWeight: 900 }}>&lt;/&gt;</span>
            <span style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 800 }}>Flipcode Solutions</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
