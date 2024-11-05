'use client'
import Image from "next/image";
import Hero from "./components/hero";
import Service from "./components/service";
import VideoSection from "./components/Video";
import Link from "next/link";
import Transition from "./components/pagetransition"

export default function Home() {
  return (
    <>
    <section className="z-[1] bg-[#0E090D] pt-24">

      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
      <Link href="/items">plerr</Link>
      <Hero/>
      <VideoSection/>
      <Service/>
    </section>
    </>
  );
}
