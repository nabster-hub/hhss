import { storyblokEditable, StoryblokServerComponent } from '@storyblok/react/rsc';

const Page = ({ blok }) => (
    <main  className={"min-h-dvh"} {...storyblokEditable(blok)}>
        {blok.body.map(nestedBlok => (
            <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </main>
);

export default Page;