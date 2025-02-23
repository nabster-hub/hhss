import React from 'react';
import clsx from "clsx";
import Image from "next/image";
import {render} from "storyblok-rich-text-react-renderer";

const AboutFounder = ({blok}) => {
    return (
        <section id={blok.anchorLink} className={"bg-white"}>
            <div className={"container py-7 lg:p-0"}>
                <div className={"flex flex-col-reverse lg:flex-row"}>
                    <div
                        className={"relative w-full aspect-square lg:aspect-auto lg:w-[47%] lg:max-h-full"}
                        >
                        <Image
                            src={blok.image.filename}
                            alt={blok.image.alt}
                            quality={100}
                            fill
                            sizes={
                                "100vh"
                            }
                            style={{
                                objectFit: "contain",
                            }}
                        />
                        <div className={
                            "absolute bottom-[3%] lg:bottom-[10%] xl:bottom-[3%]  left-0 bg-white w-full text-center " +
                            "font-heading font-bold text-base"
                        }>{blok.textOnImage}</div>
                    </div>
                    <div className={"px-2 lg:px-6 lg:py-8 lg:w-[53%] flex flex-col gap-9"}>
                        <h2 className={"font-primary text-center lg:text-left font-medium text-[28px] lg:text-[32px] leading-10"}>{blok.title}</h2>
                        <hr />
                        <div className={"richText"}>
                            {render(blok.text)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFounder;