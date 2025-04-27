import { ThemeProvider } from "@/context/theme";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "BlazeKit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-with-noise">
        <ThemeProvider>
          <Navbar />
          <main className=" min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
