"use client";

import React, { useCallback, useMemo, useState } from "react";
import Question0, { QPurpose } from "./question/Question0";
import Question1, { QPages } from "./question/Question1";
import { IconBaseProps } from "react-icons";
import { IoArrowUndo, IoCode, IoPencilOutline, IoTimerOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { BsLightbulb } from "react-icons/bs";
import { MdAutoMode, MdOutlineDraw, MdOutlineNewspaper } from "react-icons/md";
import Question2, { QSpecial } from "./question/Question2";
import Question3, { QDesign } from "./question/Question3";
import Question4, { QReadyBy } from "./question/Question4";
import Question5 from "./question/Question5";

export type QAnswers = QPurpose & QPages & QSpecial & QDesign & QReadyBy;

export interface QuestionProps {
	updateState: (toInsert: State) => void;
	state: State;
}

interface Question {
	page: React.FC<QuestionProps>,
	Icon: React.FC<IconBaseProps>,
}

const questions: Question[] = [{
	page: Question0, // Hvad er formålet med hjemmesiden?
	Icon: MdAutoMode,
}, {
	page: Question1, // Hvor mange undersider skal du bruge?
	Icon: MdOutlineNewspaper,
}, {
	page: Question2, // Skal du bruge specialfunktioner?
	Icon: BsLightbulb,
}, {
	page: Question3, // Ønsker du hjælp til at designe logo eller hjemmeside?
	Icon: MdOutlineDraw,
}, {
	page: Question4, // Hvornår skal hjemmesiden være klar?
	Icon: IoTimerOutline,
}, {
	page: Question5, // Fremvisning af prisestimat
	Icon: FaDollarSign,
}]

export interface State {
}

export default function Estimator() {
	const [question, setQuestion] = useState<number>(0);
	const [state, setState] = useState<State>({});

	const CurrentQuestion = useMemo(() => {
		return questions[question].page;
	}, [question])

	const updateState = useCallback((toInsert: State) => {
		setState((prevState) => {
			return {
				...prevState,
				...toInsert,
			}
		});

		setQuestion(prev => prev+1);
	}, []);

	return (
		<div className="mt-6 h-auto sm:h-60">
			<div className="flex flex-row mx-auto w-screen max-w-[430px] px-4">
				{questions.map(({ Icon }, i) => {
					const hasCompleted = i <= question;

					return (
						<div key={i} className={`inline-flex items-center ${i !== 0 && "basis-0 grow"}`}>
							{i !== 0 && <div className={`w-full h-[5px] ${hasCompleted ? "bg-blue-600" : "bg-gray-300"}`} />}

							<div className={`p-1 rounded-full ${hasCompleted ? "border-blue-600" : "border-gray-300"} border-2`}>
								<Icon className={`size-[1.1rem] ${hasCompleted ? "text-blue-600" : "text-gray-800"}`} />
							</div>
						</div>
					)
				})}
			</div>
			
			<div className="flex flex-col items-center border pt-10 pb-14 mt-4 rounded-lg mx-4 p-4 md:mx-0 md:w-screen max-w-[675px] relative">
				<CurrentQuestion state={state} updateState={updateState} />

				{question > 0 && (
					<button
						onClick={() => setQuestion(prev => prev-1)}
						className="hover:bg-gray-200 bg-gray-100 absolute inline-flex gap-2 items-center px-3 py-1 rounded-xl bottom-2 left-2"
					>
						<IoArrowUndo className="text-gray-800" />
						<span className="text-gray-900">Tilbage</span>
					</button>
				)}
			</div>
		</div>
	)
}