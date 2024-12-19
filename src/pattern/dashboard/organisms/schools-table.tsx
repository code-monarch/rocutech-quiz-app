"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const data: School[] = [
    {
        schoolName: "School 1",
        mathematics: 0,
        currentAffairs: 0,
        physics: 0,
        chemistry: 0,
        ranking: 0
    },
    {
        schoolName: "School 2",
        mathematics: 0,
        currentAffairs: 0,
        physics: 0,
        chemistry: 0,
        ranking: 0
    },
    {
        schoolName: "School 3",
        mathematics: 0,
        currentAffairs: 0,
        physics: 0,
        chemistry: 0,
        ranking: 0
    },
    {
        schoolName: "School 4",
        mathematics: 0,
        currentAffairs: 0,
        physics: 0,
        chemistry: 0,
        ranking: 0
    },
    {
        schoolName: "School 5",
        mathematics: 0,
        currentAffairs: 0,
        physics: 0,
        chemistry: 0,
        ranking: 0
    }
]

export type School = {
    schoolName: string
    mathematics: number
    currentAffairs: number
    physics: number
    chemistry: number
    ranking: number
}

export const columns: ColumnDef<School>[] = [
    // School Name
    {
        accessorKey: "schoolName",
        header: "School Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("schoolName")}</div>
        ),
    },

    // Mathematics
    {
        accessorKey: "mathematics",
        header: "Mathematics",
        cell: ({ row }) => <div className="lowercase">{row.getValue("mathematics")}</div>
    },

    // Current Affairs
    {
        accessorKey: "currentAffairs",
        header: () => <div>Current Affairs</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("currentAffairs")}</div>
    },

    // Physics
    {
        accessorKey: "physics",
        header: () => <div>Physics</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("physics")}</div>
    },

    // Chemistry
    {
        accessorKey: "chemistry",
        header: () => <div>Chemistry</div>,
        cell: ({ row }) => <div className="lowercase">{row.getValue("chemistry")}</div>
    },

    // Ranking
    {
        accessorKey: "ranking",
        header: () => <div>Ranking</div>,
        cell: ({ row }) => <div className="lowercase font-semibold">{row.getValue("ranking")} Points</div>
    },
]

export const SchoolsTable = () => {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
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
