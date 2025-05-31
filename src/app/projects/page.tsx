import type { Metadata } from "next";
import Projects from "@/app/projects/Projects";

export const metadata: Metadata = {
  title: "Projects | Lucy W.",
};

export default function Page() {
  return <Projects />;
}
