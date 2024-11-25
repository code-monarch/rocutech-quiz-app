"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import brandLogo from "@/public/brand-logo.png"
import { APP_ROUTES } from "@/lib/routes"
import DashboardNavIcon from "../atoms/icons/sidebar-nav/dashboard-nav-icon"
import CreateQuizNavIcon from "../atoms/icons/sidebar-nav/create-quiz-nav-icon"
import ParticipantsNavIcon from "../atoms/icons/sidebar-nav/participants-nav-icon"

// Menu items.
const items = [
    {
        title: "Dashboard",
        url: APP_ROUTES.index,
        icon: <DashboardNavIcon />,
    },
    {
        title: "Create Quiz",
        url: APP_ROUTES.createQuiz,
        icon: <CreateQuizNavIcon />,
    },
    {
        title: "Participants",
        url: APP_ROUTES.participants,
        icon: <ParticipantsNavIcon />,
    }
]

export function AppSidebar() {
    const pathname = usePathname()

    return (
        <Sidebar collapsible="none">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <a href="#">
                            <Image src={brandLogo} alt="brand logo" />
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
                                    <SidebarMenuButton isActive={url === '/' ? pathname === url : pathname.startsWith(url)} asChild={true}>
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
        </Sidebar >
    )
}
