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

export default function Header() {
  const router = useRouter();
  const tab = usePathname();

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>("1");
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
        color="#FC5D5D"
        leftSection={<FaGithub size="1.5em" />}
        size="lg"
        variant="subtle"
        style={{
          transitionDuration: "250ms",
        }}
      >
        totallyrin
      </Button>
      <Group>
        <Tabs
          value={
            (tab.substring(1) as string) === ""
              ? "home"
              : (tab.substring(1) as string)
          }
          onChange={(value) =>
            value === "home" ? router.push("/") : router.push(`/${value}`)
          }
          color="#FC5D5D"
          style={{
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
                <Text c="#FC5D5D">
                  <b>00.</b>
                </Text>
                <Text c="sunflower">
                  <b>Home</b>
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
              01. Projects
            </TabsTab>
            <TabsTab
              value="experience"
              ref={setControlRef("experience")}
              style={{
                transitionDuration: "250ms",
              }}
            >
              02. Experience
            </TabsTab>
            <TabsTab
              value="contact"
              ref={setControlRef("contact")}
              style={{
                transitionDuration: "250ms",
              }}
            >
              03. Contact
            </TabsTab>

            <FloatingIndicator
              target={value ? controlsRefs[value] : null}
              parent={rootRef}
            />
          </TabsList>
        </Tabs>
      </Group>
    </Group>
  );
}
