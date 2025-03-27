"use client"

import React, { useState, useEffect, useMemo, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Clock } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { APP_ROUTES, CREATE_QUIZ_ROUTES } from '@/lib/routes'
import { QUESTION_BATCH, QUIZ_PARTICIPANTS, SELECTED_STUDENTS } from '@/lib/constants'
import { cn, formatTextWithBreakMarkers, formatTime } from '@/lib/utils'
import { IQuestion } from '@/lib/questions/types'
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog'
import { useToast } from '@/hooks/use-toast'
import { BATCH_ONE_QUESTIONS } from '@/lib/questions/batch-1'
import { BATCH_TWO_QUESTIOINS } from '@/lib/questions/batch-2'
import { BATCH_THREE_QUESTIONS } from '@/lib/questions/batch-3'
import { BATCH_FOUR_QUESTIONS } from '@/lib/questions/batch-4'
import { BATCH_FIVE_QUESTIONS } from '@/lib/questions/batch-5'
import { BATCH_SIX_QUESTIONS } from '@/lib/questions/batch-6'
import { BATCH_SEVEN_QUESTIONS } from '@/lib/questions/batch-7'
import { BATCH_EIGHT_QUESTIONS } from '@/lib/questions/batch-8'
import { BATCH_NINE_QUESTIONS } from '@/lib/questions/batch-9'
import { BATCH_TEN_QUESTIONS } from '@/lib/questions/batch-10'
import { BATCH_ELEVEN_QUESTIONS } from '@/lib/questions/batch-11'
import { BATCH_TWELVE_QUESTIONS } from '@/lib/questions/batch-12'
import { BATCH_THIRTEEN_QUESTIONS } from '@/lib/questions/batch-13'
import { BATCH_FOURTEEN_QUESTIONS } from '@/lib/questions/batch-14'
import { BATCH_FIFHTEEN_QUESTIONS } from '@/lib/questions/batch-15'
import { BATCH_SIXTEEN_QUESTIONS } from '@/lib/questions/batch-16'
import { BATCH_SEVENTEEN_QUESTIONS } from '@/lib/questions/batch-17'
import { BATCH_EIGHTEEN_QUESTIONS } from '@/lib/questions/batch-18'
import { BATCH_NINETEEN_QUESTIONS } from '@/lib/questions/batch-19'
import { BATCH_TWENTY_QUESTIONS } from '@/lib/questions/batch-20'

const TIME = 75
const BONUS_TIME = 30
const REVEAL_TIME = 10

interface Participant {
    name: string
    points: number
}

const QuizTemp = React.memo(function QuizTemp() {
    const { push } = useRouter()
    const searchParams = useSearchParams()
    const { toast } = useToast()

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
    const [bonusQuestion, setBonusQuestion] = useState<IQuestion | null>(null)
    const [justAnsweredBonus, setJustAnsweredBonus] = useState<boolean>(false)
    const [revealAnswer, setRevealAnswer] = useState<boolean>(false)
    const [revealTimer, setRevealTimer] = useState<number | null>(null)
    const [answerSubmitted, setAnswerSubmitted] = useState<boolean>(false)
    const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false)
    const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false)
    const [showScores, setShowScores] = useState<boolean>(false)
    const [questions, setQuestions] = useState<IQuestion[]>([])
    const [lastFailedOption, setLastFailedOption] = useState<string | null>(null)

    useEffect(() => {
        const savedQuizFinished = localStorage.getItem('quizFinished')
        if (savedQuizFinished === 'true') {
            setIsQuizFinished(true)
            setShowScores(true)
        }
    }, [])

    const questionBatch = typeof window !== "undefined" ? localStorage.getItem(QUESTION_BATCH) : null

    useEffect(() => {
        if (questionBatch) {
            switch (questionBatch) {
                case "1": setQuestions(BATCH_ONE_QUESTIONS); break;
                case "2": setQuestions(BATCH_TWO_QUESTIOINS); break;
                case "3": setQuestions(BATCH_THREE_QUESTIONS); break;
                case "4": setQuestions(BATCH_FOUR_QUESTIONS); break;
                case "5": setQuestions(BATCH_FIVE_QUESTIONS); break;
                case "6": setQuestions(BATCH_SIX_QUESTIONS); break;
                case "7": setQuestions(BATCH_SEVEN_QUESTIONS); break;
                case "8": setQuestions(BATCH_EIGHT_QUESTIONS); break;
                case "9": setQuestions(BATCH_NINE_QUESTIONS); break;
                case "10": setQuestions(BATCH_TEN_QUESTIONS); break;
                case "11": setQuestions(BATCH_ELEVEN_QUESTIONS); break;
                case "12": setQuestions(BATCH_TWELVE_QUESTIONS); break;
                case "13": setQuestions(BATCH_THIRTEEN_QUESTIONS); break;
                case "14": setQuestions(BATCH_FOURTEEN_QUESTIONS); break;
                case "15": setQuestions(BATCH_FIFHTEEN_QUESTIONS); break;
                case "16": setQuestions(BATCH_SIXTEEN_QUESTIONS); break;
                case "17": setQuestions(BATCH_SEVENTEEN_QUESTIONS); break;
                case "18": setQuestions(BATCH_EIGHTEEN_QUESTIONS); break;
                case "19": setQuestions(BATCH_NINETEEN_QUESTIONS); break;
                case "20": setQuestions(BATCH_TWENTY_QUESTIONS); break;
                default: setQuestions(BATCH_ONE_QUESTIONS)
            }
        }
    }, [])

    useEffect(() => {
        if (isBonusQuestion) {
            toast({
                title: "🎉 Bonus Question!",
                description: "This question is worth 1 point!",
                duration: 3000,
                className: "bg-white text-lg"
            })
        }
    }, [isBonusQuestion, toast])

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

    useEffect(() => {
        setTimeLeft(isBonusQuestion ? BONUS_TIME : TIME)
        setIsTimerRunning(false)
    }, [currentQuestionIndex, isBonusQuestion])

    useEffect(() => {
        if (isTimerRunning && !revealAnswer) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev > 0) return prev - 1
                    clearInterval(timer)
                    handleParticipantAnswer(false)
                    return 0
                })
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [isTimerRunning, revealAnswer])

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

    useEffect(() => {
        if (questions) {
            const shuffledQuestions = questions?.sort(() => Math.random() - 0.5).slice(0, totalQuestions)
            setCurrentQuestions(shuffledQuestions)
        }
    }, [questions])

    const handleQuizFinish = () => {
        setIsQuizFinished(true)
        localStorage.setItem('quizFinished', 'true')
        localStorage.setItem(QUIZ_PARTICIPANTS, JSON.stringify(participantsRef.current))
    }

    const handleNextQuestion = (): void => {
        setRevealAnswer(false)
        setSelectedOption(null)
        setFailedAttempts(0)
        setBonusQuestion(null)
        setJustAnsweredBonus(false)
        setRevealAnswer(false)
        setAnswerSubmitted(false)
        setLastFailedOption(null)

        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            handleQuizFinish()
        }

        if (!justAnsweredBonus && !isBonusQuestion) {
            setCurrentParticipantIndex((prevIndex) => (prevIndex + 1) % participantsRef.current.length)
        }
    }

    useEffect(() => {
        if (failedAttempts === 1) setIsBonusQuestion(true)
        else setIsBonusQuestion(false)
    }, [failedAttempts])

    const handleParticipantAnswer = (isCorrect: boolean): void => {
        setRevealTimer(null)

        if (isCorrect) {
            const points = isBonusQuestion ? 1 : 2
            const updatedParticipants = participantsRef.current.map((participant, index) =>
                index === currentParticipantIndex
                    ? { ...participant, points: participant.points + points }
                    : participant
            )
            participantsRef.current = updatedParticipants
        }

        if ((isCorrect && !isBonusQuestion) || (isCorrect && isBonusQuestion)) {
            handleNextQuestion()
        } else if (!isCorrect && !isBonusQuestion) {
            setFailedAttempts((prev) => prev + 1)
            setCurrentParticipantIndex((prevIndex) => (prevIndex + 1) % participantsRef.current.length)
            setLastFailedOption(selectedOption)
        } else {
            handleNextQuestion()
        }
    }

    const calculateWinner = (): Participant[] => {
        if (!participantsRef.current.length) return []
        const maxScore = Math.max(...participantsRef.current.map(p => p.points))
        return participantsRef.current.filter(p => p.points === maxScore)
    }

    const currentQuestion = useMemo(() =>
        currentQuestions[currentQuestionIndex] || null
        , [currentQuestions, currentQuestionIndex])

    const getSubmitButtonText = () => {
        if (answerSubmitted) {
            if (currentQuestionIndex === currentQuestions.length - 1) return "End Quiz"
            return isBonusQuestion && !revealAnswer ? "Reveal Answer" : "Next Question"
        }
        return "Submit Answer"
    }

    const getOptionClasses = (option: string) => cn(
        "text-2xl p-4 rounded-lg border transition-colors duration-300 cursor-pointer",
        selectedOption === option && !revealAnswer
            ? 'border-blue-500 bg-blue-500 bg-opacity-10 text-blue-600'
            : 'bg-white text-black hover:border-gray-400',
        selectedOption === option && revealAnswer &&
        selectedOption.charAt(0).toLowerCase() === currentQuestion?.correctAnswer?.charAt(0)?.toLowerCase() &&
        'border-green-500 bg-green-500 bg-opacity-10 text-green-600',
        (
            (selectedOption === option && revealAnswer &&
                selectedOption.charAt(0).toLowerCase() !== currentQuestion?.correctAnswer?.charAt(0)?.toLowerCase()) ||
            option === lastFailedOption
        ) && 'border-red-500 bg-red-500 bg-opacity-10 text-red-600',
    )

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
                        <div className="w-fit flex items-start gap-1 text-2xl font-medium">
                            <div className='w-full flex flex-col text-2xl font-medium'>
                                {formatTextWithBreakMarkers(currentQuestion?.question) || "No questions available"}
                            </div>
                            {isBonusQuestion && <span className="ml-2 text-lg font-normal text-green-600 whitespace-nowrap">(Bonus Question)</span>}
                        </div>

                        <div className="space-y-3">
                            <p className="text-base text-muted-foreground mb-4">Select one option</p>
                            {currentQuestion?.options?.map?.((option) => (
                                <div
                                    key={option}
                                    className={getOptionClasses(option)}
                                    onClick={() => setSelectedOption(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>

                        {selectedOption && revealAnswer && (
                            <div className="mt-6 space-y-3 transition-all duration-300">
                                {isBonusQuestion &&
                                    <p className='text-xl text-green-600 font-medium transition-all duration-300'>
                                        Correct Answer: <span className="text-lg font-bold">{currentQuestion?.correctAnswer}</span>
                                    </p>
                                }
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
                            {getSubmitButtonText()}
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            {isQuizFinished && (
                <AlertDialog open={isQuizFinished}>
                    <AlertDialogContent className="bg-white sm:max-w-[525px]">
                        <AlertDialogHeader>
                            <AlertDialogTitle className="text-2xl">
                                {showScores ? "Quiz Results" : "Quiz Complete!"}
                            </AlertDialogTitle>
                        </AlertDialogHeader>

                        {!showScores ? (
                            <div className="space-y-4">
                                <AlertDialogDescription className="text-lg">
                                    All questions have been answered!
                                </AlertDialogDescription>
                                <Button
                                    className="w-full text-lg"
                                    onClick={() => setShowScores(true)}
                                >
                                    Reveal Scores
                                </Button>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    {participantsRef.current
                                        .sort((a, b) => b.points - a.points)
                                        .map((participant, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center p-2 rounded-lg bg-gray-100"
                                            >
                                                <span className="text-lg font-medium">
                                                    {participant.name}
                                                </span>
                                                <span className="text-lg font-semibold">
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
                                            className="text-green-600 font-bold text-xl"
                                        >
                                            🏆 {winner.name} 🏆
                                        </div>
                                    ))}
                                </div>
                                <AlertDialogAction
                                    onClick={() => {
                                        localStorage.removeItem('quizFinished')
                                        push(APP_ROUTES.scoreboard)
                                    }}
                                    className='w-full'
                                >
                                    View Scoreboard
                                </AlertDialogAction>
                            </div>
                        )}
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    )
})

export default QuizTemp