import Image from 'next/image';

import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { BasicHeader } from '@/components/Header';

import { Scroller } from '@/components/tools/Scroller';

export const metadata = {
	title: 'Isaac Lloyd',
	description: 'isaacclloyd.com',
};

export default function Home() {
	return (
		<>
			<div key="1" className="flex flex-col">
				{/*<BasicHeader />*/}

				<main className="flex-1">

					{/* Cover */}
					<section
						className="h-screen bg-center bg-cover bg-shade-1"
						id="home"
					>
						<div
							className="h-full flex items-center justify-center text-left"
						>
							<div className="flex items-center">
								<Image
									className="rounded-xl mr-8"
									src="/assets/images/isaac.png"
									width={160}
									height={160}
									quality={100}
									priority={true}
									alt="Isaac Lloyd"
								/>

								<div className="flex-col">
									<h1 className="text-5xl text-gray-100 Quasimoda-Regular">Isaac Lloyd</h1>
									<p className="text-xl text-gray-100 py-2 Gitan-Regular">Student of Cybersecurity & Computer Science</p>
									<p className="text-2xl text-orange-200 py-1 Gitan-Regular">Cedarville University &apos;27</p>
								</div>
							</div>
						</div>

						<div className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce">
							<Scroller target="about" offset="68">
								<svg
									className="w-10 h-10 text-slate-400"
									fill="currentColor"
									stroke="currentColor"
									viewBox="0 0 16 16"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
									/>
								</svg>
							</Scroller>
						</div>
					</section>

					{/* About section */}
					<section className="py-12 px-6 bg-slate-700" id="about">
						<div className="max-w-3xl mx-auto space-y-8">
							<h2 className="text-3xl font-bold text-center">About Me</h2>
							<p className="text-gray-200 text-center">{`Text about myself`}</p>
							<h3 className="text-2xl font-bold text-center">Skills</h3>
							<ul className="flex flex-wrap justify-center gap-2">
								<li className="px-3 py-1 bg-slate-500 rounded-full">Skill 1</li>
								<li className="px-3 py-1 bg-slate-500 rounded-full">Skill 2</li>
								<li className="px-3 py-1 bg-slate-500 rounded-full">Skill 3</li>
							</ul>
						</div>
					</section>

					{/*<section className="py-12 px-6 bg-slate-800" id="projects">
					<h2 className="text-3xl font-bold text-center">Projects</h2>
					<div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<Card>
							<img
								alt="Project 1"
								className="w-full h-48 object-cover"
								height="200"
								src="/placeholder.svg"
								style={{
									aspectRatio: "200/200",
									objectFit: "cover",
								}}
								width="200" />
							<CardHeader>
								<CardTitle>Project 1</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-200">Description of Project 1</p>
							</CardContent>
						</Card>
						<Card>
							<img
								alt="Project 2"
								className="w-full h-48 object-cover"
								height="200"
								src="/placeholder.svg"
								style={{
									aspectRatio: "200/200",
									objectFit: "cover",
								}}
								width="200" />
							<CardHeader>
								<CardTitle>Project 2</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-200">Description of Project 2</p>
							</CardContent>
						</Card>
						<Card>
							<img
								alt="Project 3"
								className="w-full h-48 object-cover"
								height="200"
								src="/placeholder.svg"
								style={{
									aspectRatio: "200/200",
									objectFit: "cover",
								}}
								width="200" />
							<CardHeader>
								<CardTitle>Project 3</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-200">Description of Project 3</p>
							</CardContent>
						</Card>
					</div>
				</section>*/}
					<section className="py-12 px-6 bg-slate-700" id="contact">
						<div className="max-w-md mx-auto space-y-8">
							<h2 className="text-3xl font-bold text-center">Contact Me</h2>
							<form className="space-y-6">
								<div className="space-y-1">
									<Label htmlFor="name">Name</Label>
									<Input id="name" required />
								</div>
								<div className="space-y-1">
									<Label htmlFor="email">Email</Label>
									<Input id="email" required type="email" />
								</div>
								<div className="space-y-1">
									<Label htmlFor="message">Message</Label>
									<Textarea id="message" required />
								</div>
								<div className="text-center">
									<Button type="submit">Send Message</Button>
								</div>
							</form>
						</div>
					</section>
				</main>
				<footer className="py-4 px-6 text-center text-sm text-gray-200 bg-slate-900">
					© Isaac Lloyd. All rights reserved.
				</footer>
			</div>
		</>
	);
}
