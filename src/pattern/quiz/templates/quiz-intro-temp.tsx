import React, { FC } from 'react'
import QuizDetailsHeader from '../molecules/quiz-details-header'
import MathsIntro from '../molecules/maths-intro'
import { CHEMISTRY, CURRENT_AFFAIRS, ENGLISH, MATHEMATICS, PHYSICS } from '@/lib/constants'
import EnglishIntro from '../molecules/english-intro'
import PhysicsIntro from '../molecules/physics-intro'
import ChemistryIntro from '../molecules/chemistry-intro'
import CurrentAffairsIntro from '../molecules/current-affairs-intro'
import MultiSubjectsIntro from '../molecules/multi-subjects-intro'

interface IProps {
    subjects: string
    questions: string
}

const QuizIntroTemp: FC<IProps> = ({ subjects, questions }) => {
    const renderIntro = () => {
        switch (subjects) {
            case MATHEMATICS:
                return <MathsIntro subjects={subjects} questions={questions} />
            case ENGLISH:
                return <EnglishIntro subjects={subjects} questions={questions} />
            case PHYSICS:
                return <PhysicsIntro subjects={subjects} questions={questions} />
            case CHEMISTRY:
                return <ChemistryIntro subjects={subjects} questions={questions} />
            case CURRENT_AFFAIRS:
                return <CurrentAffairsIntro subjects={subjects} questions={questions} />
            default:
                return <MultiSubjectsIntro subjects={subjects} questions={questions} />
        }
    }
    return (
        <div className='bg-white w-[914px] h-[525px] flex flex-col items-center justify-center gap-y-[34px] p-11'>
            <QuizDetailsHeader subjects={subjects} questions={questions} />
            {renderIntro()}
        </div>
    )
}

export default QuizIntroTemp