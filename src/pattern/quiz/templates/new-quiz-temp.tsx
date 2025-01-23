'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ChevronRight, Clock, User } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { physics } from '@/lib/questions/physics'
import { chemistry } from '@/lib/questions/chemistry'
import { mathematics } from '@/lib/questions/mathematics'
import { english } from '@/lib/questions/english'
import { currentAffairs } from '@/lib/questions/current-affairs'
import { APP_ROUTES, CREATE_QUIZ_ROUTES } from '@/lib/routes'
import { IQuestion } from '@/lib/questions/types'

interface PlayerCardProps {
    name: string;
    isCurrent: boolean;
    isNext: boolean;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, isCurrent, isNext }) => (
    <Card className={`mb-4 transition-all duration-300 ${isCurrent ? 'border-green-500 shadow-lg' : isNext ? 'border-blue-500' : ''}`}>
        <CardContent className="flex items-center p-4">
            <User className={`mr-2 h-5 w-5 ${isCurrent ? 'text-green-500' : isNext ? 'text-blue-500' : 'text-gray-500'}`} />
            <span className={`font-medium ${isCurrent ? 'text-green-700' : isNext ? 'text-blue-700' : ''}`}>{name}</span>
            {isCurrent && <span className="ml-auto text-sm text-green-500">Current</span>}
            {isNext && <span className="ml-auto text-sm text-blue-500">Next</span>}
        </CardContent>
    </Card>
)

export default function QuizTemp() {
    const { push } = useRouter()
    const searchParams = useSearchParams()

    const subjectsParam = searchParams.get('subjects');
    const subjects = useMemo(() =>
        subjectsParam
            ? subjectsParam.includes(',')
                ? subjectsParam.split(',').map(subject => subject.trim())
                : [subjectsParam]
            : []
        , [subjectsParam]);

    const questionsParam = searchParams.get('questions');
    const totalQuestions = useMemo(() => questionsParam ? parseInt(questionsParam, 10) : 10, [questionsParam]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    console.log("SELECTED OPTION: ", selectedOption)
    const [timeLeft, setTimeLeft] = useState(300); // 5:00 in seconds
    const [currentQuestions, setCurrentQuestions] = useState<IQuestion[]>([]);
    const [players] = useState(['Player 1', 'Player 2', 'Player 3', 'Player 4']); // Example player names
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [failedAttempts, setFailedAttempts] = useState(0);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

    // Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    clearInterval(timer);
                    handleFailedAttempt();
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentQuestionIndex, currentPlayerIndex]);

    // Fetch questions based on subjects
    useEffect(() => {
        const fetchRandomQuestions = (questionsArray: IQuestion[], count: number): IQuestion[] => {
            const shuffledQuestions = [...questionsArray].sort(() => Math.random() - 0.5);
            return shuffledQuestions.slice(0, count);
        };

        if (subjects.length > 0) {
            const fetchedQuestions: IQuestion[] = [];
            const questionsPerSubject = Math.ceil(totalQuestions / subjects.length);

            subjects?.forEach((subject) => {
                switch (subject.toLowerCase()) {
                    case 'physics':
                        fetchedQuestions.push(...fetchRandomQuestions(physics, questionsPerSubject));
                        break;
                    case 'chemistry':
                        fetchedQuestions.push(...fetchRandomQuestions(chemistry, questionsPerSubject));
                        break;
                    case 'mathematics':
                        fetchedQuestions.push(...fetchRandomQuestions(mathematics, questionsPerSubject));
                        break;
                    case 'english':
                        fetchedQuestions.push(...fetchRandomQuestions(english, questionsPerSubject));
                        break;
                    case 'current-affairs':
                        fetchedQuestions.push(...fetchRandomQuestions(currentAffairs, questionsPerSubject));
                        break;
                    default:
                        console.warn(`Unknown subject: ${subject}`);
                }
            });

            const shuffledQuestions = fetchedQuestions.sort(() => Math.random() - 0.5).slice(0, totalQuestions);
            setCurrentQuestions(shuffledQuestions);
        }
    }, [subjects, totalQuestions]);

    const formatTime = useCallback((seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }, []);

    const handleNextQuestion = useCallback(() => {
        setSelectedOption(null);
        setTimeLeft(300);
        setFailedAttempts(0);
        setIsAnswerCorrect(false);

        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setCurrentPlayerIndex(prevIndex => (prevIndex + 1) % players.length);
        } else {
            console.log("Quiz completed!");
            push(APP_ROUTES.participants);
        }
    }, [currentQuestionIndex, currentQuestions.length, players.length, push]);

    const handleFailedAttempt = useCallback(() => {
        setFailedAttempts(prevAttempts => {
            const newAttempts = prevAttempts + 1;
            if (newAttempts < players.length) {
                setCurrentPlayerIndex(prevIndex => (prevIndex + 1) % players.length);
                setTimeLeft(300);
                setSelectedOption(null);
            } else {
                handleNextQuestion();
            }
            return newAttempts;
        });
    }, [players.length, handleNextQuestion]);

    const handleOptionSelect = useCallback((option: string) => {
        setSelectedOption(option);
        const correct = option === currentQuestions[currentQuestionIndex]?.correctAnswer;
        setIsAnswerCorrect(correct);
        if (!correct) {
            handleFailedAttempt();
        }
    }, [currentQuestions, currentQuestionIndex, handleFailedAttempt]);

    const handleSubmit = useCallback(() => {
        if (isAnswerCorrect) {
            handleNextQuestion();
        } else if (failedAttempts === 1) {
            setCurrentPlayerIndex(prevIndex => (prevIndex + 1) % players.length);
            setFailedAttempts(0);
            setTimeLeft(300);
            setSelectedOption(null);
        } else {
            handleNextQuestion();
        }
    }, [isAnswerCorrect, failedAttempts, handleNextQuestion, players.length]);

    return (
        <div className="flex max-w-7xl mx-auto p-4">
            <div className="flex-grow mr-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
                        <CardTitle className="text-xl font-bold capitalize">
                            {subjects.join(', ')}
                        </CardTitle>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span className="text-sm font-medium">{formatTime(timeLeft)}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                                Question <span className="font-medium">{currentQuestionIndex + 1}</span> of <span className="font-medium">{currentQuestions.length}</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6 transition-all duration-300">
                        <div className="text-lg font-medium">
                            {currentQuestions[currentQuestionIndex]?.question || "No questions available"}
                        </div>

                        <div className="space-y-3">
                            <p className="text-sm text-muted-foreground mb-4">Select one option</p>
                            {currentQuestions[currentQuestionIndex]?.options?.map?.((option) => (
                                <div
                                    key={option}
                                    className={`p-4 rounded-lg border transition-colors duration-300 cursor-pointer
                                    ${selectedOption === option
                                            ? (option === currentQuestions[currentQuestionIndex]?.correctAnswer
                                                ? 'border-green-500 bg-green-500 bg-opacity-10 text-green-600'
                                                : 'border-red-500 bg-red-500 bg-opacity-10 text-red-600')
                                            : 'bg-white text-black hover:border-gray-400'}`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>

                        {selectedOption && (
                            <div className="mt-6 space-y-3 transition-all duration-300">
                                <div className="text-sm font-medium">Solution</div>
                                <div className="p-4 rounded-lg border border-green-500">
                                    <div className="text-green-500 font-medium">Correct Answer: {currentQuestions[currentQuestionIndex]?.correctAnswer}</div>
                                </div>

                                {currentQuestions[currentQuestionIndex]?.explanation && (
                                    <div className='flex items-start text-black transition-all duration-300'>
                                        <span className='font-medium'>Explanation: </span>
                                        <p className='ml-2'>{currentQuestions[currentQuestionIndex]?.explanation}</p>
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
                            onClick={handleSubmit}
                            disabled={selectedOption === null}
                        >
                            {isAnswerCorrect ? "Next Question" : failedAttempts === 1 ? "Pass to Next Player" : "Submit Answer"}
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="w-64">
                <h2 className="text-xl font-bold mb-4">Players</h2>
                {players.map((player, index) => (
                    <PlayerCard
                        key={player}
                        name={player}
                        isCurrent={index === currentPlayerIndex}
                        isNext={index === (currentPlayerIndex + 1) % players.length}
                    />
                ))}
            </div>
        </div>
    );
}

