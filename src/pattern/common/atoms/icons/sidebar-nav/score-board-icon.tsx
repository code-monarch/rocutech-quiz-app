"use client"
import React, { useEffect, useState } from 'react'
import { IIconProps } from '@/pattern/types'
import { usePathname } from 'next/navigation';
import { NAV_ICON_ACTIVE, NAV_ICON_INACTIVE } from '@/lib/constants';
import { APP_ROUTES } from '@/lib/routes';
import { BookMarkedIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScoreBoardNavIcon = ({ ...props }: IIconProps) => {
    const [color, setColor] = useState<string>(`${NAV_ICON_INACTIVE}`);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.startsWith(`${APP_ROUTES.scoreboard}`)) {
            setColor(`bg-[${NAV_ICON_ACTIVE}]`);
        } else {
            setColor(`bg-[${NAV_ICON_INACTIVE}]`);
        }
    }, [pathname]);
    return (
        <BookMarkedIcon className={cn(color, "h-[24px] w-[24px]")} {...props} />
    )
}

export default ScoreBoardNavIcon