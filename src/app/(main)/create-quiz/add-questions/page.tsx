"use client";

import React, { Suspense, useEffect } from 'react'
import NumberOfQuestionsTemp from '@/pattern/quiz/templates/number-of-questions-temp';
import { useSearchParams } from 'next/navigation';
import { SELECTED_SUBJECTS } from '@/lib/constants';

const AddQuestionsPage = () => {

  const searchParams = useSearchParams()

  const subjectsParam = searchParams.get('subject');

  useEffect(() => {
    if (subjectsParam) {
      localStorage.setItem(SELECTED_SUBJECTS, JSON.stringify(Array.from([subjectsParam])))
    }
  }, [subjectsParam])


  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='w-full'>
        <NumberOfQuestionsTemp />
      </div>
    </Suspense>
  )
}

export default AddQuestionsPage