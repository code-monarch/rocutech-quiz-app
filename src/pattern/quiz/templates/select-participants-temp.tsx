'use client'

import * as React from "react"
import { z } from "zod"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import TemplatePanel from "../atoms/template-panel"
import TemplateHeader from "../atoms/template-header"
import SelectParticipantsHeader from "../molecules/select-participants-header"
import { useRouter } from "next/navigation"
import { CREATE_QUIZ_ROUTES } from "@/lib/routes"
import { useToast } from "@/hooks/use-toast"
import { SELECTED_STUDENTS } from "@/lib/constants"

export const studentSchema = z.string()

export const schoolSchema = z.object({
    name: z.string(),
    points: z.string(),
    students: z.array(z.object({
        name: z.string(),
        points: z.string()
    }))
})

export type School = z.infer<typeof schoolSchema>

const formSchema = z.object({
    selectedStudents: z.array(z.string())
})

type FormData = z.infer<typeof formSchema>

export default function SelectParticipantsTemp() {
    const { push } = useRouter()
    const { toast } = useToast()

    const [schools, setSchools] = React.useState<School[]>([])
    const [expandedSchools, setExpandedSchools] = React.useState<Set<string>>(new Set())
    const [selectedStudentsSet, setSelectedStudentsSet] = React.useState<Set<string>>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(SELECTED_STUDENTS)
            return saved ? new Set(JSON.parse(saved)) : new Set()
        }
        return new Set()
    })

    // Fetch participants from localStorage on mount
    React.useEffect(() => {
        const storedSchools = localStorage.getItem("participants")
        if (storedSchools) {
            try {
                const parsedSchools: School[] = JSON.parse(storedSchools)
                setSchools(parsedSchools)
            } catch (error) {
                console.error("Error parsing participants from localStorage:", error)
            }
        }
    }, [])

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

    const getStudentId = (schoolName: string, studentName: string) => {
        return `${schoolName}-${studentName}`
    }

    const toggleAllStudentsInSchool = (school: School, checked: boolean) => {
        const schoolStudentIds = school.students.map(student =>
            getStudentId(school.name, student.name)
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

    const toggleStudent = (schoolName: string, studentName: string, checked: boolean) => {
        const studentId = getStudentId(schoolName, studentName)
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
            selectedStudentsSet.has(getStudentId(school.name, student.name))
        )
    }

    const isSchoolPartiallySelected = (school: School) => {
        return school.students.some(student =>
            selectedStudentsSet.has(getStudentId(school.name, student.name))
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
        localStorage.setItem(SELECTED_STUDENTS, JSON.stringify(Array.from(selectedStudentsSet)))

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
                                                    key={getStudentId(school.name, student.name)}
                                                    className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors duration-200 ease-in-out"
                                                >
                                                    <Checkbox
                                                        checked={selectedStudentsSet.has(getStudentId(school.name, student.name))}
                                                        onCheckedChange={(checked) => {
                                                            toggleStudent(school.name, student.name, checked as boolean)
                                                        }}
                                                    />
                                                    <span className="text-sm">{student.name}</span>
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
