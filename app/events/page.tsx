import { ButtonLink } from "@/src/components/ButtonLink";
import { CampaignImage } from "@/src/components/CampaignImage";
import { T } from "@/src/components/T";
import { campaignImages } from "@/src/data/campaign";
import { eventTranslationGroups } from "@/src/data/translations";

export const metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <main className="page-shell">
      <section className="container split">
        <div className="stack">
          <span className="eyebrow">
            <span className="signal" />
            <T k="events.eyebrow" />
          </span>
          <h1>
            <T k="events.title" />
          </h1>
          <p className="lead">
            <T k="events.summary" />
          </p>
        </div>
        <CampaignImage
          src={campaignImages.townhall}
          altKey="events.imageAlt"
          className="compact"
          priority
        />
      </section>

      <section className="section">
        <div className="container grid three">
          {eventTranslationGroups.map((event) => (
            <article className="card" key={event.title}>
              <span className="meta">
                <T k={event.date} /> · <T k={event.time} />
              </span>
              <h3>
                <T k={event.title} />
              </h3>
              <p>
                <T k={event.location} />
              </p>
              <p>
                <T k={event.summary} />
              </p>
              <ButtonLink href="/volunteer" variant="ghost">
                <T k="events.rsvp" />
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
