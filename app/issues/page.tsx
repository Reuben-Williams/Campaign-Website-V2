import { ButtonLink } from "@/src/components/ButtonLink";
import { issueAreas, pages, priorities } from "@/src/data/campaign";

export const metadata = {
  title: "Issues",
};

export default function IssuesPage() {
  return (
    <main className="page-shell">
      <section className="container stack">
        <span className="eyebrow">
          <span className="signal" />
          Policy Priorities
        </span>
        <h1>{pages.issues.title}</h1>
        <p className="lead">{pages.issues.summary}</p>
      </section>

      <section className="section">
        <div className="container grid three">
          {priorities.map((priority) => (
            <article className={`card ${priority.featured ? "featured" : ""}`} key={priority.title}>
              <span className="meta">{priority.label}</span>
              <h3>{priority.title}</h3>
              <p>{priority.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-header">
            <h2>Issue Areas</h2>
            <p>
              Each section is ready to connect to detailed policy pages once the
              campaign has final copy.
            </p>
          </div>
          <div className="grid three">
            {issueAreas.map((area) => (
              <article className="card" key={area}>
                <span className="icon-box">{area.slice(0, 1)}</span>
                <h3>{area}</h3>
                <p>
                  Final policy language can be managed from the data layer now and
                  moved into a managed content workflow later without redesigning
                  the page.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container split">
          <div className="stack">
            <h2>Ready to Make a Difference?</h2>
            <p>Help the campaign reach voters and share Carmen's vision.</p>
          </div>
          <div className="actions">
            <ButtonLink href="/volunteer" variant="secondary">
              Volunteer
            </ButtonLink>
            <ButtonLink href="/donate" variant="ghost">
              Donate
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
