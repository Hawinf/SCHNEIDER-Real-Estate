"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, {useState, useRef, useEffect} from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <main>
      <Menu />
    </main>
  );
}
