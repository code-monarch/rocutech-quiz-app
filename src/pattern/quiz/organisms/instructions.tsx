"use client";
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CREATE_QUIZ_ROUTES } from "@/lib/routes"
import { Clock, Computer, Eye, ListChecks, Volume2Icon as Volume2Off } from 'lucide-react'
import { FC } from "react"

interface IProps {
    subjects: string
    questions: string
}

const TestInstructions: FC<IProps> = ({ questions, subjects }) => {
    const { push } = useRouter();

    return (
        <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Instructions:</h2>
                <div className="space-y-4">
                    <div className="flex gap-3">
                        <Volume2Off className="h-5 w-5 mt-1 flex-shrink-0 text-muted-foreground" />
                        <p className="text-sm">
                            Choose a quiet and comfortable setting for taking the test where
                            interruptions are unlikely. Make sure that your environment is devoid of
                            any distractions to help keep your focus during the entire test.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Computer className="h-5 w-5 mt-1 flex-shrink-0 text-muted-foreground" />
                        <p className="text-sm">
                            Ensure that your computer and internet connection are functioning
                            correctly. Access the test using a reliable and updated web browser.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Clock className="h-5 w-5 mt-1 flex-shrink-0 text-muted-foreground" />
                        <p className="text-sm">
                            Once initiated, the timed test cannot be paused. Be ready to go through
                            the entire session without taking breaks.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <Eye className="h-5 w-5 mt-1 flex-shrink-0 text-muted-foreground" />
                        <p className="text-sm">
                            Read each question thoroughly along with all provided answer choices
                            before making your selection. Remember, there are no penalties for
                            wrong answers.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <ListChecks className="h-5 w-5 mt-1 flex-shrink-0 text-muted-foreground" />
                        <p className="text-sm">
                            Manage your time wisely to ensure that you can attempt each question
                            within the allotted time.
                        </p>
                    </div>
                </div>
                <Button className="mt-8" onClick={() => push(`${CREATE_QUIZ_ROUTES.quiz}?subjects=${subjects}&questions=${questions}`)}>Continue</Button>
            </CardContent>
        </Card>
    )
}


export { TestInstructions }