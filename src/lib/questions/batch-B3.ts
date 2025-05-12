import { IQuestion } from "./types";

export const BATCH_B3_QUESTIONS: IQuestion[] = [
  {
    question: "In each of the following sentences, there is one word or group of words in bracket. From the list of words or group of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in bracket that will, at the same time correctly fill the gap in the sentence. The officer was expecting to be ____ by his boss, but he was [censured].",
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
    explanation: "Each number in base x is converted to its base 10 equivalent: 23 in base x becomes 2x + 3 101 in base x becomes x² + 1 130 in base x becomes x² + 3x. When we add the first two numbers and equate to the third, we get: (2x + 3) + (x² + 1) = x² + 3x. Simplifying this equation leads us to x = 4."
  },
  {
    "question": "In each of the following sentences, there is one word or group of words in bracket. From the list of words or group of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in bracket that will, at the same time correctly fill the gap in the sentence. **The honour that was[conferred] on the general has been ______**",
    "options": [
      "A) Withdrawn",
      "B) Confirmed",
      "C) Rejected",
      "D) Destroyed"
    ],
    "correctAnswer": "A",
    "explanation": "To confer means to grant or bestow something. The opposite is to withdraw or take away something that was previously granted."
  },
  {
    "question": "Simplify (3/4 - 2/3) × 1 1/5",
    "options": [
      "A) 1/60",
      "B) 5/72",
      "C) 1/10",
      "D) 1 7/10"
    ],
    "correctAnswer": "C",
    "explanation": "(3/4 - 2/3) × 6/5 = (9/12 - 8/12) × 6/5 = 1/12 × 6/5 = 6/60 = 1/10"
  },
  {
    "question": "In each of the following sentences, there is one word or group of words in bracket. From the list of words or group of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in bracket that will, at the same time correctly fill the gap in the sentence. **The [modest] young man was rewarded while his _______ brother was punished.**",
    "options": [
      "A) Intelligent",
      "B) Handsome",
      "C) Conceited",
      "D) Wicked"
    ],
    "correctAnswer": "C",
    "explanation": "Modest means humble or unassuming. The opposite is conceited, which means excessively proud of oneself or vain."
  },
  {
    "question": "The distance d through which a stone falls from rest varies directly as the square of the time, t, taken. If the stone falls 45cm in 3 seconds, how far will it fall in 6 seconds?",
    "options": [
      "A) 90cm",
      "B) 135cm",
      "C) 180cm",
      "D) 225cm"
    ],
    "correctAnswer": "C",
    "explanation": "If d ∝ t², then d = kt² for some constant k. Given d = 45cm when t = 3s, we get 45 = k(3)², so k = 45/9 = 5. When t = 6s, d = 5(6)² = 5(36) = 180cm."
  },
  {
    "question": "In each of the following sentences, there is one word or group of words in bracket. From the list of words or group of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in bracket that will, at the same time correctly fill the gap in the sentence. **It is fact that[pride] is a less admirable quality than _______**",
    "options": [
      "A) Humility",
      "B) Honesty",
      "C) Affection",
      "D) Tenderness"
    ],
    "correctAnswer": "A",
    "explanation": "Pride (excessive self-esteem) is contrasted with humility, which means having a modest view of one's importance."
  },
  {
    "question": "Which of the following is a valid conclusion from the premise: 'Nigerian footballers are good footballers'",
    "options": [
      "A) Joseph plays football in Nigeria therefore he is a good footballer",
      "B) Joseph is a good footballer therefore he is a Nigerian footballer",
      "C) Joseph is a Nigerian footballer therefore he is a good footballer",
      "D) Joseph plays good football therefore he is a Nigerian footballer"
    ],
    "correctAnswer": "C",
    "explanation": "The premise states that 'Nigerian footballers are good footballers,' which means if someone is a Nigerian footballer, then they are a good footballer. This matches option C."
  },
  {
    "question": "In each of the following sentences, there is one word or group of words in bracket. From the list of words or group of words lettered A to D, choose the one that is most nearly opposite in meaning to the word in bracket that will, at the same time correctly fill the gap in the sentence. **While some workers felt that the terms were[amicable] others thought that they were_______**",
    "options": [
      "A) Strange",
      "B) Disagreeable",
      "C) Bad",
      "D) Hostile"
    ],
    "correctAnswer": "B",
    "explanation": "Amicable means characterized by friendliness and a desire to avoid conflict. The opposite is disagreeable, meaning unpleasant or unsatisfactory."
  },
  {
    "question": "On a map, 1cm represents 5km. Find the area on the map that represents 100km²",
    "options": [
      "A) 2cm²",
      "B) 4cm²",
      "C) 8cm²",
      "D) 16cm²"
    ],
    "correctAnswer": "B",
    "explanation": "The scale is 1cm:5km, so the scale factor is 1/5. For areas, we square the scale factor: (1/5)² = 1/25. So 100km² × (1/25) = 4cm²."
  },
  {
    "question": "A ball is dropped and hits the floor at point A. It rebounds upwards to point B. While moving from A to B its",
    "options": [
      "A) Kinetic energy is increasing",
      "B) Potential energy is increasing",
      "C) Potential energy is decreasing",
      "D) Kinetic energy remains constant"
    ],
    "correctAnswer": "B",
    "explanation": "As the ball moves upward from A to B, it's gaining height, so its potential energy is increasing. At the same time, its speed is decreasing, so its kinetic energy is decreasing."
  },
  {
    question: "An object of mass 0.25 kg moves at a height h above the ground with a speed of 4 m/s. If its mechanical energy at this height is 12 J, determine the value of h. (g=10 m/s²)",
    options: [
      "A) 0.8 m",
      "B) 4.0 m",
      "C) 4.8 m",
      "D) 5.6 m"
    ],
    "correctAnswer": "B",
    explanation: "Mechanical energy = Kinetic energy + Potential energy 12 = (1 / 2)mv² + mgh. Where: m = 0.25 kg, v = 4 m / s, g = 10 m / s², h = height to find Substituting the values: 12 = (1 / 2)(0.25)(4)² + (0.25)(10)h 12 = 2 + 2.5h 10 = 2.5h h = 4 meters"
  },
  {
    "question": "Which of the following equations for the efficiency of a machine is correct?",
    "options": [
      "A) Efficiency = Velocity Ratio/Mechanical Advantage×100%",
      "B) Efficiency = Input/Output×100%",
      "C) Efficiency = Load Distance/Effort Distance×100%",
      "D) Efficiency = Mechanical Advantage/Velocity Ratio×100%"
    ],
    "correctAnswer": "D",
    "explanation": "Efficiency = (useful output energy/total input energy)×100% = (Mechanical Advantage/Velocity Ratio)×100%."
  },
  {
    question: "A metal rod of length 50 cm is heated from 40°C to 80°C. If the linear expansivity of the material is α, calculate the increase in length (rod in meters) in terms of α.",
    options: [
      "A) 20α",
      "B) 200α",
      "C) 2000α",
      "D) 20000α"
    ],
    correctAnswer: "A",
    explanation: "Increase in length = L₀α(T₂- T₁) = 0.5m * α * (80°C - 40°C) = 0.5m * α * 40 = 20α meters"
  },
  {
    question: "Water of mass 1.5 kg is heated from 30°C to 80°C using an electric kettle rated 5A, 230V. Calculate the time it takes to reach the final temperature. (Specific heat capacity of water = 4200 J/kgK)",
    options: [
      "A) 4.57 minutes",
      "B) 5.02 minutes",
      "C) 7.30 minutes",
      "D) 10.04 minutes"
    ],
    correctAnswer: "A",
    explanation: "Energy needed = mc(T₂-T₁) = 1.5×4200×50 = 315,000 J\nPower = VI = 230×5 = 1150 W\nTime = Energy/Power = 315,000/1150 = 273.9 seconds = 4.57 minutes"
  },
  {
    question: "If a metal R forms a compound with the formula R(NO₃)₂, the formula of its tetraoxosulphate (VI) is",
    options: [
      "A) R(SO₄)",
      "B) RSO₄",
      "C) R₂(SO₄)",
      "D) R₃(SO₄)"
    ],
    correctAnswer: "B",
    explanation: "In R(NO₃)₂, the charge on R is +2 (to balance the -2 total from the two NO₃⁻ ions). The SO₄²⁻ ion has a charge of -2, so to form a neutral compound with R, the formula would be RSO₄"
  },
  {
    question: "Which of the following decreases when a given mass of gas is compressed to half its initial volume?",
    options: [
      "A) Average molecular distance",
      "B) Frequency of collisions",
      "C) Number of molecules present",
      "D) Atomic radius of each particle"
    ],
    correctAnswer: "A",
    explanation: "When a gas is compressed, the molecules are forced closer together, reducing the average molecular distance. The frequency of collisions increases, the number of molecules stays the same, and the atomic radius remains unchanged."
  },
  {
    question: "What volume of hydrogen will be produced if 100cm³ of ammonia is completely decomposed at constant temperature and pressure? The equation for the reaction is 2NH₃→N₂+3H₂",
    options: [
      "A) 50cm³",
      "B) 150cm³",
      "C) 200cm³",
      "D) 300cm³"
    ],
    correctAnswer: "B",
    "explanation": "According to the equation, 2 moles of NH₃ produce 3 moles of H₂. At constant temperature and pressure, volume is proportional to moles. So 100cm³ of NH₃ will produce (3/2)×100cm³ = 150cm³ of H₂."
  },
  {
    question: "Calculate the mass of chlorine gas which occupies a volume of 5.6dm³ at s.t.p.",
    options: [
      "A) 3.55g",
      "B) 7.10g",
      "C) 17.75g",
      "D) 15.90g"
    ],
    correctAnswer: "C",
    explanation: "At s.t.p., 22.4dm³ of any gas contains 1 mole. So 5.6dm³ contains (5.6/22.4) = 0.25 moles. For Cl₂, molar mass = 71g/mol. So mass = 0.25×71 = 17.75g."
  },
  {
    question: "The gas given off when NH₄Cl is heated with an alkali is",
    options: [
      "A) H₂",
      "B) Cl₂",
      "C) N₂",
      "D) NH₃"
    ],
    correctAnswer: "D",
    explanation: "The reaction between ammonium chloride (NH₄Cl) and an alkali (like NaOH) produces ammonia gas (NH₃): NH₄Cl + NaOH → NH₃ + H₂O + NaCl"
  }
];