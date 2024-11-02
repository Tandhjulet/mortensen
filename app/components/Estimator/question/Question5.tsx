import { Fragment, useMemo } from "react";
import { QAnswers, QuestionProps, State } from "../Estimator";

const TIME_PRIS = 450;

function format(num: number) {
	return num.toLocaleString("da-DK", {
		style: "currency",
		currency: "DKK"
	})
}

export default function Question5(props: QuestionProps) {
	const state = props.state as QAnswers;

	const [total, summary] = useMemo(() => {
		const summary: string[][] = [];

		let hoursNeeded = 0;

		if(state.needsDesign) {
			const hours = state.pages*2;
			summary.push([`Design af ~${state.pages} sider`, format(hours*TIME_PRIS)]);
			hoursNeeded += hours;
		}
		if(state.specialFunctionality) {
			hoursNeeded += 6.5;
			summary.push([`Ekstra funktionalitet`, format(6.5*TIME_PRIS)]);
		}

		const hours = state.pages*2.5;
		hoursNeeded += hours;
		summary.push([`Omkring ${state.pages} sider`, format(hours*TIME_PRIS)]);

		let price = hoursNeeded * TIME_PRIS;
		const fast = 2-["Hurtigst muligt", "2-4 uger", "4 uger+"].indexOf(state.readyBy);
		price += fast*1250;
		summary.push([state.readyBy, format(fast*1250)])

		return [price, summary]
	}, []);

	return (
		<div className="grid grid-cols-1 max-sm:gap-6 sm:grid-cols-2 mb-5">
			<div>
				<div className="text-start grid grid-cols-[5fr_3fr] w-full">
					{summary.map(([summary, price], i) => (
						<Fragment key={i}>
							<span className="text-sm line-clamp-1">{summary}</span>
							<span className="line-clamp-1 text-blue-700 text-end">+{price}</span>
						</Fragment>
					))}
				</div>
			</div>

			<div className="my-auto text-center">
				<h1 className="px-6 text-lg">Dit prisestimat bliver:</h1>
				<span className="underline underline-offset-[6px] text-3xl mb-4 font-black text-gray-800">
					{total.toLocaleString("da-DK", {
						style: "currency",
						currency: "DKK",
						maximumFractionDigits: 0,
						maximumSignificantDigits: 2,
					}).replace(/\.$/, "")}
				</span>
				<br />
				<span className="mt-1 block text-sm text-gray-700">
					(+ moms)
				</span>
			</div>
		</div>
	)
}