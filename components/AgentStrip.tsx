import { Reveal } from "./motion/Reveal";

/** One quiet mono line — agent / MCP surface. */
export function AgentStrip() {
  return (
    <section
      aria-label="Agent interface"
      className="border-y border-border bg-bg-muted/30"
    >
      <div className="site-wrap py-5 sm:py-6">
        <Reveal>
          <p className="font-mono text-[12.5px] leading-relaxed text-fg sm:text-[13px]">
            <span className="text-fg-muted">mcp</span>
            <span className="text-fg-muted">.</span>
            call
            <span className="text-fg-muted">(</span>
            <span className="text-fg">&quot;docs.render&quot;</span>
            <span className="text-fg-muted">, </span>
            {"{ md, brand }"}
            <span className="text-fg-muted">)</span>
            <span className="text-fg-muted"> → </span>
            pdf_url
          </p>
        </Reveal>
      </div>
    </section>
  );
}
