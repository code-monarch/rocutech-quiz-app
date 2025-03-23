import { IQuestion } from "./types";

export const Questions: IQuestion[] = [
    {
        "question": "I can confirm he broke the glass accidentally, not _________.",
        "options": ["A) Forcefully", "B) Directly", "C) Carefully", "D) Deliberately"],
        "correctAnswer": "D",
        "explanation": "'Deliberately' contrasts with 'accidentally,' implying intent."
    },
    {
        "question": "Only question one is compulsory; the rest are _________.",
        "options": ["A) Easy", "B) Clear", "C) Confusing", "D) Optional"],
        "correctAnswer": "D",
        "explanation": "'Optional' means not required, opposing 'compulsory.'"
    },
    {
        "question": "The magistrate convicted the hardened criminal but _________ the first offender.",
        "options": ["A) Acquitted", "B) Jailed", "C) Released", "D) Sentenced"],
        "correctAnswer": "A",
        "explanation": "'Acquitted' means declared innocent, contrasting with 'convicted.'"
    },
    {
        "question": "Brick houses are sturdy; glass houses are _________.",
        "options": ["A) Temporary", "B) Fragile", "C) Beautiful", "D) Cosy"],
        "correctAnswer": "B",
        "explanation": "'Fragile' (easily broken) contrasts with 'sturdy.'"
    },
    {
        "question": "The principal is strict, but his deputy is _________.",
        "options": ["A) Peaceful", "B) Lenient", "C) Kind", "D) Efficient"],
        "correctAnswer": "B",
        "explanation": "'Lenient' (flexible) contrasts with 'strict.'"
    },
    {
        "question": "If \(23_x = 32_5\), find the value of \(x\). (Base \(x\) and base 5)",
        "options": ["A) 7", "B) 6", "C) 5", "D) 4"],
        "correctAnswer": "A",
        "explanation": "Convert \(32_5\) to base 10: \(3 \times 5 + 2 = 17\). Solve \(2x + 3 = 17\) → \(x = 7\)."
    },
    {
        "question": "The volume of a cube is 512 cm³. Find its side length.",
        "options": ["A) 6 cm", "B) 7 cm", "C) 8 cm", "D) 9 cm"],
        "correctAnswer": "C",
        "explanation": "Cube root of 512 = 8 cm."
    },
    {
        "question": "Gradient of the line joining (2, -3) and (2, 5).",
        "options": ["A) 0", "B) 1", "C) 2", "D) Undefined"],
        "correctAnswer": "D",
        "explanation": "Vertical lines have undefined gradients (Δx = 0)."
    },
    {
        "question": "If \((x - a)\) is a factor of \(bx - ax + x^2 - ab\), find the other factor.",
        "options": ["A) \(x + b\)", "B) \(x - b\)", "C) \(a + b\)", "D) \(a - b\)"],
        "correctAnswer": "A",
        "explanation": "Factorize: \(x^2 + (b - a)x - ab = (x - a)(x + b)\)."
    },
    {
        "question": "A 7 cm chord in a circle (radius 3.7 cm). Distance from center?",
        "options": ["A) 0.7 cm", "B) 1.2 cm", "C) 2.0 cm", "D) 2.5 cm"],
        "correctAnswer": "B",
        "explanation": "Using Pythagoras: \(d = \sqrt{3.7^2 - (3.5)^2} ≈ 1.2 \, \text{cm}\)."
    },
    {
        "question": "Charges on a conductor are:",
        "options": [
            "A) Evenly distributed",
            "B) Concentrated inside",
            "C) Concentrated on flat surfaces",
            "D) Concentrated at sharp curves"
        ],
        "correctAnswer": "D",
        "explanation": "Charges accumulate more at sharply curved surfaces."
    },
    {
        "question": "Role of MnO₂ in a Leclanché cell?",
        "options": [
            "A) Control local action",
            "B) Depolarize the cell",
            "C) Regulate current",
            "D) Reduce resistance"
        ],
        "correctAnswer": "B",
        "explanation": "MnO₂ acts as a depolarizer, removing hydrogen bubbles."
    },
    {
        "question": "Fuse: 3A, 12V. Calculate resistance.",
        "options": ["A) 36.0 Ω", "B) 15.0 Ω", "C) 9.0 Ω", "D) 4.0 Ω"],
        "correctAnswer": "D",
        "explanation": "\(R = V/I = 12/3 = 4 \, \Omega\)."
    },
    {
        "question": "Cost of running a 60W lamp for 24 hours (₦5/kWh).",
        "options": ["A) ₦14.4", "B) ₦12.5", "C) ₦7.2", "D) ₦20"],
        "correctAnswer": "C",
        "explanation": "Energy = \(60 \times 24 = 1.44 \, \text{kWh}\). Cost = \(1.44 \times 5 = ₦7.2\)."
    },
    {
        "question": "Unit for electric charge?",
        "options": ["A) Farad", "B) Ampere", "C) Coulomb", "D) Volt"],
        "correctAnswer": "C",
        "explanation": "Charge is measured in coulombs (C)."
    },
    {
        "question": "Calculate e.m.f for Cu/Zn cell (\(E°_{\text{Cu}} = +0.34V\), \(E°_{\text{Zn}} = -0.76V\)).",
        "options": ["A) -1.1V", "B) -0.42V", "C) +0.42V", "D) +1.1V"],
        "correctAnswer": "D",
        "explanation": "\(E_{\text{cell}} = 0.34 - (-0.76) = +1.1 \, \text{V}\)."
    },
    {
        "question": "Hydrogenation of butene yields:",
        "options": ["A) Butyne", "B) Butane", "C) Pentene", "D) Butanol"],
        "correctAnswer": "B",
        "explanation": "Hydrogenation adds H₂ to alkenes, producing alkanes."
    },
    {
        "question": "Benzene produces more soot than ethane because it has:",
        "options": [
            "A) Higher molar mass",
            "B) Higher unsaturation",
            "C) Substitution/addition reactions",
            "D) Liquid state"
        ],
        "correctAnswer": "B",
        "explanation": "Benzene’s ring structure leads to incomplete combustion (soot)."
    },
    {
        "question": "CH₃CH₂OCH₃ is a/an:",
        "options": ["A) Tertiary alkanol", "B) Alkanone", "C) Alkanoic acid", "D) Ether"],
        "correctAnswer": "D",
        "explanation": "**Corrected Answer:** It is an ether (not listed in original options; adjusted for accuracy)."
    },
    {
        "question": "Crude oil fraction containing C₁₂H₂₆?",
        "options": ["A) Kerosene", "B) Naptha", "C) Gas oil", "D) Fuel oil"],
        "correctAnswer": "A",
        "explanation": "Kerosene typically contains C₁₂–C₁₅ hydrocarbons."
    }
];