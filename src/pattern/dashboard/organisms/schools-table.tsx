"use client";

import { useEffect, useState } from "react"
import {
    ColumnDef,
    SortingState,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    useReactTable,
    flexRender,
} from "@tanstack/react-table"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { PARTICIPANTS } from "@/lib/constants"
import { ParticipantFormData } from "@/pattern/types";

export const columns: ColumnDef<ParticipantFormData>[] = [
    // School Name
    {
        accessorKey: "name",
        header: "School Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name") ?? "N/A"}</div>
        ),
    },

    // Points
    {
        accessorKey: "points",
        header: () => <div>Points</div>,
        cell: ({ row }) => <div className="lowercase font-semibold">{row.getValue("points") ?? 0} Points</div>
    },
]

export const SchoolsTable = () => {
    const [sorting, setSorting] = useState<SortingState>([])
    const [participants, setParticipants] = useState<ParticipantFormData[]>([])
    console.log("ALL PARTICIPANTSDD: ", participants)

    // Get participants from localStorage
    useEffect(() => {
        const stored = localStorage.getItem(PARTICIPANTS)
        if (stored) {
            setParticipants(JSON.parse(stored))
        }
    }, [])

    const table = useReactTable({
        data: participants,
        columns,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: {
            sorting,
        },
    });

    return (
        <div className="w-full">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="h-24 text-center"
                            >
                                No records found.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
