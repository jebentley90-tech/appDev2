import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageTemplate, { Section } from "../../components/PageTemplate";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function PortfolioPage() {
  return (
    <PageTemplate 
      eyebrow="Portfolio"
      title="Selected Projects"
      subtitle="A collection of software and hardware projects."
    >
      <Section
        title="Project Gallery"
        description="Each project includes a short summary, tech stack, and a dedicated detail page."
      >
        <View style={styles.grid}>
          {projects.map((project) => (
            <View key={project.slug} style={styles.gridItem}>
              <ProjectCard project={project} />
            </View>
          ))}
        </View>
      </Section>
    </PageTemplate>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  gridItem: {
    width: "100%",
    maxWidth: 520,
  },
});