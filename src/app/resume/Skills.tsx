import { Badge, Divider, Group, Paper, Stack, Title } from "@mantine/core";
import { pinkie, sunflower } from "@/utils/utils";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoDjango, BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt, FaJava, FaPython, FaReact } from "react-icons/fa6";
import {
  SiLua,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";
import { ReactNode } from "react";

export const CustomBadge = ({
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

export const languages = [
  <CustomBadge leftSection={<RiJavascriptFill size="1.5em" />}>
    JavaScript
  </CustomBadge>,
  <CustomBadge leftSection={<BiLogoTypescript size="1.5em" />}>
    TypeScript
  </CustomBadge>,
  <CustomBadge leftSection={<FaPython size="1.5em" />}>Python</CustomBadge>,
  <CustomBadge leftSection={<FaJava size="1.5em" />}>Java</CustomBadge>,
  <CustomBadge leftSection={<SiLua size="1.5em" />}>Lua</CustomBadge>,
];

export const frameworks = [
  <CustomBadge leftSection={<RiNextjsFill size="1.5em" />}>
    Next.js
  </CustomBadge>,
  <CustomBadge leftSection={<FaReact size="1.5em" />}>React</CustomBadge>,
  <CustomBadge leftSection={<BiLogoDjango size="1.5em" />}>Django</CustomBadge>,
];

export const tools = [
  <CustomBadge leftSection={<FaGitAlt size="1.5em" />}>Git</CustomBadge>,
  <CustomBadge leftSection={<SiMongodb size="1.5em" />}>MongoDB</CustomBadge>,
  <CustomBadge leftSection={<SiSqlite size="1.5em" />}>SQLite</CustomBadge>,
  <CustomBadge leftSection={<SiPostgresql size="1.5em" />}>
    PostgreSQL
  </CustomBadge>,
  <CustomBadge leftSection={<SiMariadb size="1.5em" />}>MariaDB</CustomBadge>,
  <CustomBadge leftSection={<SiMysql size="1.5em" />}>MySQL</CustomBadge>,
];

export default function Skills() {
  return (
    <Paper withBorder px="xl" pb="xl" pt="lg">
      <Stack gap="xs">
        <Title order={3} c={pinkie}>
          Technical Skills
        </Title>
        <Title order={5} c={sunflower} ta="center">
          Languages
        </Title>
        <Group gap="xs" justify="center">
          {languages.map((language, i) => (
            <div key={i}>{language}</div>
          ))}
        </Group>
        <Divider />
        <Title order={5} c={sunflower} ta="center">
          Frameworks
        </Title>
        <Group gap="xs" justify="center">
          {frameworks.map((fw, i) => (
            <div key={i}>{fw}</div>
          ))}
        </Group>
        <Divider />
        <Title order={5} c={sunflower} ta="center">
          Tools
        </Title>
        <Group gap="xs" justify="center">
          {tools.map((tool, i) => (
            <div key={i}>{tool}</div>
          ))}
        </Group>
      </Stack>
    </Paper>
  );
}
