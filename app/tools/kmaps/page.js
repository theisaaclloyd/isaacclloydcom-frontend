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

			<main className="Gitan-Regular w-full fade-in mx-auto pt-10">
				<Board />

				<footer className="text-center py-10">
					<p>NodeJS implementation of Quine-McCluskey Algorithm by <a className="italic underline hover:text-slate-600 transition" href="https://github.com/fh-logician/QM.js">fh-logician</a></p>
				</footer>
			</main>
		</>
	);
}
