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
import { formatTime } from '@/lib/utils'
import { IQuestion } from '@/lib/questions/types'

const TIME = 90 // time in seconds
const REVEAL_TIME = 10; // reveal time in seconds

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
    const [timeLeft, setTimeLeft] = useState<number>(TIME) // 5:00 in seconds
    const [currentQuestions, setCurrentQuestions] = useState<IQuestion[]>([])
    const participantsRef = useRef<Participant[]>([])
    const [currentParticipantIndex, setCurrentParticipantIndex] = useState<number>(0)
    const [failedAttempts, setFailedAttempts] = useState<number>(0)
    const [isBonusQuestion, setIsBonusQuestion] = useState<boolean>(false)
    console.log("IS BONUS QUESTION: ", isBonusQuestion)
    const [bonusQuestion, setBonusQuestion] = useState<IQuestion | null>(null)
    console.log("BONUS QUESTION: ", bonusQuestion)
    const [justAnsweredBonus, setJustAnsweredBonus] = useState<boolean>(false)
    const [revealAnswer, setRevealAnswer] = useState<boolean>(false)
    const [revealTimer, setRevealTimer] = useState<number | null>(null); // Timer for reveal period
    const [answerSubmitted, setAnswerSubmitted] = useState<boolean>(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedParticipants = localStorage.getItem(SELECTED_STUDENTS);

            try {
                const parsedParticipants = storedParticipants
                    ? JSON.parse(storedParticipants).map((participant: string) => ({
                        name: participant || "Unknown",
                        points: 0,
                    }))
                    : [];
                participantsRef.current = parsedParticipants;
            } catch (error) {
                console.error("Error parsing participants from localStorage:", error);
                participantsRef.current = [];
            }
        }
    }, []);

    // Timer
    useEffect(() => {
        if (!isBonusQuestion && !revealAnswer) {
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
    }, [currentQuestions, currentQuestionIndex, currentParticipantIndex, isBonusQuestion])

    // Reveal timer effect
    useEffect(() => {
        if (revealAnswer && revealTimer === null) {
            const timer = setTimeout(() => {
                setRevealTimer(null);
                handleParticipantAnswer(
                    selectedOption?.charAt(0).toLowerCase() ===
                    currentQuestion?.correctAnswer?.charAt(0)?.toLowerCase()
                );
                setIsBonusQuestion(false)
            }, REVEAL_TIME * 1000);

            return () => clearTimeout(timer);
        }
    }, [revealAnswer, revealTimer, selectedOption]);

    // Fetch questions based on subjects
    useEffect(() => {
        const fetchedQuestions: IQuestion[] = []

        const difficulty = localStorage.getItem(QUIZ_DIFFICULTY) as "easy" | "regular"

        const fetchRandomQuestions = (questionsArray: IQuestion[], count: number): IQuestion[] => {
            const shuffledQuestions = [...questionsArray].sort(() => Math.random() - 0.5)
            return shuffledQuestions.slice(0, count)
        }

        if (subjects.length > 0) {
            const questionsPerSubject = Math.ceil(totalQuestions / subjects.length)

            subjects.forEach((subject) => {
                switch (subject.toLowerCase()) {
                    case 'physics':
                        if (difficulty === "easy") {
                            fetchedQuestions.push(...fetchRandomQuestions(Easyphysics, questionsPerSubject))
                        } else {
                            fetchedQuestions.push(...fetchRandomQuestions(physics, questionsPerSubject))
                        }
                        break
                    case 'chemistry':
                        if (difficulty === "easy") {
                            fetchedQuestions.push(...fetchRandomQuestions(EasyChemistry, questionsPerSubject))
                        } else {
                            fetchedQuestions.push(...fetchRandomQuestions(chemistry, questionsPerSubject))
                        }
                        break
                    case 'mathematics':
                        if (difficulty === "easy") {
                            fetchedQuestions.push(...fetchRandomQuestions(EasyMathematics, questionsPerSubject))
                        } else {
                            fetchedQuestions.push(...fetchRandomQuestions(mathematics, questionsPerSubject))
                        }
                        break
                    case 'english':
                        if (difficulty === "easy") {
                            fetchedQuestions.push(...fetchRandomQuestions(EasyEnglish, questionsPerSubject))
                        } else {
                            fetchedQuestions.push(...fetchRandomQuestions(english, questionsPerSubject))
                        }
                        break
                    case 'current-affairs':
                        if (difficulty === "easy") {
                            fetchedQuestions.push(...fetchRandomQuestions(EasyCurrentAffairs, questionsPerSubject))
                        } else {
                            fetchedQuestions.push(...fetchRandomQuestions(currentAffairs, questionsPerSubject))
                        }
                        break
                    default:
                        console.warn(`Unknown subject: ${subject}`)
                }
            })

            const shuffledQuestions = fetchedQuestions.sort(() => Math.random() - 0.5).slice(0, totalQuestions)
            setCurrentQuestions(shuffledQuestions)
        }
    }, [])

    const handleNextQuestion = (): void => {
        setRevealAnswer(false)
        setSelectedOption(null)
        setTimeLeft(TIME)
        setFailedAttempts(0)
        setIsBonusQuestion(false)
        setBonusQuestion(null)
        setJustAnsweredBonus(false)
        setRevealAnswer(false)
        setAnswerSubmitted(false)

        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            console.log("Quiz completed!")
            localStorage.setItem(QUIZ_PARTICIPANTS, JSON.stringify(participantsRef?.current))
            push(APP_ROUTES.scoreboard)
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
        console.log("HANDLE ANSWEERRRR")
        setRevealTimer(null); // Clear the reveal timer

        if (isCorrect && !isBonusQuestion) {
            setRevealAnswer(false);
            const updatedParticipants = participantsRef?.current?.map((participant, index) =>
                index === currentParticipantIndex
                    ? {
                        ...participant,
                        points: participant.points + (isBonusQuestion ? 1 : 2),
                    }
                    : participant
            );
            participantsRef.current = updatedParticipants;
            handleNextQuestion();
        } else if (!isCorrect && !isBonusQuestion) {
            setFailedAttempts((prev) => prev + 1);
            setCurrentParticipantIndex((prevIndex) => (prevIndex + 1) % participantsRef.current.length);
        }

        if (isCorrect && isBonusQuestion) {
            setRevealAnswer(false);
            const updatedParticipants = participantsRef?.current?.map((participant, index) =>
                index === currentParticipantIndex
                    ? {
                        ...participant,
                        points: participant.points + 1,
                    }
                    : participant
            );
            participantsRef.current = updatedParticipants;
            handleNextQuestion();
        } else if (!isCorrect && isBonusQuestion) {
            setRevealAnswer(false);
            handleNextQuestion();
        }
    };

    const currentQuestion = useMemo(() =>
        currentQuestions[currentQuestionIndex] || null
        , [currentQuestions, currentQuestionIndex])

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
                                            ? 'border-blue-500 bg-blue-500 bg-opacity-10 text-blue-600'
                                            : 'bg-white text-black hover:border-gray-400'}`}
                                    onClick={() => setSelectedOption(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>

                        {selectedOption && revealAnswer && (
                            <div className="mt-6 space-y-3 transition-all duration-300">
                                <div className="text-sm font-medium">Solution</div>
                                <div className={`font-medium p-4 rounded-lg border  
                                    ${selectedOption.charAt(0).toLowerCase() === currentQuestion?.correctAnswer?.charAt(0)?.toLowerCase()
                                        ? 'border-green-500 bg-green-500 bg-opacity-10 text-green-600'
                                        : 'border-red-500 bg-red-500 bg-opacity-10 text-red-600'}`
                                }>Correct Answer: {currentQuestion?.correctAnswer}
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
                            onClick={() => {
                                setAnswerSubmitted(true);
                                if (!revealAnswer && (selectedOption?.charAt(0).toLowerCase() ===
                                    currentQuestion?.correctAnswer?.charAt(0).toLowerCase() || isBonusQuestion)) {
                                    // Reveal the answer first if not already revealed
                                    setRevealAnswer(true);
                                    setRevealTimer(REVEAL_TIME);
                                } else {
                                    // Process the answer after it has been revealed
                                    handleParticipantAnswer(
                                        selectedOption?.charAt(0).toLowerCase() ===
                                        currentQuestion?.correctAnswer?.charAt(0).toLowerCase()
                                    );
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
            <div className="w-[240px] space-y-4">
                {participantsRef.current.length > 0 ? (
                    participantsRef.current?.map((participant, index) => (
                        <ParticipantCard
                            key={index}
                            name={participant.name}
                            score={participant.points}
                            isCurrent={index === currentParticipantIndex}
                            isNext={index === (currentParticipantIndex + 1) % participantsRef.current.length}
                        />
                    ))
                ) : (
                    <div>Loading participants...</div>
                )}
            </div>
        </div >
    )
})

export default QuizTemp
