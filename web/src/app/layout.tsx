import { ThemeProvider } from "@/context/theme";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "BlazeKit – Effortless Code Generation",
  description:
    "BlazeKit is the ultimate toolkit for effortless code generation. Instantly create TypeScript types, database controllers, and Next.js APIs from simple schemas.",
  keywords: [
    "BlazeKit",
    "code generation",
    "typescript codegen",
    "next.js tools",
    "mongodb generator",
    "prisma generator",
    "drizzle orm generator",
    "open source codegen",
    "developer productivity",
  ],
  authors: [{ name: "Parv Shah" }],
  creator: "Parv Shah",
  publisher: "BlazeKit",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "BlazeKit – Effortless Code Generation",
    description:
      "Supercharge your projects with instant code generation for databases, TypeScript, and Next.js APIs. Build faster, ship smarter.",
    url: "https://blaze-kit.vercel.app/",
    siteName: "BlazeKit",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "BlazeKit Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="dark bg-with-noise">
        <ThemeProvider>
          <Navbar />
          <main className=" min-h-[90vh]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
