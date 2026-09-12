import { Reveal } from "./motion/Reveal";
import { ProductStage } from "./ProductStage";

/** First screen: editorial copy + MD|PDF stage (side-by-side on desktop). */
export function Hero() {
  return (
    <section id="top" className="relative" aria-label="Introduction">
      <div className="site-wrap pb-14 pt-12 sm:pb-20 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-14">
          <Reveal immediate className="lg:col-span-5">
            <p className="text-sm text-fg-muted">Dynamogic Docs</p>
            <h1 className="display-xl mt-3 max-w-[12ch] text-[clamp(2.25rem,5vw,3.25rem)] text-fg">
              Markdown to finished paper.
            </h1>
            <p className="mt-4 max-w-sm text-[0.98rem] leading-relaxed text-fg-muted">
              Write once. Export a PDF with quiet type, soft margins, and your
              mark — print-shop calm.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#waitlist"
                className="btn-flat inline-flex h-10 items-center rounded-md px-5 text-sm font-medium"
              >
                Join the waitlist
              </a>
              <a
                href="#how"
                className="inline-flex h-10 items-center rounded-md border border-border-strong bg-bg-paper px-4 text-sm font-medium text-fg transition-colors hover:bg-bg-muted"
              >
                How it works
              </a>
            </div>
            <p className="mt-5 text-sm text-fg-muted">
              Free convert · Pro brand kits
            </p>
          </Reveal>

          <Reveal immediate delay={40} className="lg:col-span-7">
            <ProductStage embedded />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
