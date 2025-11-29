import { Geist } from 'next/font/google'
import "./globals.css";

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
})

export const metadata = {
  title: "Christiaan Sanmoekmin | Design Engineer",
  description: "a design engineer focused on UX and web interfaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}