import { ButtonLink } from "@/src/components/ButtonLink";
import { CampaignImage } from "@/src/components/CampaignImage";
import { T } from "@/src/components/T";
import { TranslatedInitial } from "@/src/components/TranslatedInitial";
import { campaignImages } from "@/src/data/campaign";
import { priorityTranslationGroups } from "@/src/data/translations";

export default function HomePage() {
  return (
    <main>
      <section className="container hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="signal" />
            <T k="home.eyebrow" />
          </span>
          <h1>
            <T k="home.title" />. <span className="accent"><T k="home.accent" /></span>
          </h1>
          <p className="lead">
            <T k="home.summary" />
          </p>
          <div className="actions">
            <ButtonLink href="/donate" variant="secondary">
              <T k="home.donateNow" />
            </ButtonLink>
            <ButtonLink href="/volunteer" variant="ghost">
              <T k="home.volunteerWithUs" />
            </ButtonLink>
          </div>
        </div>
        <CampaignImage
          src={campaignImages.hero}
          altKey="home.heroAlt"
          className="tall"
          priority
          captionKey="home.heroCaption"
          detailKey="home.heroDetail"
        />
      </section>

      <section className="section band">
        <div className="container grid three">
          <div className="card">
            <span className="meta">
              <T k="home.card1.meta" />
            </span>
            <h3>
              <T k="home.card1.title" />
            </h3>
            <p>
              <T k="home.card1.summary" />
            </p>
          </div>
          <div className="card">
            <span className="meta">
              <T k="home.card2.meta" />
            </span>
            <h3>
              <T k="home.card2.title" />
            </h3>
            <p>
              <T k="home.card2.summary" />
            </p>
          </div>
          <div className="card">
            <span className="meta">
              <T k="home.card3.meta" />
            </span>
            <h3>
              <T k="home.card3.title" />
            </h3>
            <p>
              <T k="home.card3.summary" />
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <h2>
              <T k="home.prioritiesTitle" />
            </h2>
            <p>
              <T k="home.prioritiesSummary" />
            </p>
          </div>
          <div className="grid three">
            {priorityTranslationGroups.map((priority) => (
              <article
                className={`card ${priority.featured ? "featured" : ""}`}
                key={priority.title}
              >
                <span className="icon-box">
                  <TranslatedInitial k={priority.label} />
                </span>
                <h3>
                  <T k={priority.title} />
                </h3>
                <p>
                  <T k={priority.summary} />
                </p>
                <ButtonLink href="/issues" variant={priority.featured ? "secondary" : "ghost"}>
                  <T k="home.readPolicy" />
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <CampaignImage
            src={campaignImages.community}
            altKey="home.communityAlt"
            className="compact"
            sizes="(max-width: 980px) 100vw, 48vw"
          />
          <div className="stack">
            <h2>
              <T k="home.leadershipTitle" />
            </h2>
            <p>
              <T k="home.leadershipSummary" />
            </p>
            <div className="actions">
              <ButtonLink href="/about">
                <T k="home.meetCarmen" />
              </ButtonLink>
              <ButtonLink href="/events" variant="ghost">
                <T k="home.seeEvents" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
