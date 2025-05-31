"use client";
import { useEffect, useState } from "react";
import { Stack, Transition } from "@mantine/core";

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
          projects
        </Stack>
      )}
    </Transition>
  );
}
