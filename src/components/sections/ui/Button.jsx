'use client'
import React from 'react';
import Link from "next/link";

const Button = ({label, href, type, variant}) => {

    if(type === "footer")
        return (
          <Link href={href}>
              <button className={"px-6 py-[18px] font-secondary bg-Button rounded-full min-w-[147px] hover:bg-hoverButton hover:border hover:border-black transition-all ease-in  "}>{label}</button>
          </Link>
        );

    if(type === "openForm")
        return (
            <button className={"px-[36px] py-7 bg-Button rounded-full min-w-[147px] hover:bg-hoverButton hover:border hover:border-black transition-all ease-in text-base font-medium leading-7"} onClick={() => {console.log('click') }} >{label}</button>
        );

};

export default Button;