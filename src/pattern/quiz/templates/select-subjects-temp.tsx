"use client"

import React from 'react'
import TemplatePanel from '../atoms/template-panel'
import TemplateHeader from '../atoms/template-header'
import { Checkbox } from '@/components/ui/checkbox'
import { subjects } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import { APP_ROUTES, CREATE_QUIZ_ROUTES } from '@/lib/routes'
import { SELECTED_SUBJECTS } from '@/lib/constants'


const FormSchema = z.object({
    subjects: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
})

const SelectSubjectsTemp = () => {
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

    console.log("ERRORS: ", errors)

    const onSubmit = ({ subjects }: z.infer<typeof FormSchema>) => {
        localStorage.setItem(SELECTED_SUBJECTS, JSON.stringify(subjects))
        push(CREATE_QUIZ_ROUTES.addQuestions)
    }
    return (
        <TemplatePanel className='pt-7 px-7'>
            <div className='w-full h-full flex flex-col items-start gap-y-[50px]'>
                <TemplateHeader>Please, Select Subject(s)</TemplateHeader>

                {/* Subjects */}
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
                        <div className='space-y-[20px]'>
                            {subjects.map(({ label, value }, idx) => (
                                <FormField
                                    key={value}
                                    control={control}
                                    name="subjects"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={value}
                                                className="flex items-center space-x-[24px] space-y-0"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(value)}
                                                        value={value}
                                                        onCheckedChange={(checked) => {
                                                            return checked
                                                                ? field.onChange([...field.value, value])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                        (v) => v !== value
                                                                    )
                                                                )
                                                        }}
                                                    />
                                                </FormControl>

                                                <FormLabel className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                                                    {label}
                                                </FormLabel>
                                            </FormItem>
                                        )
                                    }}
                                />
                            ))}
                            <FormMessage />
                        </div>

                        {/* Footer */}
                        <div className='w-full flex justify-end'>
                            <Button size="lg" type="submit" className='text-lg h-[40px]' >Next</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </TemplatePanel>
    )
}

export default SelectSubjectsTemp