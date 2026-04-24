import {
  hasStrapiUrl,
  isRecord,
  readString,
  strapiFetch,
  toAbsoluteStrapiUrl,
  type StrapiCollectionResponse,
  type StrapiEntity,
} from "./strapi";

export interface Insight {
  id: number | string;
  title: string;
  excerpt: string;
  href: string;
  imageUrl: string | null;
}

function resolveImageUrl(source: Record<string, unknown>): string | null {
  const image = source.image;
  if (!isRecord(image)) {
    return null;
  }

  const directUrl = readString(image, ["url"]);
  if (directUrl) {
    return toAbsoluteStrapiUrl(directUrl);
  }

  const data = image.data;
  if (isRecord(data)) {
    const attrs = isRecord(data.attributes) ? data.attributes : data;
    const nestedUrl = readString(attrs, ["url"]);
    return nestedUrl ? toAbsoluteStrapiUrl(nestedUrl) : null;
  }

  if (Array.isArray(data) && data.length > 0 && isRecord(data[0])) {
    const first = data[0];
    const attrs = isRecord(first.attributes) ? first.attributes : first;
    const nestedUrl = readString(attrs, ["url"]);
    return nestedUrl ? toAbsoluteStrapiUrl(nestedUrl) : null;
  }

  return null;
}

function normalizeInsight(entity: StrapiEntity, index: number): Insight {
  const source = isRecord(entity.attributes) ? entity.attributes : entity;
  const id = typeof entity.id === "number" || typeof entity.id === "string" ? entity.id : index;
  const slug = readString(source, ["slug"]);
  const href = slug ? `/insights/${slug}` : "#";

  return {
    id,
    title: readString(source, ["title", "name"]) ?? `Insight ${index + 1}`,
    excerpt:
      readString(source, ["excerpt", "description", "summary"]) ??
      "Read the latest institutional perspective from our advisory desk.",
    href,
    imageUrl: resolveImageUrl(source),
  };
}

export async function getInsights(): Promise<Insight[]> {
  if (!hasStrapiUrl()) {
    return [
      {
        id: "capital-preservation",
        title: "Capital Preservation Through Volatile Cycles",
        excerpt:
          "A framework for maintaining institutional stability while preserving optionality across uncertain macroeconomic regimes.",
        href: "#",
        imageUrl: "/images/hero.png",
      },
      {
        id: "board-level-risk",
        title: "Board-Level Risk Management in 2026",
        excerpt:
          "How leadership teams can align risk controls with long-horizon growth without sacrificing execution speed.",
        href: "#",
        imageUrl: "/images/hero.png",
      },
      {
        id: "strategic-restructuring",
        title: "Strategic Restructuring for Durable Growth",
        excerpt:
          "Operating models and advisory patterns that help institutions emerge stronger after structural change.",
        href: "#",
        imageUrl: "/images/hero.png",
      },
    ];
  }

  const payload = await strapiFetch<StrapiCollectionResponse<StrapiEntity>>(
    "/api/insights?populate=*",
  );

  if (!Array.isArray(payload.data)) {
    throw new Error("Invalid insights payload from Strapi.");
  }

  return payload.data.map((entity, index) => normalizeInsight(entity, index));
}
