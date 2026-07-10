import { ButtonLink } from "@/src/components/ButtonLink";
import { CampaignImage } from "@/src/components/CampaignImage";
import { campaignImages, pages } from "@/src/data/campaign";

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
            Field Team
          </span>
          <h1>{pages.volunteer.title}</h1>
          <p className="lead">{pages.volunteer.summary}</p>
          <CampaignImage
            src={campaignImages.volunteers}
            alt="Campaign volunteers at a community event"
            className="compact"
            priority
          />
        </div>
        <form className="form-panel" aria-label="Volunteer signup form">
          <h2>Sign Up</h2>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="first-name">First Name</label>
              <input id="first-name" type="text" />
            </div>
            <div className="field">
              <label htmlFor="last-name">Last Name</label>
              <input id="last-name" type="text" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" type="tel" />
            </div>
            <div className="field full">
              <label htmlFor="interest">How You Can Help</label>
              <select id="interest">
                <option>Canvassing</option>
                <option>Phone banking</option>
                <option>Hosting an event</option>
                <option>Digital outreach</option>
              </select>
            </div>
            <div className="field full">
              <label htmlFor="notes">Notes</label>
              <textarea id="notes" />
            </div>
          </div>
          <ButtonLink href="/volunteer" variant="secondary">
            Submit Interest
          </ButtonLink>
          <p>
            This static demo form is ready to connect to Supabase once the campaign
            approves the data workflow.
          </p>
        </form>
      </section>
    </main>
  );
}
