export const CMS_API_URL = import.meta.env.VITE_CMS_API_URL || "http://localhost:8787";
export const SITE_ID = import.meta.env.VITE_SITE_ID || "glory-of-islam";

export interface CmsPost {
  id: string;
  site_id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  category: string | null;
  tags: string | null;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export async function getPosts(siteId = SITE_ID, page = 1, limit = 10): Promise<ApiResponse<CmsPost[]>> {
  const res = await fetch(`${CMS_API_URL}/public/posts?site_id=${siteId}&page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPostBySlug(slug: string, siteId = SITE_ID): Promise<CmsPost | null> {
  const res = await fetch(`${CMS_API_URL}/public/posts/${siteId}/${slug}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch post");
  const data: ApiResponse<CmsPost> = await res.json();
  return data.data;
}

export async function getCategories(siteId = SITE_ID): Promise<string[]> {
  const res = await fetch(`${CMS_API_URL}/public/categories?site_id=${siteId}`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  const data: ApiResponse<string[]> = await res.json();
  return data.data;
}
