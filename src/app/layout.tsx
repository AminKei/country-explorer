import type { FC, ReactNode } from "react";
import Head from "next/head";
import { ThemeProvider } from "../contexts/ThemeContext";
import "../styles/tailwind.css";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Country Explorer",
  description: "Explore countries with RESTCountries API",
};

const RootLayout: FC<LayoutProps> = ({ children }) => (
  <html lang="en">
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <body>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
