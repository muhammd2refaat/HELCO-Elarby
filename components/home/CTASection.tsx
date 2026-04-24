export function CTASection() {
  return (
    <section
      id="about"
      className="rounded-2xl border border-[#30353b] bg-[#1b2025] px-6 py-10 sm:px-10 sm:py-12"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold text-[#dee3ea] sm:text-4xl">
            Ready to strengthen your institution?
          </h2>
          <p className="text-base leading-8 text-[#9a8f84] sm:text-lg">
            Engage with HELCO for confidential, long-horizon advisory tailored to your strategic
            priorities.
          </p>
        </div>

        <a
          href="mailto:contact@helco.com"
          className="inline-flex w-fit items-center justify-center rounded-md bg-[#a88c68] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#39260a] transition hover:bg-[#e1c19a]"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
