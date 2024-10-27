"use client";

import React, { useCallback, useMemo, useState } from "react";
import Question0 from "./question/Question0";
import Question1 from "./question/Question1";
import { IconBaseProps } from "react-icons";
import { IoCode, IoPencilOutline, IoTimerOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { BsLightbulb } from "react-icons/bs";
import { MdAutoMode, MdOutlineDraw, MdOutlineNewspaper } from "react-icons/md";
import Question2 from "./question/Question2";
import Question3 from "./question/Question3";
import Question4 from "./question/Question4";
import Question5 from "./question/Question5";

export interface QuestionProps {
	updateState: (toInsert: State) => void;
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
	page: Question3, // Ønsker du hjælp til at designe logo og hjemmeside?
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
	const [state, setState] = useState<State>();

	const CurrentQuestion = useMemo(() => {
		return questions[question].page;
	}, [question])

	const updateState = useCallback((toInsert: State) => {
		setState({
			...state,
			...toInsert,
		});

		setQuestion(prev => prev+1);
	}, []);

	return (
		<div className="mt-6 h-52">
			<div className="flex flex-row mx-auto w-fit">
				{questions.map(({ Icon }, i) => {
					const hasCompleted = i <= question;

					return (
						<div key={i} className="inline-flex items-center">
							{i !== 0 && <div className={`w-12 h-[5px] ${hasCompleted ? "bg-blue-600" : "bg-gray-300"}`} />}

							<div className={`p-1 rounded-full ${hasCompleted ? "border-blue-600" : "border-gray-300"} border-2`}>
								<Icon className={`size-[1.1rem] ${hasCompleted ? "text-blue-600" : "text-gray-800"}`} />
							</div>
						</div>
					)
				})}
			</div>
			
			<div className="flex flex-col items-center border py-10 mt-4 rounded-lg w-screen max-w-[675px]">
				<CurrentQuestion updateState={updateState} />
			</div>
		</div>
	)
}