/* ============================================================
   MyReviewSite — script.js
   Framework-free SPA: navigation, data and UI with pure DOM
============================================================ */

'use strict';

/* ============================================================
   1. MOCK DATA — simulated review database.
   Each review has: id, category, title, year, poster, banner,
   synopsis, opinion (personal take), highlights, rating,
   officialLink, officialLabel, and optionally gameRatings.
============================================================ */
const reviews = [
  /* ---- GAMES ---- */
  {
    id: 1,
    category: 'games',
    title: 'Elden Ring',
    year: 2022,
    poster:  'https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg',
    banner:  'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_hero.jpg',
    synopsis: 'A massive open world co-designed with George R. R. Martin, where every corner hides brutal challenges and cryptic lore. Elden Ring redefines the boundaries of the soulsborne genre with unprecedented freedom of exploration.',
    opinion: 'Elden Ring is, without a doubt, one of the most important releases of this decade. FromSoftware took everything they mastered in Dark Souls and Sekiro and placed it in an open world that rewards curiosity above all else. There were moments where I would just stop, look at a vista, and feel genuinely moved. The difficulty is steep, but every death teaches you something. The boss design alone is worth the price of admission.',
    highlights: [
      'Masterfully crafted open world packed with secrets and hidden dungeons.',
      'Deep, refined combat system with near-infinite build variety.',
      'Memorable bosses combining extreme difficulty with stunning artistic design.',
      'Rich lore co-created by Hidetaka Miyazaki and George R. R. Martin.',
    ],
    rating: 9.5,
    officialLink:  'https://store.steampowered.com/app/1245620/ELDEN_RING/',
    officialLabel: 'View on Steam',
    gameRatings: {
      Gameplay:   9.8,
      Sound:      8.5,
      Soundtrack: 9.0,
      Characters: 8.8,
      Narrative:  8.5,
      Animations: 8.7,
    },
  },
  {
    id: 2,
    category: 'games',
    title: 'Hollow Knight',
    year: 2017,
    poster:  'https://upload.wikimedia.org/wikipedia/en/2/25/Hollow_Knight_cover.jpg',
    banner:  'https://cdn.akamai.steamstatic.com/steam/apps/367520/library_hero.jpg',
    synopsis: 'An indie metroidvania by Team Cherry set in a melancholic underground world of insects. Hollow Knight blends intricate exploration, precise combat, and an unforgettable soundtrack into a remarkably cohesive experience.',
    opinion: 'I went into Hollow Knight expecting a decent indie game. I came out weeks later having experienced one of the best games ever made at any budget. The atmosphere is unlike anything else — sad, beautiful, and strangely comforting. The map design is so dense that discovering a new area feels genuinely thrilling. And Christopher Larkin\'s score is hauntingly perfect. Team Cherry set an almost impossible standard with their debut.',
    highlights: [
      'Unique and consistent hand-drawn art direction.',
      'Deep exploration map that respects the player\'s intelligence.',
      'Fair and rewarding difficulty with a well-tuned learning curve.',
      'High-quality free post-launch content expansions..',
    ],
    rating: 9.2,
    officialLink:  'https://store.steampowered.com/app/367520/Hollow_Knight/',
    officialLabel: 'View on Steam',
    gameRatings: {
      Gameplay:   9.0,
      Sound:      9.5,
      Soundtrack: 9.8,
      Characters: 8.5,
      Narrative:  8.0,
      Animations: 9.0,
    },
  },
  {
    id: 3,
    category: 'games',
    title: 'The Legend of Zelda: Breath of the Wild',
    year: 2017,
    poster:  'https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg',
    banner:  'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero',
    synopsis: 'Nintendo reinvented their flagship franchise with an open world that rewards curiosity at every turn. Breath of the Wild sets a new benchmark for adventure game design by giving players total freedom from the very first minutes.',
    opinion: 'BotW was a revelation. I remember spending my first two hours just climbing a single mountain and watching the physics interact with the environment — no tutorials, no hand-holding. Nintendo trusted the player completely. It\'s not a perfect game; the weapon durability system can be frustrating and the narrative is thin. But as a sandbox for exploration and creative problem-solving, nothing else comes close.',
    highlights: [
      'Environmental physics and chemistry creatively integrated into gameplay.',
      'Total freedom from the very first minutes with no forced path.',
      'Clever and varied shrine puzzle design throughout.',
      'Art direction blending cel shading with naturalistic realism.',
    ],
    rating: 9.3,
    officialLink:  'https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/The-Legend-of-Zelda-Breath-of-the-Wild-1173609.html',
    officialLabel: 'View on Nintendo',
    gameRatings: {
      Gameplay:   9.7,
      Sound:      8.8,
      Soundtrack: 8.5,
      Characters: 8.0,
      Narrative:  7.5,
      Animations: 8.9,
    },
  },

  /* ---- MOVIES ---- */
  {
    id: 4,
    category: 'movies',
    title: 'Dune: Part Two',
    year: 2024,
    poster:  'https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg',
    banner:  'https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFjYWUyZWFiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1920_.jpg',
    synopsis: 'Denis Villeneuve concludes his epic adaptation of Frank Herbert with a visually stunning and emotionally devastating second part. The transformation of Paul Atreides into a messianic figure is executed with surgical precision.',
    opinion: 'Part Two is a rare case where a sequel surpasses the original. Villeneuve doubles down on the spectacle but never loses sight of the tragedy at the story\'s core. The black-and-white sequence on Giedi Prime is one of the most striking visual choices I\'ve seen in recent blockbuster cinema. Zendaya finally gets room to breathe, and Austin Butler is genuinely terrifying as Feyd-Rautha. A modern epic in every sense.',
    highlights: [
      'Greig Fraser\'s black-and-white cinematography for Giedi Prime — breathtaking.',
      'Hans Zimmer delivers one of his best scores in years.',
      'Standout performances from Zendaya and Austin Butler.',
      'Epic scale without losing the emotional intimacy of its characters.',
    ],
    rating: 9.0,
    officialLink:  'https://www.netflix.com',
    officialLabel: 'Watch on Netflix',
  },
  {
    id: 5,
    category: 'movies',
    title: 'Everything Everywhere All at Once',
    year: 2022,
    poster:  'https://upload.wikimedia.org/wikipedia/en/b/b9/Everything_Everywhere_All_at_Once_poster.jpg',
    banner:  'https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_FMjpg_UX1920_.jpg',
    synopsis: 'The Daniels craft a multiverse masterpiece centered on a laundromat and a mother-daughter relationship. A film that blends absurd chaos with genuine tenderness and loving references to Hong Kong cinema.',
    opinion: 'I cried three times. I laughed uncontrollably twice. And I sat in silence for ten minutes after the credits rolled, just thinking. EEAAO shouldn\'t work — it\'s too chaotic, too weird, too everything. And yet it is one of the most emotionally honest films I\'ve seen in years. Michelle Yeoh carries it all with a gravity that makes every absurd moment feel earned. It deserved every Oscar it got, and probably a few more.',
    highlights: [
      'Michelle Yeoh in the performance of her career.',
      'Frenetic editing that is completely intentional and purposeful.',
      'An emotional message that transcends the visual chaos.',
      'Seamless genre blending — action, comedy, and drama without friction.',
    ],
    rating: 9.4,
    officialLink:  'https://www.netflix.com',
    officialLabel: 'Watch on Netflix',
  },
  {
    id: 6,
    category: 'movies',
    title: 'Oppenheimer',
    year: 2023,
    poster:  'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg',
    banner:  'https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1920_.jpg',
    synopsis: 'Christopher Nolan transforms the story of the Manhattan Project into a subjective, anguishing thriller. A meditation on the moral responsibility of creators faced with the consequences of their inventions.',
    opinion: 'Nolan has always been a maximalist, but here he uses that excess with purpose. The subjective structure, the non-linear timeline, the IMAX detonation sequence — every choice is deliberate. What stays with me most, though, is how human Cillian Murphy makes Oppenheimer feel. Not a hero, not a villain, just a man who opened a door he couldn\'t close. Ludwig Göransson\'s score is also a career best — oppressive and brilliant.',
    highlights: [
      'Cillian Murphy carries the entire film with a magnetic, layered performance.',
      'Non-linear structure that amplifies dramatic tension masterfully.',
      'Trinity detonation sequence filmed in IMAX — absolutely no CGI.',
      'Ludwig Göransson delivers the best score of his career.',
    ],
    rating: 9.1,
    officialLink:  'https://www.netflix.com',
    officialLabel: 'Watch on Netflix',
  },

  /* ---- SERIES ---- */
  {
    id: 7,
    category: 'series',
    title: 'Severance',
    year: 2022,
    poster:  'https://upload.wikimedia.org/wikipedia/en/7/77/Severance_TV_series.png',
    banner:  'https://m.media-amazon.com/images/M/MV5BMTQ0NjQ2MjQ0OF5BMl5BanBnXkFtZTgwMzY5NzE3NjM@._V1_FMjpg_UX1920_.jpg',
    synopsis: 'Apple TV+ delivers one of the most original series of the last decade. Severance explores workplace dissociation literally: employees of Lumon Industries have their memories surgically separated between work and personal life.',
    opinion: 'Severance is the most uncomfortable I\'ve felt watching television in years — and I mean that as the highest compliment. The show weaponizes office aesthetics and corporate language into something genuinely sinister. Ben Stiller\'s direction is meticulous in the best possible way; every hallway, every fluorescent light feels intentional. Adam Scott is devastating. And that season finale leaves you gasping. Cannot wait for what comes next.',
    highlights: [
      'Ben Stiller\'s direction surprises with its visual precision and pacing.',
      'Adam Scott in the best role of his career.',
      'Every episode ratchets tension in a perfectly calculated way.',
      'Kafkaesque production design that is deeply unsettling.',
    ],
    rating: 9.3,
    officialLink:  'https://www.netflix.com',
    officialLabel: 'Watch on Netflix',
  },
  {
    id: 8,
    category: 'series',
    title: 'The Bear',
    year: 2022,
    poster:  'https://upload.wikimedia.org/wikipedia/en/0/0e/The_Bear_TV_series_poster.png',
    banner:  'https://m.media-amazon.com/images/M/MV5BZGEwNTNjYTMtY2Q0Ni00NjhiLWI4YmYtMTY5NzQ3ZTlmZjYxXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1920_.jpg',
    synopsis: 'A fine-dining chef returns to Chicago to manage his late brother\'s sandwich restaurant. The Bear captures the chaos, beauty, and trauma of professional kitchens like no other series ever has.',
    opinion: 'The Bear is television that physically affects you. After watching the "Review" episode — 22 unbroken minutes of a kitchen in full meltdown — I had to pause and take a breath. It\'s not comfortable viewing, but it\'s necessary. Jeremy Allen White\'s performance is raw and restrained in equal measure. The show understands trauma, family, and the cost of excellence in a way that feels deeply personal. Season two is even better.',
    highlights: [
      '"Review" episode — 22 minutes of a single unbroken take, utterly relentless.',
      'Extraordinary ensemble cast led by Jeremy Allen White.',
      'Hyperrealistic cinematography that conveys the claustrophobia of professional kitchens.',
      'Each season reinvents its narrative direction with confidence.',
    ],
    rating: 9.5,
    officialLink:  'https://www.netflix.com',
    officialLabel: 'Watch on Netflix',
  },
  {
    id: 9,
    category: 'series',
    title: 'Shogun (2024)',
    year: 2024,
    poster:  'https://upload.wikimedia.org/wikipedia/en/b/b8/Shogun_2024_TV_series.jpg',
    banner:  'https://m.media-amazon.com/images/M/MV5BZWQyNmZmYjMtMzBmOS00OTNhLTlkNjktNDhiNGRiNTZiZmE3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1920_.jpg',
    synopsis: 'FX\'s remake is one of the most pleasant surprises of the year. The story of navigator John Blackthorne in feudal Japan is now told with unprecedented cultural depth, centering the Japanese perspective above all else.',
    opinion: 'I was skeptical going in — remakes of classics rarely justify their existence. Shōgun 2024 does more than justify itself; it surpasses the original by treating its Japanese characters as full protagonists rather than a backdrop. Hiroyuki Sanada, who also produced the show, gives a performance of extraordinary subtlety and weight. The decision to use subtitles not just for accessibility but as a narrative tool — withholding translations at key moments — is a stroke of genius.',
    highlights: [
      'Hiroyuki Sanada — also a producer — delivers a colossally layered performance.',
      'Historical and cultural rigor visible in every production detail.',
      'Subtitles used intentionally as a narrative device, not just accessibility.',
      'Unexpectedly emotional and cathartic season finale.',
    ],
    rating: 9.2,
    officialLink:  'https://www.netflix.com',
    officialLabel: 'Watch on Netflix',
  },

  /* ---- BOOKS ---- */
  {
    id: 10,
    category: 'books',
    title: 'The Name of the Wind',
    year: 2007,
    poster:  'https://upload.wikimedia.org/wikipedia/en/4/44/TheNameoftheWind_cover.jpg',
    banner:  'https://i.imgur.com/HEMsEzl.jpg',
    synopsis: 'Patrick Rothfuss debuts with a fantasy novel that redefines the literary standard of the genre. Kvothe\'s story, narrated in first person, has an almost poetic prose and characters of extraordinary depth.',
    opinion: 'The Name of the Wind is the book that made me fall back in love with fantasy after years of feeling the genre had nothing new to offer. Rothfuss writes prose that you slow down to re-read not because it\'s difficult, but because it\'s beautiful. Kvothe is a flawed, compelling narrator — you\'re never quite sure how much of his tale to believe. The magic system (Sympathy) is one of the most coherent and original I\'ve encountered. My only frustration is that book three still doesn\'t exist.',
    highlights: [
      'Elegant, literary prose unusual for the fantasy genre.',
      'Original and internally consistent magic system (Sympathy).',
      'Masterfully executed frame-narrative storytelling structure.',
      'Gradual worldbuilding that reveals itself without info-dumps.',
    ],
    rating: 9.0,
    officialLink:  'https://www.amazon.com/s?k=The+Name+of+the+Wind+Rothfuss',
    officialLabel: 'Find on Amazon',
  },
  {
    id: 11,
    category: 'books',
    title: 'Dune',
    year: 1965,
    poster:  'https://upload.wikimedia.org/wikipedia/en/d/de/Dune-Frank_Herbert_%281965%29_First_edition.jpg',
    banner:  'https://i.imgur.com/KQMmNvt.jpg',
    synopsis: 'The science fiction masterpiece that influenced everything from Star Wars to Avatar. Frank Herbert built a political, ecological, and spiritual universe of unmatched density whose relevance has not diminished in 60 years.',
    opinion: 'Reading Dune in 2025 feels like reading a book written last year. Herbert\'s critique of charismatic leadership, resource wars, and ecological collapse is more urgent than ever. It\'s a dense, demanding read — the first hundred pages require patience — but what awaits on the other side is one of the richest fictional universes ever constructed. I came for the sandworms; I stayed for the philosophy. Essential reading, full stop.',
    highlights: [
      'Ecological and political worldbuilding with no equal in the genre.',
      'Multidimensional faction system with layered motivations.',
      'A critique of messianism and charismatic leadership that feels shockingly current.',
      'Appendices and indexes that expand the universe without interrupting the narrative.',
    ],
    rating: 9.7,
    officialLink:  'https://www.amazon.com/s?k=Dune+Frank+Herbert',
    officialLabel: 'Find on Amazon',
  },
  {
    id: 12,
    category: 'books',
    title: 'Project Hail Mary',
    year: 2021,
    poster:  'https://upload.wikimedia.org/wikipedia/en/0/0c/Project_Hail_Mary_cover.jpg',
    banner:  'https://i.imgur.com/YjLVrA2.jpg',
    synopsis: 'Andy Weir returns with a hard science fiction novel that blends scientific rigor and light humor with a story of impossible friendship in deep space. Practically impossible to put down once you start.',
    opinion: 'Project Hail Mary is the most fun I\'ve had reading a book in years. Weir has this gift for making hard science feel like a game — every problem Ryland Grace faces is a puzzle you want to solve alongside him. And then Rocky shows up, and the book transforms into something unexpectedly moving. I didn\'t think I could get emotionally attached to a character described through echolocation and smell. I was wrong. The ending genuinely made me smile for the rest of the day.',
    highlights: [
      'Accessible hard science that educates without feeling like a lecture.',
      'A mid-book plot twist that completely reframes the entire story.',
      'Rocky: one of the best-written alien characters in recent fiction.',
      'An infectiously optimistic tone about the nature of humanity (and beyond).',
    ],
    rating: 9.1,
    officialLink:  'https://www.amazon.com/s?k=Project+Hail+Mary+Andy+Weir',
    officialLabel: 'Find on Amazon',
  },
];


/* ============================================================
   2. APPLICATION STATE
============================================================ */
const state = {
  currentView: 'landing',   // 'landing' | 'home' | 'detail'
  activeCategory: 'all',    // active filter
  carouselIndex: 0,         // current carousel position
  currentReview: null,      // active review in detail view
};


/* ============================================================
   3. DOM SELECTORS — cached to avoid repeated lookups
============================================================ */
const $ = id => document.getElementById(id);

const views = {
  landing: $('view-landing'),
  home:    $('view-home'),
  detail:  $('view-detail'),
};

const ui = {
  // Landing
  btnEnter:        $('btn-enter'),
  // Header
  btnLogo:         $('btn-logo'),
  navFilters:      document.querySelectorAll('.nav-filter'),
  sidebarToggle:   $('sidebar-toggle'),
  // Sidebar
  sidebar:         $('sidebar'),
  sidebarOverlay:  $('sidebar-overlay'),
  sidebarItems:    document.querySelectorAll('.sidebar-item'),
  countGames:      $('count-games'),
  countMovies:     $('count-movies'),
  countSeries:     $('count-series'),
  countBooks:      $('count-books'),
  statTotal:       $('stat-total'),
  statAvg:         $('stat-avg'),
  statTop:         $('stat-top'),
  // Home content
  sectionLabel:    $('section-label'),
  carouselTrack:   $('carousel-track'),
  carouselPrev:    $('carousel-prev'),
  carouselNext:    $('carousel-next'),
  reviewsGrid:     $('reviews-grid'),
  // Detail
  btnBack:         $('btn-back'),
  detailBanner:    $('detail-banner'),
  detailPoster:    $('detail-poster'),
  detailCatBadge:  $('detail-cat-badge'),
  detailTitle:     $('detail-title'),
  detailMeta:      $('detail-meta'),
  detailRating:       $('detail-rating'),
  detailRatingBar:    $('detail-rating-bar'),
  detailSynopsis:     $('detail-synopsis'),
  detailOpinion:      $('detail-opinion'),
  detailOfficialLink: $('detail-official-link'),
  detailOfficialLabel:$('detail-official-label'),
  detailHighlights:   $('detail-highlights'),
  gameRatingsSection: $('game-ratings-section'),
  gameRatingsGrid:    $('game-ratings-grid'),
};


/* ============================================================
   4. SPA NAVIGATION — view switching without page reload
============================================================ */

/**
 * Switches the active view with a smooth transition.
 * @param {'landing'|'home'|'detail'} viewName - target view
 */
function navigateTo(viewName) {
  // Hide the current view
  const current = views[state.currentView];
  current.classList.remove('active');

  // Activate the new view
  const next = views[viewName];
  next.classList.add('active');

  // Update state and scroll to top
  state.currentView = viewName;
  next.scrollTo({ top: 0, behavior: 'smooth' });
}


/* ============================================================
   5. LANDING PAGE
============================================================ */

/** Creates random floating particles in the background */
function initParticles() {
  const container = $('particles');
  const count = 28;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    // Random size and position
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 10 + 8}s;
      animation-delay: ${Math.random() * 8}s;
      opacity: ${Math.random() * 0.5};
    `;
    container.appendChild(p);
  }
}

/** Subtle parallax effect on mouse move */
function initParallax() {
  const bg = document.querySelector('.landing-bg');
  document.addEventListener('mousemove', e => {
    if (state.currentView !== 'landing') return;
    const x = (e.clientX / window.innerWidth  - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
}


/* ============================================================
   6. HOME — carousel and reviews grid
============================================================ */

/** Returns reviews filtered by category */
function getFiltered(cat) {
  return cat === 'all' ? reviews : reviews.filter(r => r.category === cat);
}

/**
 * Renders the carousel with reviews from the active filter.
 * @param {Array} items - array of reviews to display
 */
function renderCarousel(items) {
  ui.carouselTrack.innerHTML = '';
  state.carouselIndex = 0;

  items.forEach(review => {
    const card = document.createElement('div');
    card.className = 'carousel-card';
    card.dataset.id = review.id;

    card.innerHTML = `
      <img src="${review.poster}" alt="${review.title}" loading="lazy" />
      <div class="carousel-card-info">
        <div class="carousel-card-cat">${review.category}</div>
        <div class="carousel-card-name">${review.title}</div>
        <div class="carousel-card-rating">★ ${review.rating}</div>
      </div>
    `;

    // Click → detail view
    card.addEventListener('click', () => showDetail(review.id));
    ui.carouselTrack.appendChild(card);
  });

  updateCarouselPosition();
}

/**
 * Renders the grid of all reviews from the active filter.
 * @param {Array} items - array of reviews
 */
function renderGrid(items) {
  ui.reviewsGrid.innerHTML = '';

  items.forEach((review, idx) => {
    const card = document.createElement('div');
    card.className = 'review-card animate-in';
    card.style.animationDelay = `${idx * 0.06}s`;
    card.dataset.id = review.id;

    card.innerHTML = `
      <div class="review-card-img-wrap">
        <img src="${review.poster}" alt="${review.title}" loading="lazy" />
      </div>
      <div class="review-card-body">
        <div class="review-cat-tag">${review.category}</div>
        <div class="review-card-title">${review.title}</div>
        <div class="review-card-rating">
          <span class="rating-pill">★ ${review.rating}</span>
          <span>${review.year}</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => showDetail(review.id));
    ui.reviewsGrid.appendChild(card);
  });
}

/** Updates the horizontal scroll position of the carousel */
function updateCarouselPosition() {
  const cardW  = 220 + 16; // width + gap
  const offset = state.carouselIndex * cardW;
  ui.carouselTrack.style.transform = `translateX(-${offset}px)`;
}

/** Applies the category filter and re-renders home */
function applyFilter(cat) {
  state.activeCategory = cat;
  state.carouselIndex  = 0;

  const items = getFiltered(cat);

  // Section label
  const labels = { all: 'All Reviews', games: 'Games', movies: 'Movies', series: 'Series', books: 'Books' };
  ui.sectionLabel.textContent = labels[cat] || 'All Reviews';

  renderCarousel(items);
  renderGrid(items);

  // Sync active buttons in header and sidebar
  ui.navFilters.forEach(btn => btn.classList.toggle('active', btn.dataset.cat === cat));
  ui.sidebarItems.forEach(btn => btn.classList.toggle('active', btn.dataset.cat === cat));
}

/** Fills sidebar counters with category totals */
function updateSidebarStats() {
  const cats = ['games', 'movies', 'series', 'books'];
  cats.forEach(cat => {
    const count = reviews.filter(r => r.category === cat).length;
    const el = $(`count-${cat}`);
    if (el) el.textContent = count;
  });

  // Global stats
  ui.statTotal.textContent = reviews.length;

  const avg = reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;
  ui.statAvg.textContent = avg.toFixed(1);

  const top = reviews.reduce((a, b) => a.rating > b.rating ? a : b);
  ui.statTop.textContent = top.title.split(':')[0];  // short title
}


/* ============================================================
   7. SIDEBAR — open and close
============================================================ */

function openSidebar() {
  ui.sidebar.classList.add('open');
  ui.sidebarOverlay.classList.add('visible');
}

function closeSidebar() {
  ui.sidebar.classList.remove('open');
  ui.sidebarOverlay.classList.remove('visible');
}

function toggleSidebar() {
  ui.sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
}


/* ============================================================
   8. DETAIL VIEW — render the selected review
============================================================ */

/**
 * Navigates to the detail view and fills in the content.
 * @param {number} id - review ID
 */
function showDetail(id) {
  const review = reviews.find(r => r.id === id);
  if (!review) return;

  state.currentReview = review;

  // --- Banner ---
  ui.detailBanner.style.backgroundImage = `url('${review.banner}')`;

  // --- Poster ---
  ui.detailPoster.src = review.poster;
  ui.detailPoster.alt = review.title;

  // --- Category badge ---
  ui.detailCatBadge.textContent = review.category.toUpperCase();
  ui.detailCatBadge.setAttribute('data-cat', review.category);

  // --- Title and meta ---
  ui.detailTitle.textContent  = review.title;
  ui.detailMeta.textContent   = review.year;

  // --- Main rating ---
  ui.detailRating.textContent = review.rating;
  // The bar animates via CSS transition; we need to force a reflow
  ui.detailRatingBar.style.width = '0';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ui.detailRatingBar.style.width = `${(review.rating / 10) * 100}%`;
    });
  });

  // --- Synopsis (now inside hero, right column) ---
  ui.detailSynopsis.textContent = review.synopsis;

  // --- My Opinion ---
  ui.detailOpinion.textContent = review.opinion;

  // --- Official Site link ---
  ui.detailOfficialLink.href            = review.officialLink || '#';
  ui.detailOfficialLabel.textContent    = review.officialLabel || 'Official Site';

  // --- Highlights ---
  ui.detailHighlights.innerHTML = review.highlights
    .map(h => `<li>${h}</li>`)
    .join('');

  // --- Game ratings (only for games) ---
  if (review.category === 'games' && review.gameRatings) {
    ui.gameRatingsSection.style.display = 'block';
    ui.gameRatingsGrid.innerHTML = '';

    Object.entries(review.gameRatings).forEach(([key, val]) => {
      const item = document.createElement('div');
      item.className = 'game-rating-item';

      item.innerHTML = `
        <div class="game-rating-label">${key}</div>
        <div class="game-rating-val">${val}</div>
        <div class="game-rating-bar-wrap">
          <div class="game-rating-bar ${key.toLowerCase()}" style="width:0"></div>
        </div>
      `;

      ui.gameRatingsGrid.appendChild(item);
    });

    // Animate game bars
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ui.gameRatingsGrid.querySelectorAll('.game-rating-bar').forEach(bar => {
          const key = bar.classList[1];
          const val = review.gameRatings[capitalizeFirst(key)];
          if (val !== undefined) {
            bar.style.width = `${(val / 10) * 100}%`;
          }
        });
      });
    });
  } else {
    ui.gameRatingsSection.style.display = 'none';
  }

  navigateTo('detail');
}

/** Capitalizes the first letter of a string */
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}


/* ============================================================
   9. EVENT LISTENERS
============================================================ */

/** Landing: "Let's go" button */
ui.btnEnter.addEventListener('click', () => {
  navigateTo('home');
  applyFilter('all');
  updateSidebarStats();
});

/** Header: logo → returns to home */
ui.btnLogo.addEventListener('click', () => {
  navigateTo('home');
});

/** Header: category filters */
ui.navFilters.forEach(btn => {
  btn.addEventListener('click', () => applyFilter(btn.dataset.cat));
});

/** Header: toggle sidebar */
ui.sidebarToggle.addEventListener('click', toggleSidebar);

/** Sidebar: category items */
ui.sidebarItems.forEach(btn => {
  btn.addEventListener('click', () => {
    applyFilter(btn.dataset.cat);
    closeSidebar();
  });
});

/** Sidebar overlay: close on outside click */
ui.sidebarOverlay.addEventListener('click', closeSidebar);

/** Carousel: navigation controls */
ui.carouselPrev.addEventListener('click', () => {
  const items   = getFiltered(state.activeCategory);
  const maxIdx  = Math.max(0, items.length - 1);
  state.carouselIndex = Math.max(0, state.carouselIndex - 1);
  updateCarouselPosition();
});

ui.carouselNext.addEventListener('click', () => {
  const items  = getFiltered(state.activeCategory);
  const maxIdx = Math.max(0, items.length - 1);
  state.carouselIndex = Math.min(maxIdx, state.carouselIndex + 1);
  updateCarouselPosition();
});

/** Detail: back to home button */
ui.btnBack.addEventListener('click', () => {
  navigateTo('home');
});

/** Keyboard: Escape key closes sidebar or returns from detail */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (ui.sidebar.classList.contains('open')) {
      closeSidebar();
    } else if (state.currentView === 'detail') {
      navigateTo('home');
    }
  }
});


/* ============================================================
   10. INITIALIZATION
============================================================ */

/** Application entry point */
function init() {
  initParticles();
  initParallax();

  // The initial view is landing (already has the 'active' class in HTML)
  state.currentView = 'landing';
}

// Start when the DOM is ready
document.addEventListener('DOMContentLoaded', init);
