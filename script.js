/* ============================================================
   PSYCHOLOGY PREP HUB — script.js
   Complete Interactive JavaScript System
   ============================================================ */

'use strict';

/* ============================================================
   QUIZ DATA — One quiz per lecture (4 questions each)
   ============================================================ */
const QUIZ_DATA = {
  1: [
    {
      question: "In what year did Wilhelm Wundt open the first psychology laboratory?",
      options: ["1859", "1879", "1899", "1919"],
      correct: 1,
      explanation: "1879 — Wundt's lab in Leipzig, Germany marks the birth of scientific psychology."
    },
    {
      question: "Which perspective argues that behavior is shaped entirely by environmental conditioning?",
      options: ["Humanistic", "Cognitive", "Behaviorism", "Structuralism"],
      correct: 2,
      explanation: "Behaviorism (Skinner, Watson) holds that observable behavior is a product of reinforcement and punishment from the environment."
    },
    {
      question: "Freud's tripartite personality model consists of:",
      options: ["Id, Ego, Persona", "Id, Ego, Superego", "Self, Shadow, Anima", "Child, Parent, Adult"],
      correct: 1,
      explanation: "Freud divided personality into the Id (instinct/pleasure), Ego (reason/reality), and Superego (moral ideal)."
    },
    {
      question: "Which branch of psychology studies how digital technology affects behavior and identity?",
      options: ["Cognitive Psychology", "Developmental Psychology", "Cyberpsychology", "Clinical Psychology"],
      correct: 2,
      explanation: "Cyberpsychology examines how the internet, social media, and digital technology affect human behavior, identity, and mental health."
    }
  ],
  2: [
    {
      question: "What does OCEAN stand for in the Big Five personality model?",
      options: [
        "Openness, Courage, Empathy, Agreeableness, Neuroticism",
        "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
        "Optimism, Conscientiousness, Extraversion, Autonomy, Neuroticism",
        "Openness, Conscientiousness, Empathy, Agreeableness, Narcissism"
      ],
      correct: 1,
      explanation: "OCEAN: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism — the five empirically validated personality dimensions."
    },
    {
      question: "According to Rogers, which three components make up the self?",
      options: [
        "Id, Ego, Superego",
        "Child, Parent, Adult",
        "Ideal Self, Self-Image, Self-Worth",
        "Temperament, Character, Persona"
      ],
      correct: 2,
      explanation: "Rogers identified Ideal Self (who we want to be), Self-Image (who we are now), and Self-Worth (core values) as the three self-components."
    },
    {
      question: "Which temperament type in Eysenck's model is neurotic and extroverted?",
      options: ["Sanguine", "Phlegmatic", "Melancholic", "Choleric"],
      correct: 3,
      explanation: "Choleric = neurotic + extroverted. Sanguine = stable + extroverted; Phlegmatic = stable + introverted; Melancholic = neurotic + introverted."
    },
    {
      question: "By approximately what age does personality generally stabilize?",
      options: ["18", "21", "25", "30"],
      correct: 2,
      explanation: "Personality is dynamic and develops over time, but generally stabilizes by around age 25."
    }
  ],
  3: [
    {
      question: "What are Maslow's five needs in correct order from bottom to top?",
      options: [
        "Safety → Physiological → Belonging → Esteem → Self-Actualization",
        "Physiological → Safety → Belonging → Esteem → Self-Actualization",
        "Physiological → Belonging → Safety → Esteem → Self-Actualization",
        "Esteem → Safety → Belonging → Physiological → Self-Actualization"
      ],
      correct: 1,
      explanation: "Physiological (survival) → Safety → Belonging → Esteem → Self-Actualization — each level must be met before the next motivates."
    },
    {
      question: "What percentage of motivation typically comes from external sources?",
      options: ["50%", "35%", "25%", "15%"],
      correct: 3,
      explanation: "Only about 15% of motivation is external. Internal motivation is far more powerful and sustainable."
    },
    {
      question: "What does ERG stand for in Alderfer's model?",
      options: [
        "Energy, Reward, Growth",
        "Existence, Relatedness, Growth",
        "Esteem, Relatedness, Goals",
        "Existence, Recognition, Goals"
      ],
      correct: 1,
      explanation: "Alderfer's ERG: Existence (physiological + safety), Relatedness (social), Growth (development + actualization) — a continuous cycle."
    },
    {
      question: "In Self-Determination Theory, which three needs power intrinsic motivation?",
      options: [
        "Competence, Relatedness, Autonomy",
        "Mastery, Purpose, Autonomy",
        "Esteem, Relatedness, Freedom",
        "Competence, Recognition, Autonomy"
      ],
      correct: 0,
      explanation: "Deci & Ryan's SDT: Competence (mastery), Relatedness (belonging), and Autonomy (self-direction) are the three basic psychological needs."
    }
  ],
  4: [
    {
      question: "How many basic emotions did Robert Plutchik identify?",
      options: ["4", "6", "8", "10"],
      correct: 2,
      explanation: "Plutchik identified 8 basic emotions in opposite pairs: Anger/Fear, Happiness/Sadness, Surprise/Anticipation, Trust/Disgust."
    },
    {
      question: "Which theory holds that physical reactions precede emotional experience?",
      options: ["Cannon-Bard Theory", "James-Lange Theory", "Plutchik's Evolutionary Theory", "Cognitive Appraisal Theory"],
      correct: 1,
      explanation: "James-Lange: We feel emotions because we experience physical reactions first. 'We are afraid because we tremble — not the reverse.'"
    },
    {
      question: "What are Goleman's 5 components of Emotional Intelligence?",
      options: [
        "Self-Awareness, Self-Regulation, Motivation, Empathy, Social Skills",
        "Self-Awareness, Self-Control, Compassion, Empathy, Communication",
        "Confidence, Self-Regulation, Motivation, Empathy, Social Skills",
        "Self-Awareness, Self-Regulation, Resilience, Empathy, Social Skills"
      ],
      correct: 0,
      explanation: "Goleman's 5: Self-Awareness, Self-Regulation, Motivation, Empathy, and Social Skills."
    },
    {
      question: "How does EQ differ from IQ?",
      options: [
        "IQ is learnable; EQ is fixed at birth",
        "EQ is relatively stable; IQ can be developed",
        "EQ can be developed at any age; IQ is relatively fixed",
        "They are essentially the same concept"
      ],
      correct: 2,
      explanation: "EQ is developable at any age and predicts professional success. IQ is relatively stable and predicts academic performance."
    }
  ],
  5: [
    {
      question: "What does 'psychosomatics' mean?",
      options: [
        "The study of mental illness",
        "Physical symptoms originating from psychological causes",
        "The interaction between sleep and health",
        "Psychological symptoms without physical cause"
      ],
      correct: 1,
      explanation: "Psychosomatics (psyche = mind + soma = body) refers to real physical symptoms that originate from psychological causes such as stress or unresolved emotions."
    },
    {
      question: "What are the three factors of the biopsychosocial model?",
      options: [
        "Biological, Psychological, Spiritual",
        "Behavioral, Psychological, Sociological",
        "Biological, Psychological, Social",
        "Biological, Physiological, Sociocultural"
      ],
      correct: 2,
      explanation: "The biopsychosocial model holds that health results from Biological, Psychological, and Social factors all interacting."
    },
    {
      question: "What does the placebo effect demonstrate?",
      options: [
        "That most medicines are ineffective",
        "That belief alone can produce measurable physical improvement",
        "That the mind and body are completely separate",
        "That psychological treatment always works"
      ],
      correct: 1,
      explanation: "The placebo effect shows that belief alone — without active treatment — can produce measurable, real physical health improvements."
    },
    {
      question: "Which is considered the #1 health risk in modern society?",
      options: ["Poor nutrition", "Lack of exercise", "Stress", "Smoking"],
      correct: 2,
      explanation: "Chronic stress is the leading modern health risk — especially from information overload, social media, and environmental pressures."
    }
  ],
  6: [
    {
      question: "In Transactional Analysis, which social position is described as the healthiest?",
      options: ["Child", "Parent", "Adult", "Neutral"],
      correct: 2,
      explanation: "The Adult position — knowing your own needs, understanding what must be done, and taking personal responsibility — is the healthiest and most conflict-free."
    },
    {
      question: "In the Karpman Drama Triangle, which role compulsively helps others at their own expense?",
      options: ["Victim", "Persecutor", "Rescuer", "Adult"],
      correct: 2,
      explanation: "The Rescuer helps everyone at the expense of their own needs — often harming their own health and relationships in the process."
    },
    {
      question: "How do values and norms relate to each other?",
      options: [
        "Norms create values",
        "Values give rise to norms",
        "They are the same concept",
        "Values and norms are independent"
      ],
      correct: 1,
      explanation: "Values (deep beliefs about what is important) give rise to norms (rules about appropriate behavior). When values change, norms change with them."
    },
    {
      question: "What does the 'Child' position in Transactional Analysis tend to do?",
      options: [
        "Take responsibility for others",
        "Make decisions rationally",
        "Manipulate others to meet needs and avoid responsibility",
        "Lead through example"
      ],
      correct: 2,
      explanation: "The Child position always wants, manipulates others into meeting their needs, and avoids doing things for themselves — leading to high conflict risk."
    }
  ],
  7: [
    {
      question: "What are the 7 C's of effective communication?",
      options: [
        "Clear, Consistent, Considerate, Complete, Relevant, Informative, Trustworthy",
        "Clear, Concise, Considerate, Complete, Respectful, Informative, Trustworthy",
        "Clear, Consistent, Compassionate, Complete, Relevant, Inclusive, Truthful",
        "Clear, Consistent, Considerate, Compelling, Relevant, Informative, Timely"
      ],
      correct: 0,
      explanation: "The 7 C's: Clear, Consistent, Considerate, Complete, Relevant, Informative, Trustworthy."
    },
    {
      question: "Which personality type in communication is focused on detail and careful analysis?",
      options: ["Driver", "Influencer", "Analyst", "Supporter"],
      correct: 2,
      explanation: "The Analyst type is focused on details, careful thinking, and understanding before acting — they want data, not just opinions."
    },
    {
      question: "What percentage of interpersonal communication is non-verbal?",
      options: ["About 5–7%", "About 80–90%", "About 40–50%", "About 60–70%"],
      correct: 1,
      explanation: "Non-verbal communication (body language, gestures, eye contact, space, touch) accounts for approximately 80–90% of understood meaning in interpersonal communication."
    },
    {
      question: "Which is considered the most powerful single communication skill?",
      options: ["Confident speaking", "Active listening", "Clear writing", "Open body posture"],
      correct: 1,
      explanation: "Active listening — fully concentrating on, understanding, and responding to what another person is saying — is the most powerful communication skill."
    }
  ],
  8: [
    {
      question: "Which level of communication involves full two-way exchange between two people?",
      options: ["Object ↔ Object", "Subject → Object", "Subject ↔ Subject", "Group Communication"],
      correct: 2,
      explanation: "Subject ↔ Subject is true interpersonal communication — both parties are active senders and receivers with full two-way feedback."
    },
    {
      question: "How does a team differ from a group?",
      options: [
        "Teams are larger than groups",
        "Groups have more interdependence than teams",
        "Teams have higher interdependence, mutual accountability, and intentional synergy",
        "There is no meaningful difference"
      ],
      correct: 2,
      explanation: "Teams feature higher interdependence, mutual accountability, and intentionally created synergy toward a shared goal — beyond a typical group."
    },
    {
      question: "Why is group communication more challenging than interpersonal communication?",
      options: [
        "Groups use more complex language",
        "You must reach multiple people simultaneously and cannot control each person's interpretation",
        "Groups communicate faster",
        "Groups have less feedback"
      ],
      correct: 1,
      explanation: "Group communication is harder because you must communicate with multiple people simultaneously, each with different interpretive frameworks."
    },
    {
      question: "What is collective intelligence in group communication?",
      options: [
        "The average IQ of group members",
        "A leader's ability to direct the group",
        "Enhanced problem-solving capacity that emerges when a group pools diverse perspectives",
        "The group's ability to avoid conflict"
      ],
      correct: 2,
      explanation: "Collective intelligence emerges when a group combines diverse perspectives — producing ideas and solutions beyond any individual member's capability."
    }
  ],
  9: [
    {
      question: "What are the three types of 'conflict genes'?",
      options: [
        "Thoughts, Feelings, Actions",
        "Words, Actions, Deeds",
        "Verbal, Non-verbal, Written",
        "Interpersonal, Intrapersonal, Intergroup"
      ],
      correct: 1,
      explanation: "Conflict genes are specific triggers: Words (hurtful language), Actions (broken promises), and Deeds (misinterpreted behavior patterns)."
    },
    {
      question: "Which type of conflict occurs within an individual person?",
      options: ["Interpersonal", "Intergroup", "Intrapersonal", "Ideological"],
      correct: 2,
      explanation: "Intrapersonal conflict is internal — when you want or need one thing but must do another. Example: wanting to sleep vs. needing to study."
    },
    {
      question: "Which TA interaction combination allows communication without conflict?",
      options: ["Child + Child", "Parent + Child", "Child + Adult", "Adult + Adult"],
      correct: 3,
      explanation: "Adult + Adult is the only TA combination that enables conflict-free communication — both parties take personal responsibility and understand their own needs."
    },
    {
      question: "What is the key difference between constructive and destructive conflict?",
      options: [
        "Constructive conflict is always physical; destructive is verbal",
        "Constructive seeks mutual understanding; destructive seeks to express position or attack",
        "Destructive conflict is more common",
        "Constructive conflict involves more people"
      ],
      correct: 1,
      explanation: "Constructive conflict = parties seek mutual understanding with neutral language. Destructive conflict = parties only aim to express anger or assert position."
    }
  ],
  10: [
    {
      question: "According to Viktor Frankl, what is the primary human motivation?",
      options: ["The pursuit of pleasure", "The will to power", "The search for meaning", "The need for safety"],
      correct: 2,
      explanation: "Frankl's logotherapy holds that the primary motivational force in humans is the search for meaning — not pleasure (Freud) or power (Adler)."
    },
    {
      question: "What are Frankl's three sources of meaning?",
      options: [
        "Love, Work, Creativity",
        "Family, Work, Helping Others",
        "Relationships, Achievement, Spirituality",
        "Competence, Relatedness, Autonomy"
      ],
      correct: 1,
      explanation: "Frankl identified Family, Work, and Helping Others as the three sources of meaning — with helping others being the most enduring."
    },
    {
      question: "What are the three needs in Self-Determination Theory?",
      options: [
        "Confidence, Relatedness, Autonomy",
        "Competence, Recognition, Autonomy",
        "Competence, Relatedness, Autonomy",
        "Competence, Relatedness, Achievement"
      ],
      correct: 2,
      explanation: "Deci & Ryan's SDT: Competence (mastery), Relatedness (belonging), and Autonomy (self-direction) are the three basic psychological needs for well-being."
    },
    {
      question: "What is Rukhani Zhangyru?",
      options: [
        "A Kazakhstani psychological disorder",
        "Kazakhstan's national spiritual and cultural revival program",
        "A type of conflict resolution technique",
        "A personality assessment test"
      ],
      correct: 1,
      explanation: "Rukhani Zhangyru is Kazakhstan's national program for spiritual and cultural revival — inspiring self-determination through stories of remarkable people."
    }
  ]
};

/* ============================================================
   MAIN INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initCollapsibles();
  initProgressTracker();
  initLectureCompletion();
  initSearch();
  initFilters();
  initFlashcards();
  initQuiz();
  initBackToTop();
  initRevealAnimations();
  injectToolbar();
});

/* ============================================================
   1. THEME TOGGLE
   ============================================================ */
function initTheme() {
  const body = document.querySelector('[data-theme]') || document.body;
  const saved = localStorage.getItem('psych-theme') || 'dark';

  applyTheme(saved, body);

  // Inject toggle button into header
  const headerInner = document.querySelector('.header-inner');
  if (!headerInner) return;

  const btn = document.createElement('button');
  btn.id = 'theme-toggle';
  btn.className = 'theme-toggle-btn';
  btn.setAttribute('aria-label', 'Toggle dark/light mode');
  btn.title = 'Toggle theme';
  btn.innerHTML = saved === 'dark' ? '☀️' : '🌙';
  btn.style.cssText = `
    background: var(--accent-soft);
    border: 1px solid var(--border);
    color: var(--text-primary);
    border-radius: 8px;
    padding: 0.4rem 0.65rem;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s;
    margin-left: 0.5rem;
    flex-shrink: 0;
  `;

  btn.addEventListener('click', () => {
    const current = body.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next, body);
    btn.innerHTML = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('psych-theme', next);
  });

  headerInner.appendChild(btn);
}

function applyTheme(theme, body) {
  body.setAttribute('data-theme', theme);
}

/* ============================================================
   2. SIDEBAR NAVIGATION
   ============================================================ */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link[data-lecture-id]');
  const lectureSections = document.querySelectorAll('.lecture-section[data-lecture]');
  const navToggle = document.getElementById('nav-toggle');
  const sidebar = document.getElementById('sidebar');

  if (!navLinks.length) return;

  // Smooth scroll on click
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update active immediately
        setActiveNav(link.getAttribute('data-lecture-id'));
        // On mobile, close sidebar
        if (window.innerWidth <= 900 && sidebar) {
          sidebar.classList.remove('sidebar-open');
        }
      }
    });
  });

  // Active highlight while scrolling via IntersectionObserver
  if (lectureSections.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-lecture');
          if (id) setActiveNav(id);
        }
      });
    }, {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    });

    lectureSections.forEach(sec => observer.observe(sec));
  }

  // Mobile toggle
  if (navToggle && sidebar) {
    navToggle.addEventListener('click', () => {
      const open = sidebar.classList.toggle('sidebar-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Inject mobile toggle button into header for small screens
    const headerInner = document.querySelector('.header-inner');
    if (headerInner) {
      const mobileBtn = document.createElement('button');
      mobileBtn.id = 'mobile-nav-btn';
      mobileBtn.setAttribute('aria-label', 'Open navigation');
      mobileBtn.innerHTML = '☰';
      mobileBtn.style.cssText = `
        display: none;
        background: var(--accent-soft);
        border: 1px solid var(--border);
        color: var(--text-primary);
        border-radius: 8px;
        padding: 0.4rem 0.65rem;
        cursor: pointer;
        font-size: 1.1rem;
        transition: all 0.2s;
      `;

      const updateVisibility = () => {
        mobileBtn.style.display = window.innerWidth <= 900 ? 'block' : 'none';
      };
      updateVisibility();
      window.addEventListener('resize', updateVisibility);

      mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-open');
      });

      // Insert before theme toggle if present
      const themeBtn = document.getElementById('theme-toggle');
      if (themeBtn) {
        headerInner.insertBefore(mobileBtn, themeBtn);
      } else {
        headerInner.appendChild(mobileBtn);
      }
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', e => {
      if (window.innerWidth <= 900 && sidebar.classList.contains('sidebar-open')) {
        if (!sidebar.contains(e.target) && e.target.id !== 'mobile-nav-btn') {
          sidebar.classList.remove('sidebar-open');
        }
      }
    });
  }

  // Mark studied state in nav
  restoreNavStudiedState();
}

function setActiveNav(lectureId) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const active = document.querySelector(`.nav-link[data-lecture-id="${lectureId}"]`);
  if (active) active.classList.add('active');
}

function restoreNavStudiedState() {
  const studied = getStudiedLectures();
  studied.forEach(id => {
    const navItem = document.querySelector(`.nav-item[data-lecture="${id}"]`);
    if (navItem) navItem.classList.add('nav-studied');

    const label = document.querySelector(`.nav-link[data-lecture-id="${id}"] .nav-number`);
    if (label && !label.querySelector('.nav-check')) {
      const check = document.createElement('span');
      check.className = 'nav-check';
      check.textContent = ' ✓';
      check.style.color = 'var(--accent-3)';
      check.style.fontSize = '0.6rem';
      label.appendChild(check);
    }
  });
}

/* ============================================================
   3. COLLAPSIBLE SECTIONS
   ============================================================ */
function initCollapsibles() {
  // Make lecture blocks collapsible (except header blocks)
  const blocks = document.querySelectorAll('.lecture-block');
  blocks.forEach(block => {
    const titleEl = block.querySelector('.block-title');
    if (!titleEl) return;

    // Add collapse toggle
    const toggle = document.createElement('button');
    toggle.className = 'collapse-toggle';
    toggle.setAttribute('aria-label', 'Toggle section');
    toggle.innerHTML = '−';
    toggle.style.cssText = `
      background: var(--accent-soft);
      border: 1px solid var(--border);
      color: var(--accent);
      border-radius: 6px;
      padding: 0.1rem 0.4rem;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 700;
      line-height: 1;
      transition: all 0.2s;
      margin-left: 0.5rem;
      flex-shrink: 0;
    `;

    titleEl.style.cursor = 'pointer';
    titleEl.appendChild(toggle);

    // Content wrapper
    const content = document.createElement('div');
    content.className = 'block-content';
    content.style.cssText = `
      overflow: hidden;
      transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
      max-height: 9999px;
      opacity: 1;
    `;

    // Move all siblings after title into content
    const children = Array.from(block.children).slice(1);
    children.forEach(c => content.appendChild(c));
    block.appendChild(content);

    let collapsed = false;

    const toggleCollapse = () => {
      collapsed = !collapsed;
      if (collapsed) {
        const h = content.scrollHeight;
        content.style.maxHeight = h + 'px';
        requestAnimationFrame(() => {
          content.style.maxHeight = '0px';
          content.style.opacity = '0';
        });
        toggle.innerHTML = '+';
        toggle.setAttribute('aria-label', 'Expand section');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
        setTimeout(() => { content.style.maxHeight = '9999px'; }, 350);
        toggle.innerHTML = '−';
        toggle.setAttribute('aria-label', 'Collapse section');
      }
    };

    titleEl.addEventListener('click', toggleCollapse);
    toggle.addEventListener('click', e => { e.stopPropagation(); toggleCollapse(); });
  });
}

/* ============================================================
   4. LECTURE COMPLETION — Mark as Studied
   ============================================================ */
function initLectureCompletion() {
  const sections = document.querySelectorAll('.lecture-section[data-lecture]');
  const studied = getStudiedLectures();

  sections.forEach(section => {
    const id = section.getAttribute('data-lecture');
    const header = section.querySelector('.lecture-header');
    if (!header) return;

    // Create button
    const btn = document.createElement('button');
    btn.className = 'mark-studied-btn';
    btn.setAttribute('data-lecture-btn', id);
    btn.style.cssText = `
      margin-top: 0.75rem;
      padding: 0.45rem 1rem;
      border-radius: 100px;
      border: 1px solid var(--border-strong);
      background: var(--surface-2);
      color: var(--text-secondary);
      font-size: 0.78rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      letter-spacing: 0.03em;
    `;

    const updateBtn = (isStudied) => {
      if (isStudied) {
        btn.innerHTML = '✅ Studied';
        btn.style.background = 'var(--accent-3-soft)';
        btn.style.borderColor = 'var(--accent-3)';
        btn.style.color = 'var(--accent-3)';
        section.classList.add('section-studied');
      } else {
        btn.innerHTML = '☐ Mark as Studied';
        btn.style.background = 'var(--surface-2)';
        btn.style.borderColor = 'var(--border-strong)';
        btn.style.color = 'var(--text-secondary)';
        section.classList.remove('section-studied');
      }
    };

    updateBtn(studied.includes(id));

    btn.addEventListener('click', () => {
      const current = getStudiedLectures();
      let next;
      if (current.includes(id)) {
        next = current.filter(x => x !== id);
      } else {
        next = [...current, id];
      }
      saveStudiedLectures(next);
      updateBtn(next.includes(id));
      updateDashboard();
      restoreNavStudiedState();
      applyFilterState();
    });

    const headerText = header.querySelector('.lecture-header-text');
    if (headerText) {
      headerText.appendChild(btn);
    } else {
      header.appendChild(btn);
    }
  });
}

function getStudiedLectures() {
  try {
    return JSON.parse(localStorage.getItem('psych-studied') || '[]');
  } catch {
    return [];
  }
}

function saveStudiedLectures(arr) {
  localStorage.setItem('psych-studied', JSON.stringify(arr));
}

/* ============================================================
   5 & 6. PROGRESS TRACKER & DASHBOARD COUNTERS
   ============================================================ */
function initProgressTracker() {
  updateDashboard();
}

function updateDashboard() {
  const total = document.querySelectorAll('.lecture-section[data-lecture]').length;
  const studied = getStudiedLectures();
  const completed = studied.length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  setEl('total-lectures', total);
  setEl('completed-lectures', completed);
  setEl('study-progress', `${pct}%`);

  const bar = document.getElementById('progress-bar');
  if (bar) {
    bar.style.width = `${pct}%`;
    const indicator = bar.closest('.progress-indicator');
    if (indicator) {
      indicator.setAttribute('aria-valuenow', pct);
    }
  }

  // Update quiz score in dashboard
  const scores = getAllQuizScores();
  const totalScores = Object.values(scores);
  if (totalScores.length > 0) {
    const avg = Math.round(totalScores.reduce((a, b) => a + b, 0) / totalScores.length);
    setEl('quiz-score', `${avg}%`);
  }
}

function setEl(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function getAllQuizScores() {
  try {
    return JSON.parse(localStorage.getItem('psych-quiz-scores') || '{}');
  } catch {
    return {};
  }
}

function saveQuizScore(lectureId, pct) {
  const scores = getAllQuizScores();
  scores[lectureId] = pct;
  localStorage.setItem('psych-quiz-scores', JSON.stringify(scores));
  updateDashboard();
}

/* ============================================================
   7. SEARCH FUNCTIONALITY
   ============================================================ */
let searchActive = false;

function initSearch() {
  // Inject search bar
  const toolbar = ensureToolbar();

  const searchWrapper = document.createElement('div');
  searchWrapper.style.cssText = `
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    max-width: 360px;
    position: relative;
  `;

  const input = document.createElement('input');
  input.type = 'search';
  input.id = 'global-search';
  input.placeholder = '🔍 Search lectures, concepts, scholars…';
  input.setAttribute('aria-label', 'Search all content');
  input.style.cssText = `
    width: 100%;
    padding: 0.45rem 0.85rem;
    border: 1px solid var(--border-strong);
    border-radius: 100px;
    background: var(--surface-2);
    color: var(--text-primary);
    font-size: 0.82rem;
    outline: none;
    transition: all 0.2s;
    font-family: inherit;
  `;

  input.addEventListener('focus', () => {
    input.style.borderColor = 'var(--accent)';
    input.style.boxShadow = '0 0 0 3px var(--accent-soft)';
  });
  input.addEventListener('blur', () => {
    input.style.borderColor = 'var(--border-strong)';
    input.style.boxShadow = 'none';
  });

  const clearBtn = document.createElement('button');
  clearBtn.textContent = '✕';
  clearBtn.style.cssText = `
    position: absolute;
    right: 0.6rem;
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    font-size: 0.75rem;
    display: none;
    padding: 0.2rem;
  `;

  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearSearch();
    clearBtn.style.display = 'none';
    input.focus();
  });

  let debounceTimer;
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const q = input.value.trim();
      clearBtn.style.display = q ? 'block' : 'none';
      if (q.length >= 2) {
        doSearch(q);
      } else {
        clearSearch();
      }
    }, 200);
  });

  searchWrapper.appendChild(input);
  searchWrapper.appendChild(clearBtn);
  toolbar.appendChild(searchWrapper);
}

function doSearch(query) {
  searchActive = true;
  const q = query.toLowerCase();
  const sections = document.querySelectorAll('.lecture-section');
  let totalMatches = 0;

  // Clear old highlights
  removeHighlights();

  sections.forEach(section => {
    const text = section.textContent.toLowerCase();
    if (text.includes(q)) {
      section.style.display = '';
      highlightInEl(section, query);
      totalMatches++;
    } else {
      section.style.display = 'none';
    }
  });

  // Show dashboard + refs always
  document.querySelectorAll('.dashboard, .reference-section').forEach(el => {
    el.style.display = '';
  });

  showSearchStatus(totalMatches, query);

  // Scroll to first visible result
  const first = document.querySelector('.lecture-section[style=""]') ||
                document.querySelector('.lecture-section:not([style*="none"])');
  if (first && totalMatches > 0) {
    setTimeout(() => first.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
}

function clearSearch() {
  searchActive = false;
  removeHighlights();
  document.querySelectorAll('.lecture-section').forEach(el => {
    el.style.display = '';
  });
  removeSearchStatus();
  applyFilterState();
}

function highlightInEl(el, query) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
  const q = query.toLowerCase();
  const nodes = [];

  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.toLowerCase().includes(q)) {
      nodes.push(node);
    }
  }

  nodes.forEach(textNode => {
    const parent = textNode.parentNode;
    if (!parent || parent.nodeName === 'SCRIPT' || parent.nodeName === 'STYLE') return;
    if (parent.classList && parent.classList.contains('search-highlight')) return;

    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    const frag = document.createDocumentFragment();
    const parts = textNode.nodeValue.split(regex);

    parts.forEach(part => {
      if (part.toLowerCase() === query.toLowerCase()) {
        const mark = document.createElement('mark');
        mark.className = 'search-highlight';
        mark.style.cssText = `
          background: rgba(251,191,36,0.35);
          color: inherit;
          border-radius: 3px;
          padding: 0 2px;
        `;
        mark.textContent = part;
        frag.appendChild(mark);
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    });

    parent.replaceChild(frag, textNode);
  });
}

function removeHighlights() {
  document.querySelectorAll('.search-highlight').forEach(el => {
    const parent = el.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(el.textContent), el);
      parent.normalize();
    }
  });
}

function showSearchStatus(count, query) {
  removeSearchStatus();
  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  const status = document.createElement('div');
  status.id = 'search-status';
  status.role = 'status';
  status.style.cssText = `
    padding: 0.6rem 1rem;
    background: var(--accent-soft);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-sm);
    font-size: 0.82rem;
    color: var(--accent);
    margin-bottom: 1rem;
  `;
  status.textContent = count > 0
    ? `Found "${query}" in ${count} lecture${count !== 1 ? 's' : ''}`
    : `No results for "${query}"`;

  mainContent.insertBefore(status, mainContent.firstChild);
}

function removeSearchStatus() {
  const el = document.getElementById('search-status');
  if (el) el.remove();
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ============================================================
   8. LECTURE FILTERING
   ============================================================ */
let currentFilter = 'all';

function initFilters() {
  const toolbar = ensureToolbar();

  const filterGroup = document.createElement('div');
  filterGroup.style.cssText = `
    display: flex;
    gap: 0.35rem;
    align-items: center;
  `;

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'completed', label: '✅ Done' },
    { value: 'incomplete', label: '○ To Study' }
  ];

  filters.forEach(f => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.setAttribute('data-filter', f.value);
    btn.textContent = f.label;
    btn.style.cssText = `
      padding: 0.35rem 0.75rem;
      border-radius: 100px;
      border: 1px solid var(--border);
      background: var(--surface-2);
      color: var(--text-secondary);
      font-size: 0.75rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      white-space: nowrap;
    `;

    if (f.value === 'all') {
      btn.style.background = 'var(--accent)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'var(--accent)';
    }

    btn.addEventListener('click', () => {
      currentFilter = f.value;
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.style.background = 'var(--surface-2)';
        b.style.color = 'var(--text-secondary)';
        b.style.borderColor = 'var(--border)';
      });
      btn.style.background = 'var(--accent)';
      btn.style.color = '#fff';
      btn.style.borderColor = 'var(--accent)';
      applyFilterState();
    });

    filterGroup.appendChild(btn);
  });

  toolbar.appendChild(filterGroup);
}

function applyFilterState() {
  if (searchActive) return; // Search overrides filters

  const studied = getStudiedLectures();
  const sections = document.querySelectorAll('.lecture-section[data-lecture]');

  sections.forEach(section => {
    const id = section.getAttribute('data-lecture');
    const isStudied = studied.includes(id);

    if (currentFilter === 'all') {
      section.style.display = '';
    } else if (currentFilter === 'completed') {
      section.style.display = isStudied ? '' : 'none';
    } else if (currentFilter === 'incomplete') {
      section.style.display = !isStudied ? '' : 'none';
    }
  });
}

/* ============================================================
   9. FLASHCARD MODE
   ============================================================ */
function initFlashcards() {
  const decks = document.querySelectorAll('.flashcard-deck');

  decks.forEach(deck => {
    const lectureId = deck.closest('[data-lecture-flashcards]')?.getAttribute('data-lecture-flashcards');
    const cards = Array.from(deck.querySelectorAll('.flashcard'));
    if (!cards.length) return;

    // Mark deck ready
    deck.setAttribute('data-deck-ready', 'true');

    // Build interactive deck UI
    const container = deck.closest('.flashcard-section');
    const placeholder = container?.querySelector('.flashcard-placeholder-text');

    // Hide CSS-only cards, build interactive version
    deck.style.display = 'none';

    const ui = document.createElement('div');
    ui.className = 'fc-ui';
    ui.style.cssText = 'margin-top: 0.5rem;';

    let currentIdx = 0;
    let flipped = false;
    let shuffled = false;
    let cardOrder = cards.map((_, i) => i);

    // Restore progress
    const savedIdx = parseInt(localStorage.getItem(`psych-fc-${lectureId}`) || '0', 10);
    if (!isNaN(savedIdx) && savedIdx < cards.length) currentIdx = savedIdx;

    // Card display area
    const cardDisplay = document.createElement('div');
    cardDisplay.style.cssText = `
      background: var(--surface-2);
      border: 1px solid rgba(96,165,250,0.3);
      border-radius: var(--radius);
      padding: 1.5rem;
      min-height: 110px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
      transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
      position: relative;
      perspective: 800px;
    `;

    const cardInner = document.createElement('div');
    cardInner.style.cssText = `
      transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
      transform-style: preserve-3d;
      width: 100%;
    `;

    const frontFace = document.createElement('div');
    frontFace.style.cssText = 'font-size: 0.92rem; font-weight: 600; color: var(--text-primary); line-height: 1.6; padding: 0.5rem;';

    const backFace = document.createElement('div');
    backFace.style.cssText = `
      font-size: 0.85rem;
      color: var(--text-secondary);
      line-height: 1.65;
      padding: 0.5rem;
      display: none;
    `;

    cardInner.appendChild(frontFace);
    cardInner.appendChild(backFace);
    cardDisplay.appendChild(cardInner);

    // Counter
    const counter = document.createElement('div');
    counter.style.cssText = `
      font-size: 0.72rem;
      color: var(--text-muted);
      position: absolute;
      top: 0.6rem; right: 0.75rem;
      font-family: var(--font-mono, monospace);
    `;
    cardDisplay.appendChild(counter);

    // Hint
    const hint = document.createElement('p');
    hint.style.cssText = 'font-size: 0.72rem; color: var(--text-muted); text-align: center; margin: 0.4rem 0 0.6rem;';
    hint.textContent = 'Click card to reveal answer';

    // Controls
    const controls = document.createElement('div');
    controls.style.cssText = 'display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.6rem;';

    const makeCtrlBtn = (label, title) => {
      const b = document.createElement('button');
      b.textContent = label;
      b.title = title;
      b.style.cssText = `
        padding: 0.35rem 0.75rem;
        border-radius: 100px;
        border: 1px solid var(--border);
        background: var(--surface-2);
        color: var(--text-secondary);
        font-size: 0.78rem;
        cursor: pointer;
        transition: all 0.2s;
      `;
      b.addEventListener('mouseenter', () => { b.style.background = 'var(--accent-soft)'; b.style.borderColor = 'var(--accent)'; b.style.color = 'var(--accent)'; });
      b.addEventListener('mouseleave', () => { b.style.background = 'var(--surface-2)'; b.style.borderColor = 'var(--border)'; b.style.color = 'var(--text-secondary)'; });
      return b;
    };

    const prevBtn = makeCtrlBtn('← Prev', 'Previous card');
    const nextBtn = makeCtrlBtn('Next →', 'Next card');
    const shuffleBtn = makeCtrlBtn('🔀 Shuffle', 'Shuffle cards');

    const renderCard = () => {
      const realIdx = cardOrder[currentIdx];
      const card = cards[realIdx];
      frontFace.textContent = card.getAttribute('data-front') || '';
      backFace.textContent = card.getAttribute('data-back') || '';
      counter.textContent = `${currentIdx + 1} / ${cards.length}`;

      // Reset flip
      flipped = false;
      frontFace.style.display = 'block';
      backFace.style.display = 'none';
      cardDisplay.style.background = 'var(--surface-2)';
      cardDisplay.style.borderColor = 'rgba(96,165,250,0.3)';
      hint.textContent = 'Click card to reveal answer';

      // Save progress
      if (lectureId) localStorage.setItem(`psych-fc-${lectureId}`, currentIdx);
    };

    cardDisplay.addEventListener('click', () => {
      flipped = !flipped;
      if (flipped) {
        frontFace.style.display = 'none';
        backFace.style.display = 'block';
        cardDisplay.style.background = 'var(--color-flashcard-soft, rgba(96,165,250,0.08))';
        cardDisplay.style.borderColor = 'var(--color-flashcard, #60a5fa)';
        hint.textContent = 'Click again to flip back';
      } else {
        frontFace.style.display = 'block';
        backFace.style.display = 'none';
        cardDisplay.style.background = 'var(--surface-2)';
        cardDisplay.style.borderColor = 'rgba(96,165,250,0.3)';
        hint.textContent = 'Click card to reveal answer';
      }
    });

    prevBtn.addEventListener('click', () => {
      currentIdx = (currentIdx - 1 + cards.length) % cards.length;
      renderCard();
    });

    nextBtn.addEventListener('click', () => {
      currentIdx = (currentIdx + 1) % cards.length;
      renderCard();
    });

    shuffleBtn.addEventListener('click', () => {
      shuffled = !shuffled;
      if (shuffled) {
        cardOrder = shuffleArray([...Array(cards.length).keys()]);
        shuffleBtn.style.background = 'var(--accent-soft)';
        shuffleBtn.style.borderColor = 'var(--accent)';
        shuffleBtn.style.color = 'var(--accent)';
      } else {
        cardOrder = [...Array(cards.length).keys()];
        shuffleBtn.style.background = 'var(--surface-2)';
        shuffleBtn.style.borderColor = 'var(--border)';
        shuffleBtn.style.color = 'var(--text-secondary)';
      }
      currentIdx = 0;
      renderCard();
    });

    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    controls.appendChild(shuffleBtn);

    ui.appendChild(cardDisplay);
    ui.appendChild(hint);
    ui.appendChild(controls);

    deck.parentNode.insertBefore(ui, deck.nextSibling);
    if (placeholder) placeholder.style.display = 'none';

    renderCard();
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ============================================================
   10. MINI QUIZ MODE
   ============================================================ */
function initQuiz() {
  const containers = document.querySelectorAll('.quiz-container[data-lecture-quiz]');

  containers.forEach(container => {
    const lectureId = container.getAttribute('data-lecture-quiz');
    const questions = QUIZ_DATA[parseInt(lectureId, 10)];
    if (!questions) return;

    const wrapper = container.querySelector('.quiz-questions-wrapper');
    const resultArea = container.querySelector('.quiz-result-area');
    if (!wrapper) return;

    wrapper.setAttribute('data-quiz-ready', 'true');

    // Build quiz UI
    let currentQ = 0;
    let score = 0;
    let answered = false;

    const buildQuiz = () => {
      wrapper.innerHTML = '';
      currentQ = 0;
      score = 0;
      answered = false;
      if (resultArea) resultArea.innerHTML = '';
      renderQuestion();
    };

    const renderQuestion = () => {
      wrapper.innerHTML = '';
      const q = questions[currentQ];
      if (!q) return;

      // Progress bar
      const progressWrap = document.createElement('div');
      progressWrap.style.cssText = 'display:flex; gap:0.3rem; margin-bottom:0.85rem;';
      questions.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.style.cssText = `
          flex: 1;
          height: 4px;
          border-radius: 100px;
          background: ${i < currentQ ? 'var(--color-quiz)' : i === currentQ ? 'var(--accent)' : 'var(--border)'};
          transition: background 0.3s;
        `;
        progressWrap.appendChild(dot);
      });
      wrapper.appendChild(progressWrap);

      // Question number
      const qNum = document.createElement('div');
      qNum.style.cssText = 'font-size:0.68rem; font-weight:700; color:var(--color-quiz); letter-spacing:0.06em; margin-bottom:0.4rem; text-transform:uppercase;';
      qNum.textContent = `Question ${currentQ + 1} of ${questions.length}`;
      wrapper.appendChild(qNum);

      // Question text
      const qText = document.createElement('p');
      qText.style.cssText = 'font-size:0.92rem; font-weight:600; color:var(--text-primary); line-height:1.6; margin-bottom:0.85rem;';
      qText.textContent = q.question;
      wrapper.appendChild(qText);

      // Options
      const optList = document.createElement('div');
      optList.style.cssText = 'display:flex; flex-direction:column; gap:0.4rem;';

      q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.textContent = opt;
        btn.style.cssText = `
          padding: 0.6rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border);
          background: var(--surface-2);
          color: var(--text-secondary);
          font-size: 0.84rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          line-height: 1.5;
        `;

        btn.addEventListener('mouseenter', () => {
          if (!answered) {
            btn.style.borderColor = 'var(--accent)';
            btn.style.background = 'var(--accent-soft)';
            btn.style.color = 'var(--accent)';
          }
        });
        btn.addEventListener('mouseleave', () => {
          if (!answered && btn.style.background !== 'var(--color-quiz-soft)') {
            btn.style.borderColor = 'var(--border)';
            btn.style.background = 'var(--surface-2)';
            btn.style.color = 'var(--text-secondary)';
          }
        });

        btn.addEventListener('click', () => {
          if (answered) return;
          answered = true;

          const isCorrect = i === q.correct;
          if (isCorrect) score++;

          // Color all options
          Array.from(optList.children).forEach((b, j) => {
            b.style.cursor = 'default';
            if (j === q.correct) {
              b.style.borderColor = 'var(--color-quiz)';
              b.style.background = 'rgba(52,211,153,0.12)';
              b.style.color = 'var(--color-quiz)';
              b.style.fontWeight = '600';
            } else if (j === i && !isCorrect) {
              b.style.borderColor = 'var(--color-exam)';
              b.style.background = 'rgba(244,114,182,0.1)';
              b.style.color = 'var(--color-exam)';
            } else {
              b.style.opacity = '0.55';
            }
          });

          // Explanation
          const exp = document.createElement('div');
          exp.style.cssText = `
            margin-top: 0.75rem;
            padding: 0.65rem 0.9rem;
            background: ${isCorrect ? 'rgba(52,211,153,0.1)' : 'rgba(244,114,182,0.1)'};
            border: 1px solid ${isCorrect ? 'var(--color-quiz)' : 'var(--color-exam)'};
            border-radius: var(--radius-sm);
            font-size: 0.82rem;
            color: ${isCorrect ? 'var(--color-quiz)' : 'var(--color-exam)'};
            line-height: 1.6;
          `;
          exp.innerHTML = `<strong>${isCorrect ? '✓ Correct!' : '✗ Incorrect.'}</strong> ${q.explanation}`;
          wrapper.appendChild(exp);

          // Next / Finish button
          const nextBtn = document.createElement('button');
          nextBtn.style.cssText = `
            margin-top: 0.75rem;
            padding: 0.5rem 1.1rem;
            border-radius: 100px;
            border: 1px solid var(--accent);
            background: var(--accent);
            color: #fff;
            font-size: 0.82rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: block;
            margin-left: auto;
          `;

          const isLast = currentQ === questions.length - 1;
          nextBtn.textContent = isLast ? 'See Results →' : 'Next Question →';
          nextBtn.addEventListener('click', () => {
            if (isLast) {
              showQuizResults(lectureId, score, questions.length, wrapper, resultArea, buildQuiz);
            } else {
              currentQ++;
              answered = false;
              renderQuestion();
            }
          });
          wrapper.appendChild(nextBtn);
        });

        optList.appendChild(btn);
      });

      wrapper.appendChild(optList);
    };

    buildQuiz();
  });
}

function showQuizResults(lectureId, score, total, wrapper, resultArea, retryFn) {
  const pct = Math.round((score / total) * 100);
  saveQuizScore(lectureId, pct);

  wrapper.innerHTML = '';

  const result = document.createElement('div');
  result.style.cssText = 'text-align: center; padding: 1.25rem;';

  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
  const msg = pct >= 80 ? 'Excellent work!' : pct >= 60 ? 'Good effort!' : 'Keep studying!';

  result.innerHTML = `
    <div style="font-size:2.5rem; margin-bottom:0.5rem;">${emoji}</div>
    <div style="font-family:var(--font-display,serif); font-size:1.5rem; color:var(--text-primary); margin-bottom:0.25rem;">${score}/${total}</div>
    <div style="font-size:1rem; color:var(--color-quiz); font-weight:700; margin-bottom:0.4rem;">${pct}%</div>
    <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">${msg}</div>
  `;

  const retryBtn = document.createElement('button');
  retryBtn.textContent = '↺ Try Again';
  retryBtn.style.cssText = `
    padding: 0.45rem 1rem;
    border-radius: 100px;
    border: 1px solid var(--accent);
    background: var(--accent-soft);
    color: var(--accent);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  `;
  retryBtn.addEventListener('click', retryFn);
  result.appendChild(retryBtn);

  wrapper.appendChild(result);

  if (resultArea) {
    resultArea.innerHTML = `<span style="color:var(--color-quiz); font-size:0.8rem;">Last score: ${pct}% — saved to dashboard</span>`;
  }
}

/* ============================================================
   11. BACK TO TOP BUTTON
   ============================================================ */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.title = 'Back to top';
  btn.innerHTML = '↑';
  btn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid var(--border-strong);
    background: var(--surface-glass, rgba(26,34,54,0.85));
    color: var(--accent);
    font-size: 1.1rem;
    cursor: pointer;
    box-shadow: var(--shadow);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    opacity: 0;
    transform: translateY(12px) scale(0.9);
    transition: opacity 0.3s, transform 0.3s;
    pointer-events: none;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  `;

  document.body.appendChild(btn);

  const updateVisibility = () => {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.transform = show ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.9)';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  };

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btn.addEventListener('mouseenter', () => {
    btn.style.background = 'var(--accent)';
    btn.style.color = '#fff';
    btn.style.borderColor = 'var(--accent)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.background = 'var(--surface-glass, rgba(26,34,54,0.85))';
    btn.style.color = 'var(--accent)';
    btn.style.borderColor = 'var(--border-strong)';
  });
}

/* ============================================================
   12. REVEAL ANIMATIONS (IntersectionObserver)
   ============================================================ */
function initRevealAnimations() {
  // Prefer reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll(
    '.lecture-block, .scholar-card, .concept-card, .example-card, .dashboard-card, .glossary-item'
  );

  // Add initial state
  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.05
  });

  targets.forEach(el => observer.observe(el));
}

/* ============================================================
   TOOLBAR UTILITY — shared toolbar injected below header
   ============================================================ */
let _toolbar = null;

function ensureToolbar() {
  if (_toolbar) return _toolbar;

  const mainContent = document.getElementById('main-content');
  if (!mainContent) {
    _toolbar = document.createElement('div');
    return _toolbar;
  }

  _toolbar = document.createElement('div');
  _toolbar.id = 'study-toolbar';
  _toolbar.role = 'toolbar';
  _toolbar.setAttribute('aria-label', 'Study tools');
  _toolbar.style.cssText = `
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    margin-bottom: 0.5rem;
    position: sticky;
    top: var(--header-height);
    z-index: 50;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  `;

  mainContent.insertBefore(_toolbar, mainContent.firstChild);
  return _toolbar;
}

function injectToolbar() {
  // Called last — toolbar already created by search/filter inits
  // Add any final toolbar items (e.g., export, reset)
  const toolbar = _toolbar;
  if (!toolbar) return;

  // Reset progress button (small/subtle)
  const resetBtn = document.createElement('button');
  resetBtn.title = 'Reset all study progress';
  resetBtn.textContent = '↺ Reset';
  resetBtn.style.cssText = `
    padding: 0.35rem 0.65rem;
    border-radius: 100px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-muted);
    font-size: 0.72rem;
    cursor: pointer;
    transition: all 0.2s;
    margin-left: auto;
    white-space: nowrap;
  `;
  resetBtn.addEventListener('mouseenter', () => {
    resetBtn.style.color = 'var(--color-exam)';
    resetBtn.style.borderColor = 'var(--color-exam)';
  });
  resetBtn.addEventListener('mouseleave', () => {
    resetBtn.style.color = 'var(--text-muted)';
    resetBtn.style.borderColor = 'var(--border)';
  });
  resetBtn.addEventListener('click', () => {
    if (confirm('Reset all study progress, quiz scores, and flashcard positions?')) {
      localStorage.removeItem('psych-studied');
      localStorage.removeItem('psych-quiz-scores');
      for (let i = 1; i <= 10; i++) {
        localStorage.removeItem(`psych-fc-${i}`);
      }
      location.reload();
    }
  });
  toolbar.appendChild(resetBtn);
}
