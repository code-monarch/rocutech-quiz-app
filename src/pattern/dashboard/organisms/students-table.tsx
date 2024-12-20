"use client"

import * as React from "react"
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

// Define the Student type
export type Student = {
    id: number
    studentName: string
    schoolName: string
    points: number
}

export const columns: ColumnDef<Student>[] = [
    // Student Name
    {
        accessorKey: "studentName",
        header: "Student Name",
        cell: ({ row }) => <div className="capitalize">{row.getValue("studentName")}</div>,
    },

    // School Name
    {
        accessorKey: "schoolName",
        header: "School Name",
        cell: ({ row }) => <div className="capitalize">{row.getValue("schoolName")}</div>,
    },

    // Points
    {
        accessorKey: "points",
        header: "Points",
        cell: ({ row }) => <div className="font-semibold">{row.getValue("points")} Points</div>,
    },
]

export const StudentsTable = () => {
    const [sorting, setSorting] = React.useState<SortingState>([])

    // Get participants from localStorage
    const participants: Student[] = JSON.parse(localStorage.getItem("participants") || "[]");

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
    })

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
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}
