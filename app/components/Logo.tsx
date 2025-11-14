const Logo = () => (
  <svg
    role="img"
    aria-labelledby="as-computer-tech-logo-title"
    viewBox="0 0 360 240"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="as-computer-tech-logo-title">A.S Computer-Tech logo</title>
    <defs>
      <linearGradient id="brandGradient" x1="0.1" x2="0.9" y1="0.15" y2="0.85" gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor="#1fb4ff" />
        <stop offset="38%" stopColor="#3a8dff" />
        <stop offset="100%" stopColor="#1a3e8a" />
      </linearGradient>
      <radialGradient id="accentGlow" cx="50%" cy="45%" r="60%">
        <stop offset="0%" stopColor="#7dd4ff" stopOpacity="0.45" />
        <stop offset="55%" stopColor="#256bba" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#0d2442" stopOpacity="0" />
      </radialGradient>
      <filter id="shadow" x="-10%" y="-10%" width="130%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="24" floodColor="rgba(13, 36, 66, 0.35)" />
      </filter>
    </defs>
    <rect x="28" y="24" width="304" height="192" rx="32" fill="url(#accentGlow)" />
    <g filter="url(#shadow)">
      <path
        d="M180.51 56.95c10.4-18.03 35.42-18.03 45.81 0l53.22 92.2c10.4 18.03-2.6 40.58-22.91 40.58h-106.4c-20.31 0-33.31-22.55-22.91-40.58l53.19-92.2z"
        fill="#10305a"
      />
      <path
        d="M158.64 113.73c10.5-18.1 36.08-18.1 46.58 0l28.39 48.9c10.5 18.1-2.67 40.95-23.29 40.95h-56.76c-20.62 0-33.79-22.85-23.29-40.95l28.38-48.9z"
        fill="url(#brandGradient)"
      />
    </g>
    <path
      d="M126.43 166.74l25.94-44.7c2.99-5.14 6.61-9.48 10.66-12.94 3.77-3.21 7.79-6.42 14.56-6.42 6.76 0 10.77 3.21 14.54 6.42 4.05 3.46 7.68 7.8 10.66 12.94l3.73 6.43 7.51-12.94c2.98-5.14 6.61-9.48 10.66-12.94 3.77-3.21 7.79-6.42 14.56-6.42 6.76 0 10.77 3.21 14.54 6.42 4.05 3.46 7.68 7.8 10.66 12.94l27.92 48.04"
      stroke="#c5e8ff"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.5"
    />
    <g transform="translate(65 75)">
      <text
        x="0"
        y="98"
        fill="#0d233f"
        fontFamily='"Poppins", "Inter", "Segoe UI", sans-serif'
        fontSize="46"
        fontWeight="700"
        letterSpacing="0.06em"
      >
        A.S COMPUTER
      </text>
      <text
        x="0"
        y="140"
        fill="#37a5ff"
        fontFamily='"Poppins", "Inter", "Segoe UI", sans-serif'
        fontSize="32"
        fontWeight="600"
        letterSpacing="0.4em"
      >
        TECH
      </text>
    </g>
    <circle cx="94" cy="86" r="8" fill="#37a5ff" />
    <circle cx="268" cy="64" r="6" fill="#37a5ff" />
    <circle cx="292" cy="176" r="7" fill="#1a4a8a" opacity="0.6" />
    <circle cx="78" cy="188" r="5" fill="#1fb4ff" opacity="0.8" />
    <path
      d="M72 70c28-30 68-46 112-46s84 16 112 46"
      stroke="#6ec6ff"
      strokeOpacity="0.55"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="12 18"
    />
  </svg>
);

export default Logo;
