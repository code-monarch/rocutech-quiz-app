import React, { FC } from 'react'
import QuizInstructionsHeaderWidget from '../molecules/quiz-instructions-header-widget'
import { TestInstructions } from '../organisms/instructions'

interface IProps {
    subjects: string
    questions: string
}

const QuizInstructionsTemp: FC<IProps> = ({ subjects, questions }) => {
  return (
      <div className='bg-white w-[914px] min-h-[525px] h-fit flex flex-col items-center justify-start gap-y-[34px] py-14 px-11'>
      <QuizInstructionsHeaderWidget subjects={subjects} questions={questions} />
      <TestInstructions subjects={subjects} questions={questions} />
    </div>
  )
}

export default QuizInstructionsTemp