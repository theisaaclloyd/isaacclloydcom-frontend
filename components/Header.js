"use client";

import Link from "next/link";
import { useSpring, animated } from '@react-spring/web';
import React, { useState } from 'react';
import FadeIn from '@/components/tools/FadeIn';

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const fadeStyles = useSpring({
		opacity: isMenuOpen ? 1 : 0,
		config: { duration: 300, }
	});


	return (
		<header className="flex flex-row justify-between items-center transition">
			<div className={`flex-row justify-between pl-20 pt-10 text-xl underline underline-offset-4 hidden ${!isMenuOpen && "md:flex"}`}>
				<Link href="/" className="mx-2 hover:text-gray-900 transition">home</Link>
				<Link href="https://www.linkedin.com/in/isaacll/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-900 transition">linkedin</Link>
				<Link href="https://github.com/theisaaclloyd" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-900 transition">github</Link>
				<Link href="mailto:hello@isaacclloyd.com" target="_blank" className="mx-2 hover:text-gray-900 transition">email</Link>
				<Link href="/portfolio" className="mx-2 hover:text-gray-900 transition">portfolio</Link>
				<Link href="/resume" className="mx-2 hover:text-gray-900 font-bold text-orange-200 no-underline">resume</Link>
			</div>

			<animated.div style={fadeStyles} className={`fixed inset-0 bg-charleston z-40 flex flex-col justify-center items-center pointer-events-${isMenuOpen ? "auto" : "none"}`}>
				{isMenuOpen && (
					<FadeIn className="text-2xl underline underline-offset-4">
						<Link href="/" className="mx-2 hover:text-gray-900 transition">home</Link>
						<Link href="https://www.linkedin.com/in/isaacll/" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-900 transition">linkedin</Link>
						<Link href="https://github.com/theisaaclloyd" target="_blank" rel="noopener noreferrer" className="mx-2 hover:text-gray-900 transition">github</Link>
						<Link href="mailto:hello@isaacclloyd.com" target="_blank" className="mx-2 hover:text-gray-900 transition">email</Link>
						<Link href="/portfolio" className="mx-2 hover:text-gray-900 transition">portfolio</Link>
						<Link href="/resume" className="mx-2 hover:text-gray-900 font-bold text-orange-200 no-underline">resume</Link>
					</FadeIn>
				)}
			</animated.div>

			<button className={`${!isMenuOpen && "md:hidden"} p-4 z-50`} onClick={toggleMenu}>
				<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
				</svg>
			</button>
		</header>
	);
}