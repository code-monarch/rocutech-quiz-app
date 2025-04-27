import { IQuestion } from "./types";

export const BATCH_B3_QUESTIONS: IQuestion[] = [
  {
    question: "In each of the following sentences, there is one word or group of words in bracket. From the list of words or group of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in bracket that will, at the same time correctly fill the gap in the sentence.**The officer was expecting to be ____ by his boss, but he was [censured].**",
    options: [
      "A) Questioned",
      "B) Praised", 
      "C) Decorated",
      "D) Guided"
    ],
    correctAnswer: "B",
    explanation: "To censure means to express severe disapproval or criticism. The opposite is to praise or commend someone."
  },
  {
    question: "If 23x + 101x = 130x, find the value of x.",
    options: [
      "A) 7",
      "B) 6", 
      "C) 5",
      "D) 4"
    ],
    correctAnswer: "D",
    explanation: "Each number in base x is converted to its base 10 equivalent:\n23 in base x becomes 2x + 3\n101 in base x becomes x² + 1\n130 in base x becomes x² + 3x\nWhen we add the first two numbers and equate to the third, we get: (2x + 3) + (x² + 1) = x² + 3x\nSimplifying this equation leads us to x = 4."
  },
  {
    question: "In each of the following sentences, there is one word or group of words in bracket. From the list of words or group of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in bracket that will, at the same time correctly fill the gap in the sentence.**The honour that was [conferred] on the general has been ______**",
    options: [
      "A) Withdrawn",
      "B) Confirmed",
      "C) Rejected", 
      "D) Destroyed"
    ],
    correctAnswer: "A",
    explanation: "To confer means to grant or bestow something. The opposite is to withdraw or take away something that was previously granted."
  },
  {
    question: "Simplify (3/4 - 2/3) × 1 1/5",
    options: [
      "A) 1/60",
      "B) 5/72",
      "C) 1/10",
      "D) 1 7/10"
    ],
    correctAnswer: "C",
    explanation: "(3/4 - 2/3) × 6/5 = (9/12 - 8/12) × 6/5 = 1/12 × 6/5 = 6/60 = 1/10"
  },
  {
    question: "In each of the following sentences, there is one word or group of words in bracket. From the list of words or group of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in bracket that will, at the same time correctly fill the gap in the sentence.**The [modest] young man was rewarded while his _______ brother was punished.**",
    options: [
      "A) Intelligent",
      "B) Handsome",
      "C) Conceited",
      "D) Wicked"
    ],
    correctAnswer: "C",
    explanation: "Modest means humble or unassuming. The opposite is conceited, which means excessively proud of oneself or vain."
  },
  {
    question: "The distance d through which a stone falls from rest varies directly as the square of the time, t, taken. If the stone falls 45cm in 3 seconds, how far will it fall in 6 seconds?",
    options: [
      "A) 90cm",
      "B) 135cm",
      "C) 180cm",
      "D) 225cm"
    ],
    correctAnswer: "C",
    explanation: "If d ∝ t², then d = kt² for some constant k. Given d = 45cm when t = 3s, we get 45 = k(3)², so k = 45/9 = 5. When t = 6s, d = 5(6)² = 5(36) = 180cm."
  },
  {
    question: "In each of the following sentences, there is one word or group of words in bracket. From the list of words or group of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in bracket that will, at the same time correctly fill the gap in the sentence.**It is fact that [pride] is a less admirable quality than _______**",
    options: [
      "A) Humility",
      "B) Honesty",
      "C) Affection",
      "D) Tenderness"
    ],
    correctAnswer: "A",
    explanation: "Pride (excessive self-esteem) is contrasted with humility, which means having a modest view of one's importance."
  },
  {
    question: "Which of the following is a valid conclusion from the premise: 'Nigerian footballers are good footballers'",
    options: [
      "A) Joseph plays football in Nigeria therefore he is a good footballer",
      "B) Joseph is a good footballer therefore he is a Nigerian footballer",
      "C) Joseph is a Nigerian footballer therefore he is a good footballer",
      "D) Joseph plays good football therefore he is a Nigerian footballer"
    ],
    correctAnswer: "C",
    explanation: "The premise states that 'Nigerian footballers are good footballers,' which means if someone is a Nigerian footballer, then they are a good footballer. This matches option C."
  },
  {
    question: "In each of the following sentences, there is one word or group of words in bracket. From the list of words or group of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in bracket that will, at the same time correctly fill the gap in the sentence.**While some workers felt that the terms were [amicable] others thought that they were_______**",
    options: [
      "A) Strange",
      "B) Disagreeable",
      "C) Bad",
      "D) Hostile"
    ],
    correctAnswer: "B",
    explanation: "Amicable means characterized by friendliness and a desire to avoid conflict. The opposite is disagreeable, meaning unpleasant or unsatisfactory."
  }
];