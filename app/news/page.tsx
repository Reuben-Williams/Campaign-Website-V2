import Image from "next/image";

import { ButtonLink } from "@/src/components/ButtonLink";
import { campaignImages, newsItems, pages } from "@/src/data/campaign";

export const metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <main className="page-shell">
      <section className="container stack">
        <span className="eyebrow">
          <span className="signal" />
          Press Room
        </span>
        <h1>{pages.news.title}</h1>
        <p className="lead">{pages.news.summary}</p>
      </section>

      <section className="section">
        <div className="container grid three">
          {newsItems.map((item) => (
            <article className="card" key={item.title}>
              <div className="media-frame compact">
                <Image src={item.image} alt="" fill sizes="(max-width: 980px) 100vw, 33vw" />
              </div>
              <span className="meta">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ButtonLink href="/news" variant="ghost">
                Read More
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>

      <section className="section band">
        <div className="container split">
          <div className="stack">
            <h2>Media Resources</h2>
            <p>
              Official biography, campaign statements, and approved photography can
              be added here as the campaign finalizes launch materials.
            </p>
            <ButtonLink href="mailto:info@morales4assembly.com" variant="secondary">
              Request Press Kit
            </ButtonLink>
          </div>
          <div className="media-frame compact">
            <Image src={campaignImages.press} alt="Campaign outreach table" fill sizes="50vw" />
          </div>
        </div>
      </section>
    </main>
  );
}
