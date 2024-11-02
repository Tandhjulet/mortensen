import { QuestionProps, State } from "../Estimator";

export interface QDesign extends State {
	needsDesign: boolean;
}

export default function Question3({ updateState }: QuestionProps) {
	return (
		<>
			<h1 className="text-center text-xl font-semibold sm:px-6">Ønsker du hjælp til at designe logo eller hjemmeside?</h1>
			<span className="mb-4 font-thin text-center sm:px-16">
				Hvis du ikke har et design klar på forhånd, vil vi
				gerne hjælpe dig med at lave et.
			</span>

			<button
				className="bg-blue-600 text-white px-6 py-3 rounded-xl my-1 text-lg"
				onClick={() => updateState({needsDesign: false} as QDesign)}
			>Nej tak</button>

			<button
				className="bg-blue-600 text-white px-8 py-3 rounded-xl my-1 text-lg"
				onClick={() => updateState({needsDesign: true} as QDesign)}
			>Ja</button>
		</>
	)
}