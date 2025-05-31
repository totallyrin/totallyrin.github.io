import { Badge, Group, Paper, Stack, Title } from "@mantine/core";
import { pinkie, sunflower } from "@/utils/utils";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt, FaJava, FaPython, FaReact } from "react-icons/fa6";
import { SiLua, SiMongodb, SiPostgresql, SiSqlite } from "react-icons/si";
import { ReactNode } from "react";

const CustomBadge = ({
  children,
  leftSection,
}: {
  children: any;
  leftSection?: ReactNode;
}) => {
  return (
    <Badge
      radius="md"
      color={sunflower}
      // variant="gradient"
      // gradient={{ from: pinkie, to: sunflower, deg: 90 }}
      c="#242424"
      leftSection={leftSection}
    >
      {children}
    </Badge>
  );
};

export default function Skills() {
  return (
    <Paper withBorder px="xl" pb="xl" pt="lg">
      <Stack gap="xs">
        <Title order={3} c={pinkie}>
          Technical Skills
        </Title>
        <Group gap="xs" justify="center">
          <CustomBadge leftSection={<RiJavascriptFill size="1.5em" />}>
            JavaScript
          </CustomBadge>
          <CustomBadge leftSection={<BiLogoTypescript size="1.5em" />}>
            TypeScript
          </CustomBadge>
          <CustomBadge leftSection={<RiNextjsFill size="1.5em" />}>
            Next.js
          </CustomBadge>
          <CustomBadge leftSection={<FaReact size="1.5em" />}>
            React
          </CustomBadge>
          <CustomBadge leftSection={<FaPython size="1.5em" />}>
            Python
          </CustomBadge>
          <CustomBadge leftSection={<FaJava size="1.5em" />}>Java</CustomBadge>
          <CustomBadge leftSection={<SiLua size="1.5em" />}>Lua</CustomBadge>
        </Group>
        <Group gap="xs" justify="center">
          <CustomBadge leftSection={<FaGitAlt size="1.5em" />}>Git</CustomBadge>
          <CustomBadge leftSection={<SiMongodb size="1.5em" />}>
            MongoDB
          </CustomBadge>
          <CustomBadge leftSection={<SiSqlite size="1.5em" />}>
            SQLite
          </CustomBadge>
          <CustomBadge leftSection={<SiPostgresql size="1.5em" />}>
            PostgreSQL
          </CustomBadge>
        </Group>
      </Stack>
    </Paper>
  );
}
