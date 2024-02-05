"use client";
/*import { useCallback } from 'react';

export function ScrollTo({ target, children }) {
  const handleClick = useCallback((event) => {
    event.preventDefault();
    const nextSection = document.getElementById(target);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [target]);

  return (
    <a href={`#${target}`} onClick={handleClick}>
      {children}
    </a>
  );
}*/

import React from 'react';

export function Scroller({ target, offset, className, children }) {
  const handleClick = event => {
    event.preventDefault();
    const element = document.getElementById(target);
    const elementPosition = element ? element.getBoundingClientRect().top + window.scrollY : 0;
    const offsetPosition = elementPosition - offset;

    if (element) {
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a href={`#${target}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}