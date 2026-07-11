import { ButtonLink } from "@/src/components/ButtonLink";
import { T } from "@/src/components/T";
import { TranslatedInitial } from "@/src/components/TranslatedInitial";
import {
  issueTranslationKeys,
  priorityTranslationGroups,
} from "@/src/data/translations";

export const metadata = {
  title: "Issues",
};

export default function IssuesPage() {
  return (
    <main className="page-shell">
      <section className="container stack">
        <span className="eyebrow">
          <span className="signal" />
          <T k="issues.eyebrow" />
        </span>
        <h1>
          <T k="issues.title" />
        </h1>
        <p className="lead">
          <T k="issues.summary" />
        </p>
      </section>

      <section className="section">
        <div className="container grid three">
          {priorityTranslationGroups.map((priority) => (
            <article className={`card ${priority.featured ? "featured" : ""}`} key={priority.title}>
              <span className="meta">
                <T k={priority.label} />
              </span>
              <h3>
                <T k={priority.title} />
              </h3>
              <p>
                <T k={priority.summary} />
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-header">
            <h2>
              <T k="issues.areaTitle" />
            </h2>
            <p>
              <T k="issues.areaSummary" />
            </p>
          </div>
          <div className="grid three">
            {issueTranslationKeys.map((area) => (
              <article className="card" key={area}>
                <span className="icon-box">
                  <TranslatedInitial k={area} />
                </span>
                <h3>
                  <T k={area} />
                </h3>
                <p>
                  <T k="issues.areaCardSummary" />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container split">
          <div className="stack">
            <h2>
              <T k="issues.ctaTitle" />
            </h2>
            <p>
              <T k="issues.ctaSummary" />
            </p>
          </div>
          <div className="actions">
            <ButtonLink href="/volunteer" variant="secondary">
              <T k="nav.volunteer" />
            </ButtonLink>
            <ButtonLink href="/donate" variant="ghost">
              <T k="nav.donate" />
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
