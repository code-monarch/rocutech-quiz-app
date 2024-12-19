import React, { FC } from 'react'

interface IProps {
  subjects: string
  questions: string
}

const QuizInstructionsHeaderWidget: FC<IProps> = ({ subjects, questions }) => {
  return (
    <div className='min-w-[306px] h-fit flex flex-col items-center gap-y-2'>
      <h4 className='text-foreground text-2xl font-semibold uppercase'>{subjects.split(',').map(subject => subject.trim()).join(', ')} Quiz</h4>
      <p className='text-primary text-sm font-medium'>{questions} Questions</p>
    </div>
  )
}

export default QuizInstructionsHeaderWidget