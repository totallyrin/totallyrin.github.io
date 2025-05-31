"use client";

import { TextAnimate } from "@gfazioli/mantine-text-animate";
import {
  Button,
  Center,
  Container,
  Group,
  Highlight,
  List,
  ListItem,
  Space,
  Stack,
  Title,
  Transition,
} from "@mantine/core";
import { pinkie, sunflower } from "@/utils/utils";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaAngleRight,
  FaCanadianMapleLeaf,
  FaCode,
  FaForwardFast,
  FaLaptopCode,
} from "react-icons/fa6";

export default function Home() {
  const router = useRouter();
  const [line, setLine] = useState(0);
  const [skip, setSkip] = useState(false);
  const [complete, setComplete] = useState(false);
  const pause = 1000;
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
        <Stack style={styles} justify="space-between" pb="xl">
          <Stack gap="xs" px="lg">
            <Center>
              <TextAnimate.Typewriter
                value={"HELLO, WORLD!"}
                speed={0.05}
                animate={skip || line >= 0}
                loop={false}
                c={sunflower}
                fw={700}
                order={1}
                component={Title}
                ta="center"
                onTypeEnd={() =>
                  setTimeout(() => setLine(line + 1), skip ? 0 : pause)
                }
                withCursor={!skip && line == 0}
              />
            </Center>
            <Center>
              <Group gap="lg">
                <TextAnimate.Typewriter
                  value={"I'm"}
                  speed={0.05}
                  animate={skip || line >= 1}
                  loop={false}
                  // c={sunflower}
                  fw={500}
                  order={2}
                  component={Title}
                  onTypeEnd={() => setLine(line + 1)}
                  withCursor={!skip && line == 1}
                />
                <Group gap={0}>
                  <TextAnimate.Typewriter
                    value={"Rin"}
                    speed={0.05}
                    animate={skip || line >= 2}
                    loop={false}
                    c={pinkie}
                    fw={700}
                    order={2}
                    component={Title}
                    onTypeEnd={() => setLine(line + 1)}
                    withCursor={!skip && line == 2}
                  />
                  <TextAnimate.Typewriter
                    value={"."}
                    speed={0.05}
                    animate={skip || line >= 3}
                    loop={false}
                    // c={sunflower}
                    fw={500}
                    order={2}
                    component={Title}
                    onTypeEnd={() =>
                      setTimeout(() => setLine(line + 1), skip ? 0 : pause)
                    }
                    withCursor={!skip && line == 3}
                  />
                </Group>
              </Group>
            </Center>
            <Center>
              <TextAnimate.Typewriter
                value={"And I really love programming."}
                c="dimmed"
                speed={0.05}
                animate={skip || line >= 4}
                loop={false}
                // c={sunflower}
                fw={500}
                onTypeEnd={() => {
                  setTimeout(() => setLine(line + 1), skip ? 0 : pause);
                }}
                withCursor={line >= 4}
              />
            </Center>
            <Space h="xs" />
            <List center spacing="lg">
              <Transition
                mounted={skip || line >= 5}
                transition="fade-down"
                duration={skip ? 0 : 500}
                timingFunction="ease"
                onEntered={() =>
                  setTimeout(() => setLine(line + 1), skip ? 0 : pause)
                }
              >
                {(styles) => (
                  <ListItem
                    style={styles}
                    icon={<FaCanadianMapleLeaf color={pinkie} size="1.5em" />}
                  >
                    <Highlight
                      highlight={["web developer"]}
                      highlightStyles={{
                        backgroundImage:
                          "linear-gradient(90deg, #FC6471, #FFC66D)",
                        fontWeight: 700,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      I&apos;m a web developer based in Ontario. 🇨🇦
                    </Highlight>
                  </ListItem>
                )}
              </Transition>
              <Transition
                mounted={skip || line >= 6}
                transition="slide-left"
                duration={skip ? 0 : 500}
                timingFunction="ease"
                onEntered={() =>
                  setTimeout(() => setLine(line + 1), skip ? 0 : pause)
                }
              >
                {(styles) => (
                  <ListItem
                    style={styles}
                    icon={<FaLaptopCode color={pinkie} size="1.5em" />}
                  >
                    <Highlight
                      highlight={[
                        "React",
                        "Next.js",
                        "Node.js",
                        "frontend",
                        "backend",
                      ]}
                      highlightStyles={{
                        backgroundImage:
                          "linear-gradient(90deg, #FC6471, #FFC66D)",
                        fontWeight: 700,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      I specialise in building modern, responsive web
                      applications using technologies like React, Next.js, and
                      Node.js, with experience in both frontend and backend
                      development.
                    </Highlight>
                  </ListItem>
                )}
              </Transition>
              <Transition
                mounted={skip || line >= 7}
                transition="slide-left"
                duration={skip ? 0 : 500}
                timingFunction="ease"
                onEntered={() =>
                  setTimeout(() => setLine(line + 1), skip ? 0 : pause)
                }
              >
                {(styles) => (
                  <ListItem
                    style={styles}
                    icon={<FaCode color={pinkie} size="1.5em" />}
                  >
                    <Highlight
                      highlight={[
                        "clean, maintainable code",
                        "responsive design",
                        "seamless user" + " experiences",
                      ]}
                      highlightStyles={{
                        backgroundImage:
                          "linear-gradient(90deg, #FC6471, #FFC66D)",
                        fontWeight: 700,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Whether I&apos;m building components, debugging layout
                      quirks, or integrating third-party APIs, I care about
                      clean, maintainable code, responsive design, and creating
                      seamless user experiences across devices.
                    </Highlight>
                  </ListItem>
                )}
              </Transition>
            </List>
            <Space h="xs" />
            <Transition
              mounted={skip || line >= 8}
              transition="pop"
              duration={skip ? 0 : 500}
              timingFunction="ease"
              onEntered={() => setComplete(true)}
            >
              {(styles) => (
                <Container>
                  <Button
                    variant="light"
                    color={sunflower}
                    style={{
                      ...styles,
                    }}
                    onClick={() => router.push("/projects")}
                    rightSection={<FaAngleRight />}
                  >
                    Check out my projects!
                  </Button>
                </Container>
              )}
            </Transition>
          </Stack>
          <Transition
            mounted={!skip && !complete}
            transition="slide-right"
            duration={250}
          >
            {(styles) => (
              <Container
                // mb={215}
                opacity={0.5}
                style={{
                  ...styles,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <Button
                  variant="light"
                  color={pinkie}
                  onClick={() => {
                    setLine(100);
                    setSkip(true);
                  }}
                  rightSection={<FaForwardFast />}
                >
                  Skip
                </Button>
              </Container>
            )}
          </Transition>
        </Stack>
      )}
    </Transition>
  );
}
