"use client";

import React, { Suspense } from 'react'
import QuizTemp from '@/pattern/quiz/templates/quiz-temp'

const QuizPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <QuizTemp />
      </Suspense>
    </>
  )
}

export default QuizPage