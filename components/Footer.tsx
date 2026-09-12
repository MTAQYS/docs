import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 sm:py-14">
      <div className="site-wrap flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-fg-muted">
            Markdown → PDF under the Dynamogic suite. Soft paper, charcoal, Inter
            — documents that look intentional.
          </p>
          <p className="mt-4 text-sm text-fg-muted">
            Suite · OS · BePro · Docs
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-fg-muted sm:items-end">
          <a
            href="https://mtaqys.github.io/dynamogic/"
            className="font-medium text-fg underline decoration-border underline-offset-4 hover:decoration-fg"
            rel="noopener noreferrer"
          >
            ← Dynamogic OS hub
          </a>
          <a
            href="https://mtaqys.github.io/bepro/"
            className="underline decoration-border underline-offset-4 hover:decoration-fg hover:text-fg"
            rel="noopener noreferrer"
          >
            BePro CV builder
          </a>
          <p className="text-sm text-fg-muted">Future · docs.dynamogic.com</p>
          <p className="text-[13px]">© {new Date().getFullYear()} Dynamogic</p>
        </div>
      </div>
    </footer>
  );
}
