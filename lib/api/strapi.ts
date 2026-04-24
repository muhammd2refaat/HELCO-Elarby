const STRAPI_BASE_URL = process.env.STRAPI_URL?.replace(/\/$/, "");

export interface StrapiCollectionResponse<T> {
  data: T[];
}

export interface StrapiEntity {
  id?: number | string;
  attributes?: Record<string, unknown>;
  [key: string]: unknown;
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

export function readString(
  source: Record<string, unknown>,
  keys: string[],
): string | undefined {
  for (const key of keys) {
    const value = source[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return value;
    }
  }

  return undefined;
}

export function toAbsoluteStrapiUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  if (!STRAPI_BASE_URL) {
    throw new Error(
      "STRAPI_URL is required to resolve relative media URLs from Strapi.",
    );
  }

  return `${STRAPI_BASE_URL}${url.startsWith("/") ? url : `/${url}`}`;
}

export function hasStrapiUrl(): boolean {
  return Boolean(STRAPI_BASE_URL);
}

export async function strapiFetch<T>(path: string): Promise<T> {
  if (!STRAPI_BASE_URL) {
    throw new Error("STRAPI_URL is not configured.");
  }

  const response = await fetch(`${STRAPI_BASE_URL}${path}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(
      `Strapi request failed (${response.status}) for path: ${path}`,
    );
  }

  return (await response.json()) as T;
}
