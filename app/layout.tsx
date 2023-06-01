import "./globals.css";
import { Header } from "@/components/header/Header";

export const metadata = {
  title: "Film finder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={"container"}>{children}</div>
      </body>
    </html>
  );
}
