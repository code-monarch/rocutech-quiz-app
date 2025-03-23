"use client"

import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Clock } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { physics, Easyphysics } from '@/lib/questions/physics'
import { chemistry, EasyChemistry } from '@/lib/questions/chemistry'
import { mathematics, EasyMathematics } from '@/lib/questions/mathematics'
import { english, EasyEnglish } from '@/lib/questions/english'
import { currentAffairs, EasyCurrentAffairs } from '@/lib/questions/current-affairs'
import { APP_ROUTES, CREATE_QUIZ_ROUTES } from '@/lib/routes'
import { ParticipantCard } from '../organisms/paricipant-card'
import { QUIZ_DIFFICULTY, QUIZ_PARTICIPANTS, SELECTED_STUDENTS } from '@/lib/constants'
import { cn, formatTime } from '@/lib/utils'
import { IQuestion } from '@/lib/questions/types'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const TIME = 75 // Regular question time
const BONUS_TIME = 30 // Bonus question time
const REVEAL_TIME = 10 // Reveal time in seconds

interface Participant {
    name: string
    points: number
}

const QuizTemp = React.memo(function QuizTemp() {
    const { push } = useRouter()
    const searchParams = useSearchParams()

    const subjectsParam = searchParams.get('subjects')
    const subjects: string[] = subjectsParam
        ? subjectsParam.includes(',')
            ? subjectsParam.split(',')?.map(subject => subject.trim())
            : [subjectsParam]
        : []

    const questionsParam = searchParams.get('questions')
    const totalQuestions: number = questionsParam ? parseInt(questionsParam, 10) : 10

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [timeLeft, setTimeLeft] = useState<number>(TIME)
    const [currentQuestions, setCurrentQuestions] = useState<IQuestion[]>([])
    const participantsRef = useRef<Participant[]>([])
    const [currentParticipantIndex, setCurrentParticipantIndex] = useState<number>(0)
    const [failedAttempts, setFailedAttempts] = useState<number>(0)
    const [isBonusQuestion, setIsBonusQuestion] = useState<boolean>(false)
    console.log("IS BONUS QUESTION: ", isBonusQuestion)
    const [bonusQuestion, setBonusQuestion] = useState<IQuestion | null>(null)
    const [justAnsweredBonus, setJustAnsweredBonus] = useState<boolean>(false)
    const [revealAnswer, setRevealAnswer] = useState<boolean>(false)
    const [revealTimer, setRevealTimer] = useState<number | null>(null)
    const [answerSubmitted, setAnswerSubmitted] = useState<boolean>(false)
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)
    const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false)
    const [showScores, setShowScores] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedParticipants = localStorage.getItem(SELECTED_STUDENTS)
            try {
                const parsedParticipants = storedParticipants
                    ? JSON.parse(storedParticipants).map((participant: string) => ({
                        name: participant || "Unknown",
                        points: 0,
                    }))
                    : []
                participantsRef.current = parsedParticipants
            } catch (error) {
                console.error("Error parsing participants from localStorage:", error)
                participantsRef.current = []
            }
        }
    }, [])

    // Set initial time based on question type
    useEffect(() => {
        setTimeLeft(isBonusQuestion ? BONUS_TIME : TIME)
    }, [isBonusQuestion])

    // Timer effect
    useEffect(() => {
        if (isTimerRunning && !revealAnswer) {
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
        }
    }, [isTimerRunning, currentQuestions, currentQuestionIndex, currentParticipantIndex, isBonusQuestion, revealAnswer])

    // Reveal timer effect
    useEffect(() => {
        if (revealAnswer && revealTimer === null) {
            const timer = setTimeout(() => {
                setRevealTimer(null)
                handleParticipantAnswer(
                    selectedOption?.charAt(0).toLowerCase() ===
                    currentQuestion?.correctAnswer?.charAt(0)?.toLowerCase()
                )
                setIsBonusQuestion(false)
            }, REVEAL_TIME * 1000)

            return () => clearTimeout(timer)
        }
    }, [revealAnswer, revealTimer, selectedOption])

    // Questions setup
    useEffect(() => {
        const fetchedQuestions: IQuestion[] = []
        const difficulty = localStorage.getItem(QUIZ_DIFFICULTY) as "easy" | "regular"

        const fetchRandomQuestions = (questionsArray: IQuestion[], count: number): IQuestion[] => {
            const shuffledQuestions = [...questionsArray].sort(() => Math.random() - 0.5)
            return shuffledQuestions.slice(0, count)
        }

        if (subjects.length > 0) {
            const questionsPerSubject = Math.ceil(totalQuestions / subjects.length)

            subjects?.forEach((subject) => {
                switch (subject.toLowerCase()) {
                    case 'physics':
                        if (difficulty === "easy") {
                            fetchedQuestions?.push(...fetchRandomQuestions(Easyphysics, questionsPerSubject))
                        } else {
                            fetchedQuestions?.push(...fetchRandomQuestions(physics, questionsPerSubject))
                        }
                        break
                    case 'chemistry':
                        if (difficulty === "easy") {
                            fetchedQuestions?.push(...fetchRandomQuestions(EasyChemistry, questionsPerSubject))
                        } else {
                            fetchedQuestions?.push(...fetchRandomQuestions(chemistry, questionsPerSubject))
                        }
                        break
                    case 'mathematics':
                        if (difficulty === "easy") {
                            fetchedQuestions?.push(...fetchRandomQuestions(EasyMathematics, questionsPerSubject))
                        } else {
                            fetchedQuestions?.push(...fetchRandomQuestions(mathematics, questionsPerSubject))
                        }
                        break
                    case 'english':
                        if (difficulty === "easy") {
                            fetchedQuestions?.push(...fetchRandomQuestions(EasyEnglish, questionsPerSubject))
                        } else {
                            fetchedQuestions?.push(...fetchRandomQuestions(english, questionsPerSubject))
                        }
                        break
                    case 'current-affairs':
                        if (difficulty === "easy") {
                            fetchedQuestions?.push(...fetchRandomQuestions(EasyCurrentAffairs, questionsPerSubject))
                        } else {
                            fetchedQuestions?.push(...fetchRandomQuestions(currentAffairs, questionsPerSubject))
                        }
                        break
                    default:
                        console.warn(`Unknown subject: ${subject}`)
                }
            })

            const shuffledQuestions = fetchedQuestions?.sort(() => Math.random() - 0.5).slice(0, totalQuestions)
            setCurrentQuestions(shuffledQuestions)
        }
    }, [])

    const handleNextQuestion = (): void => {
        console.log("NEXT QUESTION CLICKED")
        setRevealAnswer(false)
        setSelectedOption(null)
        setIsTimerRunning(false)
        setFailedAttempts(0)
        setIsBonusQuestion(false)
        setBonusQuestion(null)
        setJustAnsweredBonus(false)
        setRevealAnswer(false)
        setAnswerSubmitted(false)

        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            setIsQuizFinished(true) // Changed from direct push to scoreboard
        }

        if (!justAnsweredBonus && !isBonusQuestion) {
            setCurrentParticipantIndex((prevIndex) => (prevIndex + 1) % participantsRef.current.length)
        }
    }

    useEffect(() => {
        if (failedAttempts === 1) {
            setIsBonusQuestion(true)
        } else {
            setIsBonusQuestion(false)
        }
    }, [failedAttempts])

    const handleParticipantAnswer = (isCorrect: boolean): void => {
        setRevealTimer(null)

        if (isCorrect && !isBonusQuestion) {
            setRevealAnswer(false)
            const updatedParticipants = participantsRef?.current?.map((participant, index) =>
                index === currentParticipantIndex
                    ? {
                        ...participant,
                        points: participant.points + (isBonusQuestion ? 1 : 2),
                    }
                    : participant
            )
            participantsRef.current = updatedParticipants
            handleNextQuestion()
        } else if (!isCorrect && !isBonusQuestion) {
            setFailedAttempts((prev) => prev + 1)
            setCurrentParticipantIndex((prevIndex) => (prevIndex + 1) % participantsRef.current.length)
        }

        if (isCorrect && isBonusQuestion) {
            setRevealAnswer(false)
            const updatedParticipants = participantsRef?.current?.map((participant, index) =>
                index === currentParticipantIndex
                    ? {
                        ...participant,
                        points: participant.points + 1,
                    }
                    : participant
            )
            participantsRef.current = updatedParticipants
            handleNextQuestion()
        } else if (!isCorrect && isBonusQuestion) {
            setRevealAnswer(false)
            handleNextQuestion()
        }
    }
    // Add this function to calculate winner
    const calculateWinner = (): Participant[] => {
        if (!participantsRef.current.length) return []
        const maxScore = Math.max(...participantsRef.current.map(p => p.points))
        return participantsRef.current.filter(p => p.points === maxScore)
    }

    // Add this effect to handle quiz finish
    useEffect(() => {
        if (isQuizFinished) {
            localStorage.setItem(QUIZ_PARTICIPANTS, JSON.stringify(participantsRef.current))
        }
    }, [isQuizFinished])

    const currentQuestion = useMemo(() =>
        currentQuestions[currentQuestionIndex] || null
        , [currentQuestions, currentQuestionIndex])

    return (
        <div className="flex max-w-7xl mx-auto p-4">
            <div className="flex-grow mr-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                        <CardTitle className="text-xl font-bold capitalize">
                            {/* Quiz title */}
                        </CardTitle>
                        <div className="flex items-center gap-6">
                            <Button
                                variant="ghost"
                                onClick={() => setIsTimerRunning(!isTimerRunning)}
                                className="flex items-center gap-2"
                            >
                                <Clock className="h-4 w-4" />
                                <span className="text-3xl font-medium">
                                    {formatTime(timeLeft)}
                                </span>
                                <span className="text-base ml-2">
                                    {isTimerRunning ? '(Pause)' : '(Start)'}
                                </span>
                            </Button>
                            <div className="text-lg text-muted-foreground">
                                Question <span className="font-medium">{currentQuestionIndex + 1}</span> of <span className="font-medium">{currentQuestions.length}</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6 transition-all duration-300">
                        <div className="flex items-start gap-1 text-2xl font-medium">
                            {currentQuestion?.question || "No questions available"}
                            {isBonusQuestion && <span className="ml-2 text-lg font-normal text-green-600 whitespace-nowrap">(Bonus Question)</span>}
                        </div>

                        <div className="space-y-3">
                            <p className="text-base text-muted-foreground mb-4">Select one option</p>
                            {currentQuestion?.options?.map?.((option) => (
                                <div
                                    key={option}
                                    className={cn("text-2xl p-4 rounded-lg border transition-colors duration-300 cursor-pointer",
                                        selectedOption === option
                                            ? 'border-blue-500 bg-blue-500 bg-opacity-10 text-blue-600'
                                            : 'bg-white text-black hover:border-gray-400')}
                                    onClick={() => setSelectedOption(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>

                        {selectedOption && revealAnswer && (
                            <div className="mt-6 space-y-3 transition-all duration-300">
                                <div className="text-lg font-medium">Solution</div>
                                <p className={`font-medium text-lg p-4 rounded-lg border  
                                    ${selectedOption.charAt(0).toLowerCase() === currentQuestion?.correctAnswer?.charAt(0)?.toLowerCase()
                                        ? 'border-green-500 bg-green-500 bg-opacity-10 text-green-600'
                                        : 'border-red-500 bg-red-500 bg-opacity-10 text-red-600'}`
                                }>Correct Answer: <span className="text-lg">{currentQuestion?.correctAnswer}</span>
                                </p>

                                {currentQuestion?.explanation && (
                                    <div className='flex items-start text-black text-xl transition-all duration-300'>
                                        <span className='font-medium'>Explanation: </span>
                                        <p className='ml-2'>{currentQuestion.explanation}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="w-full flex justify-between pt-6">
                        <Button size="lg" variant="outline" className='text-lg' onClick={() => push(CREATE_QUIZ_ROUTES.createQuiz)}>
                            Cancel quiz
                        </Button>

                        <Button
                            size="lg"
                            className='text-xl'
                            onClick={() => {
                                setAnswerSubmitted(true)
                                if (!revealAnswer && (selectedOption?.charAt(0).toLowerCase() === currentQuestion?.correctAnswer?.charAt(0).toLowerCase() || isBonusQuestion)) {
                                    setRevealAnswer(true)
                                    setRevealTimer(REVEAL_TIME)
                                } else {
                                    handleParticipantAnswer(
                                        selectedOption?.charAt(0).toLowerCase() ===
                                        currentQuestion?.correctAnswer?.charAt(0).toLowerCase()
                                    )
                                }
                            }}
                            disabled={selectedOption === null}
                        >
                            {answerSubmitted
                                ? isBonusQuestion && !revealAnswer
                                    ? "Reveal Answer"
                                    : "Next Question"
                                : "Submit Answer"}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            {isQuizFinished && (
                <Dialog open={isQuizFinished} onOpenChange={setIsQuizFinished}>
                    <DialogContent className="bg-white sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle className="text-2xl">
                                {showScores ? "Quiz Results" : "Quiz Complete!"}
                            </DialogTitle>
                        </DialogHeader>

                        {!showScores ? (
                            <div className="space-y-4">
                                <DialogDescription className="text-lg">
                                    All questions have been answered!
                                </DialogDescription>
                                <Button
                                    className="w-full text-lg"
                                    onClick={() => setShowScores(true)}
                                >
                                    Reveal Scores
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    {participantsRef.current
                                        .sort((a, b) => b.points - a.points)
                                        .map((participant, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center p-2 rounded-lg bg-gray-100"
                                            >
                                                <span className="font-medium">
                                                    {participant.name}
                                                </span>
                                                <span className="font-semibold">
                                                    {participant.points} points
                                                </span>
                                            </div>
                                        ))}
                                </div>

                                <div className="mt-4 text-center">
                                    <h3 className="text-xl font-bold mb-2">Winner(s):</h3>
                                    {calculateWinner().map((winner, index) => (
                                        <div
                                            key={index}
                                            className="text-green-600 font-bold text-lg"
                                        >
                                            🏆 {winner.name} 🏆
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className="w-full mt-4 text-lg"
                                    onClick={() => push(APP_ROUTES.scoreboard)}
                                >
                                    View Detailed Scoreboard
                                </Button>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            )}
        </div>
    )
})

export default QuizTemp