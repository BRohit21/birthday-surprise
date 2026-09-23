/**
 * ====================================================================
 * ROMANTIC SURPRISE BIRTHDAY EXPERIENCE
 * ====================================================================
 */

const BIRTHDAY_CONFIG = {
  birthdayName: "Shruti",
  senderName: "Rohit",

  secretLetter: `Some people make ordinary days feel special...
You make them unforgettable. ♡`,

  memories: [
    {
      img: "assets/photo1.jpg",
      caption: "That smile...",
      placeholderIcon: "🌸",
      placeholderText: "Add photo1.jpg"
    },
    {
      img: "assets/photo2.jpg",
      caption: "That little moment...",
      placeholderIcon: "✨",
      placeholderText: "Add photo2.jpg"
    },
    {
      img: "assets/photo3.jpg",
      caption: "One of my favorite memories...",
      placeholderIcon: "📸",
      placeholderText: "Add photo3.jpg"
    },
    {
      img: "assets/photo4.jpg",
      caption: "Just you being you ♡",
      placeholderIcon: "💕",
      placeholderText: "Add photo4.jpg"
    }
  ],

  roses: [
    { text: "Your smile is my favorite view. 🌹" },
    { text: "You make ordinary moments feel like magic. ✨" },
    { text: "You're one of the most beautiful parts of my life. ♡" },
    { text: "Keep shining and smiling... always. 💕" }
  ],

  heartMessage: [
    "Dear SHRUTI,",
    "Happy Birthday to someone truly special! 🎂",
    "You are a Sweet Soul, Super Loyal, My Rock, and I'm so grateful to have you in my life.",
    "You bring so much warmth and sweetness into my life. Every moment with you is precious.",
    "On your special day, I wish you all the happiness, love, and joy that you deserve. May this year bring you countless beautiful moments and wonderful memories.",
    "Here's to celebrating you today and always! 🎉",
    "With love and best wishes, Your Rohit ♡"
  ],

  blessings: [
    { icon: "✨", text: "More smiles" },
    { icon: "🌸", text: "More adventures" },
    { icon: "📸", text: "More beautiful memories" },
    { icon: "💕", text: "More happiness" },
    { icon: "❤️", text: "And lots of love" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  injectPersonalization();
  initAmbientCanvas();
  initCursorHearts();
  initStageTransitions();
  initPolaroidWall();
  initRoseGarden();
  initCakeSurprise();
  initHeartSurprise();
  initForbiddenButton();
});

function injectPersonalization() {
  const name = BIRTHDAY_CONFIG.birthdayName;
  const sender = BIRTHDAY_CONFIG.senderName;

  document.title = `A Special Surprise for ${name} ♡`;

  const emotionalHeader = document.getElementById("emotional-name-header");
  if (emotionalHeader) emotionalHeader.textContent = `Happy Birthday, ${name} ❤️`;

  const stage8Title = document.getElementById("stage-8-title");
  if (stage8Title) stage8Title.textContent = `HAPPY BIRTHDAY, ${name.toUpperCase()} 🎉🌸❤️`;

  const finalTitle = document.getElementById("final-bday-title");
  if (finalTitle) finalTitle.textContent = `Happy Birthday, ${name} ❤️`;

  const letterSender = document.getElementById("letter-sender");
  if (letterSender) letterSender.textContent = `Always, ${sender} ♡`;

  const stage3Quote = document.getElementById("stage-3-quote");
  if (stage3Quote) {
    stage3Quote.innerHTML = BIRTHDAY_CONFIG.secretLetter.replace(/\n/g, "<br>");
  }

  const letterBody = document.getElementById("emotional-letter-body");
  if (letterBody) {
    letterBody.innerHTML = "";
    BIRTHDAY_CONFIG.heartMessage.forEach(pText => {
      const p = document.createElement("p");
      p.textContent = pText;
      letterBody.appendChild(p);
    });
  }
}

let currentStageNumber = 1;

const STAGE_NAMES = {
  1: "Prologue",
  2: "Moment of Peace",
  3: "Secret Letter",
  4: "Polaroid Memories",
  5: "Rose Garden",
  6: "Make a Wish",
  7: "Deep Within",
  8: "Celebration",
  9: "Curiosity",
  10: "Final Blessing"
};

function goToStage(targetStageNum) {
  const currentStageEl = document.getElementById(`stage-${currentStageNumber}`);
  const targetStageEl = document.getElementById(`stage-${targetStageNum}`);

  if (!targetStageEl) return;

  if (currentStageEl) {
    currentStageEl.classList.remove("active");
    currentStageEl.classList.add("hidden");
  }

  targetStageEl.classList.remove("hidden");
  void targetStageEl.offsetWidth;
  targetStageEl.classList.add("active");

  currentStageNumber = targetStageNum;

  const progressText = document.querySelector(".progress-text");
  if (progressText) {
    progressText.textContent = `Chapter ${targetStageNum}: ${STAGE_NAMES[targetStageNum] || "Surprise"}`;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (targetStageNum === 8) {
    launchFlowerStorm();
    triggerCelebrationConfetti();
  } else if (targetStageNum === 10) {
    revealFinalBlessings();
    triggerCelebrationConfetti();
  }
}

function initStageTransitions() {
  setTimeout(() => {
    const actionBox = document.getElementById("stage-1-action");
    if (actionBox) actionBox.style.display = "block";
  }, 2200);

  // STAGE 1: Starts audio automatically & navigates to Stage 2
  document.getElementById("btn-to-stage-2")?.addEventListener("click", () => {
    const audio = document.getElementById("bg-audio");
    if (audio) {
      audio.play().catch(err => console.log("Audio play error:", err));
    }
    goToStage(2);
  });

  // STAGE 2: Close Eyes
  const curtain = document.getElementById("curtain-overlay");
  const eyesClosedPrompt = document.getElementById("eyes-closed-prompt");
  const eyesOpenedPrompt = document.getElementById("eyes-opened-prompt");

  document.getElementById("btn-close-eyes")?.addEventListener("click", () => {
    if (curtain) curtain.classList.add("closed");

    setTimeout(() => {
      if (eyesClosedPrompt) eyesClosedPrompt.style.display = "none";
      if (eyesOpenedPrompt) eyesOpenedPrompt.classList.add("show");
      if (curtain) curtain.classList.remove("closed");
      fireSoftSparkles();
    }, 1500);
  });

  document.getElementById("btn-to-stage-3")?.addEventListener("click", () => goToStage(3));

  // STAGE 3: Secret Letter
  const envelope = document.getElementById("envelope-interactive");
  const stage3Action = document.getElementById("stage-3-action");

  envelope?.addEventListener("click", () => {
    if (!envelope.classList.contains("opened")) {
      envelope.classList.add("opened");
      fireSoftSparkles();
      setTimeout(() => {
        if (stage3Action) {
          stage3Action.style.opacity = "1";
          stage3Action.style.pointerEvents = "auto";
        }
      }, 900);
    }
  });

  document.getElementById("btn-to-stage-4")?.addEventListener("click", () => goToStage(4));
  document.getElementById("btn-to-stage-5")?.addEventListener("click", () => goToStage(5));
  document.getElementById("btn-to-stage-6")?.addEventListener("click", () => goToStage(6));
  document.getElementById("btn-to-stage-7")?.addEventListener("click", () => goToStage(7));
  document.getElementById("btn-to-stage-8")?.addEventListener("click", () => goToStage(8));
  document.getElementById("btn-to-stage-9")?.addEventListener("click", () => goToStage(9));
  document.getElementById("btn-to-stage-10")?.addEventListener("click", () => goToStage(10));
  document.getElementById("btn-replay")?.addEventListener("click", () => goToStage(1));
}

function initPolaroidWall() {
  const grid = document.getElementById("polaroid-grid");
  if (!grid) return;

  grid.innerHTML = "";
  const rotations = [-3, 2.5, -2, 3];

  BIRTHDAY_CONFIG.memories.forEach((mem, idx) => {
    const card = document.createElement("div");
    card.className = "polaroid-card";
    card.style.setProperty("--rotate-deg", `${rotations[idx % rotations.length]}deg`);

    const photoBox = document.createElement("div");
    photoBox.className = "polaroid-photo-box";

    const img = document.createElement("img");
    img.className = "polaroid-img";
    img.src = mem.img;
    img.alt = mem.caption;
    img.loading = "lazy";

    const placeholder = document.createElement("div");
    placeholder.className = "polaroid-placeholder";
    placeholder.innerHTML = `
      <span class="polaroid-placeholder-icon">${mem.placeholderIcon}</span>
      <span class="polaroid-placeholder-text">${mem.placeholderText}</span>
    `;

    img.onerror = () => {
      img.remove();
      photoBox.appendChild(placeholder);
    };

    photoBox.appendChild(img);

    const caption = document.createElement("div");
    caption.className = "polaroid-caption";
    caption.textContent = mem.caption;

    card.appendChild(photoBox);
    card.appendChild(caption);
    card.addEventListener("click", () => fireSoftSparkles());
    grid.appendChild(card);
  });
}

function initRoseGarden() {
  const revealBtn = document.getElementById("btn-reveal-roses");
  const bouquetBox = document.getElementById("initial-bouquet-box");
  const rosesField = document.getElementById("roses-field");
  const itemsContainer = document.getElementById("rose-items-container");
  const pickedCounterEl = document.getElementById("roses-picked-count");
  const totalCounterEl = document.getElementById("roses-total-count");
  const popupCard = document.getElementById("rose-message-popup");
  const popupText = document.getElementById("rose-quote-text");
  const completeAction = document.getElementById("stage-5-complete-action");

  let pickedCount = 0;
  const totalRoses = BIRTHDAY_CONFIG.roses.length;
  if (totalCounterEl) totalCounterEl.textContent = totalRoses;

  revealBtn?.addEventListener("click", () => {
    if (bouquetBox) bouquetBox.style.display = "none";
    rosesField?.classList.add("show");
    fireSoftSparkles();
  });

  if (!itemsContainer) return;
  itemsContainer.innerHTML = "";

  BIRTHDAY_CONFIG.roses.forEach((roseData, index) => {
    const roseBtn = document.createElement("button");
    roseBtn.className = "interactive-rose";
    roseBtn.setAttribute("aria-label", `Rose ${index + 1}`);
    roseBtn.innerHTML = "🌹";

    roseBtn.addEventListener("click", () => {
      if (popupText) popupText.textContent = roseData.text;
      if (popupCard) {
        popupCard.classList.remove("show");
        void popupCard.offsetWidth;
        popupCard.classList.add("show");
      }

      if (!roseBtn.classList.contains("picked")) {
        roseBtn.classList.add("picked");
        pickedCount++;
        if (pickedCounterEl) pickedCounterEl.textContent = pickedCount;
        createFloatingRosePetalBurst(roseBtn);

        if (pickedCount === totalRoses) {
          setTimeout(() => {
            completeAction?.classList.add("show");
            triggerCelebrationConfetti();
          }, 600);
        }
      }
    });

    itemsContainer.appendChild(roseBtn);
  });
}

function createFloatingRosePetalBurst(originElement) {
  const rect = originElement.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const petals = ["🌸", "🌹", "✨", "💕"];
  for (let i = 0; i < 6; i++) {
    const petal = document.createElement("span");
    petal.className = "cursor-heart-particle";
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = `${centerX + (Math.random() - 0.5) * 40}px`;
    petal.style.top = `${centerY + (Math.random() - 0.5) * 40}px`;
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 1100);
  }
}

function initCakeSurprise() {
  const blowBtn = document.getElementById("btn-blow-candles");
  const cutBtn = document.getElementById("btn-cut-cake");
  const nextBtn = document.getElementById("btn-to-stage-7");
  const flames = [document.getElementById("flame-1"), document.getElementById("flame-2"), document.getElementById("flame-3")];
  const smokes = [document.getElementById("smoke-1"), document.getElementById("smoke-2"), document.getElementById("smoke-3")];
  const sliceWrapper = document.getElementById("cake-slice-wrapper");
  const cakeTitle = document.getElementById("cake-title");
  const cakeInstruction = document.getElementById("cake-instruction");

  blowBtn?.addEventListener("click", () => {
    flames.forEach(f => f?.classList.add("out"));
    smokes.forEach(s => s?.classList.add("active"));
    if (cakeTitle) cakeTitle.textContent = "Wish made? ♡";
    if (cakeInstruction) cakeInstruction.textContent = "Now, take a sweet slice of celebration.";
    blowBtn.style.display = "none";
    cutBtn?.classList.add("show");
    fireSoftSparkles();
  });

  cutBtn?.addEventListener("click", () => {
    sliceWrapper?.classList.add("cut");
    triggerCelebrationConfetti();
    cutBtn.style.display = "none";
    nextBtn?.classList.add("show");
  });
}

function initHeartSurprise() {
  const heartBtn = document.getElementById("interactive-big-heart");
  const promptBox = document.getElementById("heart-prompt-box");
  const letterBox = document.getElementById("heart-opened-letter");

  heartBtn?.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const heart = document.createElement("span");
        heart.className = "cursor-heart-particle";
        heart.textContent = ["❤️", "💖", "🌸", "✨"][Math.floor(Math.random() * 4)];
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1100);
      }, i * 40);
    }

    if (promptBox) promptBox.style.display = "none";
    letterBox?.classList.add("show");
  });
}

function launchFlowerStorm() {
  const stormContainer = document.getElementById("flower-storm-overlay");
  if (!stormContainer) return;
  const icons = ["🌸", "🌺", "🌷", "🌹", "✨", "💕", "🤍"];

  for (let i = 0; i < 45; i++) {
    setTimeout(() => {
      const petal = document.createElement("div");
      petal.className = "floating-petal-storm";
      petal.textContent = icons[Math.floor(Math.random() * icons.length)];
      petal.style.left = `${Math.random() * 96}vw`;
      petal.style.animationDuration = `${3.5 + Math.random() * 3}s`;
      petal.style.fontSize = `${1.2 + Math.random() * 1.5}rem`;
      stormContainer.appendChild(petal);
      setTimeout(() => petal.remove(), 6500);
    }, i * 90);
  }
}

function revealFinalBlessings() {
  const pills = document.querySelectorAll(".blessing-pill");
  pills.forEach(pill => {
    const delay = parseInt(pill.getAttribute("data-delay") || "600", 10);
    setTimeout(() => pill.classList.add("show"), delay);
  });
}

function initForbiddenButton() {
  const forbiddenBtn = document.getElementById("btn-forbidden");
  const initialBox = document.getElementById("stage-9-initial");
  const revealedBox = document.getElementById("stage-9-revealed");

  forbiddenBtn?.addEventListener("click", () => {
    if (initialBox) initialBox.style.display = "none";
    revealedBox?.classList.add("show");
    fireSoftSparkles();
  });
}

function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleTypes = ["heart", "petal", "dot"];
  const particles = [];

  for (let i = 0; i < 30; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 8 + 6,
      speedY: -(Math.random() * 0.7 + 0.3),
      speedX: (Math.random() - 0.5) * 0.5,
      type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
      opacity: Math.random() * 0.5 + 0.2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02
    });
  }

  function drawHeart(x, y, size, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.fillStyle = `rgba(247, 143, 179, ${opacity})`;
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, -topCurveHeight, -size, size / 3, 0, size);
    ctx.bezierCurveTo(size, size / 3, size / 2, -topCurveHeight, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.y < -20) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;

      if (p.type === "heart") {
        drawHeart(p.x, p.y, p.size, p.opacity);
      } else if (p.type === "petal") {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = `rgba(255, 192, 203, ${p.opacity * 0.8})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size * 0.7, p.size * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else {
        ctx.fillStyle = `rgba(242, 201, 121, ${p.opacity * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

function initCursorHearts() {
  let lastMove = 0;
  const icons = ["♡", "✨", "🌸", "💕"];
  window.addEventListener("pointermove", e => {
    const now = Date.now();
    if (now - lastMove < 70) return;
    lastMove = now;

    const heart = document.createElement("span");
    heart.className = "cursor-heart-particle";
    heart.textContent = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1100);
  });
}

function triggerCelebrationConfetti() {
  if (typeof confetti === "function") {
    confetti({ particleCount: 40, angle: 60, spread: 55, origin: { x: 0, y: 0.7 }, colors: ["#F991AF", "#FFD5E2", "#E8C374", "#FFFFFF"] });
    confetti({ particleCount: 40, angle: 120, spread: 55, origin: { x: 1, y: 0.7 }, colors: ["#F991AF", "#FFD5E2", "#E8C374", "#FFFFFF"] });
  }
}

function fireSoftSparkles() {
  if (typeof confetti === "function") {
    confetti({ particleCount: 25, spread: 60, origin: { y: 0.6 }, colors: ["#FFCADB", "#FFE5EC", "#F2C979"] });
  }
}
