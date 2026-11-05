import "./globals.css";
import { profile } from "@/data/content";

export const metadata = {
  title: `${profile.name} | ${profile.title}, Dubai`,
  description: `${profile.title} in Dubai specialising in print, branding and campaign creatives. ${profile.headline}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
