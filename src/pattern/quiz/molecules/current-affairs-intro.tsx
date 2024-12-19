import React, { FC } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CREATE_QUIZ_ROUTES } from '@/lib/routes'

interface IProps {
    subjects: string;
    questions: string;
}

const CurrentAffairsIntro: FC<IProps> = ({ subjects, questions }) => {
    const { push } = useRouter()

    return (
        <div className='w-[485px] flex flex-col items-center gap-y-[50px]'>
            <div className='w-full flex flex-col gap-y-11'>
                <p className='w-full text-base text-center'>Current Affairs Quiz help test student knowledge on how up to date they are of recent events, and the information gathering ability which is seen in the level of questions...</p>
                <p className='text-base text-center font-medium'>Good Luck!</p>
            </div>
            <Button size="lg" onClick={() => push(`${CREATE_QUIZ_ROUTES.instructions}?subjects=${subjects}&questions=${questions}`)} >Start Quiz</Button>
        </div>
    )
}

export default CurrentAffairsIntro