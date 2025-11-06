
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import './header.css';

const slides = [
  '/header1.jpg',
  '/header2.jpg',
  '/header3.jpg',
];

export default function Header() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000); // change every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="slider-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={slides[current]}
          src={slides[current]}
          alt={`Slide ${current + 1}`}
          className="slider-image"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{
            type: 'tween',
            duration: 2,
            ease: [1, 1, 0.55, 1],
          }}
        />
      </AnimatePresence>
    </div>
    <main className='header-section'>
        <h1 data-aos="slide-right">Find Your <span>Dream Home</span></h1>
        <h4 data-aos="slide-left"><i>At Schneider Real Estate Dubai, we help you find the perfect property that matches your lifestyle and investment goals.</i></h4>
        <div className='header-contact' data-aos="slide-right">
            <Link href='/https://wa.me/971589865555' className='contact-item'>Contact &#8623;</Link>
        </div>
    </main>
    </>
  );
}
