import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Participant {
    name: string
    school: string
    points: number
}

export default function ParticipantList() {
    // Generate sample data
    const participants: Participant[] = Array.from({ length: 234 }, () => ({
        name: "Nida Banks",
        school: "Rainbow International School",
        points: 1700
    }))

    return (
        <div className="max-w-5xl mx-auto p-4">
            <div className="flex items-center gap-2 mb-6">
                <h1 className="text-xl font-semibold">Participant List</h1>
                <span className="text-sm text-muted-foreground">({participants.length})</span>
            </div>

            <div className="border rounded-lg">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Student Name</TableHead>
                            <TableHead className="w-[300px]">School Name</TableHead>
                            <TableHead className="text-right">Points Game</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {participants.map((participant, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <span>{index + 1}.</span>
                                        <span>{participant.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{participant.school}</TableCell>
                                <TableCell className="text-right font-medium">
                                    {participant.points} Points
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

