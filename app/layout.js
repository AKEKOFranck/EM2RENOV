import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation/navigation";
import Footer from "./components/Footer/footer";
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "EM-RENOV | Rénovation & Construction Moderne",
  
  description:
    "EM-RENOV est une entreprise spécialisée dans la rénovation, la construction et l’aménagement intérieur à Abidjan. Nous transformons vos espaces avec des solutions modernes, durables et élégantes pour maisons, appartements et locaux professionnels.",

  keywords: [
    "EM-RENOV",
    "rénovation maison",
    "construction",
    "travaux intérieur",
    "aménagement",
    "design moderne",
    "entreprise rénovation",
  ],

  authors: [{ name: "EM-RENOV" }],

  creator: "EM-RENOV",

  openGraph: {
    title: "EM-RENOV | Rénovation & Construction Moderne",
    description:
      "Transformez vos espaces avec EM-RENOV : rénovation, construction et aménagement intérieur moderne.",
    url: "https://em-renov.com",
    siteName: "EM-RENOV",
    locale: "fr_FR",
    type: "website",

    images: [
      {
        url: "/LogoRenov.jpg",
        width: 1200,
        height: 630,
        alt: "EM-RENOV",
      },
    ],
  },

  icons: {
    icon: [
      { url: "/LogoRenov.ico", type: "image/x-icon" },
      { url: "/LogoRenov.svg", type: "image/svg+xml" },
      { url: "/LogoRenov.jpg", type: "image/jpeg" },
    ],

    shortcut: "/LogoRenov.ico",

    apple: "/LogoRenov.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${poppins.variable}`}
    >
      <body>
        <Navigation/>
          <main>
            {children}
          </main>
          <Footer/>
        </body>
    </html>
  );
}