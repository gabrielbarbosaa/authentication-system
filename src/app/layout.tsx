import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { SessionProvider } from "next-auth/react"
import '@mantine/core/styles.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Authentication System",
  description: "Welcome to Authentication System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          />
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
