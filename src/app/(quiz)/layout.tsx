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
            <EmptyTopbar />
        </div>
    )
}

export default QuizLayout