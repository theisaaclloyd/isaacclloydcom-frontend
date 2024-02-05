// * /

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	title: 'Isaac Lloyd',
	description: 'isaacclloyd.com',
};

export default function Home() {
	return (
		<main className="h-screen flex flex-col fade-in">
			<header className="flex justify-center items-center h-16 text-xl underline underline-offset-4">

				<Link href="/" className="mx-2 hover:text-gray-900 transition">home</Link>

				<Link href="https://www.linkedin.com/in/isaacll/" className="mx-2 hover:text-gray-900 transition">linkedin</Link>

				<Link href="mailto:hello@isaacclloyd.com" className="mx-2 hover:text-gray-900 transition">email</Link>

				{/*<Link href="/isaac_lloyd.pdf" className="mx-2 hover:text-gray-900 transition">resume</Link>*/}

				<Link href="/about" className="mx-2 hover:text-gray-900 transition">about</Link>

				<Link href="/tools" className="mx-2 hover:text-gray-900 transition">tools</Link>
			</header>

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

					<div className="flex flex-col items-center justify-center md:items-start">
						<h1 className="text-4xl md:text-5xl pb-2">Isaac Lloyd</h1>
						<p className="text-xl md:text-xl Gitan-Regular">MS Cyber Operations + Computer Science</p>
						<p className="text-lg md:text-xl pb-2 text-orange-200 italic Gitan-Regular">Cedarville University &apos;27</p>
					</div>

				</div>
			</section>
		</main>
	);
}