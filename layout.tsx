import "./globals.css";

export const metadata = {
  title: "AI Grant Writing Assistant",
  description: "Grant proposal generation platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}