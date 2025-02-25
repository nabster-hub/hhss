'use client'
import React, {useState} from 'react';
import Link from "next/link";
import Modal from "@/components/sections/ui/Modal";

const Button = ({label, href, type, variant}) => {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    if(type === "footer")
        return (
          <Link href={href}>
              <button className={"px-6 py-[18px] font-secondary bg-Button rounded-full min-w-[147px] hover:bg-hoverButton hover:border hover:border-black transition-all ease-in  "}>{label}</button>
          </Link>
        );

    if(type === "openForm")
        return (
            <>
                <button
                    className={"px-[36px] py-7 bg-Button rounded-full min-w-[147px] hover:bg-hoverButton hover:border hover:border-black transition-all ease-in text-base lg:text-[24px] font-medium leading-7"}
                    onClick={openModal}>{label}</button>
                <Modal closeModal={closeModal} isOpen={isOpen}/>
            </>
        );

};

export default Button;