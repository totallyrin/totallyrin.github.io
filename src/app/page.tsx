"use client";

import { TextAnimate } from "@gfazioli/mantine-text-animate";
import {
  Button,
  Center,
  Container,
  Group,
  Space,
  Stack,
  Text,
  Title,
  Transition,
} from "@mantine/core";
import { pinkie, sunflower } from "@/utils/utils";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useEventListener } from "@mantine/hooks";

export default function Page() {
  const router = useRouter();
  const [line, setLine] = useState(0);
  const pause = 1000;
  const increment = useCallback(() => setLine(() => 100), []);
  const ref = useEventListener("click", increment);

  return (
    <Stack gap="xs" ref={ref} px="lg">
      <Center>
        <TextAnimate.Typewriter
          value={"HELLO, WORLD!"}
          speed={line == 100 ? 0 : 0.05}
          animate={line >= 0}
          loop={false}
          c={sunflower}
          fw={500}
          order={1}
          component={Title}
          ta="center"
          onTypeEnd={() => setTimeout(() => setLine(line + 1), pause)}
          withCursor={line == 0}
        />
      </Center>
      <Center>
        <Group gap="lg">
          <TextAnimate.Typewriter
            value={"I'm"}
            speed={line == 100 ? 0 : 0.05}
            animate={line >= 1}
            loop={false}
            // c={sunflower}
            fw={500}
            order={2}
            component={Title}
            onTypeEnd={() => setLine(line + 1)}
            withCursor={line == 1}
          />
          <Group gap={0}>
            <TextAnimate.Typewriter
              value={"Rin"}
              speed={line == 100 ? 0 : 0.05}
              animate={line >= 2}
              loop={false}
              c={pinkie}
              fw={500}
              order={2}
              component={Title}
              onTypeEnd={() => setLine(line + 1)}
              withCursor={line == 2}
            />
            <TextAnimate.Typewriter
              value={"."}
              speed={line == 100 ? 0 : 0.05}
              animate={line >= 3}
              loop={false}
              // c={sunflower}
              fw={500}
              order={2}
              component={Title}
              onTypeEnd={() => setTimeout(() => setLine(line + 1), pause)}
              withCursor={line == 3}
            />
          </Group>
        </Group>
      </Center>
      <Center>
        <TextAnimate.Typewriter
          value={"And I really love programming."}
          c="dimmed"
          speed={line == 100 ? 0 : 0.05}
          animate={line >= 4}
          loop={false}
          // c={sunflower}
          fw={500}
          onTypeEnd={() => {
            setTimeout(() => setLine(line + 1), pause);
          }}
          withCursor={line >= 4}
        />
      </Center>
      <Space h="xs" />
      <Transition
        mounted={line >= 5}
        transition="fade-down"
        duration={line == 100 ? 0 : 500}
        timingFunction="ease"
        onEntered={() => setTimeout(() => setLine(line + 1), pause)}
      >
        {(styles) => (
          <Text style={styles}>
            I&apos;m a web developer based in Ontario, Canada.
          </Text>
        )}
      </Transition>
      <Space h="xs" />
      <Transition
        mounted={line >= 6}
        transition="slide-left"
        duration={line == 100 ? 0 : 500}
        timingFunction="ease"
        onEntered={() => setTimeout(() => setLine(line + 1), 2 * pause)}
      >
        {(styles) => (
          <Text style={styles}>
            I specialise in building modern, responsive web applications using
            technologies like React, Next.js, and Node.js, with experience in
            both frontend and backend development.
          </Text>
        )}
      </Transition>
      <Space h="xs" />
      <Transition
        mounted={line >= 7}
        transition="slide-left"
        duration={line == 100 ? 0 : 500}
        timingFunction="ease"
        onEntered={() => setTimeout(() => setLine(line + 1), 2 * pause)}
      >
        {(styles) => (
          <Text style={styles}>
            Whether I&apos;m building components, debugging layout quirks, or
            integrating third-party APIs, I care about clean, maintainable code,
            responsive design, and creating seamless user experiences across
            devices.
          </Text>
        )}
      </Transition>
      <Space h="xs" />
      <Transition
        mounted={line >= 8}
        transition="pop"
        duration={line == 100 ? 0 : 500}
        timingFunction="ease"
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
            >
              Check out my projects!
            </Button>
          </Container>
        )}
      </Transition>
    </Stack>
  );
}
