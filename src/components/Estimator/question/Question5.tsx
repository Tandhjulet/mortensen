import { QuestionProps, State } from "../Estimator";

interface QPurpose extends State {
	purpose: "Digitalt visitkort" | "Indgå i større projekt";
}

export default function Question5({ updateState }: QuestionProps) {
	return (
		<>
			<h1 className="text-xl font-semibold px-6">Dit prisestimat er:</h1>
			<span className="mb-4 font-thin text-center">
				
			</span>
		</>
	)
}