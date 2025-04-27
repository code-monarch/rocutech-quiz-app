"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import TemplatePanel from '../atoms/template-panel'
import ParticipantsSelectedTable from '../organisms/participants-selected-table';
import { Button } from '@/components/ui/button';
import { CREATE_QUIZ_ROUTES } from '@/lib/routes';
import { NUMBER_OF_QUESTIONS, SELECTED_STUDENTS, SELECTED_SUBJECTS } from '@/lib/constants';

const QuizSummaryTemp = () => {
    const { push } = useRouter();
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [numberOfQuestions, setNumberOfQuestions] = useState<number>(0);
    const [participantsSelected, setParticipantsSelected] = useState<string[]>([]);

    console.log("PARTICIPANTS: ", participantsSelected)
    console.log("SUBJECTS: ", typeof selectedSubjects)
    console.log("Type of subjects: ", typeof selectedSubjects)

    useEffect(() => {
        const subjects = localStorage.getItem(SELECTED_SUBJECTS);
        const questions = localStorage.getItem(NUMBER_OF_QUESTIONS);
        const participants = localStorage.getItem(SELECTED_STUDENTS);


        if (subjects) setSelectedSubjects(JSON.parse(subjects) as string[]);
        if (questions) setNumberOfQuestions(Number(questions));
        if (participants) setParticipantsSelected(JSON.parse(participants));
    }, []);

    const handleCreateQuiz = () => {
        const queryParams = new URLSearchParams({
            subjects: selectedSubjects.join(','),
            questions: numberOfQuestions.toString(),
        }).toString();

        push(`${CREATE_QUIZ_ROUTES.intro}?${queryParams}`);
    };

    return (
        <TemplatePanel className='pt-7 px-7 space-y-[38px]'>
            <h4 className='font-semibold text-3xl'>Quiz Summary</h4>

            <div className='w-full flex flex-col items-start gap-y-[44px]'>
                {/* Subject Selected */}
                {/* <div className='space-y-[16px]'>
                    <h5 className='text-[#434040] text-lg font-medium'>Subject(s) Selected</h5>
                    <p className='text-xl font-semibold flex items-center gap-2'>
                        {selectedSubjects?.map((subject, idx) => (
                            <span key={idx} className='inline-flex capitalize'>{subject}{selectedSubjects?.indexOf(subject) !== selectedSubjects.length - 1 ? "," : ""}</span>
                        )) ?? "No Subject Selected"}
                    </p>
                </div> */}

                {/* Number of Questions */}
                {/* <div className='space-y-[16px]'>
                    <h5 className='text-[#434040] text-lg font-medium'>Number of Questions</h5>
                    <p className='text-xl font-semibold'>{numberOfQuestions} Questions</p>
                </div> */}

                {/* Participants Selected */}
                <div className='w-full space-y-[16px]'>
                    <h5 className='text-[#434040] text-lg font-medium'>Participants Selected</h5>
                    {participantsSelected.map((participant, idx) => (
                        <ParticipantsSelectedTable key={idx} index={idx + 1} name={participant} />
                    )) ?? 'No participant selected'}
                </div>

                {/* Control */}
                <div className='w-full flex justify-center gap-6'>
                    <Button variant="outline" size="lg" className='text-lg' onClick={() => push(CREATE_QUIZ_ROUTES.selectSubjects)}>Edit Quiz</Button>
                    <Button size="lg" className='text-lg' onClick={handleCreateQuiz}>Create Quiz</Button>
                </div>
            </div>
        </TemplatePanel >
    )
}

export default QuizSummaryTemp