"use client";
import { set } from "date-fns";
import { useState } from "react";


function Label({ value, classes }) {
	//<div className="h-10 border-l-2 border-r-2 font-bold col-start-4 col-span-2 text-red-400 text-2xl lg:m-2 md:m-1 sm:m-0 border-gray-400">A</div>

	return (
		<div
			className={`flex items-center justify-center border-2 border-gray-400 font-bold text-red-400 ${classes}`}
		>
			{value}
		</div>
	);
}

function Button({ id, data, handleClick, classes }) {

	//w-16 h-16 border-2 font-bold text-red-400 text-2xl items-center text-center justify-center lg:m-2 md:m-1 sm:m-0
	return (
		<button
			className={`w-16 h-16 flex items-center justify-center border-2 font-bold text-red-400 ${data[id].border} ${classes}`}
			onClick={() => handleClick(id)}
		>
			{data[id].value}
		</button>
	);
}


export default function Board() {
	const mintermOrder = [0, 4, 12, 8, 1, 5, 13, 9, 3, 7, 15, 11, 2, 6, 14, 10];

	const [squares, setSquares] = useState(
		Array(16).fill().map((e, i) => ({ key: mintermOrder[i], value: "0", border: "border-gray-400" }))
	);

	const [terms, setTerms] = useState({ minterms: [], maxterms: [], dontcares: [] });
	const [solution, setSolution] = useState("no solution");

	function handleClick(i) {
		squares[i].value = squares[i].value === "1" ? "X" : squares[i].value === "X" ? "0" : "1";

		setTerms({ minterms: [], maxterms: [], dontcares: [] });

		let newMinterms = [];
		let newMaxterms = [];
		let newDontcares = [];

		squares.forEach((square, index) => {
			if (square.value === '1') {
				newMinterms.push(mintermOrder[index]);

				squares[index].border = "border-green-400";
			} else if (square.value === 'X') {
				newDontcares.push(mintermOrder[index]);

				squares[index].border = "border-yellow-400";
			} else if (square.value === '0') {
				newMaxterms.push(mintermOrder[index]);

				squares[index].border = "border-red-400";
			}
		});

		setTerms({ minterms: newMinterms, maxterms: newMaxterms, dontcares: newDontcares });

		console.log(`Terms: ${JSON.stringify(terms)}`);
	}

	function resetBoard() {
		setSquares(Array(16).fill().map((e, i) => ({ key: mintermOrder[i], value: "0", boarder: "border-gray-400" })));
		setTerms({ minterms: [], maxterms: [], dontcares: [] });
		setSolution("no solution");
	}

	return (
		<>
			<div className="flex flex-row items-center justify-center">
				<div className="grid grid-cols-6 gap-2 text-2xl">
					<Label value="A" classes="h-16 col-start-4 col-span-2" />
					<Label value="C" classes="w-16 col-start-1 row-start-4 row-span-2" />
					<Label value="D" classes="w-16 col-start-6 row-start-3 row-span-2" />
					<Label value="B" classes="h-16 col-start-3 row-start-6 col-span-2" />

					<Button id={0} data={squares} handleClick={handleClick} classes="col-start-2" />
					<Button id={1} data={squares} handleClick={handleClick} />
					<Button id={2} data={squares} handleClick={handleClick} />
					<Button id={3} data={squares} handleClick={handleClick} />

					<Button id={4} data={squares} handleClick={handleClick} classes="col-start-2" />
					<Button id={5} data={squares} handleClick={handleClick} />
					<Button id={6} data={squares} handleClick={handleClick} />
					<Button id={7} data={squares} handleClick={handleClick} />

					<Button id={8} data={squares} handleClick={handleClick} classes="col-start-2" />
					<Button id={9} data={squares} handleClick={handleClick} />
					<Button id={10} data={squares} handleClick={handleClick} />
					<Button id={11} data={squares} handleClick={handleClick} />

					<Button id={12} data={squares} handleClick={handleClick} classes="col-start-2" />
					<Button id={13} data={squares} handleClick={handleClick} />
					<Button id={14} data={squares} handleClick={handleClick} />
					<Button id={15} data={squares} handleClick={handleClick} />
				</div>
			</div>

			<div className="mt-4">
				<div className="text-lg font-semibold">Boolean Algebra Term:</div>
				<div className="text-lg mb-2 p-2 border-2 border-gray-400 rounded-lg">{solution}</div>

				<div className="grid grid-cols-3 gap-4">
					<div>
						<div className="text-lg font-semibold">Minterm equation:</div>
						<div className="p-2 border-2 border-gray-400 rounded-lg">f = &Sigma;m({terms.minterms.sort((a, b) => a - b).join(', ')})</div>
					</div>
					<div>
						<div className="text-lg font-semibold">Maxterm equation:</div>
						<div className="p-2 border-2 border-gray-400 rounded-lg">f=&Pi;M({terms.maxterms.sort((a, b) => a - b).join(', ')})</div>
					</div>
					<div>
						<div className="text-lg font-semibold">Don&apos;t-cares:</div>
						<div className="p-2 border-2 border-gray-400 rounded-lg">+ &Sigma;d({terms.dontcares.sort((a, b) => a - b).join(', ')})</div>
					</div>
				</div>
			</div>

			<button
				className="mt-4 py-2 px-4 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-700"
				onClick={() => resetBoard()}
			>
				Clear
			</button>
		</>

	);
}