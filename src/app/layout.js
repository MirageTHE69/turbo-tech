import "./globals.css";
import { CmsProvider } from "@/context/CmsContext";

export const metadata = {
  title: "Turbo Tech | Industrial Engineering, Solutions & Fabrication Excellence",
  description: "Turbo Tech is a premier industrial engineering partner providing precision mechanical construction, heavy steel fabrication, piping, plant maintenance, manpower, and technical training institute solutions.",
  keywords: ["Turbo Tech", "Industrial Engineering", "Fabrication", "Mechanical Construction", "Piping", "Plant Maintenance", "Manpower Supply", "Training Institute"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-white text-[#0F1520]">
        <CmsProvider>
          {children}
        </CmsProvider>
      </body>
    </html>
  );
}
