"use client";
import { useEffect, useState } from "react";
import { Space, Stack, Transition } from "@mantine/core";
import Education from "@/app/experience/Education";
import Work from "@/app/experience/Work";
import Skills from "@/app/experience/Skills";

export default function Experience() {
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
          <Education />
          <Space />
          <Work />
          <Space />
          <Skills />
          <Space h="xs" />
        </Stack>
      )}
    </Transition>
  );
}
