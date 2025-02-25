'use client'
import React, {useState} from 'react';
import Link from "next/link";
import Modal from "@/components/sections/ui/Modal";

const Social = ({label, href, type}) => {
    function openApp(fallbackUrl) {
        const newTab = window.open("about:blank", "_blank");
        const now = new Date().getTime();
        window.location.href = type;

        setTimeout(() => {
            if (new Date().getTime() - now < 1500) {
                // Если приложение не открылось, то переходим на сайт
                if (newTab) {
                    newTab.location.href = fallbackUrl;
                }
            }
        }, 1000);
    }

    return (
        <button
            onClick={() => openApp(href)}
            className="px-6 py-[18px] font-secondary bg-Button rounded-full min-w-[147px] hover:bg-hoverButton hover:border hover:border-black transition-all ease-in uppercase"
        >
            {label}
        </button>
    );

};

export default Social;