import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { CREATE_QUIZ_ROUTES } from '@/lib/routes'
import { useRouter } from 'next/navigation'

interface IProps {
    subjects: string;
    questions: string;
}

const MultiSubjectsIntro: FC<IProps> = ({ subjects, questions }) => {
    const { push } = useRouter();

    return (
        <div className='w-[485px] flex flex-col items-center gap-y-[50px]'>
            <div className='w-full flex flex-col gap-y-11'>
                <p className='w-full text-base text-center'>Welcome to the Multi-Subjects Quiz! This quiz is designed to challenge your knowledge across various subjects, encouraging you to think critically and apply your understanding in diverse contexts. Prepare to engage with questions that will test your skills and broaden your horizons...</p>
                <p className='text-base text-center font-medium'>Best of luck on your journey!</p>
            </div>
            <Button size="lg" onClick={() => push(`${CREATE_QUIZ_ROUTES.instructions}?subjects=${subjects}&questions=${questions}`)} >Start Quiz</Button>
        </div>
    )
}

export default MultiSubjectsIntro