import { Card, CardContent } from "@/components/ui/card"

interface ParticipantProps {
    name: string;
    isCurrent: boolean;
    isNext: boolean;
}

export function ParticipantCard({ name, isCurrent, isNext }: ParticipantProps) {
    return (
        <Card className={`w-full ${isCurrent ? 'bg-green-100 border-green-500' : isNext ? 'bg-yellow-50 border-yellow-500' : ''} transition-all duration-300`}>
            <CardContent className="p-3 flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium">{name}</p>
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

