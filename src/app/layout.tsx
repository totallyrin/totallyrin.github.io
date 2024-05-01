import type {Metadata} from "next";
import {Source_Code_Pro} from "next/font/google";
import Providers from "@/app/providers";

// const inter = Inter({subsets: ["latin"]});
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={sourceCodePro.className}
        style={{ backgroundColor: "#292929" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
