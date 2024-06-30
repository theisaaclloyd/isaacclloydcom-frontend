// * /
import { Header } from '@/components/Header';
import FadeIn from '@/components/tools/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: 'Isaac Lloyd',
	description: 'isaacclloyd.com',
};

export default function Home() {
	return (
		<main className="h-screen flex flex-col">
			<Header/>

			<section className="flex h-full flex-col md:flex-row md:pl-20 m-5 md:m-0 md:mr-10 items-center justify-center md:justify-normal flex-container" id="home" >
				<div className="flex justify-center image-container">
						<Image
							className="rounded-xl transition-all duration-500 ease-in-out fade-in"
							src="/assets/images/isaac.png"
							width={180}
							height={180}
							quality={100}
							priority={true}
							alt="Isaac Lloyd"
						/>
					</div>
					<FadeIn className="flex pt-5 md:pl-8 flex-col text-center md:text-left justify-center items-start gap-0">
						<div className="text-5xl">Isaac Lloyd</div>
						<div className="text-xl Gitan-Regular">BS Cyber Operations & BS Computer Science</div>
						<div className="text-xl text-orange-200 italic Gitan-Regular">Cedarville University &apos;27</div>
					</FadeIn>
			</section>


			<footer className="w-full bg-gray-800 py-4 px-20">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<p className="text-lg">© 2024 Isaac Lloyd</p>
				</div>
			</footer>

		</main>
	);
}