"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react';

const BackBtn = () => {
    const { back } = useRouter()

    return (
        <>
            <Button variant="default" onClick={() => back()} className='font-medium text-lg'> <span><ChevronLeft /></span>  Back</Button>
        </>
    )
}

export default BackBtn