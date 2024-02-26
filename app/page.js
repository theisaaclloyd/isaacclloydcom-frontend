// * /
import { BasicHeader } from '@/components/Header';
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
			<BasicHeader />

			<section className="h-full flex items-center justify-center" id="home" >
				<div className="flex flex-col md:flex-row w-full md:items-center mx-auto justify-center flex-container" >


					<div className="md:mr-8 mb-4 md:mb-0 flex justify-center image-container">
						<Image
							className="rounded-xl transition-all duration-500 ease-in-out"
							src="/assets/images/isaac.png"
							width={180}
							height={180}
							quality={100}
							priority={true}
							alt="Isaac Lloyd"
						/>
					</div>
					<FadeIn className="flex flex-col items-center text-center md:text-left justify-center md:items-start gap-0">
						<span className="text-4xl md:text-5xl">Isaac Lloyd</span>
						<span className="text-2xl md:text-xl Gitan-Regular">BS Cyber Operations + Computer Science</span>
						<span className="text-xl md:text-xl text-orange-200 italic Gitan-Regular">Cedarville University &apos;27</span>
					</FadeIn>
				</div>
			</section>

		</main>
	);
}