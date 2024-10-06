import "./globals.css";
import { getAllDocuments } from "./lib/doc";


export const metadata = {
  title: "DocuCraft",
  description: "DocuCraft - A documentation website",
};

export default function RootLayout({ children }) {
  const allDocuments=getAllDocuments()
  console.log(allDocuments)
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
