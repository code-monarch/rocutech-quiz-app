"use client"

import { useState } from "react"
import TemplatePanel from "../atoms/template-panel"
import TemplateHeader from "../atoms/template-header"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { CREATE_QUIZ_ROUTES } from "@/lib/routes"
import { NUMBER_OF_QUESTIONS, QUESTION_BATCH } from "@/lib/constants"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"

const items = [
    // Original batches (1-20)
    ...Array.from({ length: 20 }, (_, i) => ({
        label: `Batch ${i + 1}`,
        value: (i + 1).toString(),
    })),
    // B series batches
    { label: "Batch B1", value: "B1" },
    { label: "Batch B2", value: "B2" },
    { label: "Batch B3", value: "B3" },
    { label: "Batch B4", value: "B4" },
    { label: "Batch B5", value: "B5" },
    { label: "Batch B6", value: "B6" },
    { label: "Batch B7", value: "B7" },
    { label: "Batch B8", value: "B8" },
    // C series batches
    { label: "Batch C1", value: "C1" },
    { label: "Batch C2", value: "C2" },
    { label: "Batch C3", value: "C3" },
    { label: "Batch C4", value: "C4" },
    // D series batches
    { label: "Batch D1", value: "D1" },
    { label: "Batch D2", value: "D2" },
    // E series batch
    { label: "Batch E1", value: "E1" }
]

const FormSchema = z.object({
    questionBatch: z
        .string()
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
    })

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = form

    const questionBatchWatch = form.watch("questionBatch")

    const onSubmit = ({ questionBatch }: z.infer<typeof FormSchema>) => {
        localStorage.setItem(QUESTION_BATCH, questionBatch!.toString())
        localStorage.setItem(NUMBER_OF_QUESTIONS, "20")
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
                                name="questionBatch"
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className="w-full text-center text-xl font-semibold">
                                            Select Question Batch
                                        </FormLabel>
                                        {/* <FormDescription className="text-lg">A question batch contains 20 questions</FormDescription> */}
                                        <FormControl className="w-full">
                                            <Popover open={open} onOpenChange={setOpen}>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        className="w-full h-12 text-lg justify-between"
                                                    >
                                                        {field.value
                                                            ? items.find((item) => item.value === field.value)?.label
                                                            : "Select question batch"}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent align="start" className="!min-w-[400px] !w-full !max-w-[500px] h-fit !max-h-[300px] p-0">
                                                    <Command className="w-full">
                                                        <CommandInput placeholder="Search question batch..." />
                                                        <CommandList>
                                                            <CommandEmpty>No question batch found.</CommandEmpty>
                                                            <CommandGroup className="max-h-64 overflow-y-auto">
                                                                {items.map((item, idx) => (
                                                                    <CommandItem
                                                                        key={idx}
                                                                        onSelect={() => {
                                                                            form.setValue("questionBatch", item.value, {
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

                            <div className="w-full">
                                <Button size="lg" type="submit" disabled={!questionBatchWatch ? true : false} className="w-full text-xl">
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

