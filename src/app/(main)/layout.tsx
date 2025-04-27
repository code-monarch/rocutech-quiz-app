"use client";

import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/pattern/common/templates/app-sidebar'
import Topbar from '@/pattern/common/templates/topbar'

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <main className="w-[calc(100vw-14rem)] h-full">
                    <Topbar />
                    <div className="w-full bg-background pt-11 pl-8 pr-[60px] pb-[66px] mt-[90px] ml-[14rem]">
                        {children}
                    </div>
                </main>
            </SidebarProvider>
        </>
    )
}

export default MainLayout