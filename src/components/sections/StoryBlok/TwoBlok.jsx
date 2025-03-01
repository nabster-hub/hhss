import React from 'react';
import {render} from "storyblok-rich-text-react-renderer";
import clsx from "clsx";
import Image from "next/image";

const TwoBlok = ({blok}) => {
    const type = () => {
        if(blok.type === "therd")
            return true;

        return false;
    }
    const renderBlock = (item, type, id) => {
        if(item.component === "image")
            return (
                <div className={clsx(type && id === 0 && "lg:w-[38%]", type && id === 1 && "lg:w-[62%]" ,"relative w-full aspect-square lg:aspect-auto lg:max-h-full")} key={item._uid}>
                    <Image
                        src={item.image.filename}
                        alt={item.alt}
                        quality={100}
                        fill
                        sizes={
                            "100vh"
                        }
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            );

        if(item.component === "textWithLine")
            return (
                <div className={clsx(
                    type && id === 0 && "lg:w-[38%] py-8 px-6 lg:p-20",
                    type && id === 1 && "lg:w-[62%] px-6 py-8 lg:p-20",
                    !type && "p-6 lg:p-9",
                    "flex flex-col bg-white"
                )} key={item._uid}>
                    <h3 className={clsx(
                        type && id === 0 && "",
                        type && id === 1 && "lg:ml-6",
                        item.titleOnMobile === "center" && "text-center",
                        item.titleOnMobile === "left" && "text-left",
                        item.titleOnMobile === "right" && "text-right",
                        !type && "lg:ml-6",
                        "font-primary lg:text-left font-semibold text-2xl mb-6"
                    )}>{item.title}</h3>
                    {item.description && (
                            <span className={clsx(
                                type && id === 0 && "",
                                type && id === 1 && "ml-6",
                                "text-center lg:text-left lg:w-[90%] mb-6 lg:ml-6 font-heading text-base text-black/60")}>
                                {item.description}
                            </span>
                        )}
                    <hr className={clsx(
                        type && id === 0 && "",
                        type && id === 1 && "lg:ml-6",
                        !type && "lg:ml-6",
                        "mb-6")} />
                    <div className={clsx(type && id === 0 && "lg:pl-[4px]", type && id === 1 && "ml-6", !type && "ml-6" , "richText font-heading text-base leading-7")}>
                        {render(item.text)}
                    </div>

                </div>
            );
    }

    return (
        <section id={blok.anchorLink}>
            <div className="container py-8 lg:py-[60px]">
                <h2 className={"font-primary text-center lg:text-left font-semibold text-[28px] lg:text-[32px] leading-10 mb-9"}>{blok.title}</h2>
                <div className={clsx(blok.type === "half" && "flex flex-col lg:grid lg:grid-cols-2", blok.type === "therd" && "flex flex-col lg:flex-row", "mb-9 rounded-lg overflow-hidden")}>
                    {blok.block.map((block, index) => (
                        renderBlock(block, type(), index)
                    ))}
                </div>
                <span className={"font-heading text-xl leading-9 text-center text-black/80"}>{render(blok.endingText)}</span>
            </div>
        </section>
    );
};

export default TwoBlok;