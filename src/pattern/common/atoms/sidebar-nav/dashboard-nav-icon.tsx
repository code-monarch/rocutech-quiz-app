"use client"
import React, { useEffect, useState } from 'react'
import { IIconProps } from '@/pattern/types'
import { usePathname } from 'next/navigation';
import { NAV_ICON_ACTIVE, NAV_ICON_INACTIVE } from '@/lib/constants';
import { APP_ROUTES } from '@/lib/routes';

const DashboardNavIcon = ({ ...props }: IIconProps) => {
    const [color, setColor] = useState<string>(`${NAV_ICON_INACTIVE}`);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === `${APP_ROUTES.index}`) {
            setColor(`${NAV_ICON_ACTIVE}`);
        } else {
            setColor(`${NAV_ICON_INACTIVE}`);
        }
    }, [pathname]);
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M3 3H11V13H3V3ZM5 5V11H9V5H5ZM13 3H21V9H13V3ZM15 5V7H19V5H15ZM13 11H21V21H13V11ZM15 13V19H19V13H15ZM3 15H11V21H3V15ZM5 17V19H9V17H5Z" fill={color} />
        </svg>
    )
}

export default DashboardNavIcon