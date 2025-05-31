import type { Metadata } from "next";
import Projects from "@/app/projects/Projects";

export const metadata: Metadata = {
  title: "Projects | totallyrin",
  description: "totallyrin's personal website",
};

export default function Page() {
  return <Projects />;
}
