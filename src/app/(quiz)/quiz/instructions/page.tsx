"use client";

import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import QuizInstructionsTemp from '@/pattern/quiz/templates/quiz-instructions-temp'
import { CURRENT_AFFAIRS } from '@/lib/constants';

const InstructionsPage = () => {
    const searchParams = useSearchParams()

    const subjects = searchParams.get('subjects')
    const questions = searchParams.get('questions')
    return (
        <Suspense fallback={<div>Loading.....</div>}>
            <div className='w-full min-h-screen flex items-center justify-center'>
                <QuizInstructionsTemp subjects={subjects ?? CURRENT_AFFAIRS} questions={questions as string ?? "100"} />
            </div>
        </Suspense>
    )
}

export default InstructionsPage