'use client';

import { useEffect } from 'react';

/**
 * useScrollReveal — adds `.in-view` class to all `.scroll-reveal` elements
 * within the document using IntersectionObserver.
 * Also activates `.img-clip-reveal` and `.word-inner` items.
 * Call once at the top-level client component.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const selectors = '.scroll-reveal, .img-clip-reveal, .word-inner';
    const elements = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
