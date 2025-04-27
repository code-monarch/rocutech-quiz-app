"use client";

import React from 'react'
import Emblem from "@/public/images/atuwatseiii-emblem.png"
import BrandLogo from "@/public/brand-logo.png"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { APP_ROUTES } from '@/lib/routes';

const WelcomePage = () => {
    const { push } = useRouter()

    return (
        <div className='bg-custom-bg bg-cover bg-center h-screen w-full flex flex-col items-center justify-between pb-6'>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-[624px] flex flex-col items-center gap-y-8'>
                    <Image src={Emblem} alt="King Emblem" width={150} height={100} />
                    <h3 className='text-4xl text-center'>Welcome To <strong>Ogiame Atuwatse III </strong>Inter-collegiate offline CBT Quiz Platform</h3>
                    <p className='text-center text-lg text-[#646A69]'>With an intuitive interface and a comprehensive suite of tools, the platform offers dynamic, interactive learning experiences tailored to meet diverse educational needs.</p>
                    <Button size="lg" onClick={() => push(APP_ROUTES.signIn)}>Get Started <span><ArrowRight /></span></Button>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-sm font-rubik'>Powered by:</p>
                <Image src={BrandLogo} alt="brand logo" width={50} height={50} />
            </div>
        </div>
    )
}

export default WelcomePage