'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger)

export default function Poster(){
    const items = Array(100).fill(null);

    useGSAP(()=>{
        const titles = gsap.utils.toArray('.title');

        // Animate titles to loop
        titles.forEach((title) => {
            const animation = gsap.to(title, {
                x: -4000, // geser ke kanan
                duration: 20,
                repeat: -1,
                ease: 'linear'
            });

        //     ScrollTrigger.create({
        //         trigger: title,
        //         start: 'top 30%', 
        //         end: 'top 30%', 
        //         onEnter: () => {
        //             animation.isActive(); 
        //             gsap.to(title, { x: 0, duration: 4, ease: 'linear' }); // Geser kembali ke kanan
        //         },
        //         onLeaveBack: () => {
        //             animation.isActive(); // Kembali ke animasi semula saat scroll ke atas
        //         },
        //         markers: true
        //     });
        });

    
        // // Cleanup on unmount
        // return () => {
        //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        // }

    },[])
    return(
        <>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
        <section className="px-4  lg:px-16 overflow-x-hidden bg-[#0E090D]">
            <div className="flex flex-col justify-center lg:justify-normal items-center">
                <div className="flex items-center mt-[26rem] lg:mt-56 text-y justify-between gap-16 w-screen">
                    {items.map((_,index)=>(
                        <div className="flex font-mango title lg:gap-16 -translate-x-1/2 items-center justify-center gap-16 w-screen ">
                            <div className="w-6 h-6 shape bg-g1 rounded-full"></div>
                            <h1 className="text-6xl text-wh font-medium lg:text-9xl whitespace-nowrap"><i>POSTER DESIGN</i></h1>
                        </div>
                    ))}
                </div>
                {/* img */}
                <div className="top-7 lg:top-11 lg:right-16 overflow-hidden absolute">
                    <img className="scale-[2] lg:z-10 " src="/poster.svg" alt="" srcset="" />
                </div>
                {/* title */}
                <div className="flex flex-wrap mt-6 w-full justify-center lg:justify-start items-center gap-4">
                    <h1 className="text-sm font-normal text-wh">lorem</h1>
                    <div className="w-2 h-2 rounded-full bg-g1"></div>
                </div>
            </div>

            <section className="mt-20 lg:mt-64 h-96">
                <div className="lg:flex gap-24">
                    <div className="order-2">
                        <div className="flex items-center justify-between gap-6">
                            <h1 className="text-[#707070] font-medium text-2xl">Product</h1>
                            <div className="h-0.5 bg-[#707070] w-full"></div>
                            <h2 className="text-[#707070] font-medium text-2xl">01</h2>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8 mt-16 justify-between">
                            <h1 className="text-6xl font-mango text-wh">Title</h1>
                            <p className="text-sm text-wh font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus nihil architecto esse, quis sunt iste odio sequi cumque pariatur nobis ullam unde corporis eos dignissimos explicabo asperiores autem consequatur?</p>
                        </div>

                        {/* img */}
                        <div>
                            <img src="" alt="" />
                        </div>
                    </div>

                    {/* lg */}
                    <div className="order-1 hidden lg:block w-1/4">
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <h1 className="font-medium font-mango text-3xl text-[#707070]">Title</h1>
                        </div>
                    </div>
                </div>
            </section>
        </section>
        </>
    );
};