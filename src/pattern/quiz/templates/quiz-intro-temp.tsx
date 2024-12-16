import React, { FC } from 'react'
import QuizDetailsHeader from '../molecules/quiz-details-header'
import MathsIntro from '../molecules/maths-intro'
import { CHEMISTRY, CURRENT_AFFAIRS, ENGLISH, MATHEMATICS, PHYSICS } from '@/lib/constants'
import EnglishIntro from '../molecules/english-intro'
import PhysicsIntro from '../molecules/physics-intro'
import ChemistryIntro from '../molecules/chemistry-intro'
import CurrentAffairsIntro from '../molecules/current-affairs-intro'

interface IProps {
    subject: string
    questions: string
}

const QuizIntroTemp: FC<IProps> = ({ subject, questions }) => {
    const renderIntro = () => {
        switch (subject) {
            case MATHEMATICS:
                return <MathsIntro />
            case ENGLISH:
                return <EnglishIntro />
            case PHYSICS:
                return <PhysicsIntro />
            case CHEMISTRY:
                return <ChemistryIntro />
            case CURRENT_AFFAIRS:
                return <CurrentAffairsIntro />
            default:
                return <MathsIntro />
        }
    }
    return (
        <div className='bg-white w-[914px] h-[525px] flex flex-col items-center justify-center gap-y-[34px] p-11'>
            <QuizDetailsHeader subject={subject} questions={questions} />
            {renderIntro()}
        </div>
    )
}

export default QuizIntroTemp