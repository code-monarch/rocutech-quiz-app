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
import { Button } from "@/components/ui/button"
import { QUIZ_PARTICIPANTS } from "@/lib/constants"
import { Hidden } from "@/pattern/common/atoms/hidden"

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
        const saved = localStorage?.getItem(QUIZ_PARTICIPANTS)
        if (saved) {
            const rawData = JSON?.parse(saved)
            setParticipants(rawData as Participant[])
        }
    }, [])

    const [selectedParticipant, setSelectedParticipant] = React.useState<Participant | null>(null)
    const [dialogOpen, setDialogOpen] = React.useState(false)

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
            }
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

    const clearLocalStorage = () => {
        if (typeof window !== 'undefined') {
            localStorage.clear();
            window.location.reload();
        }
    }

    return (
        <div className="container mx-auto pb-10 space-y-6" >
            <div className="w-full flex items-center justify-between" >
                <div className="flex flex-col gap-2" >
                    <h4 className="text-2xl text-white font-semibold" > Scoreboard </h4>
                    < p className="text-base font-normal text-white" > Result of latest quiz </p>
                </div>
                <Hidden isVisible={table.getRowModel().rows.length > 0 ? true : false}>
                    <Button variant="destructive" size="lg" onClick={() => clearLocalStorage()}>Clear all data</Button>
                </Hidden>
            </div>
            < div >
                <Table className="bg-white rounded-md border" >
                    <TableHeader className="!bg-white !text-black">
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
        </div>
    )
}
