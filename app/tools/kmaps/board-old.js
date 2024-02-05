

"use client";
import { useState } from "react";

function Square({ value, onSquareClick }) {
	return (
		<button
			className="w-16 h-16 border-2 float-left border-gray-400 font-bold text-red-400 text-xl flex items-center justify-center m-0.5"
			onClick={onSquareClick}
		>
			{value}
		</button>
	);
}

export default function Board() {
	const [squares, setSquares] = useState(Array(16).fill('0'));

	function handleClick(i) {
		const nextSquares = squares.slice();
		nextSquares[i] = squares[i] === "1" ? "X" : squares[i] === "X" ? "0" : "1";
		setSquares(nextSquares);
	}

	function calculateKMapSolution(squares) {
		const variables = [
			'a\'b\'c\'d\'', 'a\'b\'c\'d', 'a\'b\'cd', 'a\'b\'cd\'', // Row 1
			'a\'bc\'d\'', 'a\'bc\'d', 'a\'bcd', 'a\'bcd\'',         // Row 2
			'abc\'d\'', 'abc\'d', 'abcd', 'abcd\'',                 // Row 3
			'ab\'c\'d\'', 'ab\'c\'d', 'ab\'cd', 'ab\'cd\''          // Row 4
		];

		let groups = [];

		// Check for groups of 1s and Xs (don't care) for possible grouping
		squares.forEach((value, index) => {
			if (value === '1' || value === 'X') {
				groups.push(variables[index]);
			}
		});

		// Placeholder for logic to simplify and combine the groups
		// For now, we'll just join the terms we've found with OR (+)
		return groups.join(' + ') || '0'; // Return '0' if no 1s or Xs found
	}

	const solution = calculateKMapSolution(squares);

	return (
		<>
			<div className="p-1 flex flex-row">
				<div className="grid grid-cols-4 gap-1">
					{squares.map((value, i) => (
						<Square key={i} value={value} onSquareClick={() => handleClick(i)} />
					))}
				</div>
			</div>

			<div className="mt-4">
				<h3 className="text-lg font-semibold mt-0 mb-2">Boolean Algebra Term:</h3>
				<code className="text-lg">{solution}</code>
			</div>
		</>

	);
}