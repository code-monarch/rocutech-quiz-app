import { z } from "zod"
export interface IIconProps extends React.SVGAttributes<SVGElement> {
    children?: never;
    color?: string;
    height?: string;
    width?: string;
    className?: string;
}


export const studentSchema = z.object({
    name: z.string().min(1, "Student name is required"),
    points: z.string().optional()
})

export const schoolSchema = z.object({
    name: z.string().min(1, "School name is required"),
    students: z.array(studentSchema).min(2, "At least 2 student is required").max(4, "Maximum 4 students allowed"),
    points: z.string().optional()
})

export const participantFormSchema = z.object({
    schools: z.array(schoolSchema).min(2, "At least 2 schools are required").max(64, "Maximum 64 schools allowed")
})

export type Student = z.infer<typeof studentSchema>
export type School = z.infer<typeof schoolSchema>
export type ParticipantFormData = z.infer<typeof participantFormSchema>

