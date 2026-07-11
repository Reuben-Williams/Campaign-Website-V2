import { ButtonLink } from "@/src/components/ButtonLink";
import { CampaignImage } from "@/src/components/CampaignImage";
import { T } from "@/src/components/T";
import { campaignImages } from "@/src/data/campaign";
import { endorsementTranslationKeys } from "@/src/data/translations";

export const metadata = {
  title: "Endorsements",
};

export default function EndorsementsPage() {
  return (
    <main className="page-shell">
      <section className="container split">
        <div className="stack">
          <span className="eyebrow">
            <span className="signal" />
            <T k="endorsements.eyebrow" />
          </span>
          <h1>
            <T k="endorsements.title" />
          </h1>
          <p className="lead">
            <T k="endorsements.summary" />
          </p>
        </div>
        <CampaignImage
          src={campaignImages.coalition}
          altKey="endorsements.imageAlt"
          className="compact"
          priority
        />
      </section>

      <section className="section band">
        <div className="container grid three">
          {endorsementTranslationKeys.map((endorsement) => (
            <article className="card" key={endorsement}>
              <span className="icon-box" aria-hidden="true">
                ✓
              </span>
              <h3>
                <T k={endorsement} />
              </h3>
              <p>
                <T k="endorsements.cardSummary" />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="stack">
            <h2>
              <T k="endorsements.standTitle" />
            </h2>
            <p>
              <T k="endorsements.standSummary" />
            </p>
          </div>
          <ButtonLink href="/volunteer" variant="secondary">
            <T k="endorsements.endorseButton" />
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
