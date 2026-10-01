import base64

with open('assets/greatvibes.woff2', 'rb') as f:
    woff2_b64 = base64.b64encode(f.read()).decode('ascii')

svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 300" width="100%" height="100%">
  <defs>
    <style>
      @font-face {{
        font-family: 'Great Vibes';
        font-style: normal;
        font-weight: 400;
        src: url(data:font/woff2;charset=utf-8;base64,{woff2_b64}) format('woff2');
      }}

      .neon-script-base {{
        font-family: 'Great Vibes', cursive, 'Brush Script MT', sans-serif;
        font-size: 82px;
        font-weight: 400;
        text-anchor: middle;
        dominant-baseline: central;
      }}

      /* Royal Neon Breathing and Sparkle Animations */
      @keyframes neonBreathe {{
        0%, 100% {{
          filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 8px #facc15) drop-shadow(0 0 22px rgba(234, 179, 8, 0.75)) drop-shadow(0 0 45px rgba(234, 179, 8, 0.45));
          opacity: 0.98;
        }}
        50% {{
          filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 5px #eab308) drop-shadow(0 0 16px rgba(202, 138, 4, 0.6)) drop-shadow(0 0 32px rgba(202, 138, 4, 0.3));
          opacity: 0.92;
        }}
      }}

      @keyframes starTwinkle {{
        0%, 100% {{
          transform: scale(1) rotate(0deg);
          filter: drop-shadow(0 0 4px #ffffff) drop-shadow(0 0 12px #fef08a) drop-shadow(0 0 28px #eab308);
          opacity: 1;
        }}
        50% {{
          transform: scale(1.28) rotate(25deg);
          filter: drop-shadow(0 0 8px #ffffff) drop-shadow(0 0 20px #fde047) drop-shadow(0 0 45px #f59e0b);
          opacity: 0.85;
        }}
      }}

      @keyframes electricGlitch {{
        0%, 93%, 95%, 97%, 100% {{ opacity: 1; }}
        94% {{ opacity: 0.82; }}
        96% {{ opacity: 0.9; }}
      }}

      .neon-group {{
        animation: neonBreathe 3.5s ease-in-out infinite, electricGlitch 8s step-end infinite;
      }}

      .sparkle-star-aziza {{
        transform-origin: 795px 105px;
        animation: starTwinkle 2.8s ease-in-out infinite;
      }}

      .sparkle-star-salim {{
        transform-origin: 644px 105px;
        animation: starTwinkle 3.2s ease-in-out infinite 0.9s;
      }}

      .sparkle-star-left {{
        transform-origin: 180px 95px;
        animation: starTwinkle 3.5s ease-in-out infinite 1.6s;
      }}
    </style>

    <!-- Luxury Multi-stage Neon Filter Bloom -->
    <filter id="neonBloom" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blurSmall" />
      <feGaussianBlur stdDeviation="9" result="blurMid" />
      <feGaussianBlur stdDeviation="22" result="blurLarge" />
      <feMerge>
        <feMergeNode in="blurLarge" />
        <feMergeNode in="blurMid" />
        <feMergeNode in="blurSmall" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <g class="neon-group">
    <g filter="url(#neonBloom)">
      <!-- Outer Golden Aura -->
      <text x="500" y="150" class="neon-script-base" fill="none" stroke="#d97706" stroke-width="12" stroke-opacity="0.35" stroke-linecap="round" stroke-linejoin="round">Mohammad Salim Aziza</text>
      <!-- Vibrant Neon Tube -->
      <text x="500" y="150" class="neon-script-base" fill="none" stroke="#fbbf24" stroke-width="5" stroke-opacity="0.85" stroke-linecap="round" stroke-linejoin="round">Mohammad Salim Aziza</text>
      <!-- Intense White Glass Core -->
      <text x="500" y="150" class="neon-script-base" fill="#ffffff" stroke="#fffbeb" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">Mohammad Salim Aziza</text>
    </g>

    <!-- Sparkle Stars over letter accents -->
    <!-- Star over dot of i in Aziza -->
    <g class="sparkle-star-aziza">
      <path d="M 795,95 L 798.5,103.5 L 807,104 L 800.5,109.5 L 802.5,118 L 795,113 L 787.5,118 L 789.5,109.5 L 778,104 L 791.5,103.5 Z" 
            fill="#ffffff" stroke="#facc15" stroke-width="2" filter="url(#neonBloom)"/>
      <line x1="795" y1="83" x2="795" y2="131" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.8" />
      <line x1="773" y1="107" x2="817" y2="107" stroke="#fff" stroke-width="1.2" stroke-linecap="round" opacity="0.8" />
    </g>

    <!-- Star over dot of i in Salim -->
    <g class="sparkle-star-salim">
      <path d="M 644,95 L 647,102 L 654,102.5 L 649,107 L 650.5,114 L 644,110 L 637.5,114 L 639,107 L 634,102.5 L 641,102 Z" 
            fill="#ffffff" stroke="#facc15" stroke-width="1.6" filter="url(#neonBloom)"/>
    </g>

    <!-- Subtle flourish star at start of Mohammad -->
    <g class="sparkle-star-left">
      <path d="M 180,90 L 182.5,96.5 L 189,97 L 184,101.5 L 185.5,108 L 180,104 L 174.5,108 L 176,101.5 L 171,97 L 177.5,96.5 Z" 
            fill="#ffffff" stroke="#facc15" stroke-width="1.5" filter="url(#neonBloom)"/>
    </g>
  </g>
</svg>"""

with open('assets/signature-neon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print("Successfully written assets/signature-neon.svg with embedded WOFF2 font!")
