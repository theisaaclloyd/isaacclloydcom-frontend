"use client";

import { Scroller } from "./tools/Scroller";
import { useState } from "react";

export function BasicHeader() {
	return (
		<header
			className="fixed top-0 left-0 w-full z-10 flex justify-between items-center py-4 px-6 bg-shade-4 text-black opacity-95 backdrop-blur-xl"
			id="header"
		>
			<nav className="space-x-4 hidden lg:block">
				<Scroller target="home" offset="68" className="hover:underline">Home</Scroller>
				<Scroller target="about" offset="68" className="hover:underline">About</Scroller>
			</nav>

			<h1 className="text-3xl font-light">
				Isaac Lloyd
			</h1>

			<nav className="space-x-4 hidden lg:block">
				<Scroller target="projects" offset="68" className="hover:underline">Projects</Scroller>
				<Scroller target="contact" offset="68" className="hover:underline">Contact</Scroller>
			</nav>
		</header>
	);
}

/**
<button className="lg:hidden right px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
				<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
			</button>
*/

export function SmartHeader() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 w-full z-10 flex justify-between items-center py-4 px-6 bg-gray-300 text-black opacity-95 backdrop-blur-xl" id="header">
			<button onClick={() => setIsOpen(!isOpen)} className="lg:hidden px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
				<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
			</button>
			<nav className={`${isOpen ? 'block' : 'hidden'} lg:flex space-x-4`}>
				<Scroller target="home" offset="68" className="hover:underline">Home</Scroller>
				<Scroller target="about" offset="68" className="hover:underline">About</Scroller>
			</nav>
			<h1 className="text-3xl font-light">Isaac Lloyd</h1>
			<nav className="space-x-4">
				<Scroller target="projects" offset="68" className="hover:underline">Projects</Scroller>
			</nav>
		</header>
	);
}