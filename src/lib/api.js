import { getStoryblokApi } from "@storyblok/react/rsc";

export async function fetchData(slug, sbParams, fetchOptions) {
    const storyblokApi = getStoryblokApi();
    return storyblokApi.get(`cdn/stories/${slug}`, sbParams, fetchOptions);
}
