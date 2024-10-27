import { QuestionProps, State } from "../Estimator";

interface QPages extends State {
	pages: "1-5" | "6-15" | "16-50" | "50+";
}

export default function Question1({ updateState }: QuestionProps) {
	return (
		<>
			<h1 className="text-xl font-semibold px-6">Hvor mange undersider skal din hjemmeside bruge?</h1>
			<span className="mb-4 font-thin text-center">
				Det kunne eksempelvis være "Om os", "Vores identitet", <br />
				"Login", og så videre...
			</span>

			<div className="grid grid-cols-4 gap-4">
				<button
					className="bg-blue-600 text-white px-4 py-2 rounded-xl my-1 text-lg"
					onClick={() => updateState({pages: "1-5"} as QPages)}
				>1-5</button>

				<button
					className="bg-blue-600 text-white px-4 py-2 rounded-xl my-1 text-lg"
					onClick={() => updateState({pages: "6-15"} as QPages)}
				>6-15</button>

				<button
					className="bg-blue-600 text-white px-4 py-2 rounded-xl my-1 text-lg"
					onClick={() => updateState({pages: "16-50"} as QPages)}
				>16-50</button>

				<button
					className="bg-blue-600 text-white px-4 py-2 rounded-xl my-1 text-lg"
					onClick={() => updateState({pages: "50+"} as QPages)}
				>50+</button>
			</div>
		</>
	)
}