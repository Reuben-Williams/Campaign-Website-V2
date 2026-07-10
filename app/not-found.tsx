import { ButtonLink } from "@/src/components/ButtonLink";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container stack">
        <span className="eyebrow">
          <span className="signal" />
          Page Not Found
        </span>
        <h1>Let&apos;s get you back to the campaign.</h1>
        <p className="lead">
          The page you requested is not available in this demo build.
        </p>
        <div className="actions">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/volunteer" variant="ghost">
            Volunteer
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
