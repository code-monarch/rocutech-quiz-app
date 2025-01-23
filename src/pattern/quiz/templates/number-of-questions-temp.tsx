"use client"

import React from 'react'
import TemplatePanel from '../atoms/template-panel'
import TemplateHeader from '../atoms/template-header'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import { CREATE_QUIZ_ROUTES } from '@/lib/routes'
import { Input } from '@/components/ui/input'
import { NUMBER_OF_QUESTIONS, QUIZ_DIFFICULTY } from '@/lib/constants'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'


const FormSchema = z.object({
    questions: z
        .string()
        .refine((val) => {
            const num = Number(val);
            return !isNaN(num) && num > 1 && num <= 1000 && Number.isInteger(num);
        }, {
            message: "Please enter a valid number between 2 and 1000"
        }),
    difficulty: z.enum(["easy", "regular"], {
        required_error: "Please select a difficulty level",
    }),
});

const NumberOfQuestionsTemp = () => {
    const { push } = useRouter();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            questions: "100",
            difficulty: "easy",
        },
    })

    const {
        handleSubmit,
        control,
        formState: { errors, isDirty },
    } = form

    console.log("ERRORS: ", errors)

    const onSubmit = ({ questions, difficulty }: z.infer<typeof FormSchema>) => {
        console.log("QUESTIONS: ", questions)
        localStorage.setItem(NUMBER_OF_QUESTIONS, questions)
        localStorage.setItem(QUIZ_DIFFICULTY, difficulty)
        push(CREATE_QUIZ_ROUTES.selectParticipants)
    }
    return (
        <TemplatePanel className='pt-7 px-7'>
            <div className='w-full h-full flex flex-col items-center gap-y-[50px]'>
                <TemplateHeader>Questions</TemplateHeader>

                {/* Subjects */}
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex justify-center items-center">
                        <div className='w-[566px] flex flex-col items-center justify-center space-y-8'>
                            <FormField
                                control={control}
                                name="questions"
                                render={({ field: { name, onBlur, onChange, value, disabled } }) => {
                                    return (
                                        <FormItem
                                            className="w-full mt-[50px]"
                                        >
                                            <FormLabel htmlFor={name} className='w-full text-center text-[23px] font-semibold' >Enter Number of Questions</FormLabel>
                                            <FormControl>
                                                <Input type="number" name={name} onChange={onChange} value={value} onBlur={onBlur} disabled={disabled} placeholder="1-100" autoFocus className='no-increment bg-accent w-full h-[114px] flex items-center justify-center text-center text-6xl md:text-6xl placeholder:text-6xl font-semibold border rounded-[8px]' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            {/* Question Difficulty */}
                            <FormField
                                control={control}
                                name="difficulty"
                                render={({ field: { name, onBlur, onChange, value, disabled } }) => {
                                    return (
                                        <FormItem
                                            className="w-full mt-[50px]"
                                        >
                                            <FormLabel htmlFor={name} className='w-full text-center text-lg font-semibold'>Select Difficulty</FormLabel>
                                            <FormControl>
                                                <Select value={value} onValueChange={onChange} disabled={disabled} >
                                                    <SelectTrigger className="h-12 text-base">
                                                        <SelectValue placeholder="Select difficulty" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="easy">Easy</SelectItem>
                                                        <SelectItem value="regular">Regular</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />

                            {/* Footer */}
                            <div className='w-full'>
                                <Button size="lg" type="submit" className='w-full'>Continue</Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </TemplatePanel>
    )
}

export default NumberOfQuestionsTemp