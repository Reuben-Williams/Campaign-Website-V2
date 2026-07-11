import { CampaignImage } from "@/src/components/CampaignImage";
import { T } from "@/src/components/T";
import type { TranslationKey } from "@/src/data/translations";

type PageHeroProps = {
  titleKey: TranslationKey;
  summaryKey: TranslationKey;
  image?: string;
  imageAltKey?: TranslationKey;
};

export function PageHero({ titleKey, summaryKey, image, imageAltKey }: PageHeroProps) {
  return (
    <section className="container hero">
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="signal" />
          <T k="site.eyebrowName" />
        </span>
        <h1>
          <T k={titleKey} />
        </h1>
        <p className="lead">
          <T k={summaryKey} />
        </p>
      </div>
      {image ? (
        <CampaignImage
          src={image}
          altKey={imageAltKey ?? titleKey}
          className="tall"
          priority
          captionKey="site.mediaCaption"
          detailKey="site.mediaDetail"
        />
      ) : null}
    </section>
  );
}
