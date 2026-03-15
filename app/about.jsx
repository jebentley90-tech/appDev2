import { Text } from 'react-native'
import React from 'react'
import PageTemplate, { Section, Card } from "../components/PageTemplate";

export default function AboutPage() {
  return (
    <PageTemplate
      eyebrow="About This Site"
      title="Developer: Joseph Bentley"
      subtitle=""
      primaryAction={{ label: "Portfolio", href: "/portfolio" }}
      secondaryAction={{ label: "Blog", href: "/blog" }}
    >
      <Section
        title="Description"
        description="Placeholder"
      >
        <Card
          title="Focus"
          text="Placeholder"
        />
      </Section>

      <Section title="Skills">
        <Card title="Placeholder"/>
      </Section>
    </PageTemplate>
  );
}
