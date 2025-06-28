import type { Metadata } from "next";

import "@mantine/core/styles.css";
import "@gfazioli/mantine-text-animate/styles.css";
import {
  AppShell,
  AppShellFooter,
  AppShellHeader,
  AppShellMain,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
  Stack,
} from "@mantine/core";
import { theme } from "@/utils/theme";
import Header from "@/components/Header";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Home | Lucy W.",
  description:
    "Hi, I'm Lucy, a web developer based in Ontario. I specialise in building modern, responsive web applications using technologies like React, Next.js, and Node.js, with experience in both frontend and backend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <body>
        <ColorSchemeScript forceColorScheme="dark" />
        <MantineProvider theme={theme} forceColorScheme="dark">
          <AppShell
            header={{ height: { base: 211.067, "690px": 120.667 } }}
            footer={{ height: 105 }}
            padding="xl"
          >
            <AppShellHeader>
              <Header />
            </AppShellHeader>
            <AppShellMain
              style={{
                maxWidth: "100vw",
                overflowX: "hidden",
                backgroundColor: "var(--mantine-color-dark-8)",
              }}
            >
              <Stack
                px={{
                  xs: 0,
                  sm: "2em",
                  md: "5em",
                  lg: "10em",
                  xl: "25em",
                  xxl: "40em",
                }}
              >
                {children}
              </Stack>
            </AppShellMain>
            <AppShellFooter>
              <Footer />
            </AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
