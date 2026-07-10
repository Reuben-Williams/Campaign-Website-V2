import { ButtonLink } from "@/src/components/ButtonLink";
import { CampaignImage } from "@/src/components/CampaignImage";
import { campaignImages, endorsements, pages } from "@/src/data/campaign";

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
            Coalition
          </span>
          <h1>{pages.endorsements.title}</h1>
          <p className="lead">{pages.endorsements.summary}</p>
        </div>
        <CampaignImage
          src={campaignImages.coalition}
          alt="Campaign coalition event"
          className="compact"
          priority
        />
      </section>

      <section className="section band">
        <div className="container grid three">
          {endorsements.map((endorsement) => (
            <article className="card" key={endorsement}>
              <span className="icon-box">✓</span>
              <h3>{endorsement}</h3>
              <p>
                Final verified endorsement names and logos can be added once the
                campaign approves publication.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="stack">
            <h2>Stand With Us</h2>
            <p>
              Add your voice to the coalition supporting Carmen Morales for State
              Assembly.
            </p>
          </div>
          <ButtonLink href="/volunteer" variant="secondary">
            Endorse Carmen
          </ButtonLink>
        </div>
      </section>
    </main>
  );
}
