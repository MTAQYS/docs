import { Reveal } from "./motion/Reveal";

export function Waitlist() {
  return (
    <section id="waitlist" className="border-t border-border section-pad">
      <div className="site-wrap">
        <Reveal className="max-w-lg">
          <h2 className="display-xl text-[clamp(1.65rem,3.2vw,2.25rem)] text-fg">
            Waitlist
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            Docs is baking. We&apos;ll write when free MD → PDF and Pro brand
            open. Future home: docs.dynamogic.com.
          </p>
          <a
            href="mailto:waitlist@dynamogic.com?subject=Docs%20waitlist"
            className="btn-flat mt-6 inline-flex h-10 items-center rounded-md px-5 text-sm font-medium"
          >
            waitlist@dynamogic.com
          </a>
          <p className="mt-3 text-[13px] text-fg-muted">Mailto — opens your client.</p>
        </Reveal>
      </div>
    </section>
  );
}
