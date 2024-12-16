"use client";

import React from 'react'
import { useSearchParams } from 'next/navigation'
import QuizIntroTemp from '@/pattern/quiz/templates/quiz-intro-temp';
import { CHEMISTRY, CURRENT_AFFAIRS, ENGLISH, MATHEMATICS, PHYSICS } from '@/lib/constants';

const QuizIntroPage = () => {
    const searchParams = useSearchParams()

    const subject = searchParams.get('subject')
    const questions = searchParams.get('questions')

    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <QuizIntroTemp subject={subject as string ?? CURRENT_AFFAIRS} questions={questions as string ?? "100"} />
        </div>
    )
}

export default QuizIntroPage