/* ==========================================================
   ROMANTIC DREAM PALETTE & DESIGN TOKENS
   ========================================================== */
:root {
  --blush-100: #FFF9FA;
  --blush-200: #FFEAF0;
  --blush-300: #FFD5E2;
  --blush-400: #FCAEC6;
  --rose-accent: #E86488;
  --deep-rose: #532A35;
  --soft-lavender: #ECE4FD;
  --peach-cream: #FFF4EC;
  --ivory-white: #FFFFFC;
  --gold-glow: #F2C979;
  --gold-border: rgba(242, 201, 121, 0.4);

  --glass-bg: rgba(255, 255, 255, 0.65);
  --glass-bg-hover: rgba(255, 255, 255, 0.85);
  --glass-border: rgba(255, 255, 255, 0.8);
  --glass-shadow: 0 16px 48px -12px rgba(232, 100, 136, 0.18), 0 4px 16px rgba(0, 0, 0, 0.03);

  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-cursive: 'Caveat', cursive;
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;

  --transition-smooth: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-bounce: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ==========================================================
   BASE RESET & ACCESSIBILITY
   ========================================================== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

html, body {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background: linear-gradient(135deg, #FFF6F7 0%, #FFF0F4 35%, #FBF0FA 70%, #FFF5ED 100%);
  color: var(--deep-rose);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
}

/* ==========================================================
   CANVAS & AMBIENCE
   ========================================================== */
#ambient-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}

/* ==========================================================
   TOP CONTROLS / NAV BAR
   ========================================================== */
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  z-index: 100;
  pointer-events: none;
}

.top-nav > * {
  pointer-events: auto;
}

.progress-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--glass-border);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--deep-rose);
  box-shadow: 0 4px 14px rgba(232, 100, 136, 0.08);
}

.progress-dot {
  width: 8px;
  height: 8px;
  background: var(--rose-accent);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--rose-accent);
  animation: pulse-dot 2s infinite ease-in-out;
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.35); opacity: 1; }
}

.music-control {
    display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.4rem;             /* Larger tap area and size */
  font-size: 1rem;                      /* Bigger, clearer text */
  font-weight: 600;
  color: #6B2E42;
  cursor: pointer;
  border-radius: 999px;
  
  /* Dreamy glassmorphism + subtle rose-gold border */
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 240, 245, 0.85) 100%);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1.5px solid rgba(242, 201, 121, 0.55);
  
  /* Multi-layered soft glow */
  box-shadow: 
    0 8px 24px -4px rgba(232, 100, 136, 0.25),
    0 2px 8px rgba(242, 201, 121, 0.2),
    inset 0 1px 1px rgba(255, 255, 255, 0.9);
    
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  animation: music-float 3.5s ease-in-out infinite alternate;
}

/* Gentle floating animation */
@keyframes music-float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-3px); }
}


.music-control:hover {
  background: #ffffff;
  transform: translateY(-4px) scale(1.04);
  border-color: var(--rose-accent);
  box-shadow: 
    0 14px 32px -4px rgba(232, 100, 136, 0.4),
    0 0 16px rgba(242, 201, 121, 0.35);
}

.music-control:active {
  transform: scale(0.98);
}

.music-control.playing {
   border-color: #E86488;
  background: linear-gradient(135deg, #FFFFFF 0%, #FFF0F4 100%);
  box-shadow: 
    0 10px 28px -2px rgba(232, 100, 136, 0.45),
    0 0 14px rgba(232, 100, 136, 0.3);
}
.music-icon {
  font-size: 1.25rem;
  color: var(--rose-accent);
  display: inline-block;
  transition: transform 0.3s ease;
}

.music-control.playing .music-icon {
  animation: note-bounce 1.6s ease-in-out infinite;
}

@keyframes note-bounce {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(-10deg) scale(1.15); }
}

/* Text styling */
.music-status {
  letter-spacing: 0.02em;
}


.sound-wave {
   display: inline-flex;
  align-items: flex-end;
  gap: 3px;
  height: 16px;
  padding-left: 2px;
}

.sound-wave span {
  width: 3.5px;
  height: 40%;
  background: linear-gradient(to top, #E86488, #F2C979);
  border-radius: 3px;
  opacity: 0.4;
  transition: height 0.3s ease;
}

.music-control.playing .sound-wave span {
   opacity: 1;
  animation: wave-bounce 1s infinite ease-in-out alternate;
}

.music-control.playing .sound-wave span:nth-child(1) {
  animation-duration: 0.8s;
  animation-delay: 0.1s;
}

.music-control.playing .sound-wave span:nth-child(2) {
  animation-duration: 0.6s;
  animation-delay: 0.25s;
}

.music-control.playing .sound-wave span:nth-child(3) {
  animation-duration: 1.1s;
  animation-delay: 0.4s;
}

@keyframes wave-bounce {
  0% { height: 25%; }
  100% { height: 100%; }
}

/* ==========================================================
   MAIN STAGE WRAPPER
   ========================================================== */
#app-container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.5rem 1.25rem 2.5rem;
  z-index: 10;
}

.stage-section {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.stage-section.hidden {
  display: none !important;
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.stage-section.active {
  display: block !important;
  opacity: 1;
  transform: translateY(0) scale(1);
  animation: enter-stage 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes enter-stage {
  0% {
    opacity: 0;
    transform: translateY(25px) scale(0.97);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* ==========================================================
   GLASSMORPHISM CARDS
   ========================================================== */
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: 28px;
  padding: 3rem 2.2rem;
  position: relative;
  overflow: hidden;
}

@media (max-width: 640px) {
  .glass-card {
    padding: 2.2rem 1.4rem;
    border-radius: 22px;
  }
}

.text-center {
  text-align: center;
}

/* ==========================================================
   TYPOGRAPHY
   ========================================================== */
.sparkle-badge {
  display: inline-block;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--rose-accent);
  background: rgba(254, 213, 226, 0.4);
  padding: 0.35rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.eyebrow {
  font-size: 0.9rem;
  color: var(--rose-accent);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.serif-title {
  font-family: var(--font-serif);
  font-size: 2.3rem;
  line-height: 1.25;
  font-weight: 600;
  color: var(--deep-rose);
  margin-bottom: 1rem;
}

@media (max-width: 640px) {
  .serif-title {
    font-size: 1.85rem;
  }
}

.cursive-sub {
  font-family: var(--font-cursive);
  font-size: 2.4rem;
  line-height: 1.2;
  color: var(--deep-rose);
  margin: 1rem 0;
}

.cursive-quote {
  font-family: var(--font-cursive);
  font-size: 1.85rem;
  line-height: 1.35;
  color: var(--deep-rose);
}

.sub-lead {
  font-size: 1.05rem;
  color: #7A4E59;
  font-weight: 400;
  margin-bottom: 1.8rem;
}

.prompt-text {
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--deep-rose);
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1.25rem;
  color: var(--rose-accent);
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1.8rem;
}

.highlight-text {
  background: linear-gradient(135deg, #DE537C, #B63E63);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ==========================================================
   BUTTONS & INTERACTIONS
   ========================================================== */
.romantic-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.95rem 2rem;
  border-radius: 999px;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: var(--transition-smooth);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.02em;
}

.primary-glow {
  background: linear-gradient(135deg, #F991AF 0%, #EE6E93 100%);
  color: #ffffff;
  box-shadow: 0 10px 25px -4px rgba(238, 110, 147, 0.45), 0 2px 8px rgba(0, 0, 0, 0.04);
}

.primary-glow:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 16px 32px -4px rgba(238, 110, 147, 0.6);
}

.primary-glow:active {
  transform: translateY(-1px) scale(0.99);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.85);
  color: var(--deep-rose);
  border: 1px solid var(--blush-300);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
}

.secondary-btn:hover {
  background: #ffffff;
  border-color: var(--rose-accent);
  transform: translateY(-2px);
}

.pulse-btn {
  animation: soft-pulse-btn 2.8s infinite ease-in-out;
}

@keyframes soft-pulse-btn {
  0%, 100% { box-shadow: 0 8px 24px -4px rgba(238, 110, 147, 0.4); }
  50% { box-shadow: 0 12px 36px 4px rgba(238, 110, 147, 0.7); }
}

.text-link-btn {
  background: none;
  border: none;
  color: #8C5766;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: var(--transition-smooth);
}

.text-link-btn:hover {
  color: var(--rose-accent);
}

.mt-3 { margin-top: 1.25rem; }
.mt-4 { margin-top: 1.75rem; }

/* ==========================================================
   STAGE 1 SPECIFICS
   ========================================================== */
.pulsing-heart-wrap {
  position: relative;
  width: 90px;
  height: 90px;
  margin: 1rem auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ambient-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(252, 174, 198, 0.6) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  animation: pulse-ring 2.2s infinite ease-out;
}

.pulse-icon {
  font-size: 3.2rem;
  color: var(--rose-accent);
  position: relative;
  z-index: 2;
  animation: heartbeat 1.8s infinite ease-in-out;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.18); }
  28% { transform: scale(1); }
  42% { transform: scale(1.15); }
  70% { transform: scale(1); }
}

@keyframes pulse-ring {
  0% { transform: scale(0.6); opacity: 0.9; }
  100% { transform: scale(1.8); opacity: 0; }
}

.fade-in-delay-1 {
  animation: fade-up 1.2s ease 0.8s both;
}

.fade-in-delay-2 {
  animation: fade-up 1.2s ease 1.8s both;
}

@keyframes fade-up {
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* ==========================================================
   STAGE 2: CLOSE EYES CINEMATIC
   ========================================================== */
.curtain-overlay {
  position: fixed;
  inset: 0;
  background: #180D11;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 50;
}

.curtain-overlay.closed {
  opacity: 0.95;
}

.glow-star {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  animation: star-spin 3s infinite ease-in-out;
}

@keyframes star-spin {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(15deg) scale(1.2); }
}

.hidden-animated {
  display: none;
  opacity: 0;
  transform: translateY(15px);
  transition: var(--transition-smooth);
}

.hidden-animated.show {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

/* ==========================================================
   STAGE 3: THE SECRET ENVELOPE
   ========================================================== */
.envelope-wrapper {
  position: relative;
  width: 280px;
  height: 190px;
  margin: 2rem auto;
  perspective: 900px;
  cursor: pointer;
}

.envelope {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.envelope-back {
  position: absolute;
  inset: 0;
  background: #F8B4C8;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(232, 100, 136, 0.25);
}

.envelope-front {
  position: absolute;
  inset: 0;
  z-index: 3;
  clip-path: polygon(0% 100%, 50% 50%, 100% 100%, 0% 100%);
  background: #F39BB6;
  border-radius: 0 0 12px 12px;
}

.envelope::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  clip-path: polygon(0% 0%, 0% 100%, 50% 50%);
  background: #FFAFCA;
  border-radius: 12px 0 0 12px;
}

.envelope::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  clip-path: polygon(100% 0%, 100% 100%, 50% 50%);
  background: #FFAFCA;
  border-radius: 0 12px 12px 0;
}

.envelope-flap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 50% 52%);
  background: #F5A3BD;
  transform-origin: top;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 4;
}

.wax-seal {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 52px;
  height: 52px;
  background: radial-gradient(circle, #E65A84 30%, #C93966 100%);
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  z-index: 5;
  box-shadow: 0 4px 12px rgba(182, 62, 99, 0.5);
  border: 2px dashed rgba(255, 255, 255, 0.4);
  transition: var(--transition-smooth);
}

.envelope-wrapper:hover .wax-seal {
  transform: translate(-50%, -50%) scale(1.1);
}

.envelope-letter {
  position: absolute;
  top: 10px;
  left: 12px;
  right: 12px;
  height: 170px;
  background: #FFFDF9;
  border-radius: 8px;
  padding: 1.5rem 1rem 1rem;
  z-index: 1;
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.letter-stamp {
  position: absolute;
  top: 8px;
  right: 10px;
  color: var(--rose-accent);
  font-size: 1.1rem;
}

.letter-sign {
  font-family: var(--font-cursive);
  font-size: 1.3rem;
  color: var(--rose-accent);
  text-align: right;
}

/* Open State */
.envelope-wrapper.opened .envelope-flap {
  transform: rotateX(180deg);
  z-index: 0;
}

.envelope-wrapper.opened .wax-seal {
  opacity: 0;
  pointer-events: none;
}

.envelope-wrapper.opened .envelope-letter {
  transform: translateY(-90px);
  z-index: 6;
  height: auto;
  min-height: 200px;
  box-shadow: 0 16px 36px rgba(0,0,0,0.14);
}

/* ==========================================================
   STAGE 4: POLAROIDS
   ========================================================== */
.polaroid-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.polaroid-card {
  background: #ffffff;
  padding: 0.9rem 0.9rem 1.4rem;
  border-radius: 6px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  transform: rotate(var(--rotate-deg, 0deg));
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  position: relative;
}

.polaroid-card:hover {
  transform: scale(1.05) rotate(0deg) !important;
  box-shadow: 0 18px 36px rgba(232, 100, 136, 0.25);
  z-index: 5;
}

.polaroid-photo-box {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #FFE8EE, #F8E5F6);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.polaroid-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.polaroid-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: var(--rose-accent);
  padding: 1rem;
  text-align: center;
}

.polaroid-placeholder-icon {
  font-size: 2rem;
}

.polaroid-placeholder-text {
  font-size: 0.8rem;
  font-weight: 500;
  color: #925364;
}

.polaroid-caption {
  margin-top: 1rem;
  font-family: var(--font-cursive);
  font-size: 1.45rem;
  color: var(--deep-rose);
  line-height: 1.2;
}

/* ==========================================================
   STAGE 5: INTERACTIVE ROSES
   ========================================================== */
.roses-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.4rem;
  margin: 2rem 0 1rem;
}

.interactive-rose {
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid var(--blush-300);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  cursor: pointer;
  transition: var(--transition-bounce);
  box-shadow: 0 6px 16px rgba(232, 100, 136, 0.15);
  position: relative;
}

.interactive-rose:hover {
  transform: translateY(-5px) scale(1.1);
  border-color: var(--rose-accent);
  background: #fff;
}

.interactive-rose.picked {
  background: #FFE6EE;
  border-color: #E86488;
  transform: scale(0.95);
  filter: saturate(1.2);
}

.interactive-rose.picked::after {
  content: "✓";
  position: absolute;
  bottom: -2px;
  right: -2px;
  background: var(--rose-accent);
  color: #fff;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.rose-counter-tag {
  font-size: 0.9rem;
  font-weight: 600;
  color: #8C5766;
  margin-top: 0.5rem;
}

.rose-reveal-card {
  margin: 1.5rem auto 0;
  max-width: 440px;
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  border-left: 4px solid var(--rose-accent);
  box-shadow: 0 8px 24px rgba(232, 100, 136, 0.12);
  display: flex;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transform: translateY(10px);
  transition: var(--transition-smooth);
}

.rose-reveal-card.show {
  opacity: 1;
  transform: translateY(0);
}

.rose-quote-icon {
  font-size: 1.8rem;
}

.rose-quote-text {
  font-family: var(--font-serif) !important;
  font-size: 1.55rem;
  font-style: italic;
  font-weight: 500;
  text-align: left;
  line-height: 1.4;
  color: var(--deep-rose);
  letter-spacing: 0.01em;
}

.completed-banner {
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--rose-accent);
  margin-bottom: 1rem;
}

/* ==========================================================
   STAGE 6: THE BIRTHDAY CAKE
   ========================================================== */
.cake-assembly {
  position: relative;
  width: 260px;
  height: 210px;
  margin: 2rem auto 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.cake-slice-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.6s ease;
}

.cake-slice-wrapper.cut {
  transform: translateX(18px) rotate(4deg);
}

.candle-row {
  display: flex;
  gap: 26px;
  margin-bottom: 2px;
}

.candle {
  position: relative;
  width: 10px;
  height: 38px;
  background: repeating-linear-gradient(45deg, #FFF, #FFF 4px, #FFB3C7 4px, #FFB3C7 8px);
  border-radius: 3px 3px 0 0;
}

.candle::before {
  content: "";
  position: absolute;
  top: -7px;
  left: 4px;
  width: 2px;
  height: 7px;
  background: #444;
}

.flame {
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 20px;
  background: radial-gradient(circle, #FFF48F 20%, #FFA834 60%, #FF5A36 90%);
  border-radius: 50% 50% 20% 20% / 60% 60% 40% 40%;
  box-shadow: 0 0 14px #FFA834;
  animation: flicker 0.9s infinite alternate ease-in-out;
  transform-origin: bottom center;
}

.flame.out {
  display: none;
}

.smoke {
  position: absolute;
  top: -24px;
  left: 50%;
  width: 6px;
  height: 6px;
  background: rgba(180, 180, 180, 0.6);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}

.smoke.active {
  animation: smoke-drift 1.4s ease-out forwards;
}

@keyframes flicker {
  0% { transform: translateX(-50%) scale(1) rotate(-2deg); }
  100% { transform: translateX(-50%) scale(1.15) rotate(3deg); }
}

@keyframes smoke-drift {
  0% { opacity: 0.8; transform: translate(-50%, 0) scale(1); }
  100% { opacity: 0; transform: translate(-50%, -40px) scale(3.5); }
}

.cake-tier {
  position: relative;
  background: #FFF7FA;
  border-radius: 12px;
}

.tier-top {
  width: 180px;
  height: 60px;
  background: linear-gradient(to bottom, #FFE8F0 0%, #FFD6E4 100%);
  border: 3px solid #FFF;
  box-shadow: inset 0 6px 0 #FFF;
  position: relative;
  z-index: 2;
  border-radius: 14px 14px 8px 8px;
}

.strawberry {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
}

.tier-bottom {
  width: 230px;
  height: 75px;
  background: linear-gradient(to bottom, #FFCADB 0%, #FCA6C2 100%);
  border: 3px solid #FFF;
  box-shadow: inset 0 8px 0 rgba(255, 255, 255, 0.8);
  margin-top: -6px;
  border-radius: 16px 16px 10px 10px;
  z-index: 1;
}

.cake-plate {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 270px;
  height: 14px;
  background: #FFFFFF;
  border-radius: 20px;
  box-shadow: 0 10px 24px rgba(232, 100, 136, 0.2);
}

/* ==========================================================
   STAGE 7: HEART TOUCH & EMOTIONAL LETTER
   ========================================================== */
.heart-pulse-interactive-btn {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 1.5rem auto;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(232, 100, 136, 0.25);
  transition: transform 0.3s ease;
}

.heart-pulse-interactive-btn:hover {
  transform: scale(1.08);
}

.heart-emoji {
  font-size: 4rem;
  animation: heartbeat 1.5s infinite ease-in-out;
  z-index: 3;
}

.ripple-ring {
  position: absolute;
  inset: 0;
  border: 2px solid var(--rose-accent);
  border-radius: 50%;
  animation: ripple-out 2s infinite cubic-bezier(0.1, 0.8, 0.3, 1);
}

.ripple-ring.delay {
  animation-delay: 1s;
}

@keyframes ripple-out {
  0% { transform: scale(0.9); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}

.caption-hint {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--rose-accent);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.heart-letter-container {
  padding: 1rem 0;
}

.gold-sparkle-row {
  color: var(--gold-glow);
  font-size: 1.1rem;
  letter-spacing: 0.4em;
  margin: 0.8rem 0;
}

.emotional-letter-body {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--deep-rose);
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
}

.emotional-letter-body p {
  margin-bottom: 1.1rem;
}

/* ==========================================================
   STAGE 8: TOO MANY FLOWERS GARDEN
   ========================================================== */
.grand-bday-title {
  font-family: var(--font-serif);
  font-size: 2.6rem;
  line-height: 1.2;
  font-weight: 700;
  background: linear-gradient(135deg, #DE537C, #A72852);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 1rem 0;
}

@media (max-width: 640px) {
  .grand-bday-title {
    font-size: 2rem;
  }
}

.flower-crown-anim {
  font-size: 2.2rem;
  animation: bounce-gentle 2.5s infinite ease-in-out;
}

@keyframes bounce-gentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.celebrate-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  margin: 1.5rem 0;
}

.bubble-tag {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--blush-300);
  padding: 0.45rem 1.1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--deep-rose);
  box-shadow: 0 4px 12px rgba(232, 100, 136, 0.1);
}

/* Floating Flower Storm Container */
.flower-storm-container {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 99;
  overflow: hidden;
}

.floating-petal-storm {
  position: absolute;
  bottom: -40px;
  font-size: 1.8rem;
  opacity: 0.9;
  animation: float-up-petal linear forwards;
}

@keyframes float-up-petal {
  0% {
    transform: translateY(0) rotate(0deg) scale(0.7);
    opacity: 0;
  }
  15% {
    opacity: 0.9;
  }
  100% {
    transform: translateY(-115vh) rotate(360deg) scale(1.2);
    opacity: 0;
  }
}

/* ==========================================================
   STAGE 9: SECRET BUTTON
   ========================================================== */
.danger-zone {
  margin: 2rem 0;
}

.danger-playful-btn {
  background: rgba(255, 255, 255, 0.8);
  border: 2px dashed #E86488;
  color: #C93966;
  font-family: var(--font-sans);
  font-size: 1.05rem;
  font-weight: 600;
  padding: 1rem 2.2rem;
  border-radius: 999px;
  cursor: pointer;
  transition: var(--transition-bounce);
}

.danger-playful-btn:hover {
  background: #FFF0F4;
  transform: rotate(-2deg) scale(1.05);
  border-style: solid;
}

.funny-reaction-emoji {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
}

/* ==========================================================
   STAGE 10: FINAL BLESSINGS
   ========================================================== */
.final-title {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 640px) {
  .final-title {
    font-size: 2.1rem;
  }
}

.lead-blessing {
  font-size: 1.15rem;
  color: #7A4E59;
  margin-bottom: 1.5rem;
}

.blessings-list {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  max-width: 440px;
  margin: 0 auto;
}

.blessing-pill {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(254, 213, 226, 0.7);
  padding: 0.85rem 1.3rem;
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(232, 100, 136, 0.08);
  opacity: 0;
  transform: translateX(-15px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.blessing-pill.show {
  opacity: 1;
  transform: translateX(0);
}

.blessing-icon {
  font-size: 1.4rem;
}

.blessing-text {
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--deep-rose);
}

.final-closing-note {
  font-size: 2.1rem;
  line-height: 1.3;
  color: var(--deep-rose);
  padding: 1rem 0;
}

.made-with-love-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: #8C5766;
  background: rgba(255, 255, 255, 0.6);
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  border: 1px solid var(--glass-border);
}

.beating-heart-inline {
  display: inline-block;
  animation: heartbeat 1.4s infinite ease-in-out;
}

/* ==========================================================
   CURSOR INTERACTIVE HEART TRAILS
   ========================================================== */
.cursor-heart-particle {
  position: fixed;
  pointer-events: none;
  font-size: 1.1rem;
  transform: translate(-50%, -50%);
  animation: cursor-particle-fade 1.1s ease-out forwards;
  z-index: 9999;
}

@keyframes cursor-particle-fade {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.4) translateY(-35px);
  }
}

/* ==========================================================
   REDUCED MOTION SUPPORT
   ========================================================== */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

#music-btn {
  display: none !important;
}
