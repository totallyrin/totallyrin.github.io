"use client";
import React, { ReactNode, useEffect, useState } from "react";
import {
  Anchor,
  BackgroundImage,
  Button,
  Card,
  CardSection,
  Group,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Title,
  Tooltip,
  Transition,
  useComputedColorScheme,
} from "@mantine/core";
import { pinkie, sunflower } from "@/utils/utils";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";
import {
  SiGooglecloud,
  SiPostgresql,
  SiSqlite,
  SiSupabase,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

export const ProjectCard = ({
  title,
  description,
  image,
  link,
  icons,
}: {
  title: string;
  description: string[];
  image: string;
  link: string;
  icons: ReactNode[];
}) => {
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });
  const [scheme, setScheme] = useState("dark");
  useEffect(() => {
    setScheme(computedColorScheme);
  }, [computedColorScheme]);

  return (
    <Card withBorder p="md" bg="var(--mantine-color-body)" h="100%">
      <CardSection withBorder mb="xs">
        <BackgroundImage src={image} h={300} p="xl"></BackgroundImage>
      </CardSection>
      <Stack justify="space-between" h="100%">
        <Stack>
          <Group justify="space-between">
            <Anchor href={link} c={pinkie}>
              <Title order={3}>{title}</Title>
            </Anchor>
            <Group gap="xs">{icons.map((icon) => icon)}</Group>
          </Group>
          <List pr="sm">
            {description.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Stack>
        <Button
          color={sunflower}
          variant={scheme === "dark" ? "light" : "filled"}
          component={Link}
          href={link}
          style={{
            transitionDuration: "250ms",
          }}
        >
          {link}
        </Button>
      </Stack>
    </Card>
  );
};

export default function Projects() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(true);
  }, []);

  return (
    <Transition
      mounted={opened}
      transition="fade-up"
      duration={250}
      timingFunction="ease"
    >
      {(styles) => (
        <Stack style={styles} align="center">
          <SimpleGrid
            cols={{ base: 1, md: 2 }}
            maw={{ lg: "100%", xl: "80%", xxl: "40%" }}
            style={{
              alignItems: "center",
            }}
          >
            <ProjectCard
              title="Crossword Together"
              description={[
                "Web application for collaborative crossword puzzles that fetches and parses external API data into interactive, responsive React components",
                "Real-time collaborative environment using Supabase WebSocket subscriptions, enabling instantaneous state synchronization for global users without requiring accounts",
              ]}
              image="totally-crosswords.png"
              link="https://crossword-together.vercel.app/"
              icons={[
                <Tooltip
                  key="0"
                  label="Typescript"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <BiLogoTypescript color={pinkie} size="1.5em" />
                </Tooltip>,
                <Tooltip
                  key="1"
                  label="Next.js"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <RiNextjsFill color={pinkie} size="1.5em" />
                </Tooltip>,
                <Tooltip
                  key="2"
                  label="Supabase"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <SiSupabase color={pinkie} size="1.5em" />
                </Tooltip>,
              ]}
            />
            <ProjectCard
              title="Homelands RP"
              description={[
                "Centralized community hub featuring Discord OAuth2 integration for secure, role-based access control (RBAC) across lore and administrative tools",
                "PostgreSQL (NeonDB) database manages complex community data, including player applications, housing catalogs, and lore tracking",
                "Dynamic forms with real-time validation to streamline the community onboarding and application process",
              ]}
              image="homelandsrp.png"
              link="https://homelandsrp.com/"
              icons={[
                <Tooltip
                  key="0"
                  label="Typescript"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <BiLogoTypescript color={pinkie} size="1.5em" />
                </Tooltip>,
                <Tooltip
                  key="1"
                  label="Next.js"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <RiNextjsFill color={pinkie} size="1.5em" />
                </Tooltip>,
                <Tooltip
                  key="2"
                  label="PostgreSQL"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <SiPostgresql color={pinkie} size="1.5em" />
                </Tooltip>,
              ]}
            />
            <ProjectCard
              title="RRRP Trading Cards"
              description={[
                "Full-stack character management system featuring a PostgreSQL database to handle relationships between users and card collections",
                "Google Cloud Storage API for scalable image hosting, implementing secure upload pipelines for user-generated character assets",
                "Next-Auth with Discord OAuth2 to manage secure user sessions and persistent data storage across the platform",
                "Responsive, card-based interface that dynamically renders character stats and assets, ensuring a seamless experience across desktop and mobile devices",
              ]}
              image="rrrptradingcards.png"
              link="https://rrrptradingcards.vercel.app/"
              icons={[
                <Tooltip
                  key="0"
                  label="Typescript"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <BiLogoTypescript color={pinkie} size="1.5em" />
                </Tooltip>,
                <Tooltip
                  key="1"
                  label="Next.js"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <RiNextjsFill color={pinkie} size="1.5em" />
                </Tooltip>,
                <Tooltip
                  key="2"
                  label="PostgreSQL"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <SiPostgresql color={pinkie} size="1.5em" />
                </Tooltip>,
                <Tooltip
                  key="3"
                  label="Google Cloud Storage"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <SiGooglecloud color={pinkie} size="1.5em" />
                </Tooltip>,
              ]}
            />
            <ProjectCard
              title="TTSM"
              description={[
                "Remote infrastructure tool utilizing a Node.js backend to manage local game server states (start/stop/edit) via secure external web requests",
                'Granular Permissions System and custom credentials via Next-Auth, allowing "admin" vs. "user" access for server configuration management',
                "Integrated Discord bot that interfaces with the backend, allowing server control through chat commands",
              ]}
              image="ttsm.png"
              link="https://ttsm.vercel.app/"
              icons={[
                <Tooltip
                  key="0"
                  label="Typescript"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <BiLogoTypescript color={pinkie} size="1.5em" />
                </Tooltip>,
                <Tooltip
                  key="1"
                  label="Next.js"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <RiNextjsFill color={pinkie} size="1.5em" />
                </Tooltip>,
                <Tooltip
                  key="2"
                  label="Node.js"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <FaNodeJs key="2" color={pinkie} size="1.5em" />
                </Tooltip>,
                <Tooltip
                  key="3"
                  label="SQLite"
                  color={pinkie}
                  c="#242424"
                  fw={500}
                >
                  <SiSqlite key="3" color={pinkie} size="1.5em" />
                </Tooltip>,
              ]}
            />
          </SimpleGrid>
        </Stack>
      )}
    </Transition>
  );
}
