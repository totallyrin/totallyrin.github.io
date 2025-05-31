"use client";
import {
  ActionIcon,
  Badge,
  Group,
  Stack,
  Tooltip,
  useComputedColorScheme,
} from "@mantine/core";
import { FaAngleDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { pinkie, sunflower } from "@/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });
  const [scheme, setScheme] = useState("dark");
  useEffect(() => {
    setScheme(computedColorScheme);
  }, [computedColorScheme]);
  return (
    <Group justify="center" m="lg">
      <Stack gap="xs">
        <Badge
          rightSection={<FaAngleDown />}
          color={pinkie}
          variant={scheme === "dark" ? "light" : "filled"}
          radius="md"
          size="lg"
        >
          Get in touch
        </Badge>
        <Group gap="xs" justify="center">
          <Tooltip label="GitHub" color={sunflower} c="#242424" fw={500}>
            <ActionIcon
              component={Link}
              href="https://github.com/totallyrin"
              variant={scheme === "dark" ? "light" : "filled"}
              color={sunflower}
              style={{
                transitionDuration: "250ms",
              }}
            >
              <FaGithub />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="LinkedIn" color={sunflower} c="#242424" fw={500}>
            <ActionIcon
              component={Link}
              href="https://www.linkedin.com/in/lwoloszczuk/"
              variant={scheme === "dark" ? "light" : "filled"}
              color={sunflower}
              style={{
                transitionDuration: "250ms",
              }}
            >
              <FaLinkedin />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Email" color={sunflower} c="#242424" fw={500}>
            <ActionIcon
              component={Link}
              href="mailto:lucy.woloszczuk@gmail.com"
              variant={scheme === "dark" ? "light" : "filled"}
              color={sunflower}
              style={{
                transitionDuration: "250ms",
              }}
            >
              <FaEnvelope />
            </ActionIcon>
          </Tooltip>
        </Group>
      </Stack>
    </Group>
  );
}
