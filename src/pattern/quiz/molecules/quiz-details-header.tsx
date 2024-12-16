import React, { FC } from 'react'

interface IProps {
    subject: string
    questions: string
}

const QuizDetailsHeader: FC<IProps> = ({ subject, questions }) => {
    return (
        <div className='min-w-[306px] h-fit flex flex-col items-center gap-y-[10px] p-[10px] border-b-2 border-primary'>
            <h4 className='text-foreground text-2xl font-semibold uppercase'>{subject} Quiz</h4>
            <p className='text-foreground text-sm font-medium'>{questions} Questions</p>
        </div>
    )
}

export default QuizDetailsHeader