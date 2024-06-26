// * /projects

import Link from "next/link";
import FadeIn from '@/components/tools/FadeIn';
import { BasicHeader } from "@/components/Header";

export const metadata = {
	title: 'Projects',
	description: 'isaacclloyd.com',
};

export default function Home() {
	return (
		<main className="h-screen flex flex-col">
			<BasicHeader />

			<section className="h-full flex items-left justify-center" id="home" >
				<div className="flex flex-row w-full items-center mx-auto justify-center" >
					<div className="mx-20">
						<div className="flex flex-col text-center items-center justify-center gap-3">
							<span className="text-5xl underline underline-offset-8 text-test3">Projects</span>
							<p className="pt-2 Gitan-Regular text-test6">
								Below are some of the projects I&apos;ve built that you might find useful.
							</p>
							<ul className="Gitan-Regular flex flex-col gap-3">
								<li>
									- <Link href="/tools/kmaps" className="text-slate-400 underline underline-offset-4 hover:text-gray-900 transition">Karnaugh Map Solver</Link>
								</li>
								<li>
									<Link href="/" className="text-slate-400 underline underline-offset-4 hover:text-gray-900 transition">Home</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
