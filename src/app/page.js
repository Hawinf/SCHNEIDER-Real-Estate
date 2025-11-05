"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, {useState, useRef, useEffect} from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Menu from "@/components/menu/Menu";
import Header from "@/components/header/Header";
import Slider from "@/components/slider/Slider";

export default function Home() {
  return (
    <main>
      <Menu />
      <Header />
      <Slider />
    </main>
  );
}
