"use client";

import Link from "next/link";

import { campaign, navItems } from "@/src/data/campaign";
import { navTranslationKeys } from "@/src/data/translations";
import { useLanguage } from "@/src/components/LanguageProvider";
import { T } from "@/src/components/T";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="stack">
            <h2>{campaign.shortName}</h2>
            <p>
              <T k="footer.movement" />
            </p>
            <form className="form-grid" aria-label={t("footer.signupLabel")}>
              <div className="field">
                <label htmlFor="footer-email">
                  <T k="footer.stayUpdated" />
                </label>
                <input id="footer-email" type="email" placeholder={t("footer.emailPlaceholder")} />
              </div>
              <div className="field">
                <label htmlFor="footer-zip">
                  <T k="footer.zip" />
                </label>
                <input id="footer-zip" type="text" placeholder="07003" />
              </div>
            </form>
          </div>
          <div className="footer-links">
            <h3>
              <T k="footer.campaignHeading" />
            </h3>
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href}>
                <T k={navTranslationKeys[index]} />
              </Link>
            ))}
            <Link href="/endorsements">
              <T k="nav.endorsements" />
            </Link>
          </div>
          <div className="footer-links">
            <h3>
              <T k="footer.actionHeading" />
            </h3>
            <Link href="/donate">
              <T k="nav.donate" />
            </Link>
            <Link href="/volunteer">
              <T k="nav.volunteer" />
            </Link>
            <a href={`mailto:${campaign.email}`}>
              <T k="nav.contact" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            <T k="footer.paidFor" />
          </p>
          <p>
            <T k="footer.review" />
          </p>
        </div>
      </div>
    </footer>
  );
}
