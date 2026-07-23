import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { SectionWrapper } from "@/components/SectionWrapper";
import { TextInput } from "@/components/TextInput";

export default function Home() {
  return (
    <main>
      <SectionWrapper spacing="spacious">
        <Container className="grid gap-10">
          <div className="grid max-w-5xl gap-8">
            <p className="type-caption uppercase tracking-[0.18em]">
              Design foundation
            </p>
            <h1 className="type-hero">Calm, editorial, and quietly precise.</h1>
            <p className="type-lead max-w-2xl">
              A reusable visual system for Lumi Huang&apos;s portfolio: generous
              space, soft contrast, refined type, and subtle interaction.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="#components">View components</Button>
            <Button href="#tokens" variant="secondary">
              View tokens
            </Button>
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="tokens" spacing="compact">
        <Container className="grid gap-12">
          <SectionTitle
            eyebrow="Core system"
            title="Tokens for every page."
            description="The foundation keeps hierarchy, spacing, and interaction consistent before the full website is built."
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Paper", "var(--color-paper)", "#f8f6f1"],
              ["Ink", "var(--color-ink)", "#1f1d1a"],
              ["Accent", "var(--color-accent)", "#8c9a86"],
            ].map(([name, token, value]) => (
              <Card key={name}>
                <div
                  aria-hidden="true"
                  className="mb-6 h-24 rounded-[var(--radius-sm)] border border-line"
                  style={{ background: token }}
                />
                <h3 className="font-medium">{name}</h3>
                <p className="type-caption mt-1">{value}</p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <SectionWrapper id="components">
        <Container className="grid gap-12">
          <SectionTitle
            eyebrow="Reusable pieces"
            title="Buttons, cards, and inputs share one language."
            description="These primitives are intentionally simple so the portfolio can grow without visual drift."
          />

          <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
            <Card>
              <div className="grid gap-5">
                <p className="type-caption uppercase tracking-[0.18em]">
                  Typography
                </p>
                <h3 className="type-title">Scale creates the rhythm.</h3>
                <p className="type-lead">
                  Large display moments, quiet body copy, and small captions
                  carry the editorial feeling without adding decoration.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button>Primary action</Button>
                  <Button variant="secondary">Secondary action</Button>
                </div>
              </div>
            </Card>

            <Card>
              <form className="grid gap-4">
                <TextInput
                  label="Name"
                  name="name"
                  placeholder="Lumi Huang"
                  type="text"
                />
                <TextInput
                  label="Email"
                  name="email"
                  placeholder="hello@example.com"
                  type="email"
                />
                <Button className="mt-2 w-full">Send note</Button>
              </form>
            </Card>
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
}
