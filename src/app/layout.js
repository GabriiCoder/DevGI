import Navbar from "../components/Navbar";
import "./globals.css";
import { Urbanist } from 'next/font/google';

const urbanist = Urbanist({
  subsets: ['latin'],
});


export default function Layout({children}) {
  return (
    <html lang="en" className={urbanist.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DevGI</title>
      </head>
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}