import type { Service } from "../../lib/api/services";

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="space-y-6">
      <header className="space-y-3">
        <h2 className="text-3xl font-semibold text-[#dee3ea] sm:text-4xl">Our Expertise</h2>
        <p className="max-w-3xl text-base leading-8 text-[#9a8f84] sm:text-lg">
          Leveraging decades of industry experience to deliver bespoke financial architectures and
          strategic foresight.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.id}
            className="rounded-xl border border-[#30353b] bg-[#1b2025] p-6 transition hover:border-[#e1c19a]/40"
          >
            <h3 className="mb-3 text-xl font-semibold text-[#dee3ea]">{service.title}</h3>
            <p className="text-sm leading-7 text-[#9a8f84] sm:text-base">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
