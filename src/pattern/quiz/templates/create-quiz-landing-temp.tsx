"use client"

import React from 'react'
import PageIllustration from '../atoms/page-illustration'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { CREATE_QUIZ_ROUTES } from '@/lib/routes'
import TemplatePanel from '../atoms/template-panel'

const CreateQuizLandingTemp = () => {
    const { push } = useRouter()

    return (
        <TemplatePanel>
            <>
                <PageIllustration />
                <div className='flex flex-col items-center gap-[9px]'>
                    <h3 className='max-w-[497px] text-2xl text-center font-bold'>Welcome to your Personalized Quiz</h3>
                    <p className='max-w-[410px] text-base text-center font-normal'>Are you ready to start exploring your knowledge in vast subject</p>
                </div>
                <Button size="lg" onClick={() => push(CREATE_QUIZ_ROUTES.selectSubjects)}>Create a Quiz</Button>
            </>
        </TemplatePanel>
    )
}

export default CreateQuizLandingTemp