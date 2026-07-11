import { ButtonLink } from "@/src/components/ButtonLink";
import { CampaignImage } from "@/src/components/CampaignImage";
import { T } from "@/src/components/T";
import { campaignImages } from "@/src/data/campaign";
import { newsTranslationGroups } from "@/src/data/translations";

export const metadata = {
  title: "News",
};

export default function NewsPage() {
  return (
    <main className="page-shell">
      <section className="container stack">
        <span className="eyebrow">
          <span className="signal" />
          <T k="news.eyebrow" />
        </span>
        <h1>
          <T k="news.title" />
        </h1>
        <p className="lead">
          <T k="news.summary" />
        </p>
      </section>

      <section className="section">
        <div className="container grid three">
          {newsTranslationGroups.map((item, index) => {
            const images = [campaignImages.townhall, campaignImages.volunteers, campaignImages.press];
            return (
            <article className="card" key={item.title}>
              <CampaignImage
                src={images[index]}
                alt=""
                className="compact"
                sizes="(max-width: 980px) 100vw, 33vw"
              />
              <span className="meta">
                <T k={item.date} />
              </span>
              <h3>
                <T k={item.title} />
              </h3>
              <p>
                <T k={item.summary} />
              </p>
              <ButtonLink href="/news" variant="ghost">
                <T k="news.readMore" />
              </ButtonLink>
            </article>
            );
          })}
        </div>
      </section>

      <section className="section band">
        <div className="container split">
          <div className="stack">
            <h2>
              <T k="news.resourcesTitle" />
            </h2>
            <p>
              <T k="news.resourcesSummary" />
            </p>
            <ButtonLink href="mailto:info@morales4assembly.com" variant="secondary">
              <T k="news.requestPressKit" />
            </ButtonLink>
          </div>
          <CampaignImage
            src={campaignImages.press}
            altKey="news.outreachAlt"
            className="compact"
            sizes="50vw"
          />
        </div>
      </section>
    </main>
  );
}
