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
import { FaGraduationCap, FaSchool } from "react-icons/fa6";

export default function Education() {
  return (
    <Paper
      withBorder
      px={{ base: "xs", xs: "xl" }}
      pb={{ base: "xs", xs: "xl" }}
      pt={{ base: "xs", xs: "lg" }}
    >
      <Stack gap="xs" pb="xl">
        <Title order={3} c={pinkie} ta={{ base: "center", xs: "left" }}>
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
              <i>Software Design (Professional Internship)</i>
            </Text>
            <Text size="sm">Queen&apos;s University</Text>
            <Text c="dimmed" size="sm">
              September 2020 - June 2025
            </Text>
            <Space h="xs" />
            <List>
              <ListItem>GPA: 3.82 | Dean’s Honours List</ListItem>
              <ListItem>
                <Highlight
                  highlight={[
                    "Algorithms",
                    "Data Structures",
                    "Computer Architecture",
                    "Operating Systems",
                    "Software Architecture",
                    "Software Specifications",
                  ]}
                >
                  Relevant Courses: Data Structures, Algorithms, Computer
                  Architecture, Operating Systems, Software Architecture,
                  Software Specifications
                </Highlight>
              </ListItem>
            </List>
          </TimelineItem>

          <TimelineItem
            title="GCE A-Levels"
            bullet={<FaSchool color={"#242424"} />}
          >
            <Text c="dimmed" size="sm">
              2018 - 2020
            </Text>
            <Space h="xs" />
            <List>
              <ListItem>Mathematics, Computing, and German</ListItem>
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
