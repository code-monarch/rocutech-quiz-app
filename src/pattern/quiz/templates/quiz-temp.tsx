'use client'

import { useState, useEffect, Suspense } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ChevronRight, Clock } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { IQuestion, physics } from '@/lib/questions/physics'
import { chemistry } from '@/lib/questions/chemistry'
import { mathematics } from '@/lib/questions/mathematics'
import { english } from '@/lib/questions/english'
import { currentAffairs } from '@/lib/questions/current-affairs'
import { APP_ROUTES, CREATE_QUIZ_ROUTES } from '@/lib/routes'

export default function QuizTemp() {
    const { push } = useRouter()

    const searchParams = useSearchParams()

    const subjectsParam = searchParams.get('subjects');

    const subjects = subjectsParam ? subjectsParam.includes(',') ? subjectsParam.split(',').map(subject => subject.trim()) : [subjectsParam] : [];

    const questionsParam = searchParams.get('questions');
    const totalQuestions = questionsParam ? parseInt(questionsParam, 10) : 10;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    console.log("SELECTED OPTION: ", selectedOption)
    const [timeLeft, setTimeLeft] = useState(300); // 5:00 in seconds
    const [currentQuestions, setCurrentQuestions] = useState<IQuestion[]>([]);

    // Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    // Reveal the correct answer when timer reaches 0
                    if (currentQuestions[currentQuestionIndex]) {
                        setSelectedOption(currentQuestions[currentQuestionIndex].correctAnswer);
                    }
                    clearInterval(timer);

                    // Automatically move to the next question after 10 seconds
                    setTimeout(() => {
                        handleNextQuestion();
                    }, 10000);

                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [currentQuestions, currentQuestionIndex]);



    // Fetch questions based on subjects
    useEffect(() => {
        const fetchedQuestions: IQuestion[] = [];

        // Function to randomly fetch a subset of questions
        const fetchRandomQuestions = (questionsArray: IQuestion[], count: number): IQuestion[] => {
            const shuffledQuestions = [...questionsArray].sort(() => Math.random() - 0.5);
            return shuffledQuestions.slice(0, count);
        };

        if (subjects.length > 0) {
            const questionsPerSubject = Math.ceil(totalQuestions / subjects.length);

            subjects.forEach((subject) => {
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

            // Shuffle all questions and limit them to the desired total count
            const shuffledQuestions = fetchedQuestions.sort(() => Math.random() - 0.5).slice(0, totalQuestions);

            setCurrentQuestions(shuffledQuestions);
        }
    }, []);


    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    // Handle moving to the next question
    const handleNextQuestion = () => {
        setSelectedOption(null); // Reset selected option
        setTimeLeft(300); // Reset timer to 5:00
        if (currentQuestionIndex < currentQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            console.log("Quiz completed!");
            // navigate to participants page
            push(APP_ROUTES.participants)
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
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

                        {/* Question */}
                        <div className="text-sm text-muted-foreground">
                            Question <span className="font-medium">{currentQuestionIndex + 1}</span> of <span className="font-medium">{currentQuestions.length}</span>
                        </div>

                        {/* <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                        </Button> */}
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
                                        ? (option[0] === currentQuestions[currentQuestionIndex]?.correctAnswer[0]
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
                                <div className="text-green-500 font-medium">Correct Answer: {currentQuestions[currentQuestionIndex]?.correctAnswer}</div>
                            </div>

                            {/* Explanation */}
                            {
                                currentQuestions[currentQuestionIndex]?.explanation ? (
                                    <div className='flex items-start text-black transition-all duration-300'>
                                        <span className='font-medium'>Explanation: </span>
                                        <p className='ml-2'>{currentQuestions[currentQuestionIndex]?.explanation}</p>
                                    </div>
                                ) : ""
                            }
                        </div>
                    )}
                </CardContent>
                <CardFooter className="w-full flex justify-between pt-6">
                    <Button size="lg" variant="outline" onClick={() => push(CREATE_QUIZ_ROUTES.createQuiz)}>
                        Cancel quiz
                    </Button>

                    <Button size="lg" onClick={handleNextQuestion} disabled={selectedOption === null}>
                        Next Question
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </CardFooter>
            </Card>

            {/* <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
                {schools.map((school, index) => (
                    <div key={index} className="text-center space-y-1">
                        <div className="text-xs text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                            {school.name}
                        </div>
                        <div className="text-xs font-medium">{school.points} Points</div>
                    </div>
                ))}
            </div> */}
        </div>);
}
