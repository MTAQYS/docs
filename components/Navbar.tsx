import { Logo } from "./Logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div className="site-wrap flex h-14 items-center justify-between sm:h-16">
        <a href="#top" className="group" aria-label="Dynamogic Docs home">
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 text-sm text-fg-muted md:flex">
          <a href="#stage" className="transition-colors hover:text-fg">
            Product
          </a>
          <a href="#how" className="transition-colors hover:text-fg">
            How it works
          </a>
          <a href="#features" className="transition-colors hover:text-fg">
            Features
          </a>
          <a href="#pricing" className="transition-colors hover:text-fg">
            Pricing
          </a>
          <a
            href="https://mtaqys.github.io/dynamogic/"
            className="transition-colors hover:text-fg"
            rel="noopener noreferrer"
          >
            Suite
          </a>
        </nav>
        <a
          href="#waitlist"
          className="btn-soft inline-flex h-9 items-center rounded-md px-4 text-sm font-semibold"
        >
          Join waitlist
        </a>
      </div>
    </header>
  );
}
