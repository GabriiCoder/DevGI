import Navbar from "../components/Navbar";
import "./globals.css";
import { Urbanist } from 'next/font/google';
import Header from "../components/Header"
import TransitionPage from "../components/TransitionPage";

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
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />

        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DevGI</title>
      </head>
      <body>
        <main>
          <Navbar />
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}