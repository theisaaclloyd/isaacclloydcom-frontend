// * /about

import Link from "next/link";

export const metadata = {
	title: 'About',
	description: 'isaacclloyd.com',
};

export default function Home() {
	return (
		<main className="flex flex-col fade-in mx-auto max-w-3xl px-20">
			<section className="h-screen" id="about">
				<div className="h-full flex items-left justify-center text-left flex-col">
					<h1 className="text-5xl underline underline-offset-8 text-test3">About me</h1>
					<p className="py-6 Gitan-Regular text-test6">
						My name is Isaac Lloyd, and I am a student of Cybersecurity and Computer Science at Cedarville University. I am currently a freshman, and I am expected to graduate in 2027.
					</p>
					<Link href="/" className="pt-15 Gitan-Regular text-slate-400 hover:text-gray-900 transition underline underline-offset-4">Home</Link>
				</div>
			</section>
		</main>
	);
}
