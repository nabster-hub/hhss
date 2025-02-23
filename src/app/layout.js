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
    title: "Human Health Support System",
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


