// 'use client'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'

// const images = ['/header1.jpg', '/header2.jpg', '/header3.jpg']

// export default function Header() {
//   const [index, setIndex] = useState(0)

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length)
//     }, 4000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           className="absolute top-0 left-0 w-full h-full"
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -100 }}
//           transition={{
//             type: 'tween',
//             duration: 1.8,
//             ease: [0.45, 0, 0.55, 1], // smooth cinematic curve
//           }}
//         >
//           <Image
//             src={images[index]}
//             alt="slider image"
//             fill
//             className="object-cover"
//             priority
//           />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   )
// }


// 'use client'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'

// const images = ['/header1.jpg', '/header2.jpg', '/header3.jpg']

// export default function Header() {
//   const [index, setIndex] = useState(0)

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="relative w-full h-[600px] overflow-hidden">
//       <AnimatePresence>
//         <motion.div
//           key={index}
//           className="absolute top-0 left-0 w-full h-full"
//           initial={{ opacity: 0, scale: 1.02 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.98 }}
//           transition={{
//             duration: 1.8,
//             ease: [0.45, 0, 0.55, 1],
//           }}
//         >
//           <Image
//             src={images[index]}
//             alt="slider"
//             fill
//             className="object-cover"
//             priority
//           />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   )
// }


// 'use client'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'
// import './header.css';

// const images = ['/header1.jpg', '/header2.jpg', '/header3.jpg']

// export default function Header() {
//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="relative w-full h-[600px] overflow-hidden smooth-slider">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           className="absolute inset-0"
//           initial={{ opacity: 0, scale: 1.03 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.97 }}
//           transition={{
//             duration: 1.8,
//             ease: [0.45, 0, 0.55, 1],
//           }}
//         >
//           <Image
//             src={images[index]}
//             alt="slider"
//             fill
//             priority
//             className="object-cover smooth-image"
//           />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   )
// }


'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './header.css';

const slides = [
  '/header1.jpg',
  '/header2.jpg',
  '/header3.jpg',
  '/header4.jpg',
  '/header3.jpg',
];

export default function Header() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
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
            duration: 1.8,
            ease: [0.45, 0, 0.55, 1],
          }}
        />
      </AnimatePresence>
    </div>
  );
}
