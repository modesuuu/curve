'use client'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRouter } from "next/router";
import barba from '@barba/core';

export default function Transition({ targetPage, onComplete }){
    useGSAP(()=>{
      barba.init({  
        transitions: [
            {
                leave(data) {
                    const done = this.async();
                    gsap.to(data.current.container, {
                        y: '-100%', // Gerakan keluar ke atas
                        opacity: 0,
                        duration: 0.5,
                        onComplete: done,
                    });
                },
                enter(data) {
                    const done = this.async();
                    gsap.from(data.next.container, {
                        y: '100%', // Gerakan masuk dari bawah
                        opacity: 0,
                        duration: 0.5,
                        onComplete: done,
                    });
                },
            },
        ],
    });
    }, [])
    return(
        <>
         <div className="fixed inset-0 flex items-center justify-center w-screen h-screen bg-g1 page-transition z-50">
            <h1 className="transition-text text-white text-4xl font-bold">
                {targetPage}
            </h1>
        </div>
        </>
    )
}