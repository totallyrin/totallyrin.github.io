import {
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
import { FaGraduationCap, FaSchool } from "react-icons/fa6";

export default function Education() {
  return (
    <Paper withBorder px="xl" pb="xl" pt="lg">
      <Stack gap="xs" pb="xl">
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
            title="Bachelor of Computing (Honours)"
            bullet={<FaGraduationCap color={"#242424"} />}
          >
            <Text size="sm" pb="xs">
              <i>
                Specialization in Software Design with Professional Internship
              </i>
            </Text>
            <Text size="sm">Queen&apos;s University</Text>
            <Text c="dimmed" size="sm">
              September 2020 - June 2025
            </Text>
            <Space h="xs" />
            <List>
              <ListItem>Graduated with a GPA of 3.82</ListItem>
              <ListItem>
                Academic Excellence: Dean&apos;s Honours List (2021 – 2022)
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
    </Paper>
  );
}
