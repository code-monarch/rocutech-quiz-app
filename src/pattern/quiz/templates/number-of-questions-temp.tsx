"use client"

import { useState } from "react"
import TemplatePanel from "../atoms/template-panel"
import TemplateHeader from "../atoms/template-header"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { CREATE_QUIZ_ROUTES } from "@/lib/routes"
import { Input } from "@/components/ui/input"
import { NUMBER_OF_QUESTIONS, QUESTION_BATCH, QUIZ_DIFFICULTY } from "@/lib/constants"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const items = Array.from({ length: 64 }, (_, i) => ({
    label: `Batch ${i}`,
    value: i === 1 ? 1 : i * 20 + 1,
}))

const FormSchema = z.object({
    questionType: z.enum(["custom", "batch"]),
    questions: z
        .string()
        .refine(
            (val) => {
                const num = Number(val)
                return !isNaN(num) && num > 1 && num <= 1000 && Number.isInteger(num)
            },
            {
                message: "Please enter a valid number between 2 and 1000",
            },
        )
        .optional(),
    difficulty: z.enum(["easy", "regular"], {
        required_error: "Please select a difficulty level",
    }),
    "question-batch": z
        .number()
        .refine((val) => items.some((item) => item.value === val), {
            message: "Please select a valid question batch",
        })
        .optional(),
})

const NumberOfQuestionsTemp = () => {
    const [open, setOpen] = useState(false)
    const { push } = useRouter()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            questionType: "custom",
            questions: "100",
            difficulty: "easy",
            "question-batch": items[1].value,
        },
    })

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = form

    const onSubmit = ({ questionType, questions, difficulty, "question-batch": batch }: z.infer<typeof FormSchema>) => {
        if (questionType === "custom") {
            console.log("QUESTIONS: ", questions)
            localStorage.setItem(NUMBER_OF_QUESTIONS, questions!)
            localStorage.setItem(QUIZ_DIFFICULTY, difficulty);
        } else {
            console.log("QUESTION BATCH: ", batch)
            localStorage.setItem(QUESTION_BATCH, batch!?.toString())
            localStorage.setItem(NUMBER_OF_QUESTIONS, "20")
            localStorage.setItem(QUIZ_DIFFICULTY, difficulty);
        }
        localStorage.setItem(QUIZ_DIFFICULTY, difficulty)
        push(CREATE_QUIZ_ROUTES.selectParticipants)
    }

    return (
        <TemplatePanel className="pt-7 px-7">
            <div className="w-full h-full flex flex-col items-center gap-y-[50px]">
                <TemplateHeader>Questions</TemplateHeader>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex justify-center items-center">
                        <div className="w-[566px] flex flex-col items-center justify-center space-y-8">
                            <FormField
                                control={control}
                                name="questionType"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <Tabs onValueChange={field.onChange} defaultValue={field.value} className="w-full">
                                            <TabsList className="grid w-full grid-cols-2">
                                                <TabsTrigger value="custom">Custom Number</TabsTrigger>
                                                <TabsTrigger value="batch">Question Batch</TabsTrigger>
                                            </TabsList>
                                            <TabsContent value="custom">
                                                <FormField
                                                    control={control}
                                                    name="questions"
                                                    render={({ field }) => (
                                                        <FormItem className="w-full mt-[50px]">
                                                            <FormLabel className="w-full text-center text-[23px] font-semibold">
                                                                Enter Number of Questions
                                                            </FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    type="number"
                                                                    {...field}
                                                                    placeholder="1-100"
                                                                    className="no-increment bg-accent w-full h-[114px] flex items-center justify-center text-center text-6xl md:text-6xl placeholder:text-6xl font-semibold border rounded-[8px]"
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </TabsContent>
                                            <TabsContent value="batch">
                                                <FormField
                                                    control={control}
                                                    name="question-batch"
                                                    render={({ field }) => (
                                                        <FormItem className="w-full mt-[50px]">
                                                            <FormLabel className="w-full text-center text-lg font-semibold">
                                                                Select Question Batch
                                                            </FormLabel>
                                                            <FormDescription>A question batch contains 20 questions that are most likely not going to repeat themselves</FormDescription>
                                                            <FormControl>
                                                                <Popover open={open} onOpenChange={setOpen}>
                                                                    <PopoverTrigger asChild>
                                                                        <Button
                                                                            variant="outline"
                                                                            role="combobox"
                                                                            className="w-full h-12 text-base justify-between"
                                                                        >
                                                                            {field.value
                                                                                ? items.find((item) => item.value === field.value)?.label
                                                                                : "Select question batch"}
                                                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                                        </Button>
                                                                    </PopoverTrigger>
                                                                    <PopoverContent className="w-full p-0">
                                                                        <Command>
                                                                            <CommandInput placeholder="Search question batch..." />
                                                                            <CommandList>
                                                                                <CommandEmpty>No question batch found.</CommandEmpty>
                                                                                <CommandGroup className="max-h-64 overflow-y-auto">
                                                                                    {items.map((item, idx) => (
                                                                                        <CommandItem
                                                                                            key={idx}
                                                                                            onSelect={() => {
                                                                                                form.setValue("question-batch", item.value, {
                                                                                                    shouldValidate: true,
                                                                                                    shouldDirty: true,
                                                                                                })
                                                                                                field.onChange(item.value)
                                                                                                setOpen(false)
                                                                                            }}
                                                                                        >
                                                                                            <Check
                                                                                                className={cn(
                                                                                                    "mr-2 h-4 w-4",
                                                                                                    field.value === item.value ? "opacity-100" : "opacity-0",
                                                                                                )}
                                                                                            />
                                                                                            {item.label}
                                                                                        </CommandItem>
                                                                                    ))}
                                                                                </CommandGroup>
                                                                            </CommandList>
                                                                        </Command>
                                                                    </PopoverContent>
                                                                </Popover>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </TabsContent>
                                        </Tabs>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="difficulty"
                                render={({ field }) => (
                                    <FormItem className="w-full mt-[50px]">
                                        <FormLabel className="w-full text-center text-lg font-semibold">Select Difficulty</FormLabel>
                                        <FormControl>
                                            <Select {...field}>
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
                                )}
                            />
                            <div className="w-full">
                                <Button size="lg" type="submit" className="w-full">
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </TemplatePanel>
    )
}

export default NumberOfQuestionsTemp

