'use client'

import { useEffect } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { Participant } from "../templates/scoreboard-temp"

export const participantSchema = z.object({
    name: z.string().min(1, "Student name is required"),
    points: z.string().min(0, "Points must be 0 or greater")
})

interface EditDialogProps {
    participant: Participant | null
    open: boolean
    onOpenChange: (open: boolean) => void
    onSave: (data: Participant) => void
    schools: Participant[]
}

export function EditParticipantDetailsDialog({ participant, open, onOpenChange, onSave, schools }: EditDialogProps) {
    const { refresh } = useRouter()

    const form = useForm<Participant>({
        resolver: zodResolver(participantSchema),
        defaultValues: {
            name: "",
            points: "0"
        }
    })

    // Reset form with participant data when dialog opens or participant changes
    useEffect(() => {
        if (participant && open) {
            form.reset({
                name: participant.name,
                points: participant.points
            })
        }
    }, [participant, open, form])

    const onSubmit = (data: Participant) => {
        // Update localStorage
        if (typeof window !== "undefined") {
            const storedParticipants = localStorage.getItem("participants")
            if (storedParticipants) {
                const parsedParticipants: Participant[] = JSON.parse(storedParticipants)
                const updatedParticipants = parsedParticipants.map(p =>
                    p.name === data.name ? { ...p, ...data } : p
                )
                localStorage.setItem("participants", JSON.stringify(updatedParticipants))
            }
        }

        // Call the onSave callback
        onSave(data)
        onOpenChange(false)
        refresh()
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Participant</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Student Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="points"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Points</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            {...field}
                                            onChange={e => {
                                                const value = e.target.value;
                                                if (/^\d*$/.test(value)) {
                                                    field.onChange(value);
                                                }
                                            }}
                                        // onChange={e => field.onChange(parseInt(e.target.value))}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button size="lg" type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
