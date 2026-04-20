import {
  Highlight,
  List,
  ListItem,
  Paper,
  Space,
  Stack,
  Text,
  Timeline,
  TimelineItem,
  Title,
} from "@mantine/core";
import { pinkie, sunflower } from "@/utils/utils";
import {
  FaChalkboardUser,
  FaCode,
  FaFileCode,
  FaLaptopCode,
  FaShop,
} from "react-icons/fa6";

export default function Work() {
  return (
    <Paper withBorder px="xl" pb="xl" pt="lg">
      <Stack gap="xs" pb="xl">
        <Title order={3} c={pinkie}>
          Experience
        </Title>
        <Timeline
          pr="xs"
          bulletSize={24}
          lineWidth={"2px"}
          active={6}
          color={pinkie}
          styles={{
            itemTitle: {
              fontWeight: 700,
              color: sunflower,
            },
          }}
        >
          <TimelineItem
            title="Founder & Lead Developer"
            bullet={<FaShop color={"#242424"} />}
          >
            <Text size="sm">TR Scripts (Independent)</Text>
            <Text c="dimmed" size="sm">
              July 2025 - present
            </Text>
            <Space h="xs" />
            <List>
              <ListItem>
                <Highlight highlight={["Next.js", "NeonDB"]}>
                  Develop, monetize, and distribute custom RedM scripts through
                  a Tebex store, building reusable systems for server owners
                </Highlight>
              </ListItem>
              <ListItem>
                Design modular and configurable systems to support a range of
                server use cases and player interactions
              </ListItem>
              <ListItem>
                Maintain and update scripts based on user feedback, ensuring
                stability, performance, and compatibility with evolving server
                environments
              </ListItem>
            </List>
          </TimelineItem>
          <TimelineItem
            title="Lead Developer"
            bullet={<FaFileCode color={"#242424"} />}
          >
            <Text size="sm">Homelands RP (Independent)</Text>
            <Text c="dimmed" size="sm">
              July 2025 - present
            </Text>
            <Space h="xs" />
            <List>
              <ListItem>
                <Highlight highlight={["full-stack web application"]}>
                  Develop and maintain a live RedM server configured to support
                  up to 48 concurrent users, alongside a full-stack web
                  application
                </Highlight>
              </ListItem>
              <ListItem>
                Design and implement custom gameplay systems and server-side
                features, improving player experience and server stability
              </ListItem>
              <ListItem>
                Engineer and maintain web features including dynamic forms,
                authentication, and database-driven content
              </ListItem>
              <ListItem>
                <Highlight highlight={["99% uptime"]}>
                  Monitor server performance, debug live issues, and deploy
                  updates while maintaining 99% uptime
                </Highlight>
              </ListItem>
            </List>
          </TimelineItem>
          <TimelineItem
            title="Director of Web Development"
            bullet={<FaLaptopCode color={"#242424"} />}
          >
            <Text c="dimmed" size="sm" fs="italic">
              Assistant Lead Director of Technology
            </Text>
            <Text c="dimmed" size="sm" fs="italic">
              Assistant Lead Director of Technical Assistance
            </Text>
            <Space h="xs" />
            <Text size="sm">Rainbow Railroad Roleplay, LLC</Text>
            <Text c="dimmed" size="sm">
              October 2024 - July 2025
            </Text>
            <Space h="xs" />
            <List>
              <ListItem>
                <Highlight highlight={["Next.js", "NeonDB"]}>
                  Designed, developed, and maintained a full-stack web platform,
                  ensuring responsiveness, performance, and cross-browser
                  compatibility
                </Highlight>
              </ListItem>
              <ListItem>
                Automated deployments and update workflows, improving
                reliability and reducing manual overhead
              </ListItem>
              <ListItem>
                Monitored performance and security, identifying and resolving
                issues in production environments
              </ListItem>
              <ListItem>
                Debugged and resolved technical issues, minimizing downtime and
                improving system stability
              </ListItem>
              <ListItem>
                Implemented SEO improvements to increase visibility and user
                reach
              </ListItem>
              <ListItem>
                Supported and maintained game server infrastructure alongside
                web systems
              </ListItem>
            </List>
          </TimelineItem>
          <TimelineItem
            title="Software Developer Intern"
            bullet={<FaCode color={"#242424"} />}
          >
            <Text size="sm">Centre for Advanced Computing</Text>
            <Text c="dimmed" size="sm">
              May 2023 - July 2024
            </Text>
            <Space h="xs" />
            <List>
              <ListItem>
                <Highlight
                  highlight={[
                    "React",
                    "Next.js",
                    "Django REST",
                    "Node.js",
                    "MongoDB",
                    "SQLite",
                  ]}
                >
                  Developed full-stack applications using React, Next.js, Django
                  REST, Node.js, MongoDB, and SQLite
                </Highlight>
              </ListItem>
              <ListItem>
                Collaborated with clients, developers, and project managers to
                gather requirements and deliver features
              </ListItem>
              <ListItem>
                Improved application performance and code quality through
                testing, optimization, and research
              </ListItem>
            </List>
          </TimelineItem>
          <TimelineItem
            title="Teaching Assistant"
            bullet={<FaChalkboardUser color={"#242424"} />}
          >
            <Text size="sm">School of Computing, Queen&apos;s University</Text>
            <Text c="dimmed" size="sm">
              May 2021 - May 2025
            </Text>
            <Space h="xs" />
            <List>
              <ListItem>
                <Highlight
                  highlight={[
                    "Java",
                    "Data Structures",
                    "Computer Architecture",
                  ]}
                >
                  Assisted students in understanding Java, data structures, and
                  computer architecture concepts
                </Highlight>
              </ListItem>
              <ListItem>
                Supported debugging and problem-solving for programming
                assignments and coursework
              </ListItem>
              <ListItem>
                Evaluated assignments and provided feedback within set deadlines
              </ListItem>
            </List>
          </TimelineItem>
          <TimelineItem
            style={{
              display: "none",
            }}
          />
        </Timeline>
      </Stack>
    </Paper>
  );
}
