import { IQuestion } from "./types";

export const BATCH_C4_QUESTIONS: IQuestion[] = [
  {
    question: "I could not read what he wrote because his handwriting was __________",
    options: [
      "A) Tiny",
      "B) Eligible",
      "C) Untidy",
      "D) Illegible"
    ],
    correctAnswer: "D",
    explanation: "Illegible means impossible or difficult to read, which fits the context of not being able to read someone's handwriting."
  },
  {
    question: "Mensah is 5 years old and Joyce is thrice as old as Mensah. In how many years will Joyce be twice as old as Mensah?",
    options: [
      "A) 3 years",
      "B) 10 years",
      "C) 5 years",
      "D) 15 years"
    ],
    correctAnswer: "C",
    explanation: "If Mensah is 5, Joyce is 15. After x years, we need (15+x) = 2(5+x). Solving: 15+x = 10+2x, which gives x = 5 years."
  },
  {
    question: "It takes 4 minutes to boil a quantity of water using an electric heating coil. How long will it take to boil the same quantity of water if the same heating coil if the current is doubled? (Neglect any external heat loss)",
    options: [
      "A) 8 minutes",
      "B) 4 minutes",
      "C) 2 minutes",
      "D) 1 minute"
    ],
    correctAnswer: "D",
    explanation: "Power P = I²R, where I is current and R is resistance. When current is doubled, power increases by a factor of 4. Since heating time is inversely proportional to power, the new time will be 4 minutes ÷ 4 = 1 minute."
  },
  {
    question: "What is the main impurity in haematite?",
    options: [
      "A) CaSiO₃",
      "B) CaCO₃",
      "C) SiO₂",
      "D) Fe₂O₃"
    ],
    correctAnswer: "C",
    explanation: "Haematite (Fe₂O₃) is an ore of iron, and its main impurity is silicon dioxide (SiO₂), also known as silica. This impurity is removed in the blast furnace using limestone (CaCO₃), which decomposes to form CaO, reacting with SiO₂ to form slag (CaSiO₃)."
  },
  {
    question: "When all the items on the agenda has been discussed, the meeting was __________",
    options: [
      "A) Dismissed",
      "B) Postponed",
      "C) Adjourned",
      "D) Dissolved"
    ],
    correctAnswer: "C",
    explanation: "To adjourn a meeting means to formally close or suspend it, typically after all agenda items are addressed."
  },
  {
    question: "The circumference of a circular track is 9km. A cyclist rides round it a number of times and stops after covering a distance of 302km. How far is the cyclist from the starting point?",
    options: [
      "A) 5km",
      "B) 6km",
      "C) 7km",
      "D) 3km"
    ],
    correctAnswer: "A",
    explanation: "302 ÷ 9 = 33 with remainder 5. After 33 complete rounds plus 5km, the cyclist is 5km away from the starting point."
  },
  {
    question: "As a bicycle tire was being pumped up, it was noticed that contrary to Boyle's law, the volume increased as the pressure increased. The best explanation for this is that Boyle's law is only true for",
    options: [
      "A) Ideal gases",
      "B) a fixed mass of gas",
      "C) a mixture of gases",
      "D) a gas at variable temperature"
    ],
    correctAnswer: "A",
    explanation: "Boyle's law states that pressure and volume are inversely proportional at constant temperature and for a fixed mass of gas. However, the law assumes ideal gas behavior. In the tire, more air is being added (mass isn't constant), which explains why volume increases with pressure."
  },
  {
    question: "What volume of 0.20 mol dm⁻³ NaOH solution would yield 5.0g of NaOH on evaporation to dryness? [NaOH = 40g mol⁻¹]",
    options: [
      "A) 400cm³",
      "B) 625cm³",
      "C) 1000cm³",
      "D) 1600cm³"
    ],
    correctAnswer: "B",
    explanation: "Since moles = mass ÷ molar mass, we find that 5.0g of NaOH is 0.125 moles. Using volume = moles ÷ concentration, we get 0.625 dm³, which is 625 cm³."
  },
  {
    question: "Occasionally, universities award __________ degree to outstanding personalities.",
    options: [
      "A) Ceremonial",
      "B) Honorary",
      "C) Temporary",
      "D) Respectable"
    ],
    correctAnswer: "B",
    explanation: "An honorary degree is awarded to recognize distinguished individuals without the usual requirements of academic study."
  },
  {
    question: "If 4x + 2y = 16 and 6x - 2y = 4, find the value of (y-x)",
    options: [
      "A) 8",
      "B) 2",
      "C) 4",
      "D) 6"
    ],
    correctAnswer: "B",
    explanation: "Adding the equations: 10x = 20, so x = 2. Substituting: 4(2) + 2y = 16, so y = 4. Therefore, y-x = 4-2 = 2."
  },
  {
    question: "When table salt is added to ice, the melting point of the ice",
    options: [
      "A) is raised",
      "B) is lowered",
      "C) remains unchanged",
      "D) is first raised, then lowered"
    ],
    correctAnswer: "B",
    explanation: "Adding salt to ice creates a solution with a lower freezing point than pure water. This is why salt is used to melt ice on roads in winter."
  },
  {
    question: "What process does the following equation represent? (C₆H₁₀O₅)n + nH₂O → nC₆H₁₂O₆",
    options: [
      "A) Polymerization of glucose",
      "B) Hydrolysis of starch",
      "C) Fermentation of sugar",
      "D) Dehydration of carbohydrates"
    ],
    correctAnswer: "B",
    explanation: "The equation shows starch breaking down into glucose using water, which is a hydrolysis reaction."
  },
  {
    question: "His thoughtlessness is simply beyond __________",
    options: [
      "A) Idea",
      "B) Assurance",
      "C) Belief",
      "D) Fate"
    ],
    correctAnswer: "C",
    explanation: "The phrase 'beyond belief' is commonly used to express something that is extremely surprising or difficult to accept."
  }
];