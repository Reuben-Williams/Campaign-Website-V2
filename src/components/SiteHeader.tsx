import Link from "next/link";

import { ButtonLink } from "@/src/components/ButtonLink";
import { campaign, navItems } from "@/src/data/campaign";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label={`${campaign.name} home`}>
          <span className="brand-mark">CM</span>
          <span>{campaign.shortName}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ButtonLink href="/donate" variant="secondary">
            Donate
          </ButtonLink>
          <details className="mobile-menu">
            <summary aria-label="Open menu">
              <span />
            </summary>
            <nav className="mobile-links" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/endorsements">Endorsements</Link>
              <Link href="/donate">Donate</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
