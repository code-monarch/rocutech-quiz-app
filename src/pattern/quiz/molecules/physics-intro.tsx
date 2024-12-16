import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { CREATE_QUIZ_ROUTES } from '@/lib/routes'

const PhysicsIntro = () => {
    const { push } = useRouter();

    return (
        <div className='w-[485px] flex flex-col items-center gap-y-[50px]'>
            <div className='w-full flex flex-col gap-y-11'>
                <p className='w-full text-base text-center'>Physic Quiz helps student build and reinforce their understanding of Physic and help the quiz giver understand where students needs help focused on.</p>
                <p className='text-base text-center font-medium'>Good Luck !</p>
            </div>
            <Button size="lg" onClick={() => push(CREATE_QUIZ_ROUTES.instructions)} >Start Quiz</Button>
        </div>
    )
}

export default PhysicsIntro