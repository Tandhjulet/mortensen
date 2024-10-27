import { QuestionProps, State } from "../Estimator";

interface QPurpose extends State {
	purpose: "Digitalt visitkort" | "Indgå i større projekt";
}

export default function Question0({ updateState }: QuestionProps) {
	return (
		<>
			<h1 className="text-xl font-semibold">Hvad er formålet med hjemmesiden?</h1>
			<span className="mb-4 font-thin">Vælg det, som bedst beskriver produktets endemål.</span>

			<button
				className="bg-blue-600 text-white px-4 py-2 rounded-xl my-1 text-lg"
				onClick={() => updateState({purpose: "Digitalt visitkort"} as QPurpose)}
			>Digitalt visitkort</button>

			<button
				className="bg-blue-600 text-white px-4 py-2 rounded-xl my-1 text-lg"
				onClick={() => updateState({purpose: "Digitalt visitkort"} as QPurpose)}
			>Indgår i et større projekt</button>
		</>
	)
}