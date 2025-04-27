import React from 'react'
import WelcomeWidget from '../molecules/welcome-widget'
import HelpOutIcon from '../atoms/icons/help-out-icon'
import NotificationIcon from '../atoms/icons/notification-icon'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import DropdownIcon from '../atoms/icons/dropdown-icon'

const Topbar = () => {
    return (
        <div className='fixed bg-white w-full h-[90px] flex items-center justify-between py-5 pl-8 pr-[calc(14rem+60px)] ml-[14rem] z-50'>
            <WelcomeWidget />
            <div className='flex items-center gap-[22px]'>
                <HelpOutIcon />
                <NotificationIcon />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button className='flex items-center gap-[13px] focus:outline-none'>
                            <div className='flex flex-col items-start gap-2'>
                                <h5 className='text-sm text-black font-semibold'>Quiz Administrator</h5>
                                <p className='text-xs text-muted-foreground'>Admin</p>
                            </div>
                            <DropdownIcon />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuItem>
                           
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Topbar