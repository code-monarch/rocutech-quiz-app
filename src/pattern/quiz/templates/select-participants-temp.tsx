'use client'

import * as React from "react"
import { z } from "zod"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import TemplatePanel from "../atoms/template-panel"
import TemplateHeader from "../atoms/template-header"
import SelectParticipantsHeader from "../molecules/select-participants-header"
import { useRouter } from "next/navigation"
import { CREATE_QUIZ_ROUTES } from "@/lib/routes"
import { useToast } from "@/hooks/use-toast"
import { PARTICIPANTS, SELECTED_STUDENTS } from "@/lib/constants"
import { AddParticipantsModal } from "@/pattern/participants/organisms/add-participants-dialog"
import { Hidden } from "@/pattern/common/atoms/hidden"

export const schoolSchema = z.object({
    name: z.string(),
    points: z.string(),
    students: z.array(z.object({
        name: z.string(),
        points: z.string()
    }))
})

export type School = z.infer<typeof schoolSchema>

export default function SelectParticipantsTemp() {
    const { push } = useRouter()
    const { toast } = useToast()

    const [schools, setSchools] = React.useState<School[]>([])
    const [selectedSchools, setSelectedSchools] = React.useState<Set<string>>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem(SELECTED_STUDENTS)
            return saved ? new Set(JSON.parse(saved)) : new Set()
        }
        return new Set()
    })
    console.log("SELECTED SCHOOLS: ", selectedSchools)

    React.useEffect(() => {
        const storedSchools = localStorage.getItem(PARTICIPANTS)
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
        setSelectedSchools(prev => {
            const next = new Set(prev)
            if (next.has(schoolName)) {
                next.delete(schoolName)
            } else {
                next.add(schoolName)
            }
            return next
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (selectedSchools.size < 2) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please select at least 2 schools.",
            })
            return
        }
        if (selectedSchools.size > 2) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Only 2 schools can participate at a time.",
            })
            return
        }

        localStorage.removeItem(SELECTED_STUDENTS)
        localStorage.setItem(SELECTED_STUDENTS, JSON.stringify(Array.from(selectedSchools)))
        push(CREATE_QUIZ_ROUTES.summary)
    }

    return (
        <TemplatePanel className='pt-7 px-7'>
            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="w-full space-y-1">
                    <div className='w-full h-full flex flex-col items-start'>
                        <div className="w-full flex items-center justify-between">
                            <TemplateHeader className='border-b-0'>Select Participants</TemplateHeader>
                            <div className="w-fit pb-5">
                                <AddParticipantsModal />
                            </div>
                        </div>
                        <SelectParticipantsHeader />
                        <div className='w-full flex flex-col gap-y-2'>
                            {schools.length > 0 ? schools.map((school, index) => (
                                <div key={school.name} className="flex items-center justify-between p-4 hover:bg-gray-50 border bg-white">
                                    <div className="flex items-center gap-4">
                                        <span className="text-base font-medium w-6">{index + 1}</span>
                                        <Checkbox
                                            checked={selectedSchools.has(school.name)}
                                            onCheckedChange={() => toggleSchool(school.name)}
                                        />
                                        <div>
                                            <h3 className="text-base font-medium">{school.name}</h3>
                                            <p className="text-base text-muted-foreground">
                                                ({school.students.length} students)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 mr-[50px]">
                                        <span className="text-base font-medium">{school.points} Points</span>
                                    </div>
                                </div>
                            )) :
                                <div className="w-full flex items-center justify-center text-foreground text-lg font-medium py-7">No Records Found.</div>
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-end gap-x-6">
                    <Hidden isVisible={schools.length > 0} >
                        <Button type="submit" size="lg">Continue</Button>
                    </Hidden>
                </div>
            </form>
        </TemplatePanel>
    )
}