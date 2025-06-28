"use client";
import {
  Avatar,
  FloatingIndicator,
  Group,
  Stack,
  Tabs,
  TabsList,
  TabsTab,
  Text,
} from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { pinkie, sunflower } from "@/utils/utils";
import { useMediaQuery } from "@mantine/hooks";

export default function Header() {
  const router = useRouter();
  const tab = usePathname();
  const mobile = useMediaQuery("(max-width: 689px)", true);
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <Group m="xl" justify="space-between" align="center">
      <Stack align="flex-start" justify="space-between" h="100%">
        <Group>
          <Avatar
            size={mobile ? "lg" : "lg"}
            p="2px"
            src="photo-circle.png"
            style={{
              backgroundImage: `linear-gradient(90deg, ${pinkie}, ${sunflower})`,
            }}
          />
          <Text
            size={mobile ? "lg" : "xl"}
            fw={700}
            variant="gradient"
            gradient={{
              from: pinkie,
              to: sunflower,
              deg: 90,
            }}
          >
            Lucy W.
          </Text>
        </Group>
      </Stack>
      <Group>
        <Group>
          <Tabs
            variant="pills"
            orientation={mobile ? "vertical" : "horizontal"}
            value={
              (tab.substring(1) as string) === ""
                ? "home"
                : (tab.substring(1) as string)
            }
            onChange={(value: string | null) =>
              value === "home" ? router.push("/") : router.push(`/${value}`)
            }
            color="#3f2c2e"
            style={{
              width: "100%", // Ensures parent covers full horizontal space
              justifyContent: "flex-end", // Right-align the actual tabs
              display: "flex", // Ensure the children align as intended
              position: "relative", // Important for FloatingIndicator to position absolutely inside
              transitionDuration: "250ms",
            }}
          >
            <TabsList ref={setRootRef}>
              <TabsTab
                value="home"
                ref={setControlRef("home")}
                style={{
                  transitionDuration: "250ms",
                }}
              >
                <Group gap="xs">
                  <Text c={pinkie} fw={500}>
                    00.
                  </Text>
                  <Text c={sunflower} fw={500}>
                    Home
                  </Text>
                </Group>
              </TabsTab>
              <TabsTab
                value="projects"
                ref={setControlRef("projects")}
                style={{
                  transitionDuration: "250ms",
                }}
              >
                <Group gap="xs">
                  <Text c={pinkie} fw={500}>
                    01.
                  </Text>
                  <Text c={sunflower} fw={500}>
                    Projects
                  </Text>
                </Group>
              </TabsTab>
              <TabsTab
                value="experience"
                ref={setControlRef("experience")}
                style={{
                  transitionDuration: "250ms",
                }}
              >
                <Group gap="xs">
                  <Text c={pinkie} fw={500}>
                    02.
                  </Text>
                  <Text c={sunflower} fw={500}>
                    Resume
                  </Text>
                </Group>
              </TabsTab>

              <FloatingIndicator
                target={
                  controlsRefs[
                    (tab.substring(1) as string) === ""
                      ? "home"
                      : (tab.substring(1) as string)
                  ]
                }
                parent={rootRef}
                style={
                  mobile
                    ? {
                        position: "absolute",
                        maxWidth: "2px",
                        marginLeft: 155,
                        backgroundColor: pinkie,
                        borderRadius: "10px",
                        zIndex: 1,
                        transitionDuration: "250ms",
                      }
                    : {
                        maxHeight: "2px",
                        marginTop: 50,
                        backgroundColor: pinkie,
                        borderRadius: "10px",
                        zIndex: 1,
                        transitionDuration: "250ms",
                      }
                }
              />
            </TabsList>
          </Tabs>
        </Group>
      </Group>
    </Group>
  );
}
