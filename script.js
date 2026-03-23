/* ============================================================
   MyReviewSite — script.js
   Framework-free SPA: navigation, data and UI with pure DOM
============================================================ */

'use strict';

/* ============================================================
   1. MOCK DATA — simulated review database.
   Each review has: id, category, title, year, poster, banner,
   synopsis, opinion (personal take), highlights, rating,
   officialLink, officialLabel, and optionally ratings.
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
    ratings: {
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
    poster:  'https://store-images.s-microsoft.com/image/apps.58959.13847644057609868.8865d2a2-5e11-4424-85ce-1db30a161bd9.41ca3834-331c-4d34-b2c9-7dfe318fd168',
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
    ratings: {
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
    title: 'Red Dead Redemption 2',
    year: 2018,
    poster:  'https://m.media-amazon.com/images/I/71xnh5WM+GL._AC_UF894,1000_QL80_.jpg',
    banner:  'https://m.media-amazon.com/images/I/71HEZBorXiL.jpg',
    synopsis: 'Set in 1899 at the twilight of the American frontier, Red Dead Redemption 2 follows Arthur Morgan, a senior member of the Van der Linde gang, as the era of outlaws comes to an inevitable end. A sprawling epic about loyalty, honor, and what it means to be a good man in an unforgiving world.',
    opinion: 'Red Dead Redemption 2 is one of the most ambitious games ever made, and arguably Rockstar\'s finest achievement. Arthur Morgan stands among gaming\'s greatest protagonists — morally complex, achingly human, and impossible to forget. The world of 1899 America is rendered with extraordinary detail: horses leave tracks in snow, NPCs have daily routines, and every town feels lived-in. The story builds slowly, but when it lands, it lands like a freight train. The final chapters left me genuinely emotional in a way few games ever have.',
    highlights: [
      'Arthur Morgan: one of gaming\'s most complex and emotionally compelling protagonists.',
      'Unprecedented open world detail — a living, breathing recreation of 1899 America.',
      'A story that builds methodically and pays off with extraordinary emotional weight.',
      'Dual narrative structure that connects brilliantly to the events of the first game.',
    ],
    rating: 9.3,
    officialLink:  'https://www.rockstargames.com/reddeadredemption2/',
    officialLabel: 'View on Rockstar',
    ratings: {
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
    title: 'How to train your dragon',
    year: 2010,
    poster:  'https://moviepostermexico.com/cdn/shop/products/how_to_train_your_dragon_ver6_xlg_1024x1024@2x.jpg?v=1596764856',
    banner:  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRrdjf5PB1VBV2N1FjZO0fO86_q86gYpo8xH_1H-2IrS0tBzYE2x5lVoI2mh4dPtYTzymxARJqIEt_uyvS1OLxnXqaDH5a1sfKojkRHhNfZDiHQ3bgIJGDoakjCCt3wWH1cqKPhvN__gA/w1200-h630-p-k-no-nu/Screen+shot+2010-09-04+at+11.42.04+AM.png',
    synopsis: 'In the Viking village of Berk, young Hiccup goes against tradition when he befriends Toothless, a rare and wounded Night Fury dragon feared by all. A DreamWorks animated adventure about courage, empathy, and the power of challenging inherited beliefs.',
    opinion: 'How to Train Your Dragon is one of those rare animated films that works on every level simultaneously. As a children\'s adventure it\'s thrilling; as an adult it\'s surprisingly moving. The bond between Hiccup and Toothless is built almost entirely through physical performance and John Powell\'s extraordinary score — very little dialogue is needed, and none is wasted. The flight sequences have a weightlessness and joy that genuinely took my breath away. DreamWorks rarely matched this level of craft again.',
    highlights: [
      'John Powell\'s score — soaring, emotional, and completely essential to the film.',
      'The Hiccup–Toothless relationship told largely through physical performance.',
      'Flight sequences that convey genuine freedom and wonder.',
      'A surprisingly layered message about empathy and breaking cycles of fear.',
    ],
    rating: 9.0,
    officialLink:  'https://www.netflix.com',
    officialLabel: 'Watch on Netflix',
    ratings: {
      Soundtrack: 9.5,
      Cast:       9.0,
      Narrative:  8.8,
      Characters: 8.5,
      VFX:        9.7,
      Script:     8.6,
    },
  },
  {
    id: 5,
    category: 'movies',
    title: 'Real Steel',
    year: 2011,
    poster:  'https://pics.filmaffinity.com/Acero_puro-582337760-large.jpg',
    banner:  'https://www.findelahistoria.com/web/wp-content/uploads/2022/01/real-steel-banner-peli.jpg',
    synopsis: 'In a near-future America where human boxing has been replaced by robot fighting, a down-on-his-luck promoter reconnects with his estranged son through an underdog sparring bot named Atom. A crowd-pleasing sports drama wrapped in a sleek sci-fi package.',
    opinion: 'Real Steel knows exactly what it is and commits to it completely — and that commitment is what makes it work. Hugh Jackman and Dakota Goyo have a natural chemistry that anchors the film\'s more sentimental moments, and the robot fights are genuinely exciting, staged with surprising physicality. It\'s Rocky with robots, and there\'s nothing wrong with that. I left the theater with a smile on my face and a fist in the air. Sometimes that\'s all you need.',
    highlights: [
      'Hugh Jackman and Dakota Goyo deliver a believable and touching father-son dynamic.',
      'Robot combat sequences staged with impressive physicality and real weight.',
      'Atom\'s design and movement make him a genuinely endearing character.',
      'An unapologetically feel-good underdog arc executed with conviction.',
    ],
    rating: 9.4,
    officialLink:  'https://www.netflix.com',
    officialLabel: 'Watch on Netflix',
    ratings: {
      Soundtrack: 8.5,
      Cast:       9.8,
      Narrative:  9.2,
      Characters: 9.5,
      VFX:        8.0,
      Script:     9.3,
    },
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
    ratings: {
      Soundtrack: 9.7,
      Cast:       9.5,
      Narrative:  9.2,
      Characters: 9.0,
      VFX:        9.4,
      Script:     9.1,
    },
  },

  /* ---- SERIES ---- */
  {
    id: 7,
    category: 'series',
    title: 'Daredevil',
    year: 2015,
    poster:  'https://moviepostermexico.com/cdn/shop/products/daredevil_ver4_xxlg_1024x1024@2x.jpg?v=1572365092',
    banner:  'https://static0.srcdn.com/wordpress/wp-content/uploads/Daredevil2.jpg?w=1200&h=628&fit=crop',
    synopsis: 'Matt Murdock, a blind attorney by day, becomes Daredevil — a vigilante crime fighter using his enhanced senses to protect the Hell\'s Kitchen neighborhood of New York City. Marvel and Netflix\'s acclaimed series redefined what superhero television could be.',
    opinion: 'Daredevil\'s first season is one of the best things Marvel has ever produced, full stop. The show earns its darkness without ever becoming gratuitous, and the chemistry between Charlie Cox and Vincent D\'Onofrio is extraordinary. D\'Onofrio\'s Wilson Fisk is one of the genre\'s great villains — menacing, tragic, and disturbingly human. The hallway fight in episode two set a new standard for action choreography on television that most big-budget films still haven\'t matched. This is what superhero storytelling looks like when it takes itself seriously.',
    highlights: [
      'Vincent D\'Onofrio delivers one of Marvel\'s all-time great villain performances as Kingpin.',
      'The hallway fight scene in episode two — a landmark in TV action choreography.',
      'Charlie Cox brings unexpected vulnerability and physicality to Matt Murdock.',
      'A grounded, street-level tone that makes the stakes feel genuinely personal.',
    ],
    rating: 9.3,
    officialLink:  'https://www.netflix.com',
    officialLabel: 'Watch on Netflix',
    ratings: {
      Soundtrack: 9.0,
      Cast:       9.5,
      Narrative:  9.6,
      Characters: 9.3,
      VFX:        8.5,
      Script:     9.4,
    },
  },
  {
    id: 8,
    category: 'series',
    title: 'The Bear',
    year: 2022,
    poster:  'https://image.tmdb.org/t/p/original/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg',
    banner:  'https://www.thebanner.org/sites/default/files/styles/article_detail_header/public/2022-11/the%20Bear.jpg?itok=dA0sZo6W',
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
    ratings: {
      Soundtrack: 8.8,
      Cast:       9.8,
      Narrative:  9.4,
      Characters: 9.6,
      VFX:        8.0,
      Script:     9.2,
    },
  },
  {
    id: 9,
    category: 'series',
    title: 'The Last of Us',
    year: 2023,
    poster:  'https://www.infobae.com/new-resizer/6HfhpZzw-AOsvClBmuWW8azGzOQ=/arc-anglerfish-arc2-prod-infobae/public/ILPHUU4CWBCNDNPG4EVLMFBW3Y.jfif',
    banner:  'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/11/the-last-of-us-hbo-portada.jpg?fit=2160%2C1501&quality=70&strip=all&ssl=1',
    synopsis: 'Twenty years after a fungal pandemic devastates civilization, hardened smuggler Joel is tasked with escorting a teenage girl named Ellie across a brutal post-apocalyptic America. HBO\'s adaptation elevates the beloved video game into one of the finest dramas ever made for television.',
    opinion: 'The Last of Us had no right to be this good. Video game adaptations have a famously poor track record, yet Craig Mazin and Neil Druckmann managed to translate every ounce of the original\'s emotional power into a new medium. Pedro Pascal and Bella Ramsey are extraordinary together — their bond builds slowly and feels completely earned. Episode three, "Long Long Time," is a standalone masterpiece that left me unable to speak. This isn\'t just a great video game adaptation — it\'s simply great television.',
    highlights: [
      'Pedro Pascal and Bella Ramsey — a central duo with rare, unforced chemistry.',
      '"Long Long Time" (episode three) stands as one of television\'s finest single episodes.',
      'The adaptation expands the source material while remaining faithful to its emotional core.',
      'Production design that renders the post-apocalyptic world with stunning, lived-in detail.',
    ],
    rating: 9.2,
    officialLink:  'https://www.netflix.com',
    officialLabel: 'Watch on Netflix',
    ratings: {
      Soundtrack: 9.3,
      Cast:       9.7,
      Narrative:  9.5,
      Characters: 9.4,
      VFX:        8.8,
      Script:     9.2,
    },
  },

  /* ---- BOOKS ---- */
  {
    id: 10,
    category: 'books',
    title: 'The Stranger',
    year: 1942,
    poster:  'https://m.media-amazon.com/images/I/61qtGqfgUjL._AC_UF1000,1000_QL80_.jpg',
    banner:  'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c4f70d171322483.646cebaf777fc.png',
    synopsis: 'Albert Camus\'s existentialist masterpiece follows Meursault, an emotionally detached man living in Algeria who commits a senseless murder and faces trial — judged less for his crime than for his refusal to conform to society\'s emotional expectations. A short, devastating, and endlessly debated novel.',
    opinion: 'The Stranger is the kind of book that feels different every time you return to it, Meursault is one of literature\'s most frustrating and fascinating protagonists — not because he is evil, but because he is indifferent, and the world cannot forgive him for it. Camus uses his blunt, stripped-down prose as a mirror: the discomfort you feel reading it is the discomfort of recognizing something true. It took me an afternoon to read and weeks to stop thinking about. That\'s the mark of a truly essential work.',
    highlights: [
      'Meursault: one of literature\'s most provocative and endlessly debated narrators.',
      'Camus\'s minimalist prose communicates an entire philosophy through what it omits.',
      'A trial scene that doubles as a meditation on social conformity and moral judgment.',
      'Brief, dense, and completely impossible to forget — perfect in its economy.',
    ],
    rating: 9.0,
    officialLink:  'https://www.amazon.com/s?k=The+Stranger+Albert+Camus',
    officialLabel: 'Find on Amazon',
    ratings: {
      Narrative:   9.5,
      Characters:  9.2,
      Originality: 9.0,
      World:       9.3,
      Pacing:      8.5,
    },
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
    ratings: {
      Narrative:   9.5,
      Characters:  9.0,
      Originality: 9.8,
      World:       10.0,
      Pacing:      7.5,
    },
  },
  {
    id: 12,
    category: 'books',
    title: 'Metamorphosis',
    year: 1915,
    poster:  'https://images.penguinrandomhouse.com/cover/9780805210576',
    banner:  'https://i.imgur.com/KQMmNvt.jpg',
    synopsis: 'Franz Kafka\'s iconic novella follows Gregor Samsa, a traveling salesman who wakes one morning transformed into a monstrous insect. A deeply unsettling and darkly comic exploration of alienation, family obligation, and the dehumanizing nature of modern life.',
    opinion: 'Metamorphosis manages to be both completely absurd and utterly earnest — and that tension is what makes it so devastating. Kafka never explains the transformation, never allows the reader comfort, and the family\'s gradual abandonment of Gregor is rendered with a cold precision that lingers long after the final page. What\'s most remarkable is how darkly funny it occasionally is; the horror and the comedy are completely inseparable. Kafka diagnosed the modern condition with surgical accuracy more than a century ago. We\'re still catching up.',
    highlights: [
      'The transformation treated as mundane fact — Kafka\'s greatest and most disquieting narrative choice.',
      'A relentless and uncomfortably honest portrait of family dynamics under pressure.',
      'Dark humor woven so naturally into the horror that the two become inseparable.',
      'A compact, precise structure that wastes not a single word or image.',
    ],
    rating: 9.1,
    officialLink:  'https://www.amazon.com/s?k=Project+Hail+Mary+Andy+Weir',
    officialLabel: 'Find on Amazon',
    ratings: {
      Narrative:   9.3,
      Characters:  9.5,
      Originality: 9.0,
      World:       8.8,
      Pacing:      9.7,
    },
  },
];


/* ============================================================
   2. APPLICATION STATE
============================================================ */
const state = {
  currentView: 'landing',   // 'landing' | 'home' | 'detail'
  activeCategory: 'all',    // active filter
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
  heroSlides:      $('hero-slides'),
  heroDots:        $('hero-dots'),
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
  ratingsSection:      $('ratings-section'),
  ratingsSectionTitle: $('ratings-section-title'),
  ratingsGrid:         $('ratings-grid'),
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
  const count = 90;

  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    // Random size and position
    const size = Math.random() * 12 + 5;
    const duration = Math.random() * 10 + 8;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${duration}s;
      animation-delay: -${Math.random() * duration}s;
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

/* ---- HBO-style Hero Carousel ---- */

/** Featured items for the hero (no books) */
const heroItems = reviews.filter(r => r.category !== 'books').slice(0, 3);
let heroIndex = 0;
let heroTimer = null;

/** Builds the hero carousel slides and dots */
function renderHeroCarousel() {
  ui.heroSlides.innerHTML = '';
  ui.heroDots.innerHTML = '';

  heroItems.forEach((review, i) => {
    // Slide
    const slide = document.createElement('div');
    slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url('${review.banner}')`;
    slide.innerHTML = `
      <div class="hero-slide-overlay"></div>
      <div class="hero-slide-content">
        <span class="hero-cat-badge">${review.category.toUpperCase()}</span>
        <h2 class="hero-slide-title">${review.title}</h2>
        <p class="hero-slide-year">${review.year}</p>
        <p class="hero-slide-synopsis">${review.synopsis}</p>
        <div class="hero-slide-actions">
          <button class="hero-btn-review" data-id="${review.id}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
            </svg>
            Read Review
          </button>
          <span class="hero-rating">★ ${review.rating}</span>
        </div>
      </div>
    `;
    ui.heroSlides.appendChild(slide);

    // Dot
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goToHeroSlide(i));
    ui.heroDots.appendChild(dot);
  });

  // "Read Review" buttons
  ui.heroSlides.querySelectorAll('.hero-btn-review').forEach(btn => {
    btn.addEventListener('click', () => showDetail(Number(btn.dataset.id)));
  });

  startHeroTimer();
}

function goToHeroSlide(index) {
  const slides = ui.heroSlides.querySelectorAll('.hero-slide');
  const dots   = ui.heroDots.querySelectorAll('.hero-dot');

  slides[heroIndex].classList.remove('active');
  dots[heroIndex].classList.remove('active');

  heroIndex = index;

  slides[heroIndex].classList.add('active');
  dots[heroIndex].classList.add('active');

  resetHeroTimer();
}

function nextHeroSlide() {
  goToHeroSlide((heroIndex + 1) % heroItems.length);
}

function startHeroTimer() {
  heroTimer = setInterval(nextHeroSlide, 15000);
}

function resetHeroTimer() {
  clearInterval(heroTimer);
  startHeroTimer();
}

/** Renders the grid of all reviews from the active filter */
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
        <div class="review-card-overlay">
          <span class="review-overlay-rating">★ ${review.rating}</span>
        </div>
      </div>
      <div class="review-card-body">
        <div class="review-cat-tag">${review.category}</div>
        <div class="review-card-title">${review.title}</div>
        <div class="review-card-year">${review.year}</div>
      </div>
    `;

    card.addEventListener('click', () => showDetail(review.id));
    ui.reviewsGrid.appendChild(card);
  });
}

/** Applies the category filter and re-renders home */
function applyFilter(cat) {
  state.activeCategory = cat;

  const items = getFiltered(cat);

  // Section label
  const labels = { all: 'All Reviews', games: 'Games', movies: 'Movies', series: 'Series', books: 'Books' };
  ui.sectionLabel.textContent = labels[cat] || 'All Reviews';

  // Show hero carousel only on "All"
  const heroEl = document.getElementById('hero-carousel');
  if (cat === 'all') {
    heroEl.style.display = '';
    startHeroTimer();
  } else {
    heroEl.style.display = 'none';
    clearInterval(heroTimer);
  }

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

  // --- Category ratings ---
  if (review.ratings) {
    ui.ratingsSection.style.display = 'block';
    ui.ratingsGrid.innerHTML = '';

    Object.entries(review.ratings).forEach(([key, val]) => {
      const item = document.createElement('div');
      item.className = 'game-rating-item';

      item.innerHTML = `
        <div class="game-rating-label">${key}</div>
        <div class="game-rating-val">${val}</div>
        <div class="game-rating-bar-wrap">
          <div class="game-rating-bar ${key.toLowerCase()}" style="width:0"></div>
        </div>
      `;

      ui.ratingsGrid.appendChild(item);
    });

    // Animate bars
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ui.ratingsGrid.querySelectorAll('.game-rating-bar').forEach(bar => {
          const key = bar.classList[1];
          const val = review.ratings[capitalizeFirst(key)];
          if (val !== undefined) {
            bar.style.width = `${(val / 10) * 100}%`;
          }
        });
      });
    });
  } else {
    ui.ratingsSection.style.display = 'none';
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
  renderHeroCarousel();
  applyFilter('all');
  updateSidebarStats();
});

/** Header: logo → returns to landing */
ui.btnLogo.addEventListener('click', () => {
  clearInterval(heroTimer);
  navigateTo('landing');
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
