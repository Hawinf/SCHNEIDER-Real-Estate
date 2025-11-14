"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, {useState, useRef, useEffect} from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Menu from "@/components/menu/Menu";
import Header from "@/components/header/Header";
import Colummenu from "@/components/colummenu/Colummenu";
import About from "@/components/about/About";
import Slider from "@/components/slider/Slider";
import Latest from "@/components/latest/Latest";

import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main>
      <Menu />
      <Header />
      <Colummenu />
      <About />
      <Slider />
      {/* <Latest /> */}
    </main>
  );
}
