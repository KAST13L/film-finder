import "./globals.css";
import { Header } from "@/feauters/header/Header";
import { Providers } from "@/redux/provider";
import { ErrorSnackbar } from "@/components/error-snackbar/ErrorSnackbar";

export const metadata = {
  title: "Movie finder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ErrorSnackbar />
          <Header />
          <div className={"container"}>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
