"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import BrandLogo from "@/public/brand-logo.png"
import Emblem from "@/public/images/atuwatseiii-emblem.png"
import { APP_ROUTES, CREATE_QUIZ_ROUTES } from "@/lib/routes"
import DashboardNavIcon from "../atoms/icons/sidebar-nav/dashboard-nav-icon"
import CreateQuizNavIcon from "../atoms/icons/sidebar-nav/create-quiz-nav-icon"
import ParticipantsNavIcon from "../atoms/icons/sidebar-nav/participants-nav-icon"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: APP_ROUTES.dashboard,
        icon: <DashboardNavIcon />,
    },
    {
        title: "Create Quiz",
        url: CREATE_QUIZ_ROUTES.createQuiz,
        icon: <CreateQuizNavIcon />,
    },
    {
        title: "Participants",
        url: APP_ROUTES.participants,
        icon: <ParticipantsNavIcon />,
    },
    {
        title: "Score board",
        url: APP_ROUTES.scoreboard,
        icon: <DashboardNavIcon />,
    }
]

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar collapsible="none" className="font-rubik">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <a href="#">
                            <Image src={Emblem} alt="King Emblem" width={97.78} height={86.19} />
                        </a>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            {/* App menu Items */}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(({ url, title, icon }) => (
                                <SidebarMenuItem key={title}>
                                    <SidebarMenuButton isActive={pathname.startsWith(url)} asChild={true}>
                                        <Link href={url} className="w-full flex items-center justify-center gap-[14px]" >
                                            {icon}
                                            <span>{title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="w-full flex justify-center mb-6 pl-6">
                <div className='flex items-center gap-2'>
                    <p className='text-sm font-rubik'>Powered by:</p>
                    <Image src={BrandLogo} alt="brand logo" width={50} height={50} />
                </div>
            </SidebarFooter>
        </Sidebar >
    )
}
