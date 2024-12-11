"use client"

import React from 'react'
import TemplatePanel from '../atoms/template-panel'
import TemplateHeader from '../atoms/template-header'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import { CREATE_QUIZ_ROUTES } from '@/lib/routes'
import SelectParticipantsHeader from '../molecules/select-participants-header'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { schools } from '@/lib/data'
import { Button } from '@/components/ui/button'
import SelectParticipantHeaderCheckbox from '../atoms/select-participant-header-checkbox'


const FormSchema = z.object({
    subjects: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
})

const SelectParticipantsTemp = () => {
    const { push } = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            subjects: ["mathematics"],
        },
    })

    const {
        handleSubmit,
        control,
        formState: { errors, isDirty },
    } = form

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        push(CREATE_QUIZ_ROUTES.addQuestions)
    }
    return (
        <TemplatePanel className='pt-7 px-7'>
            <div className='w-full h-full flex flex-col items-start'>
                <TemplateHeader className='border-b-0'>Select Participants</TemplateHeader>
                <div className='w-full'>
                    <SelectParticipantsHeader />

                    <Accordion type="single" collapsible className="w-full">
                        {schools.map(({ name, students, points }, idx) => (
                            <AccordionItem value={name} key={idx}>
                                <AccordionTrigger className='pl-6 pr-16 pb-[22px]'>
                                    <div className='w-full flex items-center justify-between'>
                                        {/* School Name */}
                                        <div className="flex items-center gap-x-10">
                                            <div className='flex items-center gap-x-[15px]'>
                                                {/* Serial number */}
                                                <span>{idx + 1}.</span>
                                                <SelectParticipantHeaderCheckbox handleClick={() => { }} />
                                            </div>

                                            {/* School Name */}
                                            <h5 className='text-foreground text-base font-medium'>{name} <span className='text-[#808080]'>&#40;{students.length} students&#41;</span></h5>
                                        </div>

                                        {/* Ranking */}
                                        <h5 className='font-semibold text-base mr-[106px]'>{points} points</h5>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className='w-full px-[52px]'>
                                    <div className='w-full space-y-[12px]'>
                                        {students.map((student, idx) => (
                                            <div className='w-full flex items-center gap-x-10' key={idx} >
                                                <Checkbox />
                                                <p className='text-sm font-medium'>{student}</p>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className='w-full flex items-center justify-end'>
                        <Button size="lg" className='mt-5' onClick={() => push(CREATE_QUIZ_ROUTES.summary)} >Next</Button>
                    </div>
                </div>
            </div>
        </TemplatePanel>
    )
}

export default SelectParticipantsTemp