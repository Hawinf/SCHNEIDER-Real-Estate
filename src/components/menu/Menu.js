"use client";
import React, {useState, useRef, useEffect} from "react";
import Link from "next/link";
import "./menu.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

import AOS from "aos";
  import "aos/dist/aos.css";

const menuLinks = [
    { path: "/", label: "Home"},
    { path: "about", label: "About"},
    { path: "contact", label: "Contact"},
    { path: "properties", label: "Properties"},
];

const Menu = () => {
    const container = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tl = useRef();

    useGSAP(() => {
        gsap.set(".menu-link-item-holder", {y: 75});
        tl.current = gsap.timeline({ paused: true })
        .to(".menu-overlay", {
            duration: 1.25,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.inOut",
            delay: -0.75,
        })
    }, 
    {scope: container}
);

useEffect(() => {
    if (isMenuOpen) {
        tl.current.play()
    } else {
        tl.current.reverse();
    }
}, [isMenuOpen]);





    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <main className="menu-container" ref={container}>
            <nav className="menu-bar">
                <main className="menu-logo" data-aos="slide-right">
                    <h4 href="/"><i>SCHNEIDER&reg;</i></h4>
                </main>
                <main className="menu-open" onClick={toggleMenu} data-aos="slide-left">
                <Image 
                    src="/burger-menu.png"
                    alt="Menu SCHNEIDER"
                    width={30}       
                    height={30}     
                />
                </main>
            </nav>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    {/* <div className="menu-logo">
                        <Link href="/">SCHNEIDER</Link>
                    </div> */}
                    {/* <div className="menu-close" onClick={toggleMenu}>
                        <p>Close</p>
                    <8602	/div> */}
                </div>
                {/* <div className="menu-close-icon">
                    <p>&#x2715;</p>
                </div> */}
                <div className="menu-copy">
                    <div className="menu-links">
                    <div className="menu-close" onClick={toggleMenu}>
                        <p>Close   &#8690;</p>
                    </div>
                        {menuLinks.map((link, index) => (
                            <div className="menu-link-item" key={index}>
                                <div className="menu-link-item-holder" onClick={toggleMenu}>
                                    <Link href={link.path} className="menu-link">
                                    {link.label}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-info">
                        <div className="menu-info-col">
                            <h4><i>SCHNEIDER REAL-ESTATE</i></h4>
                        </div>
                        
                    </div>
                </div>
                {/* <div className="menu-preview">
                    <p>FIND OUT SCHNEIDER</p>
                </div> */}
            </div>
        </main>
    );
};

export default Menu;