'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Transition from "./pagetransition"
import barba from '@barba/core';
gsap.registerPlugin(ScrollTrigger)

export default function Service(){

    
    const textRef = useRef(null);
    const items = Array(10).fill(null);

    useGSAP(()=>{
        // const textsc = textRef.current
        const header = document.querySelectorAll(".text-y");
        const image = document.querySelectorAll(".img");
        const shape = document.querySelectorAll(".shape");
        gsap.set(".img",{scale: 0, opacity: 0},);
        header.forEach((head, index)=>{
            head.addEventListener('mouseenter', ()=>{
                gsap.to(image[index],
                    {scale: 1, opacity: 1, duration: 0.7, ease: "power2.out"}
                );
                gsap.to(shape[head],{
                    width:"25px",
                    height: "25px"
                })
            });
            head.addEventListener('mouseleave',()=>{
                gsap.to(image[index],
                    {scale: 0, opacity: 0, duration: 0.7, ease: "power2.out"}
                )
                gsap.to(shape[head],{
                    width: "44px",
                    height: "44px"
                })
            });

            const direction = index % 2 === 0 ? '500px' : '-500px'
            gsap.to(head,  {
                x: direction,
                scrollTrigger: {
                    trigger: ".text-yl",
                    start: "80% 80%", 
                    end: "100% ", 
                    scrub: true, 
                    markers: false   
                },
                duration: 0.7
            });
        });

        barba.init({
            transitions: [
                {
                    leave(data) {
                        return new Promise((resolve) => {
                            const leavingContainer = data.current.container;
                            leavingContainer.style.opacity = 0; // Animasi keluar
                            setTimeout(() => {
                                resolve();
                            }, 500); // Durasi animasi keluar
                        });
                    },
                    enter(data) {
                        const enteringContainer = data.next.container;
                        enteringContainer.style.opacity = 1; // Animasi masuk
                    },
                },
            ],
        });

        // Cleanup function untuk menghentikan Barba saat komponen di-unmount
        return () => {
            barba.destroy();
        };
    },[]);

    const ServiceItems = [
        {title: 'POSTER DESIGN', img: '/poster.svg', url: '/poster'},
        {title: 'WEB DESIGN', img: '/WEB.svg', url: '/web'},
    ];

    const handleLinkClick = (e, url) => {
        e.preventDefault(); // Mencegah perilaku default link
        barba.go(url); // Gunakan Barba.js untuk berpindah halaman
    };
    console.log('Barba:', barba); 

    return(
        <section data-barba="wrapper">
            <section data-barba="container" className=" px-4 mt-36 relative overflow-y-hidden overflow-x-hidden ">
                {/* poster */}
                {ServiceItems.map((itm, index)=>(
                <div key={index} data-barba="element" className="poster relative">
                    <div className="flex items-center mt-32 text-y justify-between gap-16 w-screen">
                        {items.map((_,index)=>(
                        <div className="flex lg:gap-16 font-mango -translate-x-1/2 items-center justify-center gap-6 w-screen ">
                            <div className="w-11 h-11 min-h-8 min-w-8 shape bg-g1 rounded-full"></div>
                            <h1 className="text-2xl text-wh font-medium lg:text-9xl whitespace-nowrap"><i>{itm.title}</i></h1>
                            
                        </div>
                        ))}
                    </div>

                    {/* img */}
                    <div className="absolute img top-36 left-1/2 transform -translate-x-1/2 -translate-y-72 lg:-translate-y-[21rem]" style={{ pointerEvents: 'none' }}>
                        <img src={itm.img} className="min-w-80 scale-125" alt="" />
                    </div>

                    {/* button */}
                    <div className=" flex items-center gap-7 mt-32">
                        <div className=" w-full h-px bg-wh"></div>
                        <Link href={itm.url} passHref>
                            <button onClick={(e) => handleLinkClick(e, itm.url)} className="text-wh text-sm font-medium">View</button>
                        </Link>
                        <div className="w-full h-px bg-wh"></div>
                    </div>
                </div>
                ))}
            
            </section>
        </section>
    );
};
