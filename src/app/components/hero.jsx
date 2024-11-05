'use client'
import React from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,ScrollTrigger);

export default function Hero(){

    return(
        <section className='h-96'>  
        </section>
    );
};