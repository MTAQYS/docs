import { Reveal } from "./motion/Reveal";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="border-y border-border bg-bg-muted/50 section-pad"
    >
      <div className="site-wrap">
        <Reveal className="mx-auto max-w-lg text-center">
          <p className="kicker">Early access</p>
          <h2 className="display-xl mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] text-fg">
            Join the waitlist
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            Docs is baking. We&apos;ll ping you when free MD → PDF and Pro brand
            tiers open. Future home:{" "}
            <span className="font-medium text-fg">docs.dynamogic.com</span>.
          </p>
          <a
            href="mailto:waitlist@dynamogic.com?subject=Docs%20waitlist"
            className="btn-flat mt-8 inline-flex h-11 items-center rounded-md px-6 text-sm font-medium"
          >
            Email waitlist@dynamogic.com
          </a>
          <p className="mt-4 text-[13px] text-fg-muted">
            Mailto only — opens your mail client.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
