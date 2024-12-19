'use client'

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Home } from 'lucide-react'

// Sample data for the graph
const graphData = Array.from({ length: 20 }, (_, i) => ({
    score: Math.floor(Math.random() * 200) + 100,
    avatar: `/placeholder.svg?height=32&width=32`
}))

const leaderboardData = Array.from({ length: 8 }, () => ({
    school: "School 1",
    name: "Student one sc1",
    chemistry: 0,
    points: 0
}))

export default function QuizCompletion() {
    // Calculate the maximum score for graph scaling
    const maxScore = Math.max(...graphData.map(d => d.score))

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">Quiz Successfully Completed</h1>
                    <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
                        <Home className="mr-2 h-4 w-4" />
                        Return to Home Page
                    </Button>
                </div>

                <div className="border rounded-lg p-6 bg-white">
                    <h2 className="text-lg font-medium mb-6">Quiz Score Board</h2>

                    {/* Graph */}
                    <div className="relative h-[300px] mb-8">
                        <div className="absolute inset-0 flex items-end">
                            {graphData.map((data, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center">
                                    <div className="relative flex-1 w-px">
                                        <div
                                            className="absolute bottom-0 w-px bg-blue-500"
                                            style={{
                                                height: `${(data.score / maxScore) * 100}%`,
                                                left: '50%',
                                                transform: 'translateX(-50%)'
                                            }}
                                        />
                                        <div
                                            className="absolute bottom-0 w-2 h-2 bg-blue-500 rounded-full"
                                            style={{
                                                bottom: `${(data.score / maxScore) * 100}%`,
                                                left: '50%',
                                                transform: 'translate(-50%, 50%)'
                                            }}
                                        />
                                    </div>
                                    <Avatar className="w-8 h-8 mt-4">
                                        <AvatarImage src={data.avatar} alt="User avatar" />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                </div>
                            ))}
                        </div>

                        {/* Y-axis labels */}
                        <div className="absolute left-0 inset-y-0 w-12 flex flex-col justify-between">
                            {[300, 200, 100, 0].map((value) => (
                                <div key={value} className="text-sm text-gray-500">
                                    {value}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Leaderboard Table */}
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[200px]">Full Name</TableHead>
                                <TableHead className="w-[300px]">School Name</TableHead>
                                <TableHead className="w-[100px] text-right">Chemistry</TableHead>
                                <TableHead className="w-[150px] text-right">Today's Ranking</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {leaderboardData.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{row.name}</TableCell>
                                    <TableCell>{row.school}</TableCell>
                                    <TableCell className="text-right">{row.chemistry}</TableCell>
                                    <TableCell className="text-right">{row.points} Points</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

