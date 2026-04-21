"use client";
import { useEffect, useState } from "react";
import { Stack, Transition } from "@mantine/core";
import Education from "@/app/resume/Education";
import Work from "@/app/resume/Work";
import Skills from "@/app/resume/Skills";

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
        <Stack style={styles}>
          <Skills />
          <Work />
          <Education />
        </Stack>
      )}
    </Transition>
  );
}
