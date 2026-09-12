export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="border-y border-border bg-bg-muted/50 section-pad"
    >
      <div className="site-wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-fg-muted">
            Early access
          </p>
          <h2 className="display-xl mt-4 text-[clamp(2rem,4.5vw,3.25rem)] text-fg">
            Join the waitlist
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-fg-muted">
            Docs is baking. Leave your email and we&apos;ll ping you when free
            MD → PDF and Pro Brand Layer tiers open. Future home:{" "}
            <span className="font-medium text-fg">docs.dynamogic.com</span>.
          </p>
        </div>

        <form
          className="mx-auto mt-10 max-w-lg"
          action="mailto:waitlist@dynamogic.com"
          method="get"
          encType="text/plain"
        >
          <input type="hidden" name="subject" value="Docs waitlist" />
          <label htmlFor="waitlist-email" className="sr-only">
            Email
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
            <input
              id="waitlist-email"
              name="body"
              type="email"
              required
              placeholder="you@company.com"
              autoComplete="email"
              className="h-12 flex-1 rounded-md border border-border bg-bg-paper px-4 text-sm text-fg shadow-soft placeholder:text-fg-muted/70 focus:border-border-strong"
            />
            <button
              type="submit"
              className="btn-soft inline-flex h-12 items-center justify-center rounded-md px-6 text-sm font-semibold"
            >
              Request invite
            </button>
          </div>
          <p className="mt-4 text-center text-[13px] text-fg-muted">
            Opens your mail client (placeholder). Or write{" "}
            <a
              className="underline decoration-border underline-offset-4 hover:decoration-fg"
              href="mailto:waitlist@dynamogic.com?subject=Docs%20waitlist"
            >
              waitlist@dynamogic.com
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
