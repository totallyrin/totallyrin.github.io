"use client";
import { ActionIcon, Badge, Group, Stack } from "@mantine/core";
import { FaAngleDown, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { pinkie, sunflower } from "@/utils/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <Group justify="center" m="lg">
      <Stack gap="xs">
        <Badge
          rightSection={<FaAngleDown />}
          color={pinkie}
          variant="light"
          radius="md"
          size="lg"
        >
          Get in touch
        </Badge>
        <Group gap="xs" justify="center">
          <ActionIcon
            component={Link}
            href="https://github.com/totallyrin"
            variant="light"
            color={sunflower}
          >
            <FaGithub />
          </ActionIcon>
          <ActionIcon
            component={Link}
            href="https://www.linkedin.com/in/lwoloszczuk/"
            variant="light"
            color={sunflower}
          >
            <FaLinkedin />
          </ActionIcon>
          <ActionIcon
            component={Link}
            href="mailto:lucy.woloszczuk@gmail.com"
            variant="light"
            color={sunflower}
          >
            <FaEnvelope />
          </ActionIcon>
        </Group>
      </Stack>
    </Group>
  );
}
