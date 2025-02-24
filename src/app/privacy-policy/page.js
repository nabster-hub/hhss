import Image from "next/image";
import {fetchData} from "@/lib/api";
import {StoryblokStory} from "@storyblok/react/rsc";
import {StoryblokComponent} from "@storyblok/react";
import {render} from "storyblok-rich-text-react-renderer";



export default async function Home() {
    const { data } = await fetchData("privacy-policy", {
        version: "draft",
    })
    const blok = data.story.content.body;
    //console.log(data.story.content.body)
    console.log(blok[0].title);
    return(
        <section >
            <div className="container py-24">
                <h1 className={"font-primary text-center font-medium text-[28px] lg:text-[32px] leading-10 mb-6"}>{blok[0].title}</h1>
                <div className={"richText"}>
                    {render(blok[0].text)}
                </div>
            </div>
        </section>
    );
}
