'use client'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Sidebar(){

    useGSAP(()=>{
        const navLink = document.querySelectorAll(".navlink");
        navLink.forEach((link)=>{
            // hover
            link.addEventListener("mouseenter", () => {
                gsap.timeline()
                    .to(link.querySelector(".text-1"), {
                        y: "-100%", 
                        duration: 0.3,
                        ease: "power1.out"
                    })
                    .fromTo(link.querySelector(".text-2"), 
                        { y: 70 },
                        { y: 0, duration: 0.3, ease: "power1.out" }
                    );
                
                // not
                link.addEventListener("mouseleave", () => {
                    gsap.timeline()
                        .to(link.querySelector(".text-1"), {
                            y: 0,  
                            duration: 0.3,
                            ease: "power1.in"
                        })
                        .to(link.querySelector(".text-2"), {
                            y: 60,  
                            duration: 0.3,
                            ease: "power1.in"
                        }, "+=0.2");  
                });
            });
            return()=>{
                navLink.forEach(link =>{
                    link.removeEventListener("mouseenter", null);
                    link.removeEventListener("mouseleave", null);
                });
            };
        });
    });

    return(
        <section className="sidebar *:px-4 -translate-y-full fixed w-screen bg-g1 z-[2] h-screen pt-24">
            <h1 className="border-black border-b mb-4 pb-2">Menu</h1>
            <div className="flex flex-col gap-4">
                <div className="overflow-hidden">
                    <a className="navlink text-2xl font-medium text-black relative block h-[30px]" href="">
                        <span className="text-1 absolute ">Home</span>
                        <span className="text-2 absolute  mt-1">Home</span>
                    </a>
                </div>
                <div className="overflow-hidden">
                    <a className="navlink text-2xl font-medium text-black relative block h-[30px]" href="">
                        <span className="text-1 absolute top-0 left-0 w-full">Service</span>
                        <span className="text-2 absolute top-0 left-0 w-full mt-1">Service</span>
                    </a>
                </div>
                
            </div>
        </section>
    );
};