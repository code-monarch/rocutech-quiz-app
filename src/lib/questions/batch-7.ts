import { IQuestion } from "./types";

export const Questions: IQuestion[] = [
    {
        "question": "My uncle is a prosperous businessman; my aunt, unfortunately, is quite ________.",
        "options": [
            "A) Unskilful",
            "B) Dishonest",
            "C) Unsuccessful",
            "D) Unqualified"
        ],
        "correctAnswer": "C",
        "explanation": "The word 'prosperous' contrasts with 'unsuccessful,' highlighting opposite financial outcomes."
    },
    {
        "question": "The university has a large yearly intake, but very few _____ take place.",
        "options": [
            "A) Turnouts",
            "B) Rejections",
            "C) Expulsions",
            "D) Obstructions"
        ],
        "correctAnswer": "C",
        "explanation": "'Expulsions' refers to students being removed after admission, which is rare despite high intake."
    },
    {
        "question": "Rather than make derogatory remarks about the host, a guest should offer ___ ones.",
        "options": [
            "A) Polite",
            "B) Complimentary",
            "C) Interesting",
            "D) Honest"
        ],
        "correctAnswer": "B",
        "explanation": "'Complimentary' contrasts with 'derogatory,' implying positive remarks."
    },
    {
        "question": "Our mechanized services contrast sharply with the _____ operations we had before.",
        "options": [
            "A) Electrical",
            "B) Controlled",
            "C) Original",
            "D) Manual"
        ],
        "correctAnswer": "D",
        "explanation": "'Mechanized' vs. 'manual' emphasizes automation versus human labor."
    },
    {
        "question": "After Ade listened to advice, his rigid ideas became more _____.",
        "options": [
            "A) Friendly",
            "B) Compromising",
            "C) Flexible",
            "D) Democratic"
        ],
        "correctAnswer": "C",
        "explanation": "'Flexible' directly opposes 'rigid,' showing adaptability."
    },
    {
        "question": "From point P, R is 5 km west and 12 km south. What is the distance between P and R?",
        "options": [
            "A) 5 km",
            "B) 12 km",
            "C) 13 km",
            "D) 17 km"
        ],
        "correctAnswer": "C",
        "explanation": "Using Pythagoras: √(5² + 12²) = 13 km."
    },
    {
        "question": "Evaluate (0.13)³ correct to three significant figures.",
        "options": [
            "A) 0.00219",
            "B) 0.00220",
            "C) 0.00300",
            "D) 0.00390"
        ],
        "correctAnswer": "B",
        "explanation": "0.13³ = 0.002197 → Rounded to 0.00220 (3 sig figs)."
    },
    {
        "question": "Simplify 11011₂ − 1101₂.",
        "options": [
            "A) 101000₂",
            "B) 1100₂",
            "C) 1110₂",
            "D) 1011₂"
        ],
        "correctAnswer": "C",
        "explanation": "27 (11011₂) − 13 (1101₂) = 14 → 1110₂."
    },
    {
        "question": "Simplify (x−4)/4 − (x−3)/6.",
        "options": [
            "A) (x−18)/12",
            "B) (x−6)/12",
            "C) (x−18)/24",
            "D) (x−6)/24"
        ],
        "correctAnswer": "B",
        "explanation": "Common denominator 12: [3(x−4) − 2(x−3)]/12 = (x−6)/12."
    },
    {
        "question": "Given Y = (1−2x)/(4x−3). Find x where Y is undefined.",
        "options": [
            "A) 3",
            "B) ¾",
            "C) −¾",
            "D) −3"
        ],
        "correctAnswer": "B",
        "explanation": "Undefined when denominator is 0: 4x−3 = 0 → x = ¾."
    },
    {
        "question": "Which instrument produces sound via air column vibration?",
        "options": [
            "A) Drum",
            "B) Violin",
            "C) Guitar",
            "D) Piano",
            "E) Flute"
        ],
        "correctAnswer": "E",
        "explanation": "Flutes use air column vibrations, unlike string or percussion instruments."
    },
    {
        "question": "Which process CANNOT be explained by kinetic theory?",
        "options": [
            "A) Evaporation",
            "B) Thermal conduction",
            "C) Radiation",
            "D) Convection"
        ],
        "correctAnswer": "C",
        "explanation": "Heat radiation involves electromagnetic waves, not particle motion."
    },
    {
        "question": "A 16 kg mass in a lift accelerating upward at 2.5 m/s². Spring reading? (g = 10 m/s²)",
        "options": [
            "A) 25.0 N",
            "B) 12.5 N",
            "C) 7.5 N",
            "D) 4.0 N"
        ],
        "correctAnswer": "A",
        "explanation": "**Note:** Calculation error in original problem. Assuming mass = 2 kg: 2 × (10 + 2.5) = 25 N."
    },
    {
        "question": "Which statement about pressure is INCORRECT?",
        "options": [
            "A) Pressure increases with surface area",
            "B) Pressure decreases with surface area",
            "C) Pressure increases with decreased area",
            "D) Pressure increases with applied force"
        ],
        "correctAnswer": "A",
        "explanation": "Pressure = Force/Area. Increasing area decreases pressure (A is false)."
    },
    {
        "question": "Apparent weight in water = 32 N; weight in air = 96 N. Volume? (Density of water = 1000 kg/m³)",
        "options": [
            "A) 8.9 × 10⁻² m³",
            "B) 6.4 × 10⁻² m³",
            "C) 3.2 × 10⁻² m³",
            "D) 3.0 × 10⁻² m³"
        ],
        "correctAnswer": "B",
        "explanation": "**Note:** Correct volume = 6.4 × 10⁻³ m³, but closest option is B due to typo."
    },
    {
        "question": "Products of CH₃CH₂COOH + CH₃OH are H₂O and:",
        "options": [
            "A) CH₃CH₂COOCH₃",
            "B) CH₃CH₂CH₂COOCH₃",
            "C) CH₃CH₂CH₂COOH",
            "D) CH₃COOCH₃"
        ],
        "correctAnswer": "A",
        "explanation": "Esterification produces CH₃CH₂COOCH₃ (ethyl propanoate)."
    },
    {
        "question": "Fehling’s test detects:",
        "options": [
            "A) Starch",
            "B) Reducing sugars",
            "C) Oxidizing agents",
            "D) Alkanoic acids",
            "E) Alkanols"
        ],
        "correctAnswer": "B",
        "explanation": "Fehling’s test identifies reducing sugars (e.g., glucose)."
    },
    {
        "question": "Compound with highest ionic character:",
        "options": [
            "A) PCl₃",
            "B) SiCl₄",
            "C) AlCl₃",
            "D) KCl"
        ],
        "correctAnswer": "D",
        "explanation": "KCl has the largest electronegativity difference (metal + nonmetal)."
    },
    {
        "question": "Bond between high electron affinity & low ionization energy elements:",
        "options": [
            "A) Covalent",
            "B) Ionic",
            "C) Dative",
            "D) Metallic"
        ],
        "correctAnswer": "B",
        "explanation": "Ionic bonds form between electron acceptors (nonmetals) and donors (metals)."
    },
    {
        "question": "Molar mass of M(HCO₃)₂ = 162 g. Find M. (H=1, C=12, O=16)",
        "options": [
            "A) 122",
            "B) 101",
            "C) 53",
            "D) 40"
        ],
        "correctAnswer": "D",
        "explanation": "M + 2(1 + 12 + 48) = 162 → M = 162 − 122 = 40."
    }
];