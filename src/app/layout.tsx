import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Code with Xed — Xedric Andrei Viar | Full-Stack Developer Portfolio",
  description:
    "Code with Xed — the developer portfolio of Xedric Andrei Viar, a full-stack web developer from the Philippines. Building offline-first PWAs, full-stack ordering platforms, and more. View projects, skills, and experience.",
  keywords: [
    "code with xed",
    "xedric andrei viar",
    "full-stack developer philippines",
    "web developer portfolio",
    "code with xed portfolio",
    "filipino developer",
    "nextjs portfolio",
  ],
  authors: [{ name: "Xedric Andrei Viar" }],
  creator: "Xedric Andrei Viar",
  openGraph: {
    title: "Code with Xed — Xedric Andrei Viar | Full-Stack Developer",
    description:
      "Full-stack web developer from the Philippines. Building PWAs, ordering platforms, and leveling up every day.",
    url: "https://codewithxed.vercel.app",
    siteName: "Code with Xed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code with Xed — Xedric Andrei Viar",
    description:
      "Full-stack developer portfolio. Projects, experience, and community involvement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
  (function() {
    var theme = localStorage.getItem('theme');
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pressStart.variable} ${vt323.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="relative min-h-screen overflow-x-hidden bg-bg-primary font-body text-text-primary scanlines">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-text-dark focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
