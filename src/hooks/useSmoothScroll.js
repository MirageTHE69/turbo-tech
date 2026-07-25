'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useSmoothScroll() {
  useEffect(() => {
    // Add lenis root class to html tag to prevent CSS smooth-scroll conflict
    document.documentElement.classList.add('lenis');

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    const handleResize = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    // Watch for dynamic DOM changes, image/video dimension load, etc.
    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined' && document.body) {
      resizeObserver = new ResizeObserver(() => {
        handleResize();
      });
      resizeObserver.observe(document.body);
    }

    // Additional periodic refreshes to handle media loading (videos/images)
    const t1 = setTimeout(handleResize, 400);
    const t2 = setTimeout(handleResize, 1200);
    const t3 = setTimeout(handleResize, 2500);

    return () => {
      document.documentElement.classList.remove('lenis');
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, []);
}
