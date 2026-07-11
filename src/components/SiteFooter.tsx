import Link from "next/link";

import { campaign, navItems } from "@/src/data/campaign";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="stack">
            <h2>{campaign.shortName}</h2>
            <p>
              Join the movement for practical, community-rooted leadership in{" "}
              {campaign.district}.
            </p>
            <form className="form-grid" aria-label="Campaign updates signup">
              <div className="field">
                <label htmlFor="footer-email">Stay Updated</label>
                <input id="footer-email" type="email" placeholder="Email address" />
              </div>
              <div className="field">
                <label htmlFor="footer-zip">ZIP Code</label>
                <input id="footer-zip" type="text" placeholder="07003" />
              </div>
            </form>
          </div>
          <div className="footer-links">
            <h3>Campaign</h3>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/endorsements">Endorsements</Link>
          </div>
          <div className="footer-links">
            <h3>Take Action</h3>
            <Link href="/donate">Donate</Link>
            <Link href="/volunteer">Volunteer</Link>
            <a href={`mailto:${campaign.email}`}>Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Paid for by the Committee to Elect Carmen Morales.</p>
          <p>Prepared for campaign review.</p>
        </div>
      </div>
    </footer>
  );
}
