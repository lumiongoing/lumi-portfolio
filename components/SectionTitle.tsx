type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ description, eyebrow, title }: SectionTitleProps) {
  return (
    <div className="grid max-w-3xl gap-4">
      {eyebrow ? (
        <p className="type-caption uppercase tracking-[0.18em]">{eyebrow}</p>
      ) : null}
      <h2 className="type-title">{title}</h2>
      {description ? <p className="type-lead">{description}</p> : null}
    </div>
  );
}
