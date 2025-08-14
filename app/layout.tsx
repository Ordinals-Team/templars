import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@/components/analytics";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";



export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://www.templars.com"),
  keywords: ["templars", "knight", "brc2.0", "brc 2.0 token", "bitcoin nfts", "ordinals", "nft", "$knight"],
  authors: [
    {
      name: "templars",
      url: "https://templars.com",
    },
  ],
  creator: "templars",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [`${siteConfig.url}/og.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@templarsbtc",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: `${siteConfig.url}/site.webmanifest`,
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen flex flex-col overflow-x-hidden")}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* 1) Navbar */}
          <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
            <div className="fixed top-0 left-0 w-full z-50">
              <MainNav />
            </div>
          </header>


          {/* 2) include */}
          <main className="flex-1 snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth ">
            {children}
          </main>

          {/* 3) Footer */}
          <footer className="mt-auto">
            <SiteFooter />
          </footer>

          {/* 4) Global UI (toaster, analytics, vs.) */}
          <Toaster />
          <TailwindIndicator />
          <Analytics />
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
          <Script id="google-analytics">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}</Script>
        </ThemeProvider>
      </body>
    </html>
  );
}