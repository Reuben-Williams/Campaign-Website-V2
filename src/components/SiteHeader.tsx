"use client";

import Link from "next/link";

import { ButtonLink } from "@/src/components/ButtonLink";
import { LanguageToggle } from "@/src/components/LanguageToggle";
import { useLanguage } from "@/src/components/LanguageProvider";
import { T } from "@/src/components/T";
import { campaign, navItems } from "@/src/data/campaign";
import { navTranslationKeys } from "@/src/data/translations";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label={`${campaign.name} ${t("nav.home")}`}>
          <span className="brand-mark">CM</span>
          <span>{campaign.shortName}</span>
        </Link>

        <nav className="desktop-nav" aria-label={t("nav.mainLabel")}>
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <T k={navTranslationKeys[index]} />
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageToggle />
          <ButtonLink href="/donate" variant="secondary">
            <T k="nav.donate" />
          </ButtonLink>
          <details className="mobile-menu">
            <summary aria-label={t("nav.openMenu")}>
              <span />
            </summary>
            <nav className="mobile-links" aria-label={t("nav.mobileLabel")}>
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <T k={navTranslationKeys[index]} />
                </Link>
              ))}
              <Link href="/endorsements">
                <T k="nav.endorsements" />
              </Link>
              <Link href="/donate">
                <T k="nav.donate" />
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
