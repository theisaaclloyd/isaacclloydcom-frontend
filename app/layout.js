//import Head from "next/head";
import './globals.css';

export const metadata = {
  title: 'Isaac Lloyd',
  description: 'isaacclloyd.com',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script defer data-domain="isaacclloyd.com" src="https://plausible.isaacclloyd.com/js/script.js"></script>
        <link rel="stylesheet" href="https://use.typekit.net/vqj5avh.css"></link>
        <link rel="icon" href="assets/images/favicon.ico" />
      </head>

      <body className="min-h-screen bg-charleston text-platinum Anth-Regular w-full antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
