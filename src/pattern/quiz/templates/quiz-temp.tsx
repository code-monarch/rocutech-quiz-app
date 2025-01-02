'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Clock } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { IQuestion, physics } from '@/lib/questions/physics'
import { chemistry } from '@/lib/questions/chemistry'
import { mathematics } from '@/lib/questions/mathematics'
import { english } from '@/lib/questions/english'
import { currentAffairs } from '@/lib/questions/current-affairs'
import { APP_ROUTES, CREATE_QUIZ_ROUTES } from '@/lib/routes'
import { ParticipantCard } from '../organisms/paricipant-card'

interface Participant {
    id: number
    name: string
    score: number
}

export default function QuizTemp() {
    const { push } = useRouter()
    const searchParams = useSearchParams()

    const subjectsParam = searchParams.get('subjects')
    const subjects: string[] = subjectsParam
        ? subjectsParam.includes(',')
            ? subjectsParam.split(',').map(subject => subject.trim())
            : [subjectsParam]
        : []

    const questionsParam = searchParams.get('questions')
    const totalQuestions: number = questionsParam ? parseInt(questionsParam, 10) : 10

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [timeLeft, setTimeLeft] = useState<number>(300) // 5:00 in seconds
    const [currentQuestions, setCurrentQuestions] = useState<IQuestion[]>([])
    const [participants, setParticipants] = useState<Participant[]>([
        { id: 1, name: 'Player 1', score: 0 },
        { id: 2, name: 'Player 2', score: 0 },
        { id: 3, name: 'Player 3', score: 0 },
    ])
    const [currentParticipantIndex, setCurrentParticipantIndex] = useState<number>(0)
    const [failedAttempts, setFailedAttempts] = useState<number>(0)
    const [isBonusQuestion, setIsBonusQuestion] = useState<boolean>(false)
    const [bonusQuestion, setBonusQuestion] = useState<IQuestion | null>(null)
    const [currentQuestionAnsweredCorrectly, setCurrentQuestionAnsweredCorrectly] = useState<boolean>(false)
    const [justAnsweredBonus, setJustAnsweredBonus] = useState<boolean>(false)

    // Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev > 0) {
                    return prev - 1
                } else {
                    clearInterval(timer)
                    handleParticipantAnswer(false)
                    return 0
                }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [currentQuestions, currentQuestionIndex, currentParticipantIndex, isBonusQuestion])

    // Fetch questions based on subjects
    useEffect(() => {
        const fetchedQuestions: IQuestion[] = []

        const fetchRandomQuestions = (questionsArray: IQuestion[], count: number): IQuestion[] => {
            const shuffledQuestions = [...questionsArray].sort(() => Math.random() - 0.5)
            return shuffledQuestions.slice(0, count)
        }

        if (subjects.length > 0) {
            const questionsPerSubject = Math.ceil(totalQuestions / subjects.length)

            subjects.forEach((subject) => {
                switch (subject.toLowerCase()) {
                    case 'physics':
                        fetchedQuestions.push(...fetchRandomQuestions(physics, questionsPerSubject))
                        break
                    case 'chemistry':
                        fetchedQuestions.push(...fetchRandomQuestions(chemistry, questionsPerSubject))
                        break
                    case 'mathematics':
                        fetchedQuestions.push(...fetchRandomQuestions(mathematics, questionsPerSubject))
                        break
                    case 'english':
                        fetchedQuestions.push(...fetchRandomQuestions(english, questionsPerSubject))
                        break
                    case 'current-affairs':
                        fetchedQuestions.push(...fetchRandomQuestions(currentAffairs, questionsPerSubject))
                        break
                    default:
                        console.warn(`Unknown subject: ${subject}`)
                }
            })

            const shuffledQuestions = fetchedQuestions.sort(() => Math.random() - 0.5).slice(0, totalQuestions)
            setCurrentQuestions(shuffledQuestions)
        }
    }, [])

    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    const handleNextQuestion = (): void => {
        setSelectedOption(null)
        setTimeLeft(300)
        setFailedAttempts(0)
        setIsBonusQuestion(false)
        setBonusQuestion(null)
        setCurrentQuestionAnsweredCorrectly(false)
        setJustAnsweredBonus(false)

        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            console.log("Quiz completed!")
            push(APP_ROUTES.participants)
        }

        if (!justAnsweredBonus) {
            setCurrentParticipantIndex((prevIndex) => (prevIndex + 1) % participants.length)
        }
    }

    const handleParticipantAnswer = (isCorrect: boolean): void => {
        setSelectedOption(currentQuestion?.correctAnswer || null)

        setTimeout(() => {
            if (isCorrect) {
                setParticipants((prevParticipants) =>
                    prevParticipants.map((participant, index) =>
                        index === currentParticipantIndex
                            ? { ...participant, score: participant.score + (isBonusQuestion ? 2 : 1) }
                            : participant
                    )
                )

                if (isBonusQuestion) {
                    setIsBonusQuestion(false)
                    setBonusQuestion(null)
                    setJustAnsweredBonus(true)
                    setTimeLeft(300)
                } else {
                    handleNextQuestion()
                }
            } else {
                setFailedAttempts((prev) => prev + 1)

                if (isBonusQuestion || failedAttempts + 1 >= participants.length - 1) {
                    handleNextQuestion()
                } else {
                    setCurrentParticipantIndex((prevIndex) => (prevIndex + 1) % participants.length)
                    setIsBonusQuestion(true)
                    setBonusQuestion(currentQuestions[currentQuestionIndex])
                    setTimeLeft(300)
                    setJustAnsweredBonus(false)
                }
            }
        }, 2000)
    }

    const currentQuestion: IQuestion | null = isBonusQuestion ? bonusQuestion : currentQuestions[currentQuestionIndex] || null

    return (
        <div className="flex max-w-7xl mx-auto p-4">
            <div className="flex-grow mr-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                        <CardTitle className="text-xl font-bold capitalize">
                            {subjects.join(', ')}
                            {isBonusQuestion && <span className="ml-2 text-sm font-normal text-green-600">(Bonus Question)</span>}
                            {justAnsweredBonus && <span className="ml-2 text-sm font-normal text-blue-600">(Regular Question after Bonus)</span>}
                        </CardTitle>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span className="text-sm font-medium">{formatTime(timeLeft)}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Question <span className="font-medium">{currentQuestionIndex + 1}</span> of <span className="font-medium">{currentQuestions.length}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Failed Attempts: <span className="font-medium">{failedAttempts}</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6 transition-all duration-300">
                        <div className="text-lg font-medium">
                            {currentQuestion?.question || "No questions available"}
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm text-muted-foreground mb-4">Select one option</p>
                            {currentQuestion?.options?.map?.((option) => (
                                <div
                                    key={option}
                                    className={`p-4 rounded-lg border transition-colors duration-300 cursor-pointer
                                    ${selectedOption === option
                                            ? (option.charAt(0).toLowerCase() === currentQuestion.correctAnswer?.charAt(0)?.toLowerCase()
                                                ? 'border-green-500 bg-green-500 bg-opacity-10 text-green-600'
                                                : 'border-red-500 bg-red-500 bg-opacity-10 text-red-600')
                                            : 'bg-white text-black hover:border-gray-400'}`}
                                    onClick={() => setSelectedOption(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>

                        {selectedOption && (
                            <div className="mt-6 space-y-3 transition-all duration-300">
                                <div className="text-sm font-medium">Solution</div>
                                <div className="p-4 rounded-lg border border-green-500">
                                    <div className="text-green-500 font-medium">Correct Answer: {currentQuestion?.correctAnswer}</div>
                                </div>

                                {currentQuestion?.explanation && (
                                    <div className='flex items-start text-black transition-all duration-300'>
                                        <span className='font-medium'>Explanation: </span>
                                        <p className='ml-2'>{currentQuestion.explanation}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="w-full flex justify-between pt-6">
                        <Button size="lg" variant="outline" onClick={() => push(CREATE_QUIZ_ROUTES.createQuiz)}>
                            Cancel quiz
                        </Button>

                        <Button
                            size="lg"
                            onClick={() => handleParticipantAnswer(selectedOption?.charAt(0).toLowerCase() === currentQuestion?.correctAnswer?.charAt(0).toLowerCase())}
                            disabled={selectedOption === null}
                        >
                            Submit Answer
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="w-48 space-y-4">
                {participants.map((participant, index) => (
                    <ParticipantCard
                        key={participant.id}
                        name={participant.name}
                        isCurrent={index === currentParticipantIndex}
                        isNext={index === (currentParticipantIndex + 1) % participants.length}
                    />
                ))}
            </div>
        </div>
    )
}
