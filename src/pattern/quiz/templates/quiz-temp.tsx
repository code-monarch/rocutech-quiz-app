'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { X, ChevronRight, Clock } from 'lucide-react'

interface School {
    name: string
    points: number
}

export default function QuizTemp() {
    const [selectedOption, setSelectedOption] = useState<string | null>('C')
    const [timeLeft, setTimeLeft] = useState(114) // 1:54 in seconds

    const schools: School[] = [
        { name: "Rainbow School (Nilda Banks)", points: 2000 },
        { name: "British Oasis School (Tyler Nick)", points: 1855 },
        { name: "Start Rite School (Dora Lucas)", points: 1530 },
        { name: "British Spring Academy (Zack Stephan)", points: 1200 },
        { name: "Preinoire Academy (Steven Mike)", points: 1040 }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                    <CardTitle className="text-xl font-bold">Current Affairs Quiz</CardTitle>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm font-medium">{formatTime(timeLeft)}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            Question <span className="font-medium">1</span> of <span className="font-medium">50</span>
                        </div>
                        <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="text-lg font-medium">
                        Being Obliged to break confidentiality in a therapeutic relationship is always a direct results of the law
                    </div>

                    <div className="space-y-3">
                        <p className="text-sm text-muted-foreground mb-4">Select one option</p>
                        {['A', 'B', 'C', 'D'].map((option) => (
                            <div
                                key={option}
                                className={`p-4 rounded-lg border transition-colors cursor-pointer
                  ${selectedOption === option
                                        ? 'border-green-500 bg-green-500 bg-opacity-10 text-green-600'
                                        : 'hover:border-gray-400'}`}
                                onClick={() => setSelectedOption(option)}
                            >
                                Option {option}
                            </div>
                        ))}
                    </div>

                    {selectedOption && (
                        <div className="mt-6 space-y-3">
                            <div className="text-sm font-medium">Solution</div>
                            <div className="p-4 rounded-lg border border-green-500">
                                <div className="text-green-500 font-medium">Correct Answer</div>
                            </div>
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex justify-end pt-6">
                    <Button className="bg-blue-500 hover:bg-blue-600">
                        Next Question
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
                {schools.map((school, index) => (
                    <div key={index} className="text-center space-y-1">
                        <div className="text-xs text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                            {school.name}
                        </div>
                        <div className="text-xs font-medium">{school.points} Points</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

