import Image from "next/image";
import type { Insight } from "../../lib/api/insights";

interface InsightsSectionProps {
  insights: Insight[];
}

export function InsightsSection({ insights }: InsightsSectionProps) {
  return (
    <section id="insights" className="space-y-6">
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold text-[#dee3ea] sm:text-4xl">Latest Insights</h2>
        <p className="max-w-3xl text-base leading-8 text-[#9a8f84] sm:text-lg">
          Board-ready analysis and institutional intelligence shaped for strategic decision-makers.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => {
          const imageSrc = insight.imageUrl ?? "/images/insight-placeholder.png";
          const isRemoteImage = imageSrc.startsWith("http://") || imageSrc.startsWith("https://");

          return (
            <article
              key={insight.id}
              className="overflow-hidden rounded-xl border border-[#30353b] bg-[#1b2025]"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={imageSrc}
                  alt={insight.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  unoptimized={isRemoteImage}
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-[#dee3ea]">{insight.title}</h3>
                <p className="text-sm leading-7 text-[#9a8f84] sm:text-base">{insight.excerpt}</p>
                <a
                  href={insight.href}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.1em] text-[#e1c19a] transition hover:text-[#a88c68]"
                >
                  Read Insight
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
