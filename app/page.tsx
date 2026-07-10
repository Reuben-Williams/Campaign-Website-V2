import { ButtonLink } from "@/src/components/ButtonLink";
import { CampaignImage } from "@/src/components/CampaignImage";
import { campaignImages, pages, priorities } from "@/src/data/campaign";

export default function HomePage() {
  return (
    <main>
      <section className="container hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="signal" />
            Join the Movement
          </span>
          <h1>
            {pages.home.title}. <span className="accent">Building our future.</span>
          </h1>
          <p className="lead">{pages.home.summary}</p>
          <div className="actions">
            <ButtonLink href="/donate" variant="secondary">
              Donate Now
            </ButtonLink>
            <ButtonLink href="/volunteer" variant="ghost">
              Volunteer With Us
            </ButtonLink>
          </div>
        </div>
        <CampaignImage
          src={campaignImages.hero}
          alt="Carmen Morales with community leaders"
          className="tall"
          priority
          caption="Carmen Morales"
          detail="Running for New Jersey State Assembly in Legislative District 34."
        />
      </section>

      <section className="section band">
        <div className="container grid three">
          <div className="card">
            <span className="meta">Election Focus</span>
            <h3>Voters First</h3>
            <p>
              A campaign built around direct conversations, practical priorities,
              and clear accountability.
            </p>
          </div>
          <div className="card">
            <span className="meta">Field Goal</span>
            <h3>Districtwide Outreach</h3>
            <p>
              Volunteer teams are preparing canvasses, calls, community events,
              and digital updates across the district.
            </p>
          </div>
          <div className="card">
            <span className="meta">Next Step</span>
            <h3>Get Involved</h3>
            <p>
              Sign up to volunteer, host a conversation, attend an event, or
              contribute to voter outreach.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header center">
            <h2>Core Priorities</h2>
            <p>Focused on the issues families talk about at kitchen tables every day.</p>
          </div>
          <div className="grid three">
            {priorities.map((priority) => (
              <article
                className={`card ${priority.featured ? "featured" : ""}`}
                key={priority.title}
              >
                <span className="icon-box">{priority.label.slice(0, 1)}</span>
                <h3>{priority.title}</h3>
                <p>{priority.summary}</p>
                <ButtonLink href="/issues" variant={priority.featured ? "secondary" : "ghost"}>
                  Read Policy
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
            alt="Carmen Morales at a community event"
            className="compact"
            sizes="(max-width: 980px) 100vw, 48vw"
          />
          <div className="stack">
            <h2>Leadership That Shows Up</h2>
            <p>
              This demo replaces the generated stock-style placeholders with real
              campaign photography already in the project folder, so the review
              version feels closer to the actual campaign brand.
            </p>
            <div className="actions">
              <ButtonLink href="/about">Meet Carmen</ButtonLink>
              <ButtonLink href="/events" variant="ghost">
                See Events
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
