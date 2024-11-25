import { QuestionProps, State } from "../Estimator";

export interface QSpecial extends State {
	specialFunctionality: boolean;
}

export default function Question2({ updateState }: QuestionProps) {
	return (
		<>
			<h1 className="text-center text-xl font-semibold sm:px-6">Skal du bruge specialfunktioner?</h1>
			<span className="mb-4 font-thin text-center sm:px-16">
				Foreksempel Log-ind (RBAC/AC), Blog, Forum, eller
				noget helt tredje.
			</span>

			<div className="inline-flex gap-4">
				<button
					className="bg-blue-600 text-white px-6 py-3 rounded-xl my-1 text-lg"
					onClick={() => updateState({specialFunctionality: false} as QSpecial)}
				>Nej</button>

				<button
					className="bg-blue-600 text-white px-8 py-3 rounded-xl my-1 text-lg"
					onClick={() => updateState({specialFunctionality: true} as QSpecial)}
				>Ja tak</button>
			</div>
		</>
	)
}