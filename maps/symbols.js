// 1. Basic Industrial Symbols
export const icon_windmill = `
<svg width="40" height="40"><path d="M20 20 L20 5 M20 20 L35 25 M20 20 L5 25" stroke="cyan" stroke-width="2"/></svg>`;

export const icon_mine = `
<svg width="40" height="40"><path d="M10 30 L20 10 L30 30 Z" fill="none" stroke="yellow" stroke-width="2"/></svg>`;

// 2. The Ancient Archive (Where Fragments are hidden)
// This looks like a pyramid with a glowing center
export const icon_archive = `
<svg width="40" height="40">
  <path d="M5 35 L20 5 L35 35 Z" fill="none" stroke="#A020F0" stroke-width="2"/>
  <rect x="18" y="22" width="4" height="4" fill="white">
    <animate attributeName="opacity" values="1;0.2;1" dur="1s" repeatCount="indefinite" />
  </rect>
</svg>`;

// 3. The Warp Gate (Dormant vs Active)
export const icon_portal_dormant = `
<svg width="40" height="40">
  <circle cx="20" cy="20" r="15" fill="none" stroke="gray" stroke-width="2" stroke-dasharray="2,2" />
</svg>`;

export const icon_portal_active = `
<svg width="40" height="40">
  <circle cx="20" cy="20" r="15" fill="none" stroke="#FF00FF" stroke-width="3" />
  <circle cx="20" cy="20" r="8" fill="white" opacity="0.6">
    <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
  </circle>
</svg>`;

// 4. The Player Marker (KoL Style @ or Triangle)
export const icon_player = `
<svg width="40" height="40">
  <polygon points="20,10 10,30 30,30" fill="lime" />
</svg>`;
