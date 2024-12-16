"use client";

import React from 'react'
import { useSearchParams } from 'next/navigation';
import QuizInstructionsTemp from '@/pattern/quiz/templates/quiz-instructions-temp'
import { CURRENT_AFFAIRS } from '@/lib/constants';

const InstructionsPage = () => {
    const searchParams = useSearchParams()

    const subject = searchParams.get('subject')
    const questions = searchParams.get('questions')
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <QuizInstructionsTemp subject={subject as string ?? CURRENT_AFFAIRS} questions={questions as string ?? "100"} />
        </div>
    )
}

export default InstructionsPage