export default function Car({ className = '' }) {
  const wheel = (cx) => (
    <g className="wheel" data-origin={`${cx} 150`}>
      <circle cx={cx} cy="150" r="33" fill="#4a4a4a" />
      <circle cx={cx} cy="150" r="19" fill="#d4d4d4" />
      {[0, 72, 144, 216, 288].map((a) => (
        <line key={a} x1={cx} y1="150" x2={cx} y2="133" stroke="#4a4a4a" strokeWidth="4" strokeLinecap="round" transform={`rotate(${a} ${cx} 150)`} />
      ))}
      <circle cx={cx} cy="150" r="5" fill="#4a4a4a" />
    </g>
  )
  return (
    <svg viewBox="0 0 600 190" className={className} role="img" aria-label="Illustration of a sports car">
      <defs>
        <linearGradient id="silverGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.45" stopColor="#c9cdd2" />
          <stop offset="0.55" stopColor="#8e949b" />
          <stop offset="1" stopColor="#e6e9ec" />
        </linearGradient>
      </defs>
      <ellipse cx="300" cy="184" rx="270" ry="5" fill="#22201c" opacity=".18" />
      <path d="M18 146c0-22 18-30 70-37l78-38c32-17 82-26 134-26l60 3c42 4 72 26 104 48l60 8c38 6 58 20 58 42v8H18z" fill="#22201c" />
      <path d="M186 96l22-24c24-12 56-17 92-17l50 2c28 4 46 20 60 39z" fill="#f1ebdd" opacity=".9" />
      <rect x="40" y="124" width="520" height="5" rx="2.5" fill="url(#silverGlass)" />
      <rect x="44" y="124.8" width="512" height="1.2" rx="0.6" fill="#ffffff" opacity=".85" />
      <path d="M556 112l30 8v10l-34-5z" fill="#ffd60a" />
      <circle cx="130" cy="150" r="40" fill="#22201c" stroke="#f1ebdd" strokeWidth="3" />
      <circle cx="470" cy="150" r="40" fill="#22201c" stroke="#f1ebdd" strokeWidth="3" />
      {wheel(130)}
      {wheel(470)}
    </svg>
  )
}