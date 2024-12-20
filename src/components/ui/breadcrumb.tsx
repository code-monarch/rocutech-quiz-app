import * as React from "react"
import { ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

export interface BreadcrumbProps extends React.ComponentProps<"nav"> {
    children: React.ReactNode
}

export function Breadcrumb({ children, className, ...props }: BreadcrumbProps) {
    return (
        <nav
            aria-label="breadcrumb"
            className={cn("text-sm text-muted-foreground", className)}
            {...props}
        >
            <ol className="flex items-center gap-2">{children}</ol>
        </nav>
    )
}

export interface BreadcrumbItemProps extends React.ComponentProps<"li"> {
    children: React.ReactNode
    isCurrentPage?: boolean
}

export function BreadcrumbItem({
    children,
    isCurrentPage,
    className,
    ...props
}: BreadcrumbItemProps) {
    return (
        <li
            className={cn("flex items-center gap-2", className)}
            aria-current={isCurrentPage ? "page" : undefined}
            {...props}
        >
            {children}
            {!isCurrentPage && <ChevronRight className="h-4 w-4" />}
        </li>
    )
}

export interface BreadcrumbLinkProps extends React.ComponentProps<"a"> {
    children: React.ReactNode
}

export function BreadcrumbLink({
    children,
    className,
    ...props
}: BreadcrumbLinkProps) {
    return (
        <a
            className={cn("hover:text-foreground transition-colors", className)}
            {...props}
        >
            {children}
        </a>
    )
}

