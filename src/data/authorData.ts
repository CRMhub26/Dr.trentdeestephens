import { Book, TimelineEvent, MediaItem, BlogArticle, ArchiveDossier } from '../types';
import theLastTournamentCover from '../assets/images/regenerated_image_1787353678132.jpg';

export const AUTHOR_BIO = {
  name: "Dr. Trent Dee Stephens",
  degrees: "Ph.D., M.S., B.S.",
  titles: "Emeritus Professor of Anatomy & Embryology • Author of 35+ Books • Architectural Scholar",
  academicPositions: [
    "Professor Emeritus of Anatomy and Embryology, Idaho State University (Faculty since 1981)",
    "Clinical Professor, Department of Oral Biology, Creighton University School of Dentistry",
    "Ph.D. in Anatomy, University of Pennsylvania (1977)",
    "B.S. & M.S. in Zoology & Microbiology, Brigham Young University (1973, 1974)"
  ],
  tagline: "Unifying Empirical Science, Sacred Truths, Ancient Architecture & Human Biology",
  quote: "When science observes the miracle of biological form and history unveils the sacred covenants of time, truth reveals itself in breathtaking unity.",
  longQuote: "For over forty years at the laboratory bench and in the university lecture hall, I have investigated how single cells give rise to the marvelous architecture of the human body. That same reverent inquiry guides my study of ancient scripture, deep chronologies of the Earth, and the soaring stone fortifications of the medieval world.",
  officialWebsites: {
    main: "https://www.trentdeestephens.com/",
    castles: "https://www.buildmodelcastles.com/",
    amazonAuthor: "https://www.amazon.com/stores/Trent-Dee-Stephens/author/B001H6O50A"
  },
  bioParagraphs: [
    "Dr. Trent Dee Stephens, Ph.D., is a distinguished anatomist, embryologist, and the author of more than thirty-five published volumes. As Professor Emeritus of Anatomy and Embryology at Idaho State University and Clinical Professor at Creighton University School of Dentistry, he dedicated over four decades to investigating vertebrate limb morphogenesis and the cellular mechanisms of teratogenic compounds such as thalidomide.",
    "Beyond his laboratory research and benchmark university textbooks, including the globally adopted McGraw-Hill Anatomy & Physiology (13 editions) and the Atlas of Human Embryology, Dr. Stephens is widely recognized for his scholarly treatises harmonizing empirical discovery with theological inquiry, notably the 'Pillars of Eternity' series (The Infinite Creation, The Infinite Fall, and The Immortal Messiah), as well as Science and the Old Testament and Evolution and Mormonism.",
    "Dr. Stephens has also pursued the study and scale engineering of medieval stone architecture for more than sixty years. He is the founder of BuildModelCastles.com and the author of The Castle Builder's Handbook and The Medieval Town Builder's Handbook. His deep archival research into 13th-century English history, heraldry, and tournament warfare directly informs his historical fiction saga, William de Braose Squire of Winchester, featuring The Last Tournament."
  ]
};

export const BOOKS_DATA: Book[] = [
  {
    id: "the-last-tournament",
    title: "The Last Tournament",
    subtitle: "Book 2 of: William de Braose Squire of Winchester",
    genre: "Medieval Historical Fiction",
    category: "historical-fiction",
    publicationYear: "2026",
    pages: 328,
    isbn: "196880773X",
    publisher: "Books Academy LLC",
    coverImage: theLastTournamentCover,
    spineColor: "#7a1a1a",
    tagline: "In the perilous realm of 1232 England, young squire William de Braose attends the grand tournament at Salisbury as an observer, where his father, John, rides into the lists—and into a deadly plot of murder.",
    synopsis: "Set in England in 1232 during the reign of the young and volatile King Henry III, the realm is caught in the political rivalry between factions led by Justiciar Hubert de Burgh and Bishop Peter des Roches. Young William de Braose rides with his father, John, to his very first tournament at Salisbury. William was not a participant in the tournament, only an observer. Yet darkness looms over the lists: the mysterious Maiden Isolde, William's enigmatic nemesis, repeatedly warns him of his father's impending doom. John de Braose enters the lists to compete, where treachery strikes and he is murdered. Grounded in sixty years of medieval research by Dr. Trent Dee Stephens, every castle, armorial bearing, tournament rule, and historical figure is rendered with meticulous historical fidelity.",
    themes: [
      "13th-Century Salisbury Tournament & Lists",
      "Court Politics of King Henry III & Hubert de Burgh",
      "The House of Braose & Prophetic Warnings",
      "John de Braose & The Murder in the Lists",
      "Chivalric Codes, Armorial Bearings & Castle Architecture"
    ],
    excerpt: "The thunder of warhorses shook the Hampshire turf as ash lances shattered against tempered steel. William watched from the pavilion gallery, gripping the wooden rail as his father's armorial pennant fluttered against the gray English sky. The chilling warning of the Maiden Isolde still rang in his ears—just before the treacherous blow struck John de Braose down in the lists.",
    chapters: [
      {
        title: "Chapter I: The Gathering at Winchester",
        preview: "William rides with his father from the family estates into the bustling heraldic encampment of knights, esquires, and armorial pavilions."
      },
      {
        title: "Chapter II: Shadows in the King's Pavilion",
        preview: "King Henry III's court factions scheme in secret as Hubert de Burgh and Peter des Roches vie for supremacy."
      },
      {
        title: "Chapter III: The Prophecy of the Maiden Isolde",
        preview: "A chilling warning echoes through the torchlit feast: the great Salisbury Tournament approaches, marked by a sinister omen of doom."
      },
      {
        title: "Chapter IV: The Field of Lances",
        preview: "From the spectator gallery, William watches his father, John, ride into the thunderous tournament lists—where chivalry is shattered by calculated murder."
      }
    ],
    buyLinks: [
      {
        store: "Order on Amazon (Paperback & Kindle)",
        url: "https://www.amazon.com/Last-Tournament-William-Braose-Winchest/dp/196880773X/ref=sr_1_1?s=books&sr=1-1"
      },
      {
        store: "Publisher Catalog (Books Academy LLC)",
        url: "https://www.amazon.com/Last-Tournament-William-Braose-Winchest/dp/196880773X/ref=sr_1_1?s=books&sr=1-1"
      },
      {
        store: "Author Official Website",
        url: "https://www.trentdeestephens.com/"
      }
    ],
    praise: [
      {
        quote: "An extraordinary recreation of 13th-century chivalric England. The architectural realism, heraldry, and tension of the tournament lists are rendered with consummate historical scholarship.",
        source: "Medieval Historical Review"
      },
      {
        quote: "Dr. Stephens brings decades of anatomical precision and castle research into a gripping narrative of court intrigue and medieval honor.",
        source: "Chivalric Scriptorium & Literary Journal"
      }
    ],
    featured: true
  }
];

export const BLOG_ARTICLES_FROM_WEBSITE: BlogArticle[] = [
  {
    id: "blog-cheddar-man-flood",
    title: "Cheddar Man and the Flood",
    subtitle: "Genetic continuity in the British Isles over 10,000 years and the biblical chronology of a global deluge",
    category: "Genetics & Scripture",
    date: "From trentdeestephens.com/blog",
    readTime: "7 min read",
    externalUrl: "https://www.trentdeestephens.com/blog",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    summary: "Dr. Stephens analyzes the DNA recovered from Cheddar Man—the 10,000-year-old skeleton found in Gough's Cave, Somerset—demonstrating that mitochondrial haplogroup U5 has continued unbroken in the UK for ten millennia, posing a decisive challenge to a universal global flood in 2348 BC.",
    content: [
      "The genetic analysis of Cheddar Man, a complete human skeleton dating to circa 8000 BC discovered in Gough's Cave, Somerset, England, provides one of the most compelling biological markers regarding ancient population continuity.",
      "Nuclear and mitochondrial DNA extraction revealed that Cheddar Man belonged to mitochondrial haplogroup U5. Intriguingly, modern genetic surveys of Somerset residents show that this maternal lineage has continued without interruption in the British Isles across the past 10,000 years.",
      "If a universal, global flood had exterminated all human life outside of Noah's ark circa 2348 BC (the traditional Ussher biblical chronology), the genetic lineage of Cheddar Man would have been abruptly extinguished. The unbroken genetic record across ten millennia demonstrates that human populations in the British Isles were never wiped out by a global cataclysm during that epoch.",
      "This finding does not diminish the spiritual covenant of Noah; rather, it prompts thoughtful scholars to recognize that the ancient Hebrew word 'eretz' signifies a local or regional 'land' rather than the entire planetary biosphere."
    ],
    keyTakeaways: [
      "Cheddar Man's mitochondrial haplogroup U5 persists in modern British populations across 10,000 years.",
      "An unbroken genetic lineage across 2348 BC contradicts a universal planetary extinction event.",
      "Biblical exegesis supports a catastrophic regional flood, with global consequences including ancient America, the Atlantic, and the Middle East."
    ]
  },
  {
    id: "blog-antediluvian-postdiluvian-dilemma",
    title: "The Antediluvian-Postdiluvian Dilemma",
    subtitle: "Examining the geographical continuity of the Tigris and Euphrates rivers across the Genesis narrative",
    category: "Biblical Geography & Geology",
    date: "From trentdeestephens.com/blog",
    readTime: "6 min read",
    externalUrl: "https://www.trentdeestephens.com/blog",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800",
    summary: "Genesis explicitly identifies the rivers Hiddekel (Tigris) and Euphrates both before the Flood in Eden and after the Flood in Mesopotamia. Dr. Stephens explains why a catastrophic global deluge could never preserve the identical river channels.",
    content: [
      "One of the most persistent dilemmas in flood geology is the Antediluvian-Postdiluvian Dilemma. In Genesis 2:10–14, the text describes the garden of Eden as having four river heads: Pishon, Gihon, Hiddekel (the ancient name for the Tigris), and the Euphrates (Perath).",
      "Following the flood account in Genesis 8–11, we find Noah's descendants inhabiting the exact same geographical river valley of the Tigris and Euphrates in Shinar (Mesopotamia).",
      "If the flood were a catastrophic global deluge capable of depositing miles of sedimentary rock strata, shifting continental plates, and carving mountain ranges, those ancient river channels would have been utterly obliterated under thousands of feet of new sediment. They could not possibly exist in their identical geographical locations both before and after the flood.",
      "The physical preservation of these river systems confirms that the topography of Mesopotamia remained continuous throughout ancient history. This supports a catastrophic regional flood in the Americas, with global consequences including ancient America, the Atlantic, and the Middle East."
    ],
    keyTakeaways: [
      "Genesis references the Tigris (Hiddekel) and Euphrates in both pre-flood and post-flood descriptions.",
      "Catastrophic global flood models would have completely destroyed and buried pre-flood topography.",
      "A catastrophic regional flood in the Americas, with global consequences including ancient America, the Atlantic, and the Middle East."
    ]
  },
  {
    id: "blog-geological-problems-noahs-flood",
    title: "Geological Problems with Noah's Flood",
    subtitle: "Limestone stratigraphy, radiometric deposition rates, and the Hebrew translation of 'Eretz'",
    category: "Earth Science & Theology",
    date: "From trentdeestephens.com/blog",
    readTime: "8 min read",
    externalUrl: "https://www.trentdeestephens.com/blog",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    summary: "Drawn from Dr. Stephens' research on biblical geology, exploring how thick sedimentary limestone layers and fossil sorting refute short-term catastrophic flood geology.",
    content: [
      "When we examine the massive limestone formations of the world—such as the Redwall Limestone in the Grand Canyon or the chalk cliffs of Dover—we are looking at calcium carbonate structures formed by millions of generations of microscopic marine organisms (coccolithophores and foraminifera) precipitating in calm, shallow seas.",
      "To claim that these vast, pure biochemical strata were deposited in a single year of turbulent floodwaters violates the fundamental laws of chemistry, thermodynamics, and sedimentology. In turbulent floodwaters, limestone would be mixed with sand, silt, and volcanic ash rather than forming pure, biologically graded layers.",
      "Furthermore, the biblical text itself does not mandate a global interpretation. The Hebrew noun 'eretz', used throughout the flood narrative, is translated hundreds of times elsewhere in the Old Testament as 'the land', 'country', or 'region' (such as the land of Canaan or the land of Egypt).",
      "Honest harmonization between geology and scripture frees us from artificial dogmas and allows us to appreciate the true historical and theological message of the Genesis prophets."
    ],
    keyTakeaways: [
      "Limestone deposition requires quiet marine biochemical accumulation over extensive epochs.",
      "Sedimentary layering and fossil sorting are incompatible with a single chaotic global inundation.",
      "The Hebrew word 'eretz' predominantly refers to a regional land rather than the entire earth."
    ]
  },
  {
    id: "blog-giants-nephilim",
    title: "Giants, the Nephilim, and Biological Reality",
    subtitle: "Investigating the 'Sons of God', 'Daughters of Men', and biomechanical limits of human stature",
    category: "Anatomy & Exegesis",
    date: "From trentdeestephens.com/blog",
    readTime: "7 min read",
    externalUrl: "https://www.trentdeestephens.com/blog",
    image: "https://images.unsplash.com/photo-1507842229451-2487e6005b63?auto=format&fit=crop&q=80&w=800",
    summary: "An anatomist's perspective on Genesis 6:4, examining the physiological constraints of human bone density (Square-Cube Law), mythological embellishments, and the linguistic meaning of the Nephilim.",
    content: [
      "Genesis 6:4 states: 'There were giants in the earth in those days; and also after that, when the sons of God came in unto the daughters of men...' This passage has inspired countless speculative theories concerning superhuman hybrids.",
      "As a professor of human anatomy and embryology, I examine this passage through the lens of developmental biology and biomechanics. The Square-Cube Law dictates that as an organism doubles in height, its surface area increases fourfold, but its mass increases eightfold. A human standing 10 to 20 feet tall would suffer catastrophic skeletal failure, circulatory collapse, and inability to dissipate metabolic heat.",
      "Historically, the Hebrew word 'Nephilim' stems from the root 'naphal' (to fall or cause to fall), signifying violent tyrants, apostates, or fallen leaders who oppressed their contemporaries, rather than mythological giants.",
      "By integrating anatomical reality with Semitic linguistics, we see that Genesis describes real historical sociopolitical corruption rather than supernatural biological anomalies."
    ],
    keyTakeaways: [
      "The biomechanical Square-Cube Law establishes firm physiological boundaries on human stature.",
      "The term 'Nephilim' denotes fallen men, tyrants, or violent rulers rather than mythological monsters.",
      "Sound anatomical knowledge protects scripture from sensationalized misinterpretations."
    ]
  },
  {
    id: "blog-egyptian-chronology",
    title: "Egyptian Historical Records and the Flood Chronology",
    subtitle: "Unbroken dynastic king lists and civilization continuity across the traditional 2348 BC timeline",
    category: "Archaeology & History",
    date: "From trentdeestephens.com/blog",
    readTime: "8 min read",
    externalUrl: "https://www.trentdeestephens.com/blog",
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=800",
    summary: "Dr. Stephens reviews the continuous dynastic records of the Old Kingdom of Egypt—including the builders of the Giza Pyramids—which show zero hiatus or flood destruction during the mid-3rd millennium BC, consistent with his model of an ancient American event leading to an Atlantic crossing and ending in the Middle East.",
    content: [
      "The archaeological and epigraphic records of ancient Egypt provide an unbroken timeline of pharaohs, administrative censuses, and architectural construction spanning from the Early Dynastic Period (circa 3100 BC) straight through the Old Kingdom and beyond.",
      "The Great Pyramid of Giza was constructed under Pharaoh Khufu around 2560 BC. The 5th and 6th Dynasties of Egypt ruled continuously through 2348 BC—the exact year assigned to Noah's Flood in standard literalist chronologies.",
      "In the thousands of tomb inscriptions, papyri, and king lists (such as the Abydos King List and the Turin Royal Canon), there is no record whatsoever of a catastrophic inundation that drowned the Nile civilization, submerged the pyramids, or required the repopulation of Egypt from Mount Ararat.",
      "These historical realities confirm that the civilizations of Egypt, Mesopotamia, the Indus Valley, and China continued uninterrupted. Rather than the standard Middle East regional flood model, Dr. Stephens' hypothesis proposes an ancient American regional event, leading to an Atlantic crossing, and ending in the Middle East."
    ],
    keyTakeaways: [
      "Egyptian dynastic records show uninterrupted governance through the traditional 2348 BC flood date.",
      "The Giza pyramids and Nile tomb inscriptions exhibit no global flood sediment layers.",
      "Civilization continuity refutes a universal deluge, supporting Dr. Stephens' model of an ancient American regional event leading to an Atlantic crossing ending in the Middle East."
    ]
  },
  {
    id: "blog-thalidomide-embryology",
    title: "The Molecular Mystery of Thalidomide & Embryonic Morphogenesis",
    subtitle: "Decades of research at the University of Washington and Idaho State University unravelling limb bud teratogenesis",
    category: "Embryology & Medical Science",
    date: "From trentdeestephens.com/blog",
    readTime: "9 min read",
    externalUrl: "https://www.trentdeestephens.com/blog",
    image: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&q=80&w=800",
    summary: "Reflecting on his research published in 'Dark Remedy' (with Rock Brynner): Dr. Stephens explains how thalidomide acts like a 'perfect storm' of birth defects, where blocking blood vessels is one of the mechanisms rather than the sole factor.",
    content: [
      "In the early 1960s, the world was shocked by the tragedy of thalidomide, a morning sickness drug that caused thousands of infants to be born with phocomelia (severe limb malformations). For decades, the precise molecular mechanism of this teratogenesis remained an unsolved question in embryology.",
      "Throughout my research career at the University of Washington and Idaho State University, my laboratory investigated how thalidomide acts like a perfect storm of birth defects. Blocking blood vessels (angiogenesis) within the early limb buds between days 20 and 36 of human gestation is one of the mechanisms, not the sole mechanism.",
      "By inhibiting vessel growth during this critical window, thalidomide starves rapidly proliferating mesenchymal cells, which works in concert with other cellular disruptions to cause localized tissue loss and prevent the distal expansion of hands and arms.",
      "Understanding these multifaceted mechanisms not only yielded crucial medical insights that led to thalidomide's rebirth as an anti-angiogenic cancer therapy for multiple myeloma, but it also reinforced my profound reverence for the astonishing precision required to construct the human body."
    ],
    keyTakeaways: [
      "Thalidomide acts like a perfect storm of birth defects, with blocking blood vessels being one of the key mechanisms rather than the only one.",
      "Laboratory research at the University of Washington and Idaho State University helped decode these embryonic pathways.",
      "Targeted multi-pathway insights transformed a notorious teratogen into a lifesaving therapy for multiple myeloma."
    ]
  }
];

export const ARCHIVE_DOSSIERS: ArchiveDossier[] = [
  {
    id: "dossier-13th-century-tournaments",
    title: "13th-Century Chivalric Tournaments & Tournament Lists",
    subtitle: "Archival Research into Royal Decrees, Salisbury Lists, and Arms of Henry III's Reign",
    category: "Historical Fiction Research",
    description: "Dr. Trent Dee Stephens' sixty years of medieval research into 13th-century English tournament rules, the Statute of Arms, armorial blazonry, and the court factionalism of King Henry III, Hubert de Burgh, and Peter des Roches.",
    historicalContext: "In 1232 England, chivalric tournaments were dangerous spectacles of martial prowess and political factionalism. The Plantagenet court was divided between the English barons and Poitevin favourites, setting the stage for the Salisbury tournament where John de Braose entered the lists and was murdered, as observed from the gallery by his young squire son, William.",
    researchNotes: [
      "The Statute of Arms and the strict rules governing blunt weapons ('à plaisance') vs. unrebated weapons ('à outrance').",
      "Heraldic blazons of the House of Braose, the Earls of Salisbury, and the Bishopric of Winchester.",
      "Tournament lists at Salisbury, Wilton, and Warwick as political staging grounds for court factions and clandestine treachery.",
      "Destrier breeding, ash lance fabrication, and early mail-and-plate transitional armor."
    ],
    relatedWorks: ["The Last Tournament: Book 2 of: William de Braose Squire of Winchester"],
    image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "dossier-medieval-stone-fortifications",
    title: "Medieval Castle Architecture & Concentric Siege Defense",
    subtitle: "Six Decades of Scale Modeling & Structural Engineering Analysis",
    category: "Medieval Architecture",
    description: "Extensive study of Norman keeps, Edwardian concentric fortresses, curtain wall geometry, and Master James of St. George's defensive innovations across England, Wales, and France.",
    historicalContext: "The evolution from motte-and-bailey earthworks to concentric polygonal fortresses like Caernarfon, Harlech, and Beaumaris revolutionized medieval siege warfare, creating overlapping arrow-slit fields of fire and resilient barbicans.",
    researchNotes: [
      "Polygonal tower geometry and banded masonry inspired by the Walls of Constantinople.",
      "Cardstock scale modeling methods for museum-grade architectural representations (founder of BuildModelCastles.com).",
      "Machicolation spacing, portcullis deadfalls, and murder-hole engineering in 13th-century gatehouses.",
      "Civic defense charters and half-timbered guild structures in fortified medieval towns."
    ],
    relatedWorks: ["The Castle Builder's Handbook", "The Medieval Town Builder's Handbook"],
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "dossier-teratological-embryology",
    title: "Vertebrate Morphogenesis & Teratological Mechanisms",
    subtitle: "Four Decades of Laboratory Research at the University of Washington & Idaho State University",
    category: "Embryological Science",
    description: "Pioneering investigations into how biochemical signals coordinate limb bud outgrowth and how teratogens such as thalidomide create a 'perfect storm' of birth defects during critical human gestational windows.",
    historicalContext: "The thalidomide tragedy of the late 1950s led to modern FDA drug safety protocols and spurred decades of developmental embryology to decode the complex mechanism of phocomelia.",
    researchNotes: [
      "The 20-to-36 day human gestational window: apical ectodermal ridge (AER) and progress zone signaling.",
      "Thalidomide acts as a 'perfect storm' of birth defects; blocking blood vessels is one of the key mechanisms, not the sole mechanism.",
      "Decades of laboratory research conducted at the University of Washington and Idaho State University.",
      "The clinical resurrection of thalidomide in oncology for anti-angiogenic starvation of multiple myeloma tumors.",
      "Authored the Atlas of Human Embryology and McGraw-Hill's benchmark Anatomy & Physiology textbook."
    ],
    relatedWorks: ["Dark Remedy: The Impact of Thalidomide", "Anatomy & Physiology (13th Edition)"],
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "dossier-ancient-near-eastern-chronology",
    title: "Ancient Near Eastern Texts & Scientific Harmonization",
    subtitle: "Semitic Lexicons, Geological Stratigraphy, and Cosmological Epistemology",
    category: "Science & Theology",
    description: "Scholarly inquiry integrating Hebrew linguistics, archaeological king lists, and Earth history to resolve longstanding tensions between scientific data and sacred literature, developing an ancient American regional flood model with an Atlantic crossing ending in the Middle East.",
    historicalContext: "Ancient Near Eastern scribes recorded cosmological accounts in the exalted poetic idioms of their era. Harmonizing these texts with modern stratigraphy and genetics reveals theological truth without requiring adherence to unscientific universal flood models.",
    researchNotes: [
      "Semantic analysis of the Hebrew noun 'eretz' (regional territory/country) versus modern planetary concepts.",
      "10,000-year human genetic continuity in the British Isles (Cheddar Man, Haplogroup U5) and Egyptian dynastic records.",
      "Model of an ancient American regional deluge leading to an Atlantic crossing, ending in the Middle East.",
      "Limestone sedimentology and biochemical marine deposition rates refuting single-year deluge models."
    ],
    relatedWorks: ["The Infinite Creation", "The Infinite Fall", "The Immortal Messiah", "Science and the Old Testament"],
    image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800"
  }
];

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: "media-podcast-fair",
    type: "Podcast",
    title: "Science, Faith, and the Infinite Creation with Dr. Trent Dee Stephens",
    publisher: "FAIR Latter-day Saints Academic Podcast",
    date: "Scholarly Interview",
    readTimeOrDuration: "58 min listen",
    summary: "Dr. Trent Dee Stephens discusses his 'Pillars of Eternity' book series, resolving perceived tensions between evolutionary embryology, deep time, and ancient scripture.",
    linkText: "Explore Discussion",
    url: "https://www.trentdeestephens.com/",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
    badge: "Scholarly Audio"
  },
  {
    id: "media-interview-dark-remedy",
    type: "Interview",
    title: "Dark Remedy: Unpacking the History of Thalidomide with Co-Author Dr. Trent Stephens",
    publisher: "National Medical & Science Media",
    date: "Medical Archive Feature",
    readTimeOrDuration: "15 min read",
    summary: "Dr. Stephens discusses the teratogenic history of thalidomide, laboratory research at Idaho State University, and how the drug found unexpected new application as an oncology therapy.",
    linkText: "Read Medical Feature",
    url: "https://www.trentdeestephens.com/",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
    badge: "Medical History"
  },
  {
    id: "media-castles-retrospective",
    type: "Article",
    title: "Sixty Years of Castle Building: Dr. Trent Stephens on Medieval Architecture & Scale Craft",
    publisher: "BuildModelCastles.com Journal",
    date: "Architectural Retrospective",
    readTimeOrDuration: "10 min read",
    summary: "An in-depth retrospective on Dr. Stephens' sixty-year passion for analyzing medieval stone fortifications, publishing architectural handbooks, and designing scale cardstock models.",
    linkText: "Read Architectural Feature",
    url: "https://www.buildmodelcastles.com/",
    image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&q=80&w=800",
    badge: "Architecture & Craft"
  },
  {
    id: "media-keynote-isu",
    type: "Keynote",
    title: "The Developmental Origins of Vertebrate Form: ISU Distinguished Faculty Lecture",
    publisher: "Idaho State University Distinguished Series",
    date: "Academic Plenary",
    readTimeOrDuration: "45 min presentation",
    summary: "Professor Emeritus Stephens presents his seminal findings on vertebrate limb morphogenesis, genetic signaling cascades, and the timeless elegance of developmental anatomy.",
    linkText: "View Plenary Overview",
    url: "https://www.trentdeestephens.com/",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
    badge: "Academic Plenary"
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: "1948",
    era: "Idaho Roots",
    title: "Born in Wendell, Idaho",
    category: "Foundation",
    description: "Dr. Trent Dee Stephens is born in Wendell, Idaho. He grows up in Idahome, develops an early passion for biological drawing and scale modeling, and graduates from Raft River High School in 1966.",
    manuscriptNote: "Constructed his first miniature scale castles out of cardboard and plaster."
  },
  {
    year: "1973–1977",
    era: "Academic Formation",
    title: "Brigham Young University & University of Pennsylvania Ph.D.",
    category: "Academic",
    description: "Earns B.S. in Microbiology and Zoology (1973) and M.S. in Zoology (1974) from BYU, followed by his Ph.D. in Anatomy from the University of Pennsylvania in 1977.",
    manuscriptNote: "Doctoral investigations into vertebrate limb morphogenesis."
  },
  {
    year: "1981–2011",
    era: "Four Decades of Professorship",
    title: "Idaho State University & Creighton Dental Faculty",
    category: "Academic",
    description: "Appointed Professor of Anatomy and Embryology at Idaho State University. Named ISU Distinguished Researcher and Master Teacher, teaching generations of pre-medical and dental students while researching thalidomide teratogenesis.",
    manuscriptNote: "Continued laboratory research and teaching as Professor Emeritus post-2011."
  },
  {
    year: "1990s–Present",
    era: "The Benchmark Medical Textbooks",
    title: "Authoring McGraw-Hill's Anatomy & Physiology (13 Editions)",
    category: "Publication",
    description: "Co-authors the benchmark 'Anatomy and Physiology' textbook with Rod R. Seeley and Philip Tate, now in its 13th edition, and authors the Atlas of Human Embryology.",
    manuscriptNote: "Standard undergraduate medical and nursing reference worldwide."
  },
  {
    year: "2001",
    era: "Landmark Works",
    title: "Dark Remedy & Evolution and Mormonism",
    category: "Publication",
    description: "Publishes 'Dark Remedy: The Impact of Thalidomide' with Rock Brynner (foreword by Arthur Miller), alongside 'Evolution and Mormonism' with Dr. Jeffrey Meldrum.",
    manuscriptNote: "Dark Remedy reviewed extensively across leading medical journals."
  },
  {
    year: "2012–2016",
    era: "Architectural Scriptorium",
    title: "The Castle Builder's Handbook & BuildModelCastles.com",
    category: "Publication",
    description: "Founds BuildModelCastles.com and authors 'The Castle Builder's Handbook' and 'The Medieval Town Builder's Handbook', sharing sixty years of model stone castle engineering.",
    manuscriptNote: "Comprehensive structural guides to concentric medieval fortifications."
  },
  {
    year: "2020–2024",
    era: "Pillars of Eternity & Essays",
    title: "The Infinite Creation Series & Weekly Blog Dispatches",
    category: "Publication",
    description: "Publishes the monumental 'Pillars of Eternity' trilogy (The Infinite Creation, The Infinite Fall, The Immortal Messiah) and publishes regular weekly scholarly essays on trentdeestephens.com.",
    manuscriptNote: "Scholarly synthesis of genetics, geology, and ancient Semitic exegesis."
  },
  {
    year: "2026",
    era: "The Medieval Saga",
    title: "The Last Tournament (William de Braose Saga)",
    category: "Current",
    description: "Publishes 'The Last Tournament: Book 2 of: William de Braose Squire of Winchester' (Books Academy LLC, ISBN: 196880773X), bringing sixty years of medieval research into an epic chivalric tournament novel.",
    manuscriptNote: "Grounded in historical records of King Henry III and 1232 tournament lists."
  }
];
