import React from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { COLORS, LAYOUT } from "../constants/theme";

export default function ProjectCard({ project }) {
    return (
        <Link href={`/portfolio/${project.slug}`} asChild>
            <Pressable style={({ pressed}) => [StyleSheet.card, pressed && StyleSheet.pressed]}>
                <Image source={project.image} style={styles.image} resizeMode="cover"/>

                <View style={styles.content}>
                    <Text style={styles.title}>{project.title}</Text>
                    <Text style={styles.description}>{project.description}</Text>

                    <View style={styles.techRow}>
                        {project.techStack.map((tech) => (
                            <View key={tech} style={styles.techBadge}>
                                <Text style={styles.techText}>{tech}</Text>
                            </View>
                        ))}
                    </View>

                    <Text style={styles.linkText}>View Details Here</Text>
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.surface,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: LAYOUT.radius,
        overflow: "hidden",
    },
    pressed: {
        opacity: 0.85,
    },
    image: {
        width: "100%",
        height: 180,
        backgroundColor: COLORS.surfaceAlt,
    },
    content: {
        padding: 16,
        gap: 12,
    },
    title: {
        color: COLORS.text,
        fontSize: 20,
        fontWeight: "700",
    },
    description: {
        color: COLORS.textMuted,
        fontSize: 14,
        lineHeight: 21,
    },
    techRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    techBadge: {
        backgroundColor: COLORS.surfaceAlt,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 999,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    techText: {
        color: COLORS.text,
        fontSize: 12,
        fontWeight: "600",
    },
    linkText: {
        color: COLORS.accent,
        fontSize: 14,
        fontWeight: "600",
    },
});