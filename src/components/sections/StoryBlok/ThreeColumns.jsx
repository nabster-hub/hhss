import React from 'react';
import {render} from "storyblok-rich-text-react-renderer";

const ThreeColumns = ({blok}) => {
    return (
        <section id={blok.anchorLink}>
            <div className={"container py-24"}>
                <h2 className={"block w-[76%] mx-auto lg:w-full font-primary text-center lg:text-left font-semibold text-[28px] lg:text-[32px] leading-10 mb-9"}>{blok.title}</h2>
                <div className={"grid lg:grid-cols-3 gap-3 mb-9"}>
                    {blok.column.map((column, _uid) => (
                        <div key={_uid} className={"flex flex-col gap-7 p-7 bg-white rounded-lg"}>
                            <div className="">
                                <span className={"font-primary font-light text-base leading-5"}>{column.years}</span>
                                <h3 className={"font-primary font-semibold text-2xl"}>{column.title}</h3>
                            </div>
                            <hr/>
                            <div className={"richText margin"}>
                                {render(column.Text)}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={"font-heading text-xl leading-9 text-center text-black/60"}>
                    {render(blok.afterBlockText)}
                </div>
            </div>
        </section>
    );
};

export default ThreeColumns;