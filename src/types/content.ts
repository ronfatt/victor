export type Language = 'zh' | 'en';

export interface NavItem {
  key: string;
  label: string;
  href: string;
  children?: { label: string; href: string; desc?: string }[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  accentColor: string;
  badge: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tag: string;
  price: string;
  duration: string;
  format: string;
  description: string;
  highlights: string[];
  isFeatured?: boolean;
  buttonLabel: string;
  disclaimer?: string;
}

export interface MeditationLevel {
  levelNumber: string;
  title: string;
  subtitle: string;
  description: string;
  duration?: string;
  format?: string;
  prerequisite?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  location?: string;
  verificationBadge: string;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  isSample: boolean;
}

export interface AuraProductVariant {
  name: string;
  colorName: string;
  colorHex: string;
  volume: string;
  theme: string;
  description: string;
}

export interface AuraCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  volumeInfo?: string;
  status: 'available' | 'forthcoming';
  items?: AuraProductVariant[];
}
