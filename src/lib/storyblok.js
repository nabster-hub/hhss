// import Page from '@/components/Page';
// import Teaser from '@/components/Teaser';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';
import Page from "@/components/sections/StoryBlok/Page";

export const getStoryblokApi = storyblokInit({
    accessToken: process.env.STORYBLOK_API_TOKEN,
    use: [apiPlugin],
    components: {
        // teaser: Teaser,
         page: Page,
    },
});