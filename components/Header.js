"use client";

import Link from "next/link";
import { useSpring, animated } from '@react-spring/web';
import React, { useState } from 'react';
import FadeIn from '@/components/tools/FadeIn';


export function Header() {
	// Step 1: Define state for menu toggle
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="flex flex-row justify-between items-center transition h-18">
			{/* Responsive menu icon */}
			<div className="md:hidden p-4">
				<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full">
					{/* Hamburger Icon */}
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</button>
			</div>

			{/* Links - shown/hidden based on menu state and screen size */}
			<div className={`flex-row justify-between pl-20 pt-10 text-xl underline underline-offset-4 hidden md:block`}>
				<Link href="/" className="mx-2 hover:text-gray-900 transition">home</Link>
				<Link href="https://www.linkedin.com/in/isaacll/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-900 transition">linkedin</Link>
				<Link href="https://github.com/theisaaclloyd" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-900 transition">github</Link>
				<Link href="mailto:hello@isaacclloyd.com" target="_blank" className="mx-2 hover:text-gray-900 transition">email</Link>
				<Link href="/portfolio" className="mx-2 hover:text-gray-900 transition">portfolio</Link>
				<Link href="/resume" className="mx-2 hover:text-gray-900 font-bold text-orange-200 no-underline">resume</Link>
			</div>
		</header>
	);
}