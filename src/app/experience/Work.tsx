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
import { FaChalkboardUser, FaCode, FaLaptopCode } from "react-icons/fa6";

export default function Work() {
  return (
    <Paper withBorder px="xl" pb="xl" pt="lg">
      <Stack gap="xs" pb="xl">
        <Title order={3} c={pinkie}>
          Work Experience
        </Title>
        <Timeline
          pr="xs"
          bulletSize={24}
          lineWidth={"2px"}
          active={3}
          color={pinkie}
          styles={{
            itemTitle: {
              fontWeight: 700,
              color: sunflower,
            },
          }}
        >
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
                  Designed, developed, and maintained company website using
                  Next.js and NeonDB, ensuring it was user-friendly and
                  optimised across all devices and browsers
                </Highlight>
              </ListItem>
              <ListItem>
                Regularly updated site content to reflect current information,
                ensuring accuracy, relevancy, and alignment with brand
                guidelines and user needs
              </ListItem>
              <ListItem>
                Monitored website performance and security, addressing issues
                that arise
              </ListItem>
              <ListItem>
                Identified, troubleshooted, and resolved any technical issues,
                ensuring smooth operation with minimal downtime
              </ListItem>
              <ListItem>
                Automated tasks and deploy updates, ensuring system stability
              </ListItem>
              <ListItem>
                Tested code to preserve quality and ensure smooth updates
              </ListItem>
              <ListItem>
                Implemented SEO strategies to improve visibility
              </ListItem>
              <ListItem>
                Maintained game server infrastructure and monitor performance
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
                Engaged with clients, developers and project managers to discuss
                progress, requirements, and feedback
              </ListItem>
              <ListItem>
                Communicated and delegated tasks where needed to meet deadlines
              </ListItem>
              <ListItem>
                Conducted research to improve code quality and performance
              </ListItem>
              <ListItem>
                <Highlight
                  highlight={[
                    "React",
                    "Next.js",
                    "Django REST",
                    "Node.js",
                    "SQLite",
                    "MongoDB",
                  ]}
                >
                  Developed full-stack applications using React, Next.js, Django
                  REST framework, Node.js, SQLite, and MongoDB
                </Highlight>
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
                    "Computer Architecture",
                    "Data Structures",
                    "Logic for Computing",
                  ]}
                >
                  Assisted students in understanding Java, Computer
                  Architecture, Data Structures, and Logic for Computing
                </Highlight>
              </ListItem>
              <ListItem>
                Provided timely and effective communications to students
              </ListItem>
              <ListItem>Graded assessments within set deadlines</ListItem>
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
