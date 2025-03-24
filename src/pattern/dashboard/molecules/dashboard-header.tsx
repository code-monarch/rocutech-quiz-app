"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import QuizSubjectCard, { IQuizCardProps } from './quiz-subject-card';
import { CREATE_QUIZ_ROUTES, QUIZ_ROUTES } from '@/lib/routes';
import { useRouter } from 'next/navigation';

const subjects: IQuizCardProps[] = [
    {
        subject: "Mathematics",
        url: QUIZ_ROUTES.mathematics,
    },
    {
        subject: "English Language",
        url: QUIZ_ROUTES.english,
    },
    {
        subject: "Physics",
        url: QUIZ_ROUTES.physics,
    },
    {
        subject: "Chemistry",
        url: QUIZ_ROUTES.chemistry,
    },
    {
        subject: "Current Affairs",
        url: QUIZ_ROUTES.currentAffairs,
    },
]

const DashboardHeader = () => {
    const { push } = useRouter()

    return (
        <div className='flex flex-col gap-6'>
            <div className='w-full flex items-center justify-between'>
                <h2 className='text-white text-2xl font-bold'>Dashboard</h2>
                <Button size="lg" className='text-lg' onClick={() => push(CREATE_QUIZ_ROUTES.createQuiz)} >Create a Quiz</Button>
            </div>

            {/* Subject Cards */}
            {/* <div className='w-full flex flex-wrap items-center gap-x-4 gap-y-6'>
                {subjects?.map(({ subject, url }, idx) => (
                    <QuizSubjectCard key={idx} subject={subject} url={url} />
                ))}
            </div> */}
        </div>
    )
}

export default DashboardHeader