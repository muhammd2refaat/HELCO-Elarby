import Image from "next/image";

export function HeroSection() {
  return (
    <section className="grid min-h-[calc(100svh-5rem)] w-full gap-8 px-4 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-14 xl:px-20 2xl:px-24">
      <div className="flex flex-col gap-8 lg:col-span-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#e1c19a]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e1c19a]">
            Insights
          </span>
        </div>
        <h1 className="text-4xl font-bold leading-tight text-[#dee3ea] sm:text-5xl lg:text-6xl">
          Build your future with confidence
        </h1>
        <p className="max-w-xl text-base leading-8 text-[#9a8f84] sm:text-lg">
          We provide institutional stability and strategic insights for high-net-worth clients and
          corporate stakeholders who value discretion, authority, and precision.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#services"
            className="rounded-md bg-[#a88c68] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#39260a] transition hover:bg-[#e1c19a]"
          >
            Explore Services
          </a>
          <a
            href="#industries"
            className="rounded-md border border-[#aecbd9] px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#aecbd9] transition hover:bg-[#aecbd9]/10"
          >
            Our Approach
          </a>
        </div>
      </div>

      <div className="relative h-[42svh] min-h-[320px] overflow-hidden rounded-xl border border-[#30353b] bg-[#171c21] sm:h-[50svh] lg:col-span-6 lg:h-[58svh] lg:min-h-[520px]">
        <Image
          src="/images/hero.png"
          alt="Modern institutional architecture with dark materials and metallic highlights."
          fill
          priority
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
