import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '40px',
          background: 'linear-gradient(135deg, #ff1744, #d50000)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <span style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1, opacity: 0.9 }}>%</span>
        <span style={{ fontSize: '52px', fontWeight: 900, lineHeight: 1, letterSpacing: '-2px' }}>OFF</span>
      </div>
    ),
    { ...size }
  )
}
