import Image from "next/image";

type CampaignImageProps = {
  src: string;
  alt: string;
  caption?: string;
  detail?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function CampaignImage({
  src,
  alt,
  caption,
  detail,
  className = "",
  priority = false,
  sizes = "(max-width: 980px) 100vw, 50vw",
}: CampaignImageProps) {
  return (
    <div className={`media-frame ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} />
      {caption ? (
        <div className="media-caption">
          <strong>{caption}</strong>
          {detail ? <p>{detail}</p> : null}
        </div>
      ) : null}
    </div>
  );
}
