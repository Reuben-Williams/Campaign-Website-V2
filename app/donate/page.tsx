import { ButtonLink } from "@/src/components/ButtonLink";
import { pages } from "@/src/data/campaign";

export const metadata = {
  title: "Donate",
};

export default function DonatePage() {
  return (
    <main className="page-shell">
      <section className="container split">
        <div className="stack">
          <span className="eyebrow">
            <span className="signal" />
            Power the Campaign
          </span>
          <h1>{pages.donate.title}</h1>
          <p className="lead">{pages.donate.summary}</p>
          <div className="card">
            <span className="meta">Contribution Note</span>
            <p>
              Donation processing will connect to the campaign&apos;s approved
              compliance and payment provider.
            </p>
          </div>
        </div>
        <form className="form-panel" aria-label="Donation form">
          <h2>Make a Contribution</h2>
          <div className="amount-grid" aria-label="Donation amount options">
            <button type="button">$25</button>
            <button type="button">$50</button>
            <button type="button">$100</button>
            <button type="button">$250</button>
          </div>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="donor-name">Name</label>
              <input id="donor-name" type="text" />
            </div>
            <div className="field">
              <label htmlFor="donor-email">Email</label>
              <input id="donor-email" type="email" />
            </div>
            <div className="field full">
              <label htmlFor="donor-address">Address</label>
              <input id="donor-address" type="text" />
            </div>
          </div>
          <ButtonLink href="/donate" variant="secondary">
            Continue
          </ButtonLink>
        </form>
      </section>
    </main>
  );
}
