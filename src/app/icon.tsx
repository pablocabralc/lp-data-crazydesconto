import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '7px',
          background: 'linear-gradient(135deg, #ff1744, #d50000)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <span style={{ fontSize: '10px', fontWeight: 700, lineHeight: 1, opacity: 0.9 }}>%</span>
        <span style={{ fontSize: '11px', fontWeight: 900, lineHeight: 1, letterSpacing: '-0.5px' }}>OFF</span>
      </div>
    ),
    { ...size }
  )
}
