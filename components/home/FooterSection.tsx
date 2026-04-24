export function FooterSection() {
  return (
    <footer className="mt-20 border-t border-[#30353b] bg-[#0f1419]">
      <div className="flex w-full flex-col items-center justify-between gap-8 px-4 py-14 text-center sm:px-8 md:flex-row md:text-left lg:px-14 2xl:px-20">
        <div className="space-y-3">
          <p className="text-2xl font-black tracking-tight text-[#a88c68]">HELCO</p>
          <p className="text-sm text-[#9a8f84]">
            © 2026 HELCO. Institutional Stability &amp; Strategic Insights.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 text-xs font-semibold uppercase tracking-[0.1em] text-[#d1c4b8]">
          <a href="#" className="transition hover:text-[#e1c19a]">
            Privacy Policy
          </a>
          <a href="#" className="transition hover:text-[#e1c19a]">
            Terms of Service
          </a>
          <a href="#" className="transition hover:text-[#e1c19a]">
            Global Offices
          </a>
          <a href="#" className="transition hover:text-[#e1c19a]">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
