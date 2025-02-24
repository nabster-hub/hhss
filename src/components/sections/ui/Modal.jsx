// components/Modal.js
"use client";

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Modal({ isOpen, closeModal }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try{
            await axios.post("/api/lead", data);
            closeModal();
        } catch (error) {
            console.log(error);
        } finally {
            closeModal();
        }
    }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full p-6 lg:p-0 max-w-[1160px] transform overflow-hidden lg:rounded-lg bg-white text-left align-middle shadow-xl transition-all flex flex-col md:flex-row">
                                <div className="hidden lg:w-[38%] lg:block">
                                    <img
                                        src="/images/modal-image.png"
                                        alt="Modal Image"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="w-full lg:w-[62%] px-4 md:py-24 md:px-[104px]">
                                    <button
                                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                                        onClick={closeModal}
                                    >

                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.99687 8.40078L2.09687 13.3008C1.91354 13.4841 1.68021 13.5758 1.39687 13.5758C1.11354 13.5758 0.880208 13.4841 0.696875 13.3008C0.513541 13.1174 0.421875 12.8841 0.421875 12.6008C0.421875 12.3174 0.513541 12.0841 0.696875 11.9008L5.59688 7.00078L0.696875 2.10078C0.513541 1.91745 0.421875 1.68411 0.421875 1.40078C0.421875 1.11745 0.513541 0.884114 0.696875 0.700781C0.880208 0.517448 1.11354 0.425781 1.39687 0.425781C1.68021 0.425781 1.91354 0.517448 2.09687 0.700781L6.99687 5.60078L11.8969 0.700781C12.0802 0.517448 12.3135 0.425781 12.5969 0.425781C12.8802 0.425781 13.1135 0.517448 13.2969 0.700781C13.4802 0.884114 13.5719 1.11745 13.5719 1.40078C13.5719 1.68411 13.4802 1.91745 13.2969 2.10078L8.39687 7.00078L13.2969 11.9008C13.4802 12.0841 13.5719 12.3174 13.5719 12.6008C13.5719 12.8841 13.4802 13.1174 13.2969 13.3008C13.1135 13.4841 12.8802 13.5758 12.5969 13.5758C12.3135 13.5758 12.0802 13.4841 11.8969 13.3008L6.99687 8.40078Z"
                                                fill="black"/>
                                        </svg>

                                    </button>
                                    <h2 className="text-[32px] lg:text-5xl font-primary leading-10 lg:leading-[60px] font-semibold mb-6">{"Unlock the "}
                                        <br/> {"Future of Health"}</h2>
                                    <p className="text-[#667085] text-lg lg:text-xl mb-12 font-heading">
                                        Get exclusive early access to the <strong className={"text-black"}>HHSS White
                                        Paper</strong>
                                    </p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label htmlFor={"name"}
                                               className={"mb-1 text-lg lg:text-xl font-heading font-medium block"}>Name {errors.name && <span className="text-red-500 text-sm">Name is required</span>}</label>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            {...register("name", { required: true })}
                                            className="w-full text-base lg:text-xl mb-6 p-3 border rounded-lg focus:outline-none focus:border-yellow-500 placeholder:font-heading placeholder:text-[#667085]"
                                        />

                                        <label htmlFor={"name"}
                                               className={"mb-1 text-lg lg:text-xl font-heading font-medium block"}>Email  {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}</label>
                                        <input
                                            type="email"
                                            placeholder="you@email.com"
                                            {...register("email", {
                                                required: true,
                                                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
                                            })}
                                            className="w-full text-base lg:text-xl  mb-8 p-3 border rounded-lg focus:outline-none focus:border-yellow-500 placeholder:font-heading placeholder:text-[#667085]"
                                        />

                                        <button
                                            type="submit"
                                            className={"px-6 py-[18px] font-secondary mb-8 text-black text-xl font-medium bg-Button rounded-full w-full hover:bg-hoverButton hover:border hover:border-black transition-all ease-in  "}>
                                            Get Early Access
                                        </button>
                                        <div className="flex items-center space-x-2">
                                            {errors.privacy && <span className="text-red-500 text-sm">You must agree to continue</span>}
                                            <input type="checkbox" id="privacy"
                                                   {...register("privacy", { required: true })}
                                                   className="appearance-none w-5 h-5 border border-gray-300 rounded-md checked:bg-yellow-500 checked:border-transparent focus:outline-none transition-all relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:-top-1 checked:before:left-[2px]"/>
                                            <label htmlFor="privacy" className="font-heading font-medium text-sm lg:text-xl text-[#667085]">
                                                You agree to our friendly <a href={"/privacy-policy"} className={"underline"}>privacy policy</a>
                                            </label>

                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
