"use client";

import Image from "next/image";

import { useLanguage } from "@/src/components/LanguageProvider";
import type { TranslationKey } from "@/src/data/translations";

type CampaignImageProps = {
  src: string;
  alt?: string;
  altKey?: TranslationKey;
  caption?: string;
  captionKey?: TranslationKey;
  detail?: string;
  detailKey?: TranslationKey;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function CampaignImage({
  src,
  alt,
  altKey,
  caption,
  captionKey,
  detail,
  detailKey,
  className = "",
  priority = false,
  sizes = "(max-width: 980px) 100vw, 50vw",
}: CampaignImageProps) {
  const { t } = useLanguage();
  const translatedAlt = altKey ? t(altKey) : alt ?? "";
  const translatedCaption = captionKey ? t(captionKey) : caption;
  const translatedDetail = detailKey ? t(detailKey) : detail;

  return (
    <div className={`media-frame ${className}`}>
      <Image src={src} alt={translatedAlt} fill priority={priority} sizes={sizes} />
      {translatedCaption ? (
        <div className="media-caption">
          <strong>{translatedCaption}</strong>
          {translatedDetail ? <p>{translatedDetail}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
