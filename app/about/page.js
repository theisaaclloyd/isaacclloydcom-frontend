// * /about

import Link from "next/link";
import FadeIn from '@/components/tools/FadeIn';
import { BasicHeader } from "@/components/Header";

export const metadata = {
	title: 'About',
	description: 'isaacclloyd.com',
};

export default function Home() {
	return (
		<main className="h-screen flex flex-col">
			<BasicHeader />

			<section className="h-full flex items-left justify-center" id="home" >
				<div className="flex flex-col md:flex-row w-full md:items-center mx-auto justify-center" >

					<div className="mx-20">
						<FadeIn className="flex flex-col text-center items-center justify-center md:items-start gap-2">
							<span className="text-5xl underline underline-offset-8 text-test3">About me</span>
							<p className="Gitan-Regular text-test6">
								My name is Isaac Lloyd, and I am a student of Cybersecurity and Computer Science at Cedarville University. I am currently a freshman, and I am expected to graduate in 2027.
								This site serves as my personal portfolio and a place to showcase my work. I have developed this site using Next.js, a React framework, together with Tailwind CSS, a utility-first CSS framework.
								You can find more of my projects on my GitHub page at <Link href="https://github.com/theisaaclloyd" target="_blank" className="text-slate-400 hover:text-gray-900 transition underline underline-offset-4">github.com/isaacclloyd</Link>.
							</p>
						</FadeIn>
					</div>
				</div>
			</section>
		</main>
	);
}
