'use client'

import * as React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SchoolsTable } from "@/pattern/dashboard/organisms/schools-table"
import { StudentsTable } from "@/pattern/dashboard/organisms/students-table"
import { AddParticipantsModal } from "../organisms/add-participants-dialog"

export default function ParticipantList() {
    return (
        <div className='w-full flex flex-col gap-y-7'>
            <div className="w-full flex items-center justify-end">
                <AddParticipantsModal />
            </div>
            <Tabs defaultValue="school" className="bg-white w-full space-y-[8px] py-[30px] rounded-xl">
                <TabsList className='mb-1'>
                    <TabsTrigger value="school">School</TabsTrigger>
                    <TabsTrigger value="student">Student</TabsTrigger>
                </TabsList>
                <TabsContent value="school">
                    <SchoolsTable />
                </TabsContent>
                <TabsContent value="student">
                    <StudentsTable />
                </TabsContent>
            </Tabs>
        </div>
    )
}
