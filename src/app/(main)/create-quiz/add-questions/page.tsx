"use client";

import React, { useEffect } from 'react'
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
    <div className='w-full'>
      <NumberOfQuestionsTemp />
    </div>
  )
}

export default AddQuestionsPage