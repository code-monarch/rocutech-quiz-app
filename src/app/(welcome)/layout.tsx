"use client";

import React from 'react'

const WelcomeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="min-h-screen h-full w-full space-y-[60px]">
            {children}
        </div>
    )
}

export default WelcomeLayout