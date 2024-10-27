import { QuestionProps, State } from "../Estimator";

interface QDesign extends State {
	needsDesign: boolean;
}

export default function Question3({ updateState }: QuestionProps) {
	return (
		<>
			<h1 className="text-xl font-semibold px-6">Ønsker du hjælp til at designe logo og hjemmeside?</h1>
			<span className="mb-4 font-thin text-center">
				Hvis du ikke har et design klar på forhånd, vil vi<br />gerne hjælpe dig med at lave et.
			</span>

			<div className="inline-flex gap-4">
				<button
					className="bg-blue-600 text-white px-6 py-3 rounded-xl my-1 text-lg"
					onClick={() => updateState({needsDesign: false} as QDesign)}
				>Nej</button>

				<button
					className="bg-blue-600 text-white px-8 py-3 rounded-xl my-1 text-lg"
					onClick={() => updateState({needsDesign: true} as QDesign)}
				>Ja tak</button>
			</div>
		</>
	)
}