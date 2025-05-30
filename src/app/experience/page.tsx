"use client";
import {
  Highlight,
  List,
  ListItem,
  Space,
  Stack,
  Text,
  Timeline,
  TimelineItem,
  Title,
  Transition,
} from "@mantine/core";
import { pinkie, sunflower } from "@/utils/utils";
import {
  FaChalkboardUser,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaSchool,
} from "react-icons/fa6";
import { useEffect, useState } from "react";

const Education = () => (
  <Stack gap="xs">
    <Title order={3} c={pinkie}>
      Education
    </Title>
    <Timeline
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
        title="Bachelor of Computing, Software Design (Hons.)"
        bullet={<FaGraduationCap color={"#242424"} />}
      >
        <Text size="sm">Queen&apos;s University</Text>
        <Text c="dimmed" size="sm">
          September 2020 - June 2025
        </Text>
        <Space h="xs" />
        <List>
          <ListItem>Graduated with a GPA of 3.82</ListItem>
          <ListItem>
            Academic Excellence: Dean’s Honours List (2021 – 2022)
          </ListItem>
        </List>
      </TimelineItem>
      <TimelineItem
        title="General Certificate of Education Advanced Level (GCE A-Level)"
        bullet={<FaSchool color={"#242424"} />}
      >
        <Text c="dimmed" size="sm">
          September 2018 - August 2020
        </Text>
        <Space h="xs" />
        <List>
          <ListItem>
            Achieved top marks in Mathematics, Computing and German
          </ListItem>
          <ListItem>
            Developed MazeTool maze generation and solving software
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
);

const Employment = () => (
  <Stack gap="xs">
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
          October 2024 - present
        </Text>
        <Space h="xs" />
        <List>
          <ListItem>
            <Highlight
              highlight={["Next.js", "NeonDB"]}
              highlightStyles={{
                backgroundImage: "linear-gradient(90deg, #FC6471, #FFC66D)",
                fontWeight: 700,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Design, develop, and maintain company website using Next.js and
              NeonDB, ensuring it is user-friendly and optimised across all
              devices and browsers
            </Highlight>
          </ListItem>
          <ListItem>
            Regularly update site content to reflect current information,
            ensuring accuracy, relevancy, and alignment with brand guidelines
            and user needs
          </ListItem>
          <ListItem>
            Monitor website performance and security, addressing issues that
            arise
          </ListItem>
          <ListItem>
            Identify, troubleshoot, and resolve any technical issues, ensuring
            smooth operation with minimal downtime
          </ListItem>
          <ListItem>
            Automate tasks and deploy updates, ensuring system stability
          </ListItem>
          <ListItem>
            Test code to preserve quality and ensure smooth updates
          </ListItem>
          <ListItem>Implement SEO strategies to improve visibility</ListItem>
          <ListItem>
            Maintain game server infrastructure and monitor performance
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
                "SQL",
                "MongoDB",
              ]}
              highlightStyles={{
                backgroundImage: "linear-gradient(90deg, #FC6471, #FFC66D)",
                fontWeight: 700,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Developed full-stack applications using React, Next.js, Django
              REST framework, Node.js, SQL, and MongoDB
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
              highlightStyles={{
                backgroundImage: "linear-gradient(90deg, #FC6471, #FFC66D)",
                fontWeight: 700,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Assisted students in understanding Java, Computer Architecture,
              Data Structures, and Logic for Computing
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
);

export default function Experience() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    setOpened(true);
  }, []);

  return (
    <Transition
      mounted={opened}
      transition="fade"
      duration={250}
      timingFunction="ease"
    >
      {(styles) => (
        <Stack gap="xl" style={styles}>
          <Education />
          <Space />
          <Employment />
          <Space h="xs" />
        </Stack>
      )}
    </Transition>
  );
}
