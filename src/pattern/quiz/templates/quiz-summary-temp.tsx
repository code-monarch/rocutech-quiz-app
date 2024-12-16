"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import TemplatePanel from '../atoms/template-panel'
import ParticipantsSelectedTable from '../organisms/participants-selected-table';
import { Button } from '@/components/ui/button';
import { CREATE_QUIZ_ROUTES } from '@/lib/routes';

const style = {
    title: ``,
    value: ``
}

const QuizSummaryTemp = () => {
    const { push } = useRouter()

    return (
        <TemplatePanel className='pt-7 px-7 space-y-[38px]'>
            <h4 className='font-semibold text-3xl'>Quiz Summary</h4>

            <div className='w-full flex flex-col items-start gap-y-[44px]'>
                {/* Subject Selected */}
                <div className='space-y-[16px]'>
                    <h5 className='text-[#434040] text-lg font-medium' >Subject Selected</h5>
                    <p className='text-xl font-semibold' >Current Affairs Quiz</p>
                </div>

                {/* Number of Questions */}
                <div className='space-y-[16px]'>
                    <h5 className='text-[#434040] text-lg font-medium'>Number of Questions</h5>
                    <p className='text-xl font-semibold'>50 Questions</p>
                </div>

                {/* Participants Selected */}
                <div className='w-full space-y-[16px]'>
                    <h5 className='text-[#434040] text-lg font-medium'>Participants Selected</h5>
                    <ParticipantsSelectedTable />
                </div>

                {/* Control */}
                <div className='w-full flex justify-center gap-6'>
                    <Button variant="outline" size="lg" onClick={() => push(CREATE_QUIZ_ROUTES.selectSubjects)} >Edit Quiz</Button>
                    <Button size="lg" onClick={() => push(CREATE_QUIZ_ROUTES.intro)}>Create Quiz</Button>
                </div>
            </div>
        </TemplatePanel>
    )
}

export default QuizSummaryTemp