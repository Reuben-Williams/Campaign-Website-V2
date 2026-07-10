import { CampaignImage } from "@/src/components/CampaignImage";

type PageHeroProps = {
  title: string;
  summary: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({ title, summary, image, imageAlt }: PageHeroProps) {
  return (
    <section className="container hero">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="signal" />
          Carmen Morales
        </span>
        <h1>{title}</h1>
        <p className="lead">{summary}</p>
      </div>
      {image ? (
        <CampaignImage
          src={image}
          alt={imageAlt ?? title}
          className="tall"
          priority
          caption="Community-first leadership"
          detail="Real campaign photography replaces the generated placeholders from the original export."
        />
      ) : null}
    </section>
  );
}
