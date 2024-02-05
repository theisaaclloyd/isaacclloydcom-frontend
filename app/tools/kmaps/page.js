// * /tools/kmaps

import Link from "next/link";
import Board from "./board";

export const metadata = {
	title: 'Karnaugh Map Solver',
	description: 'isaacclloyd.com',
};

export default function Home() {
	return (
		<main className="h-screen flex fade-in mx-auto items-center text-center justify-center max-w-3xl">
			<div className="pt-10">
				<Board />
			</div>
		</main>
	);
}
