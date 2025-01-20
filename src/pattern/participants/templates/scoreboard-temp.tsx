'use client'

import * as React from "react"
import {
    useReactTable,
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { z } from "zod"
import { useToast } from "@/hooks/use-toast"
import { EditParticipantDetailsDialog } from "../organisms/edit-participant-details-dialog"
import { Button } from "@/components/ui/button"
import { AddParticipantsModal } from "../organisms/add-participants-dialog"
import { QUIZ_PARTICIPANTS } from "@/lib/constants"

export const quizParticipantSchema = z.object({
    name: z.string().min(1, "Student name is required"),
    points: z.string().min(0, "Points must be 0 or greater")
})

export type Participant = z.infer<typeof quizParticipantSchema>

export default function ScoreboardTemp() {
    const { toast } = useToast()
    const [participants, setParticipants] = React.useState<Participant[]>([])
    console.log('PARTICIPANTSSS: ', participants)

    // Transform and set participants from localStorage
    React.useEffect(() => {
        const saved = localStorage.getItem(QUIZ_PARTICIPANTS)
        if (saved) {
            const rawData = JSON.parse(saved)
            setParticipants(rawData as Participant[])
        }
    }, [])

    const [selectedParticipant, setSelectedParticipant] = React.useState<Participant | null>(null)
    const [dialogOpen, setDialogOpen] = React.useState(false)

    // // Save to localStorage whenever participants change
    // React.useEffect(() => {
    //     const groupedData = participants.reduce((acc: any[], participant) => {
    //         const school = acc.find((s) => s.name === participant.schoolName)
    //         if (!school) {
    //             acc.push({
    //                 name: participant.schoolName,
    //                 points: "0",
    //                 students: [{ name: participant.studentName, points: participant.points.toString() }]
    //             })
    //         } else {
    //             school.students.push({
    //                 name: participant.studentName,
    //                 points: participant.points.toString()
    //             })
    //         }
    //         return acc
    //     }, [])
    //     localStorage.setItem("participants", JSON.stringify(groupedData))
    // }, [participants])

    const handleSave = (updatedParticipant: Participant) => {
        setParticipants((prev) =>
            prev.map((p) => (p.name === updatedParticipant.name ? updatedParticipant : p))
        )
        toast({
            title: "Success",
            description: "Participant information updated successfully."
        })
    }

    // Define the columns for the react-table
    const columns: ColumnDef<Participant>[] = React.useMemo(
        () => [
            {
                accessorKey: "name",
                header: "Student Name"
            },
            {
                accessorKey: "points",
                header: "Points",
                cell: ({ row }) => `${row.getValue("points")} Points`
            },
            // {
            //     id: "actions",
            //     header: "Actions",
            //     cell: ({ row }) => (
            //         <Button
            //             variant="link"
            //             onClick={(e) => {
            //                 e.stopPropagation()
            //                 setSelectedParticipant(row.original)
            //                 setDialogOpen(true)
            //             }
            //             }
            //         >
            //             Edit
            //         </Button>
            //     )
            // }
        ],
        []
    )

    const [sorting, setSorting] = React.useState<SortingState>([])

    const table = useReactTable({
        data: participants,
        columns,
        state: {
            sorting
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    })

    return (
        <div className="container mx-auto pb-10 space-y-6" >
            <div className="w-full flex items-center justify-between" >
                <div className="flex flex-col gap-2" >
                    <h4 className="text-2xl font-semibold" > Scoreboard </h4>
                    < p className="text-base font-normal text-accent-foreground" > Result of latest quiz </p>
                </div>
                {/* {participants.length === 0 ? <AddParticipantsModal /> : ""} */}
            </div>
            < div >
                <Table className="bg-white rounded-md border" >
                    <TableHeader>
                        {
                            table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id} >
                                    {
                                        headerGroup.headers.map((header) => (
                                            <TableHead key={header.id} >
                                                {
                                                    header.isPlaceholder
                                                        ? null
                                                        : flexRender(header.column.columnDef.header, header.getContext())
                                                }
                                            </TableHead>
                                        ))
                                    }
                                </TableRow>
                            ))}
                    </TableHeader>
                    <TableBody>
                        {
                            table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow key={row.id} >
                                        {
                                            row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id} >
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())
                                                    }
                                                </TableCell>
                                            ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center" >
                                        No records found.
                                    </TableCell>
                                </TableRow>
                            )}
                    </TableBody>
                </Table>
            </div>

            {/* < EditParticipantDetailsDialog
                participant={selectedParticipant}
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                onSave={handleSave}
                schools={participants}
            /> */}
        </div>
    )
}
