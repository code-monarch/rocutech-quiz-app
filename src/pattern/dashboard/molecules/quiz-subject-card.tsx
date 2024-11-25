"use client"

import React, { FC } from 'react'
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button';

export interface IQuizCardProps {
    subject: string;
    url: string
}

const QuizSubjectCard: FC<IQuizCardProps> = ({ subject, url }) => {
    const { push } = useRouter()

    return (
        <>
            <Card className='w-[336px] h-[139px] flex flex-col justify-center gap-8 px-8'>
                <CardHeader className='p-0'>
                    <CardTitle className='text-2xl font-semibold'>{subject}</CardTitle>
                </CardHeader>
                <CardContent className='p-0'>
                    <Button variant="link" onClick={() => push(url)} className='font-semibold text-xl p-0' >Start Quiz</Button>
                </CardContent>
            </Card>
        </>
    )
}

export default QuizSubjectCard