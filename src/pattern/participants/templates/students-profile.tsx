'use client'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { User, Building2 } from 'lucide-react'

export default function StudentProfile() {
    return (
        <div className="max-w-2xl mx-auto p-6">
            {/* Breadcrumb Navigation */}
            <nav className="mb-8">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/participant">Participant</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#" className="text-blue-500">
                            Student Profile
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </nav>

            {/* Profile Form */}
            <form className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <User className="h-5 w-5" />
                        </div>
                        <Input
                            id="firstName"
                            defaultValue="Sarah"
                            className="pl-10"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <User className="h-5 w-5" />
                        </div>
                        <Input
                            id="lastName"
                            defaultValue="James"
                            className="pl-10"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="schoolName">Enter School Name</Label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                            <Building2 className="h-5 w-5" />
                        </div>
                        <Input
                            id="schoolName"
                            defaultValue="British Spring Academy"
                            className="pl-10"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

