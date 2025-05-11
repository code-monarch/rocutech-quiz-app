"use client";

import React from 'react'
import EmptyTopbar from '@/pattern/common/atoms/empty-top-bar'

const QuizLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="h-full w-full space-y-[60px]">
            <div className='w-full pt-[30px]'>
                {children}
            </div>
        </div>
    )
}

export default QuizLayout