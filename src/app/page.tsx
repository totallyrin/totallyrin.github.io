"use client";
import { TextAnimate } from "@gfazioli/mantine-text-animate";
import {
  Avatar,
  Button,
  Container,
  Group,
  Highlight,
  List,
  ListItem,
  Paper,
  Stack,
  Text,
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
  FaUser,
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
        <>
          <Transition
            mounted={opened && !skip && !complete}
            transition="slide-right"
            duration={250}
          >
            {(styles) => (
              <Container
                // mb={215}
                // opacity={0.5}
                style={{
                  ...styles,
                  position: "absolute",
                  bottom: 125,
                  right: "50%",
                  transform: "translateX(50%)",
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
                  style={{
                    transitionDuration: "250ms",
                  }}
                >
                  Skip
                </Button>
              </Container>
            )}
          </Transition>
          <Stack style={styles} justify="space-between" pb="xl">
            <Stack gap="xs" px="lg">
              <Group justify="center" gap="xl" mb="xs">
                <Avatar
                  size={200}
                  p="2px"
                  src="photo-circle.png"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${pinkie}, ${sunflower})`,
                  }}
                />
                <Stack gap="xs" w={297.6} h={124.1}>
                  {skip ? (
                    <Title c={sunflower} order={1}>
                      HELLO, WORLD!
                    </Title>
                  ) : (
                    <TextAnimate.Typewriter
                      value={"HELLO, WORLD!"}
                      speed={0.05}
                      animate={skip || line >= 0}
                      loop={false}
                      c={sunflower}
                      order={1}
                      component={Title}
                      onTypeEnd={() =>
                        setTimeout(() => setLine(line + 1), skip ? 0 : pause)
                      }
                      withCursor={!skip && line == 0}
                    />
                  )}
                  <Group gap="lg">
                    {skip ? (
                      <Title fw={500} order={2}>
                        I&apos;m
                      </Title>
                    ) : (
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
                    )}
                    <Group gap={0}>
                      {skip ? (
                        <Title c={pinkie} fw={700} order={2}>
                          Lucy
                        </Title>
                      ) : (
                        <TextAnimate.Typewriter
                          value={"Lucy"}
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
                      )}
                      {skip ? (
                        <Title fw={500} order={2} component={Title}>
                          .
                        </Title>
                      ) : (
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
                            setTimeout(
                              () => setLine(line + 1),
                              skip ? 0 : pause,
                            )
                          }
                          withCursor={!skip && line == 3}
                        />
                      )}
                    </Group>
                  </Group>
                  {skip ? (
                    <Text c="dimmed" fw={500}>
                      And I really love programming.
                    </Text>
                  ) : (
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
                      withCursor={!skip && line == 4}
                    />
                  )}
                </Stack>
              </Group>
              <List center spacing="lg" mt="xs">
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
                    <Paper withBorder py="xs" px="md" mb="xs" style={styles}>
                      <ListItem
                        icon={
                          <FaCanadianMapleLeaf color={pinkie} size="1.5em" />
                        }
                        flex={1}
                        w="100%"
                      >
                        <Highlight highlight={["web developer"]}>
                          I&apos;m a web developer based in Ontario.
                        </Highlight>
                      </ListItem>
                    </Paper>
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
                    <Paper withBorder py="xs" px="md" mb="xs" style={styles}>
                      <ListItem
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
                        >
                          I specialise in building modern, responsive web
                          applications using technologies like React, Next.js,
                          and Node.js, with experience in both frontend and
                          backend development.
                        </Highlight>
                      </ListItem>
                    </Paper>
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
                    <Paper withBorder py="xs" px="md" mb="xs" style={styles}>
                      <ListItem icon={<FaCode color={pinkie} size="1.5em" />}>
                        <Highlight
                          highlight={[
                            "clean, maintainable code",
                            "responsive design",
                            "seamless user experiences",
                          ]}
                        >
                          Whether I&apos;m building components, debugging layout
                          quirks, or integrating third-party APIs, I care about
                          clean, maintainable code, responsive design, and
                          creating seamless user experiences across devices.
                        </Highlight>
                      </ListItem>
                    </Paper>
                  )}
                </Transition>
                <Transition
                  mounted={skip || line >= 8}
                  transition="slide-left"
                  duration={skip ? 0 : 500}
                  timingFunction="ease"
                  onEntered={() =>
                    setTimeout(() => setLine(line + 1), skip ? 0 : pause)
                  }
                >
                  {(styles) => (
                    <Paper withBorder py="xs" px="md" mb="xs" style={styles}>
                      <ListItem icon={<FaUser color={pinkie} size="1.5em" />}>
                        <Highlight
                          highlight={
                            [
                              // "gaming",
                              // "my cat",
                              // "exploring the outdoors",
                            ]
                          }
                        >
                          In my spare time, I enjoy gaming, hanging out with my
                          cat, and exploring the outdoors.
                        </Highlight>
                      </ListItem>
                    </Paper>
                  )}
                </Transition>
              </List>
              <Transition
                mounted={skip || line >= 9}
                transition="pop"
                duration={skip ? 0 : 500}
                timingFunction="ease"
                onEnter={() => setComplete(true)}
              >
                {(styles) => (
                  <Container>
                    <Button
                      variant="light"
                      color={sunflower}
                      style={{
                        ...styles,
                        transitionDuration: "250ms",
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
          </Stack>
        </>
      )}
    </Transition>
  );
}
