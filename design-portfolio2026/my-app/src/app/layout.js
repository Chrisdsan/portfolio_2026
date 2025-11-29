import { Geist } from 'next/font/google'
import "./globals.css";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
})

export const metadata = {
  title: "My App",
  description: "Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}