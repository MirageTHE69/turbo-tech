'use client';

import { useEffect } from 'react';

export default function CursorDot() {
  useEffect(() => {
    // Only on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
    };

    const onEnterLink = () => {
      dot.style.width = '12px';
      dot.style.height = '12px';
      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.borderColor = 'rgba(227,30,36,0.6)';
    };

    const onLeaveLink = () => {
      dot.style.width = '8px';
      dot.style.height = '8px';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(227,30,36,0.35)';
    };

    // Smooth ring follow
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top = ringY + 'px';
      raf = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMove);

    const links = document.querySelectorAll('a, button');
    links.forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMove);
      links.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
      });
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
