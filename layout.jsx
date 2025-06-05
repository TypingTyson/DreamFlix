import "../globals.css";

export const metadata = {
  title: 'Dreamflix',
  description: 'A better-than-Netflix streaming experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
