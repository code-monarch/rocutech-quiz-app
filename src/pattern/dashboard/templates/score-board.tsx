"use client"

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { SchoolsTable } from '../organisms/schools-table'
import { StudentsTable } from '../organisms/students-table'

const ScoreBoard = () => {
    return (
        <div className=''>
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

export default ScoreBoard