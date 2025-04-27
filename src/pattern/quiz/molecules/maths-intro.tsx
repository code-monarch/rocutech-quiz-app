import React, { FC } from 'react'
import { Button } from '@/components/ui/button'
import { CREATE_QUIZ_ROUTES } from '@/lib/routes'
import { useRouter } from 'next/navigation'

interface IProps {
    subjects: string;
    questions: string;
}

const MathsIntro: FC<IProps> = ({ subjects, questions }) => {
    const { push } = useRouter();

    return (
        <div className='w-[485px] flex flex-col items-center gap-y-[50px]'>
            <div className='w-full flex flex-col gap-y-11'>
                <p className='w-full text-base text-center'>Mathematics Quiz encourages student to think critically when presented with problems that requires them to analyse the given information and devise effective solutions... </p>
                <p className='text-base text-center font-medium'>Good Luck !</p>
            </div>
            <Button size="lg" onClick={() => push(`${CREATE_QUIZ_ROUTES.instructions}?subjects=${subjects}&questions=${questions}`)} >Start Quiz</Button>
        </div>
    )
}

export default MathsIntro