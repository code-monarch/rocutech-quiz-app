import React, { FC } from 'react'

interface IProps {
    subjects: string
    questions: string
}
const QuizDetailsHeader: FC<IProps> = ({ subjects, questions }) => {
    return (
        <div className='min-w-[306px] h-fit flex flex-col items-center gap-y-[10px] p-[10px] border-b-2 border-primary'>
            <h4 className='text-foreground text-2xl font-semibold uppercase'>{subjects.split(',').map(subject => subject.trim()).join(', ')} Quiz</h4>
            <div className='flex items-center gap-6'>
                <p className='text-foreground text-lg font-medium'>{questions} Questions</p>
            </div>
        </div>
    )
}

export default QuizDetailsHeader