// * /tools

import Link from "next/link";

export const metadata = {
	title: 'Tools',
	description: 'isaacclloyd.com',
};

export default function Home() {
	return (
		<main className="flex flex-col fade-in mx-auto max-w-3xl px-20">
			<section className="h-screen" id="about">
				<div className="h-full flex items-left justify-center text-left flex-col">
					<h1 className="text-5xl underline underline-offset-8 text-test3">Tools</h1>
					<p className="pt-6 Gitan-Regular text-test6">
						Here are some of the projects I&apos;ve created that you might find useful.
					</p>
					<ul className="py-6 Gitan-Regular text-slate-400 underline underline-offset-4">
						<li>
							<Link href="/tools/kmaps" className="hover:text-gray-900 transition">Karnaugh Map Solver</Link>
						</li>
						<li>
							<Link href="/" className="hover:text-gray-900 transition">Home</Link>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
