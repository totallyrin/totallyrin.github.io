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
  Stack,
  Title,
  Transition,
} from "@mantine/core";
import { pinkie } from "@/utils/utils";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";
import { SiGooglecloud, SiPostgresql, SiSqlite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

const ProjectCard = ({
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
}) => (
  <Card withBorder p="md" bg="none">
    <CardSection withBorder mb="xs">
      <BackgroundImage src={image} h={300} p="xl"></BackgroundImage>
    </CardSection>
    <Stack>
      <Group justify="space-between">
        <Anchor href={link} c={pinkie}>
          <Title order={3}>{title}</Title>
        </Anchor>
        <Group gap="xs">{icons.map((icon) => icon)}</Group>
      </Group>
      <List>
        {description.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
      <Button color="sunflower" variant="light" component={Link} href={link}>
        {link}
      </Button>
    </Stack>
  </Card>
);

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
        <Stack gap="xl" style={styles}>
          <ProjectCard
            title="Rainbow Railroad RP"
            description={[
              "Designed, created, deployed" +
                " and currently maintain web application for Rainbow Railroad Roleplay, LLC",
              "Dynamic forms with immediate user feedback",
              "Protected administration views and tools",
              "Integration with Tebex store API and Discord OAuth API",
              "Integration with serverless NeonDB PostgreSQL database",
            ]}
            image="rrrp.png"
            link="https://rainbowrailroadrp.com/"
            icons={[
              <BiLogoTypescript key="0" color={pinkie} size="1.5em" />,
              <RiNextjsFill key="1" color={pinkie} size="1.5em" />,
              <SiPostgresql key="2" color={pinkie} size="1.5em" />,
            ]}
          />
          <ProjectCard
            title="RRRP Trading Cards"
            description={[
              "Web application to create, manage, and display character trading cards",
              "PostgreSQL database stores trading card information",
              "Discord OAuth login and session management using Next-Auth",
              "Google Cloud Storage integration for image hosting",
            ]}
            image="rrrptradingcards.png"
            link="https://rrrptradingcards.vercel.app/"
            icons={[
              <BiLogoTypescript key="0" color={pinkie} size="1.5em" />,
              <RiNextjsFill key="1" color={pinkie} size="1.5em" />,
              <SiPostgresql key="2" color={pinkie} size="1.5em" />,
              <SiGooglecloud key="3" color={pinkie} size="1.5em" />,
            ]}
          />
          <ProjectCard
            title="TTSM"
            description={[
              "Web application to control gaming servers remotely",
              "Next.js frontend, NodeJS backend",
              "Custom credentials login using Next-Auth",
              "Discord bot integration to control servers through Discord commands",
            ]}
            image="ttsm.png"
            link="https://ttsm.vercel.app/"
            icons={[
              <BiLogoTypescript key="0" color={pinkie} size="1.5em" />,
              <RiNextjsFill key="1" color={pinkie} size="1.5em" />,
              <FaNodeJs key="2" color={pinkie} size="1.5em" />,
              <SiSqlite key="3" color={pinkie} size="1.5em" />,
            ]}
          />
        </Stack>
      )}
    </Transition>
  );
}
