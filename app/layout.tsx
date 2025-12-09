import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        {/* Appearance */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Wedding of Việt Thái &amp; Thu Thảo" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="canonical" href="https://thai-thao-thiep-moi.vercel.app/" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="https://thai-thao-thiep-moi.vercel.app/assets/images/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="https://thai-thao-thiep-moi.vercel.app/assets/images/icon-192x192.png"
        />
        {/* Preconnect CDN */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload Resources */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Send+Flowers&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet"></link>
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          integrity="sha256-2FMn2Zx6PuH5tdBQDRNwrOo60ts5wWPC9R8jK67b3t4="
          crossOrigin="anonymous"
          as="style"
        />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.1.0/css/all.min.css"
          integrity="sha256-4rTIfo5GQTi/7UJqoyUJQKzxW8VN/YBH31+Cy+vTZj4="
          crossOrigin="anonymous"
          as="style"
        />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha256-5P1JGBOIxI7FBAvT/mb1fCnI5n/NhQKzNUuW7Hq0fMc="
          crossOrigin="anonymous"
          as="script"
        />
        {/* Font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" />
        {/* Dependencies CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          integrity="sha256-2FMn2Zx6PuH5tdBQDRNwrOo60ts5wWPC9R8jK67b3t4="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.1.0/css/all.min.css"
          integrity="sha256-4rTIfo5GQTi/7UJqoyUJQKzxW8VN/YBH31+Cy+vTZj4="
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha256-5P1JGBOIxI7FBAvT/mb1fCnI5n/NhQKzNUuW7Hq0fMc="
          crossOrigin="anonymous"
          defer
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-key="d9faced3377732b0edf19e90d1bde0cd5de04801c75eb41743"
        data-url="https://api.ulems.my.id/"
        data-audio="./assets/music/pure-love-304010.mp3"
        data-confetti="true"
        data-time="2025-12-28 10:00:00"
        data-aos-easing="ease"
        data-aos-duration="400"
        data-aos-delay="0"
      >
        {children}
      </body>
    </html>
  );
}
