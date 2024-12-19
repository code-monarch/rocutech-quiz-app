'use client'

import * as React from "react"
import { z } from "zod"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import TemplatePanel from "../atoms/template-panel"
import TemplateHeader from "../atoms/template-header"
import SelectParticipantsHeader from "../molecules/select-participants-header"
import { schools } from "@/lib/data"
import { useRouter } from "next/navigation"
import { CREATE_QUIZ_ROUTES } from "@/lib/routes"
import { useToast } from "@/hooks/use-toast"
import { SELECTED_STUDENT } from "@/lib/constants"

export const studentSchema = z.string()

export const schoolSchema = z.object({
    name: z.string(),
    points: z.string(),
    students: z.array(studentSchema)
})

export type School = z.infer<typeof schoolSchema>


const formSchema = z.object({
    selectedStudents: z.array(z.string())
})

type FormData = z.infer<typeof formSchema>


export default function SelectParticipantsTemp() {
    const { push } = useRouter()

    const { toast } = useToast()
    const [expandedSchools, setExpandedSchools] = React.useState<Set<string>>(new Set(['School 1']))
    const [selectedStudentsSet, setSelectedStudentsSet] = React.useState<Set<string>>(() => {
        // Initialize from localStorage if available
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(SELECTED_STUDENT)
            return saved ? new Set(JSON.parse(saved)) : new Set()
        }
        return new Set()
    })

    // Log the selected students set whenever it changes
    React.useEffect(() => {
        console.log('Selected Students Set:', Array.from(selectedStudentsSet))
    }, [selectedStudentsSet])

    const toggleSchool = (schoolName: string) => {
        setExpandedSchools(prev => {
            const next = new Set(prev)
            if (next.has(schoolName)) {
                next.delete(schoolName)
            } else {
                next.add(schoolName)
            }
            return next
        })
    }

    const getStudentId = (schoolName: string, student: string) => {
        return `${schoolName}-${student}`
    }

    const toggleAllStudentsInSchool = (school: School, checked: boolean) => {
        const schoolStudentIds = school.students.map(student =>
            getStudentId(school.name, student)
        )

        setSelectedStudentsSet(prev => {
            const next = new Set(prev)
            if (checked) {
                schoolStudentIds.forEach(id => next.add(id))
            } else {
                schoolStudentIds.forEach(id => next.delete(id))
            }
            return next
        })
    }

    const toggleStudent = (schoolName: string, student: string, checked: boolean) => {
        const studentId = getStudentId(schoolName, student)
        setSelectedStudentsSet(prev => {
            const next = new Set(prev)
            if (checked) {
                next.add(studentId)
            } else {
                next.delete(studentId)
            }
            return next
        })
    }

    const isSchoolFullySelected = (school: School) => {
        return school.students.every(student =>
            selectedStudentsSet.has(getStudentId(school.name, student))
        )
    }

    const isSchoolPartiallySelected = (school: School) => {
        return school.students.some(student =>
            selectedStudentsSet.has(getStudentId(school.name, student))
        )
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (selectedStudentsSet.size === 0) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please select at least one student before submitting.",
            })
            return
        }

        // Save to localStorage
        localStorage.setItem(SELECTED_STUDENT, JSON.stringify(Array.from(selectedStudentsSet)))

        push(CREATE_QUIZ_ROUTES.summary)
    }

    return (
        <TemplatePanel className='pt-7 px-7'>
            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="w-full space-y-1">
                    <div className='w-full h-full flex flex-col items-start'>
                        <TemplateHeader className='border-b-0'>Select Participants</TemplateHeader>
                        <SelectParticipantsHeader />
                        <div className='w-full flex flex-col gap-y-2'>
                            {schools.map((school, index) => (
                                <div key={school.name} className="border bg-white overflow-hidden transition-all duration-200 ease-in-out">
                                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 ease-in-out" onClick={() => toggleSchool(school.name)}>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-medium w-6">{index + 1}</span>
                                            <Checkbox
                                                checked={isSchoolFullySelected(school)}
                                                onCheckedChange={(checked) => {
                                                    toggleAllStudentsInSchool(school, checked as boolean)
                                                }}
                                                data-state={
                                                    isSchoolFullySelected(school)
                                                        ? "checked"
                                                        : isSchoolPartiallySelected(school)
                                                            ? "indeterminate"
                                                            : "unchecked"
                                                }
                                            />
                                            <div>
                                                <h3 className="text-sm font-medium">{school.name}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    ({school.students.length} students)
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-medium">{school.points} Points</span>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleSchool(school.name)}
                                            >
                                                {expandedSchools.has(school.name) ? (
                                                    <ChevronUp className="h-4 w-4" />
                                                ) : (
                                                    <ChevronDown className="h-4 w-4" />
                                                )}
                                            </Button>
                                        </div>
                                    </div>

                                    {/* expanded */}
                                    {expandedSchools.has(school.name) && (
                                        <div className="pl-10 border-t transition-all duration-200 ease-in-out">
                                            {school.students.map((student) => (
                                                <label
                                                    key={getStudentId(school.name, student)}
                                                    className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-200 ease-in-out"
                                                >
                                                    <Checkbox
                                                        checked={selectedStudentsSet.has(getStudentId(school.name, student))}
                                                        onCheckedChange={(checked) => {
                                                            toggleStudent(school.name, student, checked as boolean)
                                                        }}
                                                    />
                                                    <span className="text-sm">{student}</span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-end">
                    <Button type="submit" size="lg">Continue</Button>
                </div>
            </form>
        </TemplatePanel>
    )
}

