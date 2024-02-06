// * /tools/kmaps

import Board from "./board";

export const metadata = {
	title: 'Karnaugh Map Solver',
	description: 'isaacclloyd.com',
};

export default function Home() {
	return (
		<>
			<header className="flex Gitan-Regular justify-center items-center h-20 text-4xl underline underline-offset-4">
				<h1>Karnaugh Map Solver</h1>
			</header>

			<main className="h-screen Gitan-Regular w-full fade-in mx-auto pt-10">
				<Board />
			</main>

			{/*<footer className="flex Gitan-Regular justify-center items-center h-32 text-base">
				<p>© 2024 Isaac Lloyd</p>
	</footer>*/}
		</>
	);
}
