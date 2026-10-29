export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  genre: string;
  category: 'historical-fiction' | 'science-theology' | 'medical-anatomy' | 'medieval-architecture';
  publicationYear: string;
  pages: number;
  isbn: string;
  coverImage: string;
  spineColor: string;
  tagline: string;
  synopsis: string;
  coAuthors?: string;
  publisher?: string;
  themes: string[];
  excerpt: string;
  chapters: { title: string; preview: string }[];
  praise?: { quote: string; source: string }[];
  buyLinks: { store: string; url: string }[];
  featured?: boolean;
}

export interface BlogArticle {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  externalUrl: string;
  image: string;
}

export interface TimelineEvent {
  year: string;
  era: string;
  title: string;
  category: 'Foundation' | 'Academic' | 'Publication' | 'Current';
  description: string;
  manuscriptNote?: string;
}

export interface MediaItem {
  id: string;
  type: 'Interview' | 'Podcast' | 'Article' | 'Keynote';
  title: string;
  publisher: string;
  date: string;
  readTimeOrDuration: string;
  summary: string;
  linkText: string;
  url?: string;
  image: string;
  badge: string;
}

export interface ArchiveDossier {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  historicalContext: string;
  researchNotes: string[];
  relatedWorks: string[];
  image: string;
}


