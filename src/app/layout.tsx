import type { Metadata } from 'next';
import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'FairBlock - ระบบบล็อกเชนที่โปร่งใส ปลอดภัย และเป็นธรรม',
  description: 'FairBlock - นวัตกรรมบล็อกเชนเพื่อธุรกรรมที่เป็นธรรม ระบบที่ปลอดภัย โปร่งใส ตรวจสอบได้ทุกขั้นตอน',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Thai:wght@400;500;600;700&family=Anuphan:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}