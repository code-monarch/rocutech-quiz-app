"use client";

import React from 'react'
import brandLogo from "@/public/brand-logo.png"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@/lib/routes';

const WelcomePage = () => {
    const { push } = useRouter()

    return (
        <div className='bg-custom-bg bg-cover bg-center h-screen w-full flex items-center justify-center'>
            <div className='w-[624px] flex flex-col items-center gap-y-8'>
                <Image src={brandLogo} alt="brand logo" width={98} height={86} />
                <h3 className='text-[96px] text-center' style={{ lineHeight: '0.95' }}>Welcome To Rucotech</h3>
                <p className='text-2xl font-medium'>CBT offline Quiz Platform</p>
                <p className='text-center text-lg text-[#646A69]'>With an intuitive interface and a comprehensive suite of tools, the platform offers dynamic, interactive learning experiences tailored to meet diverse educational needs.</p>
                <Button size="lg" onClick={() => push(APP_ROUTES.signIn)}>Get Started <span><ArrowRight /></span></Button>
            </div>
        </div>
    )
}

export default WelcomePage