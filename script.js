/**
 * Dr. Varsha’s Ayurvedic Treatment Center & Sanctuary
 * Interactive Prototype Logic & User Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initAnnouncement();
  initMobileDrawer();
  initTreatmentFilters();
  initFaqAccordion();
});

// ===================================================================
// 1. HEADER & NAVIGATION BEHAVIORS
// ===================================================================

function initHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initAnnouncement() {
  const bar = document.getElementById('announcementBar');
  const closeBtn = document.getElementById('closeAnnouncement');
  if (!bar || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    bar.style.display = 'none';
  });
}

function initMobileDrawer() {
  const toggle = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('closeDrawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggle || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  window.closeMobileDrawer = closeDrawer;
}

function scrollToElement(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ===================================================================
// 2. TREATMENT CATEGORY FILTERS
// ===================================================================

function initTreatmentFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.treatment-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Treatment Details Data
const treatmentDetails = {
  shirodhara: {
    title: "Shirodhara Neurological & Mind Therapy",
    sanskrit: "शिरोधारा • Medicated Herbal Stream",
    tag: "SIGNATURE NERVOUS THERAPY",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    duration: "60 – 75 Mins",
    dosha: "Pacifies Vata & Pitta Doshas",
    desc: `Shirodhara is revered in classical Charaka Samhita as the pinnacle therapy for mind exhaustion, neurological tension, and sleep disturbances. The patient reclines on a carved teakwood Droni bed in a dimly lit, silent treatment chamber. A specially formulated, lukewarm medicated herbal stream flows continuously across the third-eye chakra (Ajna) in rhythmic oscillations, triggering deep alpha-wave relaxation.`,
    ingredients: [
      "Ksheerabala Tailam (101 times processed medicated herbal milk-oil)",
      "Brahmi Ghrita (Infused with organic Bacopa Monnieri)",
      "Chandana (Red and White Sandalwood cooling extract)",
      "Dashamoola decoction (Ten precious wild roots)"
    ],
    benefits: [
      "Eliminates mental exhaustion, anxiety, and sympathetic nervous strain",
      "Profound relief for chronic tension migraines and cluster headaches",
      "Restores restful, deep slow-wave REM sleep architecture",
      "Improves memory recall, mental acuity, and sensory clarity"
    ]
  },
  abhyanga: {
    title: "Classical Abhyanga & Herbal Swedana",
    sanskrit: "अभ्यङ्ग व स्वेदन • Synchronized Body Therapy",
    tag: "FOUNDATION CELLULAR CARE",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80",
    duration: "75 – 90 Mins",
    dosha: "Tridoshic (Vata, Pitta, Kapha Rebalancing)",
    desc: `Abhyanga is far more than physical massage—it is the classical application of warm, medicinal botanical oils along the 107 Marma energy nodes and lymphatic channels. Administered by two synchronized therapists using rhythmic, long-stroke techniques, it deeply nourishes the seven bodily tissues (Sapta Dhatus). Followed by medicated steam (Swedana) inside an aromatic cedar box to induce gentle cellular perspiration.`,
    ingredients: [
      "Dhanwantharam Thailam (classical recipe with 40+ botanical roots)",
      "Bala (Sida cordifolia) for neuromuscular rejuvenation",
      "Cold-pressed black sesame oil cured with triphala",
      "Eucalyptus and Camphor leaves for aromatic steam expansion"
    ],
    benefits: [
      "Stimulates systemic lymphatic drainage and clears cellular stagnation",
      "Enhances skin luster, collagen flexibility, and muscle tone",
      "Dissolves joint stiffness, muscle spasms, and fatigue",
      "Strengthens the physiological immune barrier (Ojas)"
    ]
  },
  panchakarma: {
    title: "Panchakarma Shodhana Retreat Protocol",
    sanskrit: "पञ्चकर्म • Complete 5-Fold Cellular Purification",
    tag: "PRIMARY CLINICAL PROGRAM",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
    duration: "7, 14, or 21 Day Immersion",
    dosha: "Deep Doshic Purge (Vata, Pitta, Kapha Reset)",
    desc: `The crown jewel of Ayurvedic medicine. Panchakarma is an authentic, physician-supervised clinical detoxification that safely extracts metabolic toxins (Ama) from deep tissue matrices. It follows strict classical phases: Purva Karma (internal oleation with medicinal ghees and steam), Pradhana Karma (therapeutic elimination including Virechana, Basti, and Nasya), and Paschat Karma (Rasayana longevity rebuild).`,
    ingredients: [
      "Custom Guggulu preparations and Mahatiktaka Ghrita",
      "Bespoke Kashayams (concentrated medicinal herbal teas)",
      "Kashaya Basti & Sneha Basti herbal decoction enemas",
      "Chyawanprash and Ashwagandha Rasayana for final rehabilitation"
    ],
    benefits: [
      "Reverses chronic digestive inflammation, IBS, and metabolic sluggishness",
      "Stabilizes autoimmune reactions and supports hormonal balance",
      "Re-kindles biological metabolic fire (Agni) for enduring energy",
      "Provides measurable biological age reversal and vitality"
    ]
  },
  basti: {
    title: "Kati & Janu Basti Spinal & Joint Elixir",
    sanskrit: "कटि व जानु बस्ति • Medicated Warm Oil Retention",
    tag: "JOINT & SPINE RESTORATION",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    duration: "60 Mins",
    dosha: "Pacifies Aggravated Vata in Joints & Bones",
    desc: `Designed specifically for degenerative joint disorders, spinal disc compression, and chronic localized pain. An airtight reservoir made of organic black gram and herbal flour is molded directly over the lower lumbar spine (Kati) or knees (Janu). Warm, anti-inflammatory medicated oil is poured and held at constant therapeutic temperature for 45 minutes, allowing herbal principles to permeate deeply into cartilage and spinal ligaments.`,
    ingredients: [
      "Mahanarayana Thailam (renowned classical joint lubricant)",
      "Sahacharadi Thailam (specialized for lower limb circulation & nerves)",
      "Murivenna (ancient healing oil for soft tissue inflammation)",
      "Nirgundi and Rasna extracts"
    ],
    benefits: [
      "Alleviates lumbar spondylosis, sciatica, and radiating nerve irritation",
      "Improves synovial fluid nourishment in arthritic knees",
      "Relieves rigid muscle spasms and morning spinal stiffness",
      "Promotes tissue repair in degenerating intervertebral discs"
    ]
  },
  udvartana: {
    title: "Udvartana Herbal Scrub & Agni Awakening",
    sanskrit: "उद्वर्तन • Upward Lymphatic Herbal Rub",
    tag: "METABOLISM & DETOX",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    duration: "75 Mins",
    dosha: "Kapha Pacifying & Meda Dhatu (Fat) Reduction",
    desc: `Udvartana is an invigorating therapeutic body treatment performed with finely ground medicinal herbal powders rubbed in upward strokes opposite to hair follicle direction. By stimulating subcutaneous micro-capillaries and lymphatic pathways, it dissolves stagnant Kapha and softens stubborn water retention while gently exfoliating the skin to a satiny finish.`,
    ingredients: [
      "Triphala Churna (Amalaki, Haritaki, Bibhitaki)",
      "Kolakulathadi Churna (anti-inflammatory grain-herb formula)",
      "Barley (Yava) and Chickpea flours infused with Curcuma",
      "Dashamoola dry root powders"
    ],
    benefits: [
      "Stimulates sluggish basal metabolic rate and promotes circulation",
      "Aids in natural detoxification and cellulite smoothing",
      "Clears physical heaviness, water retention, and seasonal lethargy",
      "Leaves skin silky smooth, deeply toned, and radiant"
    ]
  },
  facial: {
    title: "Soundarya & Mukha Lepam Herbal Facial",
    sanskrit: "मुखलेपम् • Classical Saffron & Botanical Radiance",
    tag: "HOLISTIC BEAUTY & RADIANCE",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    duration: "60 Mins",
    dosha: "Pitta Pacifying & Skin Rejuvenation",
    desc: `In classical Ayurveda, external skin glow (Soundarya) is the direct reflection of balanced Pitta and pure blood (Rakta Dhatu). This ceremonial facial begins with a gentle cleanse using raw milk and rose water, followed by delicate marma point acupressure with Kumkumadi saffron nectar. An artisanal herbal paste (Lepam) of wild red sandalwood, lodhra, and vetiver is applied to soothe inflammation and unveil natural luminescence.`,
    ingredients: [
      "Pure Kashmiri Kumkumadi Tailam (authentic saffron elixir)",
      "Rakta Chandana (Wild Red Sandalwood)",
      "Lodhra and Manjistha roots for clear micro-pigmentation",
      "Distilled organic Kannauj Rosa Damascena water"
    ],
    benefits: [
      "Diminishes hyperpigmentation, redness, and sun damage",
      "Releases deep tension stored in facial marma points and jaw",
      "Provides intense, biological cellular hydration",
      "Restores effortless natural radiance without chemical peel trauma"
    ]
  }
};

let currentModalTreatmentKey = '';

function openTreatmentModal(key) {
  const data = treatmentDetails[key];
  if (!data) return;

  currentModalTreatmentKey = key;
  const modal = document.getElementById('treatmentModal');
  if (!modal) return;

  document.getElementById('treatmentModalImg').src = data.image;
  document.getElementById('treatmentModalImg').alt = data.title;
  document.getElementById('treatmentModalTag').textContent = data.tag;
  document.getElementById('treatmentModalTitle').textContent = data.title;
  document.getElementById('treatmentModalSanskrit').textContent = data.sanskrit;
  document.getElementById('treatmentModalDuration').textContent = data.duration;
  document.getElementById('treatmentModalDosha').textContent = data.dosha;
  document.getElementById('treatmentModalDesc').textContent = data.desc;

  // Ingredients
  const ingList = document.getElementById('treatmentModalIngredients');
  ingList.innerHTML = '';
  data.ingredients.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ingList.appendChild(li);
  });

  // Benefits
  const benList = document.getElementById('treatmentModalBenefits');
  benList.innerHTML = '';
  data.benefits.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    benList.appendChild(li);
  });

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeTreatmentModal() {
  const modal = document.getElementById('treatmentModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function bookFromTreatmentModal() {
  closeTreatmentModal();
  const treatmentName = treatmentDetails[currentModalTreatmentKey]?.title || 'Diagnostic Consultation';
  openBookingModal(treatmentName);
}

// Close modals when clicking backdrop
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    closeBookingModal();
    closeTreatmentModal();
    closeArticleModal();
  }
});

// ===================================================================
// 3. INTERACTIVE DOSHA ASSESSMENT QUIZ
// ===================================================================

const quizAnswers = {
  1: null,
  2: null,
  3: null,
  4: null
};

function selectQuizOption(step, dosha) {
  quizAnswers[step] = dosha;

  const currentSlide = document.querySelector(`.quiz-question-slide[data-step="${step}"]`);
  const nextSlide = document.querySelector(`.quiz-question-slide[data-step="${step + 1}"]`);
  const progressFill = document.getElementById('quizProgressFill');
  const stepIndicator = document.getElementById('quizStepIndicator');

  if (nextSlide) {
    if (currentSlide) currentSlide.classList.remove('active');
    nextSlide.classList.add('active');

    const progressPct = ((step) / 4) * 100 + 10;
    if (progressFill) progressFill.style.width = `${progressPct}%`;
    if (stepIndicator) stepIndicator.textContent = `Question ${step + 1} of 4`;
  } else {
    // Reached end of questions, calculate result
    if (currentSlide) currentSlide.classList.remove('active');
    calculateAndShowDoshaResult();
  }
}

function calculateAndShowDoshaResult() {
  const progressFill = document.getElementById('quizProgressFill');
  const stepIndicator = document.getElementById('quizStepIndicator');
  if (progressFill) progressFill.style.width = '100%';
  if (stepIndicator) stepIndicator.textContent = 'Assessment Completed';

  // Count doshas
  let scores = { vata: 0, pitta: 0, kapha: 0 };
  Object.values(quizAnswers).forEach(val => {
    if (val && scores[val] !== undefined) scores[val]++;
  });

  const total = Object.values(quizAnswers).filter(Boolean).length || 4;
  let vataPct = Math.round((scores.vata / total) * 100) || 33;
  let pittaPct = Math.round((scores.pitta / total) * 100) || 33;
  let kaphaPct = 100 - (vataPct + pittaPct);
  if (kaphaPct < 0) kaphaPct = 0;

  // Determine dominant
  let dominant = 'vata';
  if (scores.pitta > scores.vata && scores.pitta >= scores.kapha) dominant = 'pitta';
  else if (scores.kapha > scores.vata && scores.kapha > scores.pitta) dominant = 'kapha';

  const titleEl = document.getElementById('dominantDoshaTitle');
  const summaryEl = document.getElementById('doshaSummaryText');
  const recTitleEl = document.getElementById('recTherapyTitle');
  const recTextEl = document.getElementById('recTherapyText');

  document.getElementById('vataPct').textContent = `${vataPct}%`;
  document.getElementById('pittaPct').textContent = `${pittaPct}%`;
  document.getElementById('kaphaPct').textContent = `${kaphaPct}%`;

  document.getElementById('vataFill').style.width = `${vataPct}%`;
  document.getElementById('pittaFill').style.width = `${pittaPct}%`;
  document.getElementById('kaphaFill').style.width = `${kaphaPct}%`;

  if (dominant === 'vata') {
    titleEl.textContent = 'Dominant Profile: Vata Constitution (Air & Ether)';
    summaryEl.innerHTML = `Your answers indicate a dominant <strong>Vata</strong> pattern. You are gifted with quick creativity, intuitive perception, and lively enthusiasm. When under prolonged stress, your subtle energy dries out, leading to restless sleep, racing thoughts, lower back tension, and delicate digestion.`;
    recTitleEl.textContent = 'Prescribed Restorative Sanctuary Protocol:';
    recTextEl.innerHTML = `<strong>Shirodhara with Warm Ksheerabala Tailam</strong> combined with <strong>Synchronized Warm Abhyanga</strong> and a grounded, cooked diet rich in ghee, cumin, and nourishing soups. Avoid excessive cold, raw foods, and erratic schedules.`;
  } else if (dominant === 'pitta') {
    titleEl.textContent = 'Dominant Profile: Pitta Constitution (Fire & Water)';
    summaryEl.innerHTML = `Your responses reflect a strong <strong>Pitta</strong> influence. You possess sharp intellect, focused drive, and an efficient metabolic furnace (Agni). When overheated, you may experience acid reflux, skin irritation, tension in the temples, and irritability under pressure.`;
    recTitleEl.textContent = 'Prescribed Restorative Sanctuary Protocol:';
    recTextEl.innerHTML = `<strong>Cooling Takradhara (Medicated Buttermilk Stream)</strong>, <strong>Soundarya & Mukha Lepam with Sandalwood & Saffron</strong>, and gentle Pitta-clearing herbs. Enjoy sweet, cooling, mildly spiced foods like coconut, cucumber, and cilantro.`;
  } else {
    titleEl.textContent = 'Dominant Profile: Kapha Constitution (Earth & Water)';
    summaryEl.innerHTML = `Your responses demonstrate a grounding <strong>Kapha</strong> constitution. You embody stability, stamina, compassionate patience, and physical resilience. When imbalanced, you may experience heavy lethargy, water retention, slow sluggish digestion, and resistance to change.`;
    recTitleEl.textContent = 'Prescribed Restorative Sanctuary Protocol:';
    recTextEl.innerHTML = `<strong>Udvartana Invigorating Herbal Powder Scrub</strong> followed by <strong>Herbal Steam Swedana</strong> to stimulate lymphatic circulation, kindle the digestive fire, and dispel heaviness. Light, warm, pungent foods and invigorating morning walks will serve you best.`;
  }

  const resultView = document.getElementById('quizResultView');
  if (resultView) resultView.classList.add('active');
}

function resetQuiz() {
  quizAnswers[1] = null;
  quizAnswers[2] = null;
  quizAnswers[3] = null;
  quizAnswers[4] = null;

  document.querySelectorAll('.quiz-question-slide').forEach(slide => slide.classList.remove('active'));
  const firstSlide = document.querySelector('.quiz-question-slide[data-step="1"]');
  if (firstSlide) firstSlide.classList.add('active');

  const resultView = document.getElementById('quizResultView');
  if (resultView) resultView.classList.remove('active');

  const progressFill = document.getElementById('quizProgressFill');
  const stepIndicator = document.getElementById('quizStepIndicator');
  if (progressFill) progressFill.style.width = '25%';
  if (stepIndicator) stepIndicator.textContent = 'Question 1 of 4';
}

function openBookingWithDosha() {
  const dominant = document.getElementById('dominantDoshaTitle')?.textContent || 'Constitutional Consultation';
  openBookingModal(`Diagnostic Assessment (${dominant})`);
}

// ===================================================================
// 4. BOOKING MODAL & FLOW
// ===================================================================

function openBookingModal(preselectedTreatment = '') {
  const modal = document.getElementById('bookingModal');
  const select = document.getElementById('treatmentSelection');
  const formSection = document.getElementById('bookingFormSection');
  const confirmSection = document.getElementById('bookingConfirmationSection');

  if (!modal) return;

  if (formSection) formSection.style.display = 'block';
  if (confirmSection) confirmSection.style.display = 'none';

  if (preselectedTreatment && select) {
    let found = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(preselectedTreatment.toLowerCase()) ||
          select.options[i].value.toLowerCase().includes(preselectedTreatment.toLowerCase())) {
        select.selectedIndex = i;
        found = true;
        break;
      }
    }
    if (!found) {
      select.options[0].text = `Consultation: ${preselectedTreatment}`;
      select.selectedIndex = 0;
    }
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

function handleBookingSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('patientName')?.value || 'Guest';
  const treatmentSelect = document.getElementById('treatmentSelection');
  const treatmentName = treatmentSelect?.options[treatmentSelect.selectedIndex]?.text || 'Diagnostic Consultation';
  const dateVal = document.getElementById('preferredDate')?.value || 'Upcoming Date';
  const timeVal = document.getElementById('preferredTime')?.value || 'Morning Slot';

  const confirmName = document.getElementById('confirmName');
  const confirmTreatment = document.getElementById('confirmTreatment');
  const confirmDateTime = document.getElementById('confirmDateTime');

  if (confirmName) confirmName.textContent = name;
  if (confirmTreatment) confirmTreatment.textContent = treatmentName;
  if (confirmDateTime) confirmDateTime.textContent = `${dateVal} • ${timeVal}`;

  const formSection = document.getElementById('bookingFormSection');
  const confirmSection = document.getElementById('bookingConfirmationSection');

  if (formSection) formSection.style.display = 'none';
  if (confirmSection) confirmSection.style.display = 'block';

  showToast(`Appointment request received for ${name}.`);
}

// ===================================================================
// 5. JOURNAL ARTICLES MODAL
// ===================================================================

const articlesData = {
  agni: {
    title: "The Science of Circadian Agni: Why Eating With the Sun Heals Your Gut",
    meta: "By Dr. Varsha (BAMS, MD) • 5 min read • Published in Vedic Insights",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>In classical Ayurvedic physiology, the digestive fire is termed <strong>Agni</strong>. Agni is not merely stomach acid; it is the fundamental biological intelligence responsible for cellular transformation, enzyme production, and nutrient absorption.</p>
      
      <h3>The Biological Rhythm of Digestion</h3>
      <p>Classical texts observed millennia ago what chronobiology validates today: our digestive enzyme output peaks precisely when the sun reaches its zenith (between 12:00 PM and 1:30 PM). When you eat your largest meal at midday, Agni functions effortlessly, assimilating nutrients without leaving metabolic residue.</p>
      
      <p>Conversely, when modern work routines lead us to consume large dinners after sunset, Agni is biologically dormant. Unprocessed food stagnates in the gut, forming <em>Ama</em>—a cold, sticky metabolic endotoxin that classical Ayurveda identifies as the root precursor to chronic inflammation, joint aches, and autoimmune vulnerability.</p>

      <h3>Three Simple Practices to Re-kindle Your Agni</h3>
      <p>1. <strong>Sip Warm Water with Fresh Ginger:</strong> Ten minutes before meals, take a thin slice of fresh ginger sprinkled with pink Himalayan salt. This stimulates salivary secretion and primes the stomach lining.</p>
      <p>2. <strong>Light, Early Suppers:</strong> Conclude dinner by 7:30 PM, prioritizing warm spiced soups, steamed vegetables, and well-cooked mung dal over cold salads or heavy fried proteins.</p>
      <p>3. <strong>Vajrasana Posture:</strong> Sit in the kneeling thunderbolt posture for just 7 minutes post-meal to direct arterial blood flow to the digestive organs.</p>
    `
  },
  dinacharya: {
    title: "The Sacred Art of Dinacharya: 5 Morning Rituals for Steady Mental Flow",
    meta: "By Dr. Varsha (BAMS, MD) • 4 min read • Published in Vedic Insights",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>The Sanskrit word <em>Dinacharya</em> translates as 'flowing with the day.' It represents a conscious morning sequence that aligns our internal biological clocks with nature's diurnal cycle.</p>

      <h3>1. Tongue Scraping with Pure Copper (Jihwa Nirlekhana)</h3>
      <p>During the night, your lymphatic and digestive systems expel metabolic toxins onto the surface of the tongue. Scraping the tongue gently from back to front removes bacterial plaque and stimulates reflex nerve points linked to the liver and stomach.</p>

      <h3>2. Oil Pulling (Gandusha)</h3>
      <p>Swishing one tablespoon of warm, organic cold-pressed sesame oil for 5 to 10 minutes strengthens the gums, draws out fat-soluble oral toxins, and activates salivary enzymes without stripping natural oral flora.</p>

      <h3>3. Warm Water Flush (Ushapan)</h3>
      <p>Drink two glasses of warm water before eating. This gently wakes peristalsis, clears nocturnal mucus from the esophagus, and hydrates tissues after eight hours of sleep.</p>

      <h3>4. Nasal Lubrication (Pratimarsha Nasya)</h3>
      <p>The nose is described as the doorway to the brain (<em>Nasa hi Shiraso Dvaram</em>). Applying two drops of warm Anu Tailam or pure ghee into each nostril shields the respiratory tract against allergens and calms the mental faculty.</p>
    `
  },
  'shirodhara-science': {
    title: "Shirodhara Explained: How Continuous Warm Oil Calms Alpha Waves in the Brain",
    meta: "By Dr. Varsha (BAMS, MD) • 6 min read • Published in Vedic Insights",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&q=80",
    content: `
      <p>To witness a classical Shirodhara session is to witness medicine transformed into art. A hand-beaten bronze urn suspended from a wooden frame streams warm, herb-infused oil in an unbroken pendulum rhythm across the forehead.</p>

      <h3>The Neuro-Physiological Cascade</h3>
      <p>Clinical studies examining brain wave activity during Shirodhara demonstrate a rapid transition from hyper-vigilant Beta waves (characteristic of modern anxiety and screen overstimulation) into deep, restorative Alpha and Theta wave states.</p>

      <p>The continuous, gentle hydraulic pressure on the forehead stimulates the trigeminal and facial nerve endings, triggering the release of serotonin and endorphins. This profoundly down-regulates the sympathetic fight-or-flight nervous system, allowing the parasympathetic nervous system to conduct deep cellular repair.</p>

      <h3>Why Oil Quality is Paramount</h3>
      <p>At our center, Shirodhara is never performed with plain carrier oil. We prepare classical <em>Ksheerabala 101</em> or <em>Brahmi Thailam</em>, simmered with over thirty wildcrafted herbs. The lipid-soluble botanical phytonutrients cross the transdermal capillary barrier, nourishing neurological tissues directly.</p>
    `
  }
};

function openArticleModal(articleKey) {
  const data = articlesData[articleKey];
  if (!data) return;

  const modal = document.getElementById('articleModal');
  const container = document.getElementById('articleModalContent');
  if (!modal || !container) return;

  container.innerHTML = `
    <div class="article-header">
      <h2 class="article-modal-title">${data.title}</h2>
      <div class="article-modal-meta">${data.meta}</div>
    </div>
    <img src="${data.image}" alt="${data.title}" class="article-modal-img">
    <div class="article-modal-text">
      ${data.content}
    </div>
    <div class="modal-form-actions" style="margin-top: 32px;">
      <button class="btn btn-secondary" onclick="closeArticleModal()">Close Reading</button>
      <button class="btn btn-primary" onclick="closeArticleModal(); openBookingModal('Article Consultation');">Book Consultation</button>
    </div>
  `;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeArticleModal() {
  const modal = document.getElementById('articleModal');
  if (modal) {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

// ===================================================================
// 6. FAQ ACCORDION
// ===================================================================

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others for clean single-view accordion
      faqItems.forEach(i => {
        i.classList.remove('active');
        const btn = i.querySelector('.faq-question');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ===================================================================
// 7. TOAST NOTIFICATION & NEWSLETTER
// ===================================================================

let toastTimeout = null;

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const messageEl = document.getElementById('toastMessage');
  if (!toast || !messageEl) return;

  messageEl.textContent = message;
  toast.classList.add('active');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('active');
  }, 4000);
}

function handleNewsletter(event) {
  event.preventDefault();
  const input = event.target.querySelector('input[type="email"]');
  const email = input ? input.value : '';

  if (email) {
    showToast(`Thank you! Dr. Varsha’s seasonal letter will be sent to ${email}.`);
    if (input) input.value = '';
  }
}

// Expose helper functions globally
window.scrollToElement = scrollToElement;
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.handleBookingSubmit = handleBookingSubmit;
window.openTreatmentModal = openTreatmentModal;
window.closeTreatmentModal = closeTreatmentModal;
window.bookFromTreatmentModal = bookFromTreatmentModal;
window.selectQuizOption = selectQuizOption;
window.resetQuiz = resetQuiz;
window.openBookingWithDosha = openBookingWithDosha;
window.openArticleModal = openArticleModal;
window.closeArticleModal = closeArticleModal;
window.handleNewsletter = handleNewsletter;
window.showToast = showToast;
