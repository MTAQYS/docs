import { Reveal } from "./motion/Reveal";

export function Hero() {
  return (
    <section id="top" className="relative" aria-label="Hero">
      <div className="site-wrap pb-10 pt-14 sm:pb-12 sm:pt-20">
        <Reveal className="max-w-xl lg:max-w-2xl">
          <p className="kicker">Dynamogic Docs</p>
          <h1 className="display-xl mt-4 max-w-[14ch] text-[clamp(2.4rem,6vw,3.75rem)] text-fg">
            Markdown to finished paper.
          </h1>
          <p className="mt-5 max-w-md text-[1.02rem] leading-relaxed text-fg-muted">
            Write once. Export a PDF with quiet type, soft margins, and your
            mark on the page — print-shop calm, not template sludge.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#waitlist"
              className="btn-flat inline-flex h-11 items-center rounded-md px-6 text-sm font-medium"
            >
              Join the waitlist
            </a>
            <a
              href="#stage"
              className="inline-flex h-11 items-center rounded-md border border-border-strong bg-bg-paper px-5 text-sm font-medium text-fg transition-colors hover:bg-bg-muted"
            >
              See MD → PDF
            </a>
          </div>
          <p className="mt-5 text-sm text-fg-muted">
            Free convert forever · Pro brand kits · docs.dynamogic.com
          </p>
        </Reveal>
      </div>
    </section>
  );
}
