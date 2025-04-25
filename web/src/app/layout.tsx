import { ThemeProvider } from "@/context/theme";
import "./globals.css";

export const metadata = {
  title: "BlazeKit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <main className="bg-with-noise min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
