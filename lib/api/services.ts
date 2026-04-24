import {
  hasStrapiUrl,
  isRecord,
  readString,
  strapiFetch,
  type StrapiCollectionResponse,
  type StrapiEntity,
} from "./strapi";

export interface Service {
  id: number | string;
  title: string;
  description: string;
}

function normalizeService(entity: StrapiEntity, index: number): Service {
  const source = isRecord(entity.attributes) ? entity.attributes : entity;
  const id = typeof entity.id === "number" || typeof entity.id === "string" ? entity.id : index;

  return {
    id,
    title: readString(source, ["title", "name"]) ?? `Service ${index + 1}`,
    description:
      readString(source, ["description", "summary"]) ??
      "Bespoke strategic support tailored to your institution.",
  };
}

export async function getServices(): Promise<Service[]> {
  if (!hasStrapiUrl()) {
    return [
      {
        id: "asset-management",
        title: "Asset Management",
        description:
          "Rigorous portfolio construction focused on capital preservation and compounding growth through volatile market cycles.",
      },
      {
        id: "strategic-advisory",
        title: "Strategic Advisory",
        description:
          "Data-driven insights and board-level counsel for complex mergers, acquisitions, and corporate restructuring.",
      },
      {
        id: "risk-mitigation",
        title: "Risk Mitigation",
        description:
          "Comprehensive frameworks to identify, quantify, and neutralize operational and financial vulnerabilities.",
      },
    ];
  }

  const payload = await strapiFetch<StrapiCollectionResponse<StrapiEntity>>(
    "/api/services?populate=*",
  );

  if (!Array.isArray(payload.data)) {
    throw new Error("Invalid services payload from Strapi.");
  }

  return payload.data.map((entity, index) => normalizeService(entity, index));
}
