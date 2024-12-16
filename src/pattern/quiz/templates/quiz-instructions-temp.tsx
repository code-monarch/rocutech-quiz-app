import React, { FC } from 'react'
import QuizInstructionsHeaderWidget from '../molecules/quiz-instructions-header-widget'
import TestInstructions from '../organisms/instructions'

interface IProps {
    subject: string
    questions: string
}

const QuizInstructionsTemp: FC<IProps> = ({ subject, questions }) => {
  return (
      <div className='bg-white w-[914px] min-h-[525px] h-fit flex flex-col items-center justify-start gap-y-[34px] py-14 px-11'>
      <QuizInstructionsHeaderWidget subject={subject} questions={questions} />
      <TestInstructions />
    </div>
  )
}

export default QuizInstructionsTemp