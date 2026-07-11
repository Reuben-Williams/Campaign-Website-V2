import { ButtonLink } from "@/src/components/ButtonLink";
import { CampaignImage } from "@/src/components/CampaignImage";
import { T } from "@/src/components/T";
import { VolunteerInterestSelect } from "@/src/components/VolunteerInterestSelect";
import { campaignImages } from "@/src/data/campaign";

export const metadata = {
  title: "Volunteer",
};

export default function VolunteerPage() {
  return (
    <main className="page-shell">
      <section className="container split">
        <div className="stack">
          <span className="eyebrow">
            <span className="signal" />
            <T k="volunteer.eyebrow" />
          </span>
          <h1>
            <T k="volunteer.title" />
          </h1>
          <p className="lead">
            <T k="volunteer.summary" />
          </p>
          <CampaignImage
            src={campaignImages.volunteers}
            altKey="volunteer.imageAlt"
            className="compact"
            priority
          />
        </div>
        <form className="form-panel" aria-label="Volunteer signup form">
          <h2>
            <T k="volunteer.formTitle" />
          </h2>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="first-name">
                <T k="volunteer.firstName" />
              </label>
              <input id="first-name" type="text" />
            </div>
            <div className="field">
              <label htmlFor="last-name">
                <T k="volunteer.lastName" />
              </label>
              <input id="last-name" type="text" />
            </div>
            <div className="field">
              <label htmlFor="email">
                <T k="volunteer.email" />
              </label>
              <input id="email" type="email" />
            </div>
            <div className="field">
              <label htmlFor="phone">
                <T k="volunteer.phone" />
              </label>
              <input id="phone" type="tel" />
            </div>
            <div className="field full">
              <label htmlFor="interest">
                <T k="volunteer.help" />
              </label>
              <VolunteerInterestSelect />
            </div>
            <div className="field full">
              <label htmlFor="notes">
                <T k="volunteer.notes" />
              </label>
              <textarea id="notes" />
            </div>
          </div>
          <ButtonLink href="/volunteer" variant="secondary">
            <T k="volunteer.submit" />
          </ButtonLink>
          <p>
            <T k="volunteer.formNote" />
          </p>
        </form>
      </section>
    </main>
  );
}
