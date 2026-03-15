import React from "react";
import { View, Text, Image, StyleSheet, Linking, Pressable } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PageTemplate, { Section, Card } from "../../components/PageTemplate";
import { projects } from "../../data/projects";
import { COLORS, LAYOUT } from "../../constants/theme";

export default function ProjectDetailPage() {
    const params = useLocalSearchParams();
    const slug = Array.isArray(params.slug) ? params.slug[o] : params.slug;

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <PageTemplate
                eyebrow=""
                title="Project not found"
                subtitle="The project you're looking for can't be found. -Sun Tzu probably"
            />
        );
    }

    return (
        <PageTemplate
            eyebrow="Portfolio"
            title={project.title}
            subtitle={project.description}
        >
            <Image source={project.image} style={StyleSheet.image} resizeMode="cover" />

            <Section title="Overview">
                <Card text={project.fullDescription} />
            </Section>

            <Section title="Tech Stack">
                <View style={styles.techRow}>
                    {project.techStack.map((tech) => (
                        <View key={tech} style={styles.techBadge}>
                            <Text style={styles.techText}>{tech}</Text>
                        </View>
                    ))}
                </View>
            </Section>

            {project.githubLink ? (
                <Section title="Repository">
                    <Pressable
                        onPress={() => Linking.openURL(project.githubLink)}
                        style={styles.githubButton}
                    >
                        <Text style={styles.githubButtonText}>Open GitHub Repo</Text>
                    </Pressable>
                </Section>
            ) : null}
        </PageTemplate>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 260,
        borderRadius: LAYOUT.radius,
        backgroundColor: COLORS.surfaceAlt,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    techRow: {
        flecDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    techBadge: {
        backgroundColor: COLORS.surfaceAlt,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    techText: {
        color: COLORS.text,
        fontSize: 13,
        fontWeight: "600",
    },
    githubButton: {
        boackgroundColor: COLORS.accent,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        alignSelf: "flex-start",
    },
    githubButtonText: {
        color: "#081120",
        fontWeight: "700",
    },
})