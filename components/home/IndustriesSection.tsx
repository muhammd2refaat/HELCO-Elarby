const industries = [
  "Financial Services",
  "Healthcare & Life Sciences",
  "Energy & Infrastructure",
  "Technology & Innovation",
];

const stats = [
  { label: "Assets Under Advisement", value: "$45B+" },
  { label: "Client Retention Rate", value: "98%" },
];

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="grid gap-8 border-t border-[#30353b] pt-14 lg:grid-cols-[1.2fr_0.8fr]"
    >
      <div className="space-y-5">
        <h2 className="text-3xl font-semibold text-[#dee3ea] sm:text-4xl">Industries We Serve</h2>
        <p className="max-w-2xl text-base leading-8 text-[#9a8f84] sm:text-lg">
          We advise institutions operating in highly regulated, high-stakes environments where
          capital discipline and strategic clarity are essential.
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {industries.map((industry) => (
            <li
              key={industry}
              className="rounded-lg border border-[#30353b] bg-[#1b2025] px-4 py-3 text-sm text-[#dee3ea]"
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-xl border border-[#30353b] bg-[#171c21] p-6 sm:p-8"
          >
            <p className="text-4xl font-bold text-[#e1c19a] sm:text-5xl">{stat.value}</p>
            <p className="mt-3 text-sm text-[#9a8f84] sm:text-base">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
