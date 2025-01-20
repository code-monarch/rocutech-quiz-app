import { School } from "@/pattern/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}


export interface QuizParticipant {
  name: string;
  points: number;
}

export const updatePoints = (participants: School[], quizParticipants: QuizParticipant[]): School[] => {
  quizParticipants.forEach((quizParticipant) => {
    const [schoolName, studentName] = quizParticipant.name.split('-');
    const studentPoints = quizParticipant.points;

    // Find the school in participants array
    const school = participants.find((p) => p.name === schoolName);
    if (school) {
      // Find the student in the school's students array
      const student = school.students.find((s) => s.name === studentName);
      if (student) {
        student.points = studentPoints.toString(); // Update student points
      }

      // Update school's total points (if it exists in the school object)
      if (school.points) {
        school.points = (parseInt(school.points) + studentPoints).toString();
      } else {
        school.points = studentPoints.toString(); // If no points, initialize with student points
      }
    }
  });

  return participants;
}

