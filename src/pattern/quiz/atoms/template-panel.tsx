"use client";

import React, { FC, ReactNode } from 'react'
import { cn } from '@/lib/utils';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

const TemplatePanel: FC<IProps> = ({ children, className }) => {
    return (
        <div className={cn('bg-white min-h-[457px] h-fit w-full flex flex-col items-center gap-7 pb-[66px] rounded-xl', className)}>
            {children}
        </div>
    )
}

export default TemplatePanel