import { CampaignImage } from "@/src/components/CampaignImage";
import { PageHero } from "@/src/components/PageHero";
import { campaignImages, pages } from "@/src/data/campaign";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHero
        title={pages.about.title}
        summary={pages.about.summary}
        image={campaignImages.about}
        imageAlt="Carmen Morales in the Assembly chamber"
      />

      <section className="section band">
        <div className="container grid two">
          <article className="card">
            <span className="meta">Roots</span>
            <h3>Community First</h3>
            <p>
              Carmen's campaign centers residents who need responsive government:
              parents, students, seniors, renters, commuters, caregivers, and small
              business owners.
            </p>
          </article>
          <article className="card">
            <span className="meta">Service</span>
            <h3>Professional Leadership</h3>
            <p>
              The site is prepared for future content updates while staying fast,
              focused, and easy to publish.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="stack">
            <h2>Why Carmen Is Running</h2>
            <p>
              New Jersey families deserve leaders who listen, tell the truth about
              tradeoffs, and focus on results people can feel in their daily lives.
            </p>
            <p>
              This campaign is about delivering on affordability, strong schools,
              accessible healthcare, safe neighborhoods, and opportunity in every
              community.
            </p>
          </div>
          <CampaignImage
            src={campaignImages.capitol}
            alt="Carmen Morales visiting the Capitol"
            className="compact"
          />
        </div>
      </section>
    </main>
  );
}
