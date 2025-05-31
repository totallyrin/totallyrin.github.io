import type { Metadata } from "next";
import Experience from "@/app/experience/Experience";

export const metadata: Metadata = {
  title: "Experience | Lucy W.",
};

export default function Page() {
  return <Experience />;
}
