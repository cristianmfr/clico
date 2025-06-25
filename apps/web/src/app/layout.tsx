import "@clico/ui/globals.css";

import type { Metadata } from "next";

import { AppProviders } from "../components/providers/app-providers";

export const metadata: Metadata = {
  title: "Clico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
