import { Card, CardContent } from "@/components/ui/card"

interface ParticipantCardProps {
    name: string
    isCurrent: boolean
    isNext: boolean
    score: number
}

export function ParticipantCard({ name, score, isCurrent, isNext }: ParticipantCardProps) {
    return (
        <Card className={`w-full ${isCurrent ? 'bg-green-100 border-green-500' : isNext ? 'bg-yellow-50 border-yellow-500' : ''} transition-all duration-300`}>
            <CardContent className="p-3 flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-sm font-medium"><span className="text-accent-foreground">score:</span> {score}</p>
                </div>
                {isCurrent && (
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                )}
                {isNext && (
                    <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                )}
            </CardContent>
        </Card>

    )
}

