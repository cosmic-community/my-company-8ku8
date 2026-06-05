export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Division extends CosmicObject {
  type: 'divisions';
  metadata: {
    name?: string;
    positioning?: string;
    master_narrative?: string;
    hero_image?: CosmicImage;
    sub_sectors?: string;
    display_order?: number;
  };
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    name?: string;
    division?: Division;
    overview?: string;
    compliance?: string;
    partners?: string;
    featured_image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    job_title?: string;
    bio?: string;
    photo?: CosmicImage;
    linkedin?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    title?: string;
    division?: Division;
    challenge?: string;
    solution?: string;
    outcomes?: string;
    hero_image?: CosmicImage;
    gallery?: CosmicImage[];
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    author_name?: string;
    author_role?: string;
    organization?: string;
    featured?: boolean;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}