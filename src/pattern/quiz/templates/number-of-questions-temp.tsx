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


const FormSchema = z.object({
    questions: z
        .string()
        .refine((val) => {
            const num = Number(val);
            return !isNaN(num) && num > 0 && num <= 100 && Number.isInteger(num);
        }, {
            message: "Please enter a valid number between 1 and 100"
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
        },
    })

    const {
        handleSubmit,
        control,
        formState: { errors, isDirty },
    } = form

    console.log("ERRORS: ", errors)

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        // push(CREATE_QUIZ_ROUTES.addQuestions)
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
                                                <Input type="number" name={name} onChange={onChange} value={value} onBlur={onBlur} disabled={disabled} placeholder="1-100" autoFocus className='no-increment bg-[rgba(204,204,204,0.32)] w-full h-[114px] flex items-center justify-center text-center text-6xl md:text-6xl placeholder:text-6xl font-semibold rounded-[20px]' />
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