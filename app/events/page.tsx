import { ButtonLink } from "@/src/components/ButtonLink";
import { CampaignImage } from "@/src/components/CampaignImage";
import { campaignImages, events, pages } from "@/src/data/campaign";

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
            Campaign Calendar
          </span>
          <h1>{pages.events.title}</h1>
          <p className="lead">{pages.events.summary}</p>
        </div>
        <CampaignImage
          src={campaignImages.townhall}
          alt="Community town hall event"
          className="compact"
          priority
        />
      </section>

      <section className="section">
        <div className="container grid three">
          {events.map((event) => (
            <article className="card" key={event.title}>
              <span className="meta">
                {event.date} · {event.time}
              </span>
              <h3>{event.title}</h3>
              <p>{event.location}</p>
              <p>{event.summary}</p>
              <ButtonLink href="/volunteer" variant="ghost">
                RSVP
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
