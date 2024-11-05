'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)

export default function Text2(){
    const Types = document.querySelectorAll('.tx');

    useGSAP(()=>{
        Types.forEach((char, i)=>{
            const text = new SplitType(char,{ types: ' chars' })
            gsap.from(text.chars,{
                scrollTrigger:{
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: true

                }
            })
        })
    })
    return(
        <>
        <section>
            <div className="lg:px-[235px] flex flex-col items-center justify-start gap-9">
                <span className="font-semibold text-2xl text-center">Welcome to Curve</span>
                <h1 className="font-semibold text-5xl text-center tx">We specialize in creating visually appealing posters, modern websites, and captivating video edits.</h1>
            </div>
        </section>
        </>
    );
};