import { ButtonLink } from "@/src/components/ButtonLink";
import { T } from "@/src/components/T";

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
            <T k="donate.eyebrow" />
          </span>
          <h1>
            <T k="donate.title" />
          </h1>
          <p className="lead">
            <T k="donate.summary" />
          </p>
          <div className="card">
            <span className="meta">
              <T k="donate.noteMeta" />
            </span>
            <p>
              <T k="donate.noteSummary" />
            </p>
          </div>
        </div>
        <form className="form-panel" aria-label="Donation form">
          <h2>
            <T k="donate.formTitle" />
          </h2>
          <div className="amount-grid" aria-label="Donation amount options">
            <button type="button">$25</button>
            <button type="button">$50</button>
            <button type="button">$100</button>
            <button type="button">$250</button>
          </div>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="donor-name">
                <T k="donate.name" />
              </label>
              <input id="donor-name" type="text" />
            </div>
            <div className="field">
              <label htmlFor="donor-email">
                <T k="donate.email" />
              </label>
              <input id="donor-email" type="email" />
            </div>
            <div className="field full">
              <label htmlFor="donor-address">
                <T k="donate.address" />
              </label>
              <input id="donor-address" type="text" />
            </div>
          </div>
          <ButtonLink href="/donate" variant="secondary">
            <T k="donate.continue" />
          </ButtonLink>
        </form>
      </section>
    </main>
  );
}
