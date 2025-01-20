'use client'

import { useState, useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plus, Minus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ParticipantFormData, participantFormSchema, School } from "@/pattern/types"
import { useToast } from "@/hooks/use-toast"
import { PARTICIPANTS } from "@/lib/constants"

export function AddParticipantsPageModal() {
    const { toast } = useToast()
    const [open, setOpen] = useState(false)
    const [participants, setParticipants] = useState<School[]>([])

    useEffect(() => {
        const storedSchools = localStorage.getItem(PARTICIPANTS)
        if (storedSchools) {
            try {
                const parsedSchools: School[] = JSON.parse(storedSchools)
                setParticipants(parsedSchools)
            } catch (error) {
                console.error("Error parsing participants from localStorage:", error)
            }
        }
    }, [])

    const form = useForm<ParticipantFormData>({
        resolver: zodResolver(participantFormSchema),
        defaultValues: {
            schools: Array(2).fill({
                name: "",
                points: "0",
                students: [{ name: "", points: "0" }]
            })
        }
    })

    const { fields: schoolFields, append: appendSchool } = useFieldArray({
        control: form.control,
        name: "schools"
    })

    const onSubmit = (data: ParticipantFormData) => {
        // Save to localStorage
        localStorage.setItem('participants', JSON.stringify(data.schools))

        toast({
            title: "Success",
            description: "Schools and students added successfully.",
        })

        setOpen(false)
    }

    const addNewSchool = () => {
        appendSchool({
            name: "",
            points: "0",
            students: [{ name: "", points: "0" }]
        })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="default" size="lg">Add Participants</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]  md:max-w-[800px] max-h-[80vh] overflow-y-auto custom_scollbar">
                <DialogHeader>
                    <DialogTitle>Add Participants</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {schoolFields.map((schoolField, schoolIndex) => (
                            <div key={schoolField.id} className="bg-white space-y-4 p-4 border rounded-md">
                                <FormField
                                    control={form.control}
                                    name={`schools.${schoolIndex}.name`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>School Name {schoolIndex + 1}</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter school name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="space-y-2">
                                    <FormLabel>Students</FormLabel>
                                    {form.watch(`schools.${schoolIndex}.students`).map((_, studentIndex) => (
                                        <FormField
                                            key={studentIndex}
                                            control={form.control}
                                            name={`schools.${schoolIndex}.students.${studentIndex}.name`}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <div className="flex items-center space-x-2">
                                                            <Input placeholder={`Student ${studentIndex + 1}`} {...field} />
                                                            {studentIndex > 0 && (
                                                                <Button
                                                                    type="button"
                                                                    variant="ghost"
                                                                    size="sm"
                                                                    onClick={() => {
                                                                        const students = form.getValues(`schools.${schoolIndex}.students`)
                                                                        form.setValue(`schools.${schoolIndex}.students`, students.filter((_, i) => i !== studentIndex))
                                                                    }}
                                                                >
                                                                    <Minus className="h-4 w-4" />
                                                                </Button>
                                                            )}
                                                        </div>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    ))}
                                    {form.watch(`schools.${schoolIndex}.students`).length < 4 && (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            onClick={() => {
                                                const students = form.getValues(`schools.${schoolIndex}.students`)
                                                form.setValue(`schools.${schoolIndex}.students`, [...students, { name: "", points: "0" }])
                                            }}
                                        >
                                            <Plus className="h-4 w-4 mr-2" />
                                            Add Student
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div className="w-full flex items-center gap-4">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full h-[50px]"
                                onClick={addNewSchool}
                            >
                                <Plus className="h-4 w-4 mr-2" />
                                Add New School
                            </Button>
                            <Button type="submit" className="w-full h-[50px]">
                                Save Schools and Students
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

