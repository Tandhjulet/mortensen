import { QuestionProps, State } from "../Estimator";

export interface QReadyBy extends State {
	readyBy: "Hurtigst muligt" | "2-4 uger" | "4 uger+";
}

export default function Question4({ updateState }: QuestionProps) {
	return (
		<>
			<h1 className="text-xl font-semibold px-6">Hvornår skal hjemmesiden være klar?</h1>
			<span className="mb-4 font-thin text-center">
				Vælg den mulighed, der bedst passer med din formodning af,<br />
				hvornår hjemmesiden skal være klar til brug.
			</span>

			<div className="grid grid-cols-3 gap-4 px-6">
				<button
					className="bg-blue-600 text-white px-4 py-2 rounded-xl my-1 text-lg"
					onClick={() => updateState({readyBy: "Hurtigst muligt"} as QReadyBy)}
				>Hurtigst muligt</button>

				<button
					className="bg-blue-600 text-white px-4 py-2 rounded-xl my-1 text-lg"
					onClick={() => updateState({readyBy: "2-4 uger"} as QReadyBy)}
				>Om 2-4 uger</button>

				<button
					className="bg-blue-600 text-white px-4 py-2 rounded-xl my-1 text-lg"
					onClick={() => updateState({readyBy: "4 uger+"} as QReadyBy)}
				>Over 4 uger</button>
			</div>
		</>
	)
}