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
import { PARTICIPANTS, QUIZ_PARTICIPANTS } from "@/lib/constants";
import { School, studentSchema } from "@/pattern/types";
import { QuizParticipant, updatePoints } from "@/lib/utils";

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

// Extract and flatten students from the given school data
const extractStudents = (data: School[]): z.infer<typeof studentSchema>[] => {
    const allStudents: z.infer<typeof studentSchema>[] = [];

    data?.forEach((school) => {
        school?.students?.forEach((student) => {
            allStudents?.push({
                name: student.name,
                points: student.points ?? "0",
            });
        });
    });

    return allStudents;
};

export const StudentsTable = () => {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [students, setStudents] = useState<z.infer<typeof studentSchema>[]>([]);

    // Fetch and process data
    useEffect(() => {
        const allParticipants = JSON.parse(localStorage.getItem(PARTICIPANTS)!) as School[];
        const quizParticipants = JSON.parse(localStorage.getItem(QUIZ_PARTICIPANTS)!) as QuizParticipant[];

        // Update points based on quiz participants
        const updatedParticipants = updatePoints(allParticipants, quizParticipants);

        if (updatedParticipants) {
            const studentsData = extractStudents(updatedParticipants);
            setStudents(studentsData);  // Flattened students list
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
                                <TableHead key={header.id} className="!text-black">
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
