import { Quicksand, Palanquin } from "next/font/google";
import "./globals.css";
import {fetchData} from "@/lib/api";
import localFont from "next/font/local";
import clsx from "clsx";
import StoryblokProvider from "@/components/providers/StoryblokProvider";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Header from "@/components/sections/hards/Header";
import Footer from "@/components/sections/hards/Footer";
import Hero from "@/components/sections/StoryBlok/Hero";
import Page from "@/components/sections/StoryBlok/Page";
import TwoBlok from "@/components/sections/StoryBlok/TwoBlok";
import ThreeColumns from "@/components/sections/StoryBlok/ThreeColumns";
import AboutFounder from "@/components/sections/StoryBlok/AboutFounder";

const components = {
    page: Page,
    hero: Hero,
    twoBlok: TwoBlok,
    threeColumns: ThreeColumns,
    aboutFounder: AboutFounder,
}
storyblokInit({
    accessToken: process.env.STORYBLOK_API_TOKEN,
    use: [apiPlugin],
    components,
});
const quicksand = Quicksand({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-quicksand"
});
const palanquin = Palanquin({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-palanquin"
});

const pl = localFont({
    src: '../fonts/Palatino_Linotype.woff2',
    weight: '400',
    style: 'normal',
    variable: "--font-palatino"
})

export const metadata = {
    metadataBase: new URL('https://hhss.info'),
    title: "HHSS – Future of Health",
    description: "Discover HHSS, the world’s first decentralized AI healthcare system designed to keep you youthful and disease-free. Take full control of your health with personalized insights, continuous monitoring, and global access to top medical professionals. Join the future of healthcare today",
    alternates: {
        canonical: './',
    },
    openGraph: {
        title: "HHSS – Human Health Support System: Revolutionizing Healthcare with Decentralized AI",
        description: "Discover HHSS, the world’s first decentralized AI healthcare system designed to keep you youthful and disease-free. Take full control of your health with personalized insights, continuous monitoring, and global access to top medical professionals. Join the future of healthcare today",
        images: ["/images/shubeeham.jpg"],
    },
    icons: {
        icon:[
            { url: '/favicon.ico', type: 'image/x-icon' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        ],
        apple: "/apple-touch-icon.png",
    }
};
export default async function RootLayout({children}) {
     const { data } = await fetchData("global", {
         version: "draft",
     })
    //console.log(data);
    return (
        <StoryblokProvider>
        <html lang="en">

        <body
            className={clsx(quicksand.variable, palanquin.variable, pl.variable)}>
        <Header data={data.story?.content?.headerLinks} />
        {children}
        <Footer data={{
            text: data.story?.content?.footerText,
            links: data.story?.content?.footerLinks
        }} />
        </body>
        </html>
        </StoryblokProvider>
    );
}


