import { IQuestion } from "./types";

export const BATCH_E1_QUESTIONS: IQuestion[] = [
  {
    question: "The duty of our teacher is to give instructions; _____ is to obey.",
    options: [
      "A) Ours",
      "B) Our's",
      "C) Our",
      "D) Ours'"
    ],
    correctAnswer: "A",
    explanation: "The correct possessive pronoun form to indicate ownership or responsibility in this context is 'Ours'. 'Our's' and 'Ours'' are incorrect because possessive pronouns (like ours, yours, theirs) do not take an apostrophe."
  },
  {
    question: "Solve: 1+∛(x - 3) = 4",
    options: [
      "A) 6",
      "B) 12",
      "C) 30",
      "D) 66"
    ],
    correctAnswer: "C",
    explanation: "If ∛(x - 3) = 3, then x - 3 = 27, so x = 30."
  },
  {
    question: "A satellite in circular motion around the Earth does not have",
    options: [
      "A) a gravitational force acting on it",
      "B) a uniform velocity",
      "C) an acceleration",
      "D) a centripetal force acting on it"
    ],
    correctAnswer: "B",
    explanation: "A satellite in circular motion has a constant speed but changing direction, so its velocity (a vector quantity) is not uniform. It experiences acceleration directed toward the center of the circle."
  },
  {
    question: "Which of the following pairs of salts undergo hydrolysis?",
    options: [
      "A) FeCl₃ and KCl",
      "B) AlCl₃ and NH₄Cl",
      "C) Na₂SO₄ and K₂SO₄",
      "D) AlCl₃ and NaCl"
    ],
    correctAnswer: "B",
    explanation: "AlCl₃ and NH₄Cl both undergo hydrolysis because AlCl₃ is formed from a weak base Al(OH)₃ and NH₄Cl is formed from a weak base NH₄OH. Salts formed from weak acids or weak bases undergo hydrolysis in water."
  },
  {
    question: "A meeting was called _______ the instance of the Chairman.",
    options: [
      "A) by",
      "B) on",
      "C) at",
      "D) for"
    ],
    correctAnswer: "C",
    explanation: "The correct preposition in this idiomatic expression is 'at the instance of' which means 'at the request or suggestion of'."
  },
  {
    question: "One third the sum of two numbers is 12. Twice their difference is 12. Find the numbers.",
    options: [
      "A) 21 and 15",
      "B) 20 and 16",
      "C) 22 and 14",
      "D) 23 and 13"
    ],
    correctAnswer: "A",
    explanation: "If (x+y)/3 = 12, then x+y = 36. If 2(x-y) = 12, then x-y = 6. Solving these equations: x = 21 and y = 15."
  },
  {
    question: "A resistor of resistance R is connected to a battery of negligible internal resistance. If a similar resistor is connected in series with the first, what is the effect on the circuit?",
    options: [
      "A) Effective resistance of the circuit is halved",
      "B) Total power dissipated is doubled",
      "C) The total current in the circuit is halved",
      "D) Terminal voltage is halved"
    ],
    correctAnswer: "C",
    explanation: "When two equal resistors are connected in series, the total resistance doubles. Since current I = V/R and V remains constant, doubling R causes the current to be halved."
  },
  {
    question: "What is the IUPAC name of CH₃CH₂COOCH₃?",
    options: [
      "A) Propylmethanoate",
      "B) Methylpropanoate",
      "C) Ethylethanoate",
      "D) Methylethanoate"
    ],
    correctAnswer: "B",
    explanation: "The compound CH₃CH₂COOCH₃ consists of a propanoic acid (CH₃CH₂COOH) with the H of the carboxyl group replaced by a methyl group (CH₃). Following IUPAC rules, this is named as methylpropanoate."
  },
  {
    question: "The teacher has ______ with the principal.",
    options: [
      "A) fallen apart",
      "B) fallen off",
      "C) fallen out",
      "D) fallen down"
    ],
    correctAnswer: "C",
    explanation: "The phrasal verb 'fallen out' means to have a disagreement or argument with someone, which fits the context of the sentence."
  },
  {
    question: "There are 30 students in a class. 15 study woodwork and 13 study metalwork. 6 study neither of the two subjects. How many students study woodwork but not metalwork?",
    options: [
      "A) 5",
      "B) 9",
      "C) 11",
      "D) 13"
    ],
    correctAnswer: "C",
    explanation: "Total students = 30. Students studying neither = 6. So students studying at least one subject = 30 - 6 = 24. If n = number studying both subjects, then 15 + 13 - n = 24, so n = 4. Therefore, students studying woodwork but not metalwork = 15 - 4 = 11."
  },
  {
    question: "A cell of e.m.f. 1.5 V is connected in series with a resistor of resistance 3.0Ω. A voltmeter connected across the cell registers 0.9 V. Calculate the internal resistance of the cell.",
    options: [
      "A) 2.0Ω",
      "B) 3.0Ω",
      "C) 5.0Ω",
      "D) 6.0Ω"
    ],
    correctAnswer: "A",
    explanation: "Voltage drop across internal resistance = EMF - Terminal voltage = 1.5V - 0.9V = 0.6V. Current in circuit = Terminal voltage/External resistance = 0.9V/3.0Ω = 0.3A. Internal resistance = Voltage drop/Current = 0.6V/0.3A = 2.0Ω."
  },
  {
    question: "The alloy used extensively in the building industry is",
    options: [
      "A) bronze",
      "B) type metal",
      "C) steel",
      "D) duralumin"
    ],
    correctAnswer: "C",
    explanation: "Steel, an alloy of iron and carbon (sometimes with other elements), is the most widely used alloy in construction and building applications due to its strength, durability, and versatility."
  },
//   {
//     question: "Business is poor these days _______ workers are on strike.",
//     options: [
//       "A) whereas",
//       "B) so that",
//       "C) no matter",
//       "D) because"
//     ],
//     correctAnswer: "D",
//     explanation: "The conjunction 'because' correctly shows the causal relationship between workers being on strike and business being poor."
//   }
];