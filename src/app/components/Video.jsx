'use client'
import { useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Text2 from "./text2"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function VideoSection(){
  const sliderRef = useRef(null);
  const sliderVideoRef = useRef(null);
  const text = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainSlider =[
    { title: "AMV", Subtitle:"Anime Edit", Img:"/amv.mp4"},
    { title: "PMV", Subtitle:"Photo Edit", Img:"/pmv2.mp4"},
];

  // animation
  useGSAP(()=>{
    const slider = sliderRef.current;
    const pin = sliderRef.current;
    const out = sliderRef.current;

    // pin 
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: pin,
        start:"-462px 40%",
        end:"+=3000",
        scrub: true,
        pin: true,
        markers:false,
      }
    });

    // out
    tl.to(out,{
      scale: 0,
      y: -900,
      scrollTrigger:{
        start: "2900px 20%",
        end:"3200px top",
        scrub: true,
        markers: false,
      }
    },0);

    // in
    tl.to(slider,{
      scale: 1,
      y: -400,
      scrollTrigger:{
        trigger: slider,
        start:"-462px 40%",
        end:"48px top",
        scrub: true,
        markers:false,

      }
    });

    // slider
    const sliderV = sliderVideoRef.current
    gsap.to(sliderV,{
      xPercent: -90,
      ease: "none",
      scrollTrigger: {
        trigger: sliderV,
        pin: false,
        start: "120px top",
        end: "800px top",
        scrub: true,
        markers: false,
        onUpdate: (self) => {
          const progress = self.progress 
          const slideIndex = Math.floor(progress * (mainSlider.length - 1));
          if (progress > 0.6) {
            setCurrentSlide(slideIndex + 1 < mainSlider.length ? slideIndex + 1 : slideIndex);
          } else {
            setCurrentSlide(slideIndex);
          };
        }
      }
    });
  },[])

  // text
  const currentMainSlider = mainSlider[currentSlide]
  useGSAP(()=>{
    const textAnimation = text.current;
    gsap.from(textAnimation,{
      opacity: 0,
      scale:0,
      y: -142,
    })

  },[currentMainSlider])
  return(
    <>
    <section className='h-[3000px] bg-wh lg:pt-[428px] rounded-md'>
      <Text2/>
      <div className='relative mt-72 flex flex-col items-start h-screen justify-center scale-0' ref={sliderRef}>
        {/* section main */}
        <div ref={text} className='px-4 lg:px-16'>
          <h1  className="font-semibold text-2xl text-wh">{mainSlider[currentSlide].title}</h1>
          <h1 className="font-medium text-base text-wh">{mainSlider[currentSlide].Subtitle}</h1>
        </div>
        <div className='h-screen bottom-0 absolute inset-0 rounded-2xl overflow-hidden z-[-1] flex items-center justify-center'>
          <video className='h-screen w-full object-cover lg:object-none scale-150' src={mainSlider[currentSlide].Img} alt="" muted autoPlay loop playsInline ></video>
        </div>
        
        {/* slider */}
        <section className='absolute w-screen px-4 -translate-y-6 bottom-0'>
          <div ref={sliderVideoRef} className='flex items-center gap-6 justify-center h-fit translate-x-1/2'>
            {mainSlider.map((src, index)=>(
            <div key={index} className='overflow-hidden'>
              <video className='max-w-[191px] overflow-hidden rounded-xl' src={src.Img} alt="" muted paused 
              ref={(videoElement) => {
                if (videoElement) {
                  videoElement.currentTime = 4.5;
                  videoElement.pause();
                }
              }}></video>
            </div>
            ))}
          </div>
        </section>
      </div>
    </section>
    </>
  )
}