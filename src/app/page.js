import Image from "next/image";
import {fetchData} from "@/lib/api";
import {StoryblokStory} from "@storyblok/react/rsc";
import {StoryblokComponent} from "@storyblok/react";

export default async function Home() {
  const { data } = await fetchData("home", {
    version: "draft",
  })
  //console.log(data)
  return(
      <StoryblokStory story={data.story} />
  );
}
