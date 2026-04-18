import type { Metadata } from "next";
import Experience from "@/app/resume/Experience";

export const metadata: Metadata = {
  title: "Resume | Lucy W.",
};

export default function Page() {
  return <Experience />;
}
