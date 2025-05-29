import type { Metadata } from "next";

import "@mantine/core/styles.css";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  mantineHtmlProps,
  MantineProvider,
  ScrollArea,
} from "@mantine/core";
import { theme } from "@/utils/theme";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "totallyrin.github.io",
  description: "totallyrin's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <AppShell>
            <AppShellHeader>
              <Header />
            </AppShellHeader>
            <AppShellMain>
              <ScrollArea>{children}</ScrollArea>
            </AppShellMain>
            <AppShellFooter></AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
