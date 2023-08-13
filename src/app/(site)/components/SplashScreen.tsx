'use client';

import { useEffect } from 'react';

export default function SplashScreen() {
//   useEffect(() => {
//     const splash = document.getElementById('splash-screen');

//     const handleScroll = () => {
//       if (!splash) return;

//       splash.style.transform = 'translateX(-100%)'; // Slide it to the left

//       // After sliding, remove the splash screen after a short duration to free up resources
//       setTimeout(() => {
//         splash.remove();
//       }, 500); // Assuming 500ms is the duration of your slide animation
//     };

//     window.addEventListener('scroll', handleScroll, { once: true }); // The listener will remove itself after firing once

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  return (
    <div
      className="text-white fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black transition-transform duration-500 ease-in-out"
      id="splash-screen"
    >
      LEVENBETTS
    </div>
  );
}
