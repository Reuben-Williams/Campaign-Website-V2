import { ButtonLink } from "@/src/components/ButtonLink";
import { T } from "@/src/components/T";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container stack">
        <span className="eyebrow">
          <span className="signal" />
          <T k="notFound.eyebrow" />
        </span>
        <h1>
          <T k="notFound.title" />
        </h1>
        <p className="lead">
          <T k="notFound.summary" />
        </p>
        <div className="actions">
          <ButtonLink href="/">
            <T k="nav.home" />
          </ButtonLink>
          <ButtonLink href="/volunteer" variant="ghost">
            <T k="nav.volunteer" />
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
