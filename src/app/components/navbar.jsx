'use client'
import { useState } from 'react';
import Sidebar from './sidebar'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


export default function Navbar(){

    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  
    useGSAP(()=>{
        if (isSidebarVisible) {
            gsap.to(".sidebar", { y: 0, duration: 0.5, ease: 'power3.out' });
            gsap.to(".lg-title", { color: "#000", duration: 0.5 });
          } else {
            gsap.to(".sidebar", { y: "-100%", duration: 0.5, ease: 'power3.in' });
            gsap.to(".lg-title", { color: "#fff", duration: 0.5 });
          };
    },[isSidebarVisible]);

    // hover
    useGSAP(()=>{
    const links = document.querySelectorAll('.nav-link');

    // Tambahkan efek hover untuk setiap link
    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          y: -10, // Naik ke atas
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set(link, { y: 10 }); // Atur ulang posisi ke bawah
            gsap.to(link, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }); // Muncul dari bawah
          },
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          y: 10, // Turun ke bawah
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            gsap.set(link, { y: -10 }); // Set ulang posisi ke atas
            gsap.to(link, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' }); // Muncul dari atas
          },
        });
      });
    });
    

    // Cleanup efek untuk menghindari memory leaks
    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseenter', () => {});
        link.removeEventListener('mouseleave', () => {});
      });
    };
    });

    return(
        <>
        <section className='mt-4 lg:mt-6 *:px-4 lg:px-16 fixed w-screen z-10'>
            <nav className='flex bg-[#0E090D] rounded-xl py-2 items-center justify-between relative'>
                <div className='flex items-center gap-4'>
                    <img src="/lg.svg" alt=''/>
                    <h1 className='text-wh text-base font-medium lg-title'>Curve</h1>
                </div>

                {/* navlink */}
                <div className='hidden lg:block'>
                    <div className='flex items-center justify-center gap-3'>
                        <a className='font-medium w-16 h-9 flex items-center text-base text-wh nav-link' href="">Home</a>
                        <a className='font-medium w-16 h-9 flex items-center text-base text-wh nav-link' href="">About</a>
                        <a className='font-medium w-16 h-9 flex items-center text-base text-wh nav-link' href="">Service</a>
                        <a className='font-medium w-16 h-9 flex items-center text-base text-wh nav-link' href="">Price</a>
                    </div>
                </div>
                <button className='px-12 py-2.5 hidden lg:block border rounded-lg'><h1 className='font-medium text-sm text-wh w-auto'>what</h1></button>

                {/* btn mobile */}
                <button onClick={() => setIsSidebarVisible(!isSidebarVisible)} className='p-1 lg:hidden bg-g1 rounded-md flex items-center'>
                    <i className='bx bx-menu text-2xl'></i>
                </button>
            </nav>
        </section>
        
        <Sidebar/>
        </>
    );
};