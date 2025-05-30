"use client";
import {
  Button,
  FloatingIndicator,
  Group,
  Tabs,
  TabsList,
  TabsTab,
  Text,
} from "@mantine/core";
import { FaGithub } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { pinkie, sunflower } from "@/utils/utils";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  const tab = usePathname();

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <Group m="xl" justify="space-between">
      <Button
        color={pinkie}
        leftSection={<FaGithub size="1.5em" />}
        size="lg"
        variant="subtle"
        style={{
          transitionDuration: "250ms",
        }}
        component={Link}
        href="https://github.com/totallyrin"
      >
        totallyrin
      </Button>
      <Group>
        <Tabs
          variant="pills"
          value={
            (tab.substring(1) as string) === ""
              ? "home"
              : (tab.substring(1) as string)
          }
          onChange={(value: string | null) =>
            value === "home" ? router.push("/") : router.push(`/${value}`)
          }
          // color="#FC5D5D"
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
                <Text
                  // size="lg"
                  c={pinkie}
                  fw={500}
                >
                  00.
                </Text>
                <Text
                  // size="lg"
                  c={sunflower}
                  fw={500}
                >
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
                <Text
                  // size="lg"
                  c={pinkie}
                  fw={500}
                >
                  01.
                </Text>
                <Text
                  // size="lg"
                  c="sunflower"
                  fw={500}
                >
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
                <Text
                  // size="lg"
                  c={pinkie}
                  fw={500}
                >
                  02.
                </Text>
                <Text
                  // size="lg"
                  c="sunflower"
                  fw={500}
                >
                  Experience
                </Text>
              </Group>
            </TabsTab>
            <TabsTab
              value="contact"
              ref={setControlRef("contact")}
              style={{
                transitionDuration: "250ms",
              }}
            >
              <Group gap="xs">
                <Text
                  // size="lg"
                  c={pinkie}
                  fw={500}
                >
                  03.
                </Text>
                <Text
                  // size="lg"
                  c="sunflower"
                  fw={500}
                >
                  Contact
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
              style={{
                maxHeight: "2px",
                marginTop: 50,
                backgroundColor: pinkie,
                borderRadius: "10px",
                zIndex: 99,
                transitionDuration: "250ms",
              }}
            />
          </TabsList>
        </Tabs>
      </Group>
    </Group>
  );
}
