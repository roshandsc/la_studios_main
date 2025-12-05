import "./globals.css";

export const metadata = {
  title: "La Capella Studios",
  description: "A Cinematic Film Production Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="lc-body">
        <main className="lc-main">{children}</main>
      </body>
    </html>
  );
}
