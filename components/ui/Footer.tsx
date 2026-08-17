import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { footerColumns, socials, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:py-16">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">{site.description}</p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold uppercase tracking-wide text-ink-muted">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, i) => (
                  <li key={`${link.href}-${i}`}>
                    <Link href={link.href} className="text-[15px] text-ink-muted transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-6 sm:flex-row">
          <p className="text-[14px] text-ink-muted">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <ul className="flex items-center gap-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid size-9 place-items-center rounded-full bg-accent text-white transition-transform duration-200 hover:-translate-y-0.5 text-[12px] font-semibold">
                  {s.label[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
