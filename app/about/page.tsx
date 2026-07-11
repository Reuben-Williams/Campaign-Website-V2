import { CampaignImage } from "@/src/components/CampaignImage";
import { PageHero } from "@/src/components/PageHero";
import { T } from "@/src/components/T";
import { campaignImages } from "@/src/data/campaign";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHero
        titleKey="about.title"
        summaryKey="about.summary"
        image={campaignImages.about}
        imageAltKey="about.imageAlt"
      />

      <section className="section band">
        <div className="container grid two">
          <article className="card">
            <span className="meta">
              <T k="about.card1.meta" />
            </span>
            <h3>
              <T k="about.card1.title" />
            </h3>
            <p>
              <T k="about.card1.summary" />
            </p>
          </article>
          <article className="card">
            <span className="meta">
              <T k="about.card2.meta" />
            </span>
            <h3>
              <T k="about.card2.title" />
            </h3>
            <p>
              <T k="about.card2.summary" />
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="stack">
            <h2>
              <T k="about.runningTitle" />
            </h2>
            <p>
              <T k="about.runningParagraph1" />
            </p>
            <p>
              <T k="about.runningParagraph2" />
            </p>
          </div>
          <CampaignImage
            src={campaignImages.capitol}
            altKey="about.capitolAlt"
            className="compact"
          />
        </div>
      </section>
    </main>
  );
}
