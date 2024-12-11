"use client";

import BackBtn from '@/pattern/common/molecules/back-btn';
import React from 'react'

const CreateQuizLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='w-full flex flex-col items-start gap-8'>
            <BackBtn />
            <>{children}</>
        </div>
    )
}

export default CreateQuizLayout