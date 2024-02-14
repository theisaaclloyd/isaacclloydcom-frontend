"use client";
import QuineMcCluskey from "./tools/quinemccluskey";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";


import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const TermLabel = ({ value, classes }) => (<div className={`flex items-center justify-center border-2 rounded-sm border-gray-400 font-bold text-red-400 ${classes}`}>{value}</div>);

const TermButton = ({ id, data, handleClick, classes }) => (
	<Button
		className={`w-20 h-20 flex items-center rounded-sm justify-center border-2 font-bold text-red-400 ${data[id].border} ${classes}`}
		onClick={() => handleClick(id)}
	>
		<div className="text-base Gitan-Regular text-platinum absolute pb-14 pr-14">
			{data[id].key}
		</div>
		<div className="text-2xl">
			{data[id].value}
		</div>
	</Button>
);

const KMap = ({ data, handleClick }) => (
	<div className="flex flex-row items-center justify-center min-w-32">
		<div className="grid grid-cols-6 gap-2 text-2xl">
			<TermLabel value={data.variables[0]} classes="h-20 col-start-4 col-span-2" />
			<TermLabel value={data.variables[2]} classes="w-20 col-start-1 row-start-4 row-span-2" />
			<TermLabel value={data.variables[3]} classes="w-20 col-start-6 row-start-3 row-span-2" />
			<TermLabel value={data.variables[1]} classes="h-20 col-start-3 row-start-6 col-span-2" />

			<TermButton id={0} data={data.squares} handleClick={handleClick} classes="col-start-2" />
			<TermButton id={1} data={data.squares} handleClick={handleClick} />
			<TermButton id={2} data={data.squares} handleClick={handleClick} />
			<TermButton id={3} data={data.squares} handleClick={handleClick} />

			<TermButton id={4} data={data.squares} handleClick={handleClick} classes="col-start-2" />
			<TermButton id={5} data={data.squares} handleClick={handleClick} />
			<TermButton id={6} data={data.squares} handleClick={handleClick} />
			<TermButton id={7} data={data.squares} handleClick={handleClick} />

			<TermButton id={8} data={data.squares} handleClick={handleClick} classes="col-start-2" />
			<TermButton id={9} data={data.squares} handleClick={handleClick} />
			<TermButton id={10} data={data.squares} handleClick={handleClick} />
			<TermButton id={11} data={data.squares} handleClick={handleClick} />

			<TermButton id={12} data={data.squares} handleClick={handleClick} classes="col-start-2" />
			<TermButton id={13} data={data.squares} handleClick={handleClick} />
			<TermButton id={14} data={data.squares} handleClick={handleClick} />
			<TermButton id={15} data={data.squares} handleClick={handleClick} />
		</div>
	</div>
);

const simplify = (f) => (f.replace(/NOT ([A-Z])/g, '$1\'').replace(/OR/g, '+').replace(/AND/g, ''));

export default function Board() {
	const { toast } = useToast();

	const mintermOrder = [0, 4, 12, 8, 1, 5, 13, 9, 3, 7, 15, 11, 2, 6, 14, 10];

	const defaultFuncData = {
		name: "f",
		variables: ['A', 'B', 'C', 'D'],
		minterms: [],
		maxterms: [],
		dontcares: [],
		sop: "no solution",
		pos: "no solution",
		update: false,
		squares: Array(16).fill().map((e, i) => ({ key: mintermOrder[i], value: "0", border: "border-gray-400" }))
	};

	const [funcData, setFunctionData] = useState(defaultFuncData);

	function handleClick(i) {
		funcData.squares[i].value = funcData.squares[i].value === "1" ? "X" : funcData.squares[i].value === "X" ? "0" : "1";

		let newMinterms = [];
		let newMaxterms = [];
		let newDontcares = [];

		funcData.squares.forEach((square, index) => {
			if (square.value === '1') {
				newMinterms.push(mintermOrder[index]);

				funcData.squares[index].border = "border-green-400";
			} else if (square.value === 'X') {
				newDontcares.push(mintermOrder[index]);

				funcData.squares[index].border = "border-yellow-400";
			} else if (square.value === '0') {
				newMaxterms.push(mintermOrder[index]);

				funcData.squares[index].border = "border-red-400";
			}
		});

		setFunctionData({ ...funcData, minterms: newMinterms, maxterms: newMaxterms, dontcares: newDontcares });
	}

	function resetBoard() {
		setFunctionData(defaultFuncData);
	}

	function updateKmap() {
		if (!funcData.update) return;

		funcData.squares.forEach((square, index) => {
			if (funcData.minterms.includes(mintermOrder[index])) {
				square.value = "1";
				square.border = "border-green-400";
			} else if (funcData.dontcares.includes(mintermOrder[index])) {
				square.value = "X";
				square.border = "border-yellow-400";
			} else if (funcData.maxterms.includes(mintermOrder[index])) {
				square.value = "0";
				square.border = "border-red-400";
			} else {
				square.value = "0";
				square.border = "border-red-400";
			}
		});

		setFunctionData({ ...funcData, update: false });
	}


	function Calculate() {
		let sop = new QuineMcCluskey(funcData.variables.join(''), funcData.minterms, funcData.dontcares, false);
		let pos = new QuineMcCluskey(funcData.variables.join(''), funcData.maxterms, funcData.dontcares, true);

		let simpleSop = simplify(sop.getFunction().toString());
		let simplePos = simplify(pos.getFunction().toString());
		setFunctionData({ ...funcData, sop: simpleSop, pos: simplePos });
	}

	return (
		<div className="flex mt-4 gap-5 flex-col lg:flex-row mx-auto w-full px-10 items-center justify-center">
			<Card className="rounded-sm w-full px-1 border-none">
				<CardHeader>
					<CardTitle className="flex text-2xl justify-between">
						Karnaugh Map
					</CardTitle>
					<CardDescription>
						<Label>Click on the boxes to change the terms value and press calculate to solve the Kmap</Label>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<KMap data={funcData} handleClick={handleClick} />
				</CardContent>

				<CardFooter className="flex justify-between">
					<Button onClick={() => resetBoard()} className="mt-4 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-700">Reset</Button>

					<Button onClick={() => Calculate()} className="mt-4 bg-green-500 text-white font-bold rounded-lg shadow-lg hover:bg-green-700">Calculate</Button>
				</CardFooter>
			</Card>

			<Card className="rounded-sm w-full px-1 border-none">
				<CardHeader>
					<CardTitle className="flex text-2xl justify-between">
						Output
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-6">
							<div className="flex flex-col space-y-2">
								<div className="text-lg pt-1 font-semibold">Min SOP solution:</div>
								<Input disabled value={funcData.sop} onChange={(e) => setFunctionData({ ...funcData, sop: e.target.value })} />

								<div className="text-lg pt-1 font-semibold">Min POS solution:</div>
								<Input disabled value={funcData.pos} onChange={(e) => setFunctionData({ ...funcData, pos: e.target.value })} />
							</div>

							<div className="flex flex-col space-y-2">
								<div className="text-lg pt-1 font-semibold">Minterm list</div>
								<Input disabled value={`${funcData.name}(${funcData.variables}) = Σm(${funcData.minterms}) + Σd(${funcData.dontcares})`} onChange={(e) => setFunctionData({ ...funcData, update: true, minterms: e.target.value })} />
								<a hidden={!funcData.update} onClick={updateKmap} className="transition">Update</a>
							</div>

							<div className="flex flex-col space-y-2">
								<div className="text-lg pt-1 font-semibold">Maxterm list</div>
								<Input disabled value={`${funcData.name}(${funcData.variables}) = ΠM(${funcData.maxterms}) + ΣD(${funcData.dontcares})`} onChange={(e) => setFunctionData({ ...funcData, update: true, maxterms: e.target.value.split(', ').join(',') })} />
								<a hidden={!funcData.update} onClick={updateKmap} className="transition">Update</a>
							</div>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
