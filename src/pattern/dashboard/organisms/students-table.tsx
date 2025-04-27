import { useEffect, useState } from "react";
import { z } from "zod";
import {
    ColumnDef,
    SortingState,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    useReactTable,
    flexRender,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { PARTICIPANTS } from "@/lib/constants";
import { ParticipantFormData, participantFormSchema, studentSchema } from "@/pattern/types";

// Table columns
export const columns: ColumnDef<z.infer<typeof studentSchema>>[] = [
    {
        accessorKey: "name",
        header: "Student Name",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name") ?? "N/A"}</div>
        ),
    },
    {
        accessorKey: "points",
        header: () => <div>Points</div>,
        cell: ({ row }) => (
            <div className="lowercase font-semibold">
                {row.getValue("points") ?? 0} Points
            </div>
        ),
    },
];

// Extract students from valid data
const extractStudents = (data: unknown): z.infer<typeof studentSchema>[] => {
    try {
        // Handle array directly
        const parsedData = Array.isArray(data) ? data : [data];
        const allStudents: z.infer<typeof studentSchema>[] = [];

        parsedData.forEach(item => {
            // Extract students from each item
            item.students?.forEach((student: { name: any; points: any; }) => {
                allStudents.push({
                    name: student.name,
                    points: student.points ?? "0"
                });
            });
        });

        return allStudents;

    } catch (error) {
        console.error("Invalid data structure:", error);
        return [];
    }
};

export const StudentsTable = () => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [students, setStudents] = useState<z.infer<typeof studentSchema>[]>([]);

    // Fetch and process data
    useEffect(() => {
        const stored = localStorage.getItem(PARTICIPANTS);
        if (stored) {
            const parsedData: z.infer<typeof participantFormSchema> = JSON.parse(stored);
            setStudents(extractStudents(parsedData));
        }
    }, []);

    const table = useReactTable({
        data: students,
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
};
