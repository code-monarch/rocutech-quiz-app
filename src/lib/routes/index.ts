export const APP_ROUTES = {
    index: "/",
    dashboard: "/dashboard",
    participants: "/participants",
    signIn: "/sign-in",
    addParticipants: "/add-participants",
    scoreboard: "/scoreboard",
};

export const CREATE_QUIZ_ROUTES = {
    quiz: "/quiz",
    intro: "/setup-quiz/intro",
    instructions: "/setup-quiz/instructions",
    completion: "/setup-quiz/completion",
    createQuiz: "/create-quiz",
    selectSubjects: "/create-quiz/select-subjects",
    addQuestions: "/create-quiz/add-questions",
    selectParticipants: "/create-quiz/select-participants",
    summary: "/create-quiz/summary",
    participants: "/participants",
};

export const QUIZ_ROUTES = {
    mathematics: "/create-quiz/add-questions?subject=mathematics",
    english: "/create-quiz/add-questions?subject=english",
    physics: "/create-quiz/add-questions?subject=physics",
    chemistry: "/create-quiz/add-questions?subject=chemistry",
    currentAffairs: "/create-quiz/add-questions?subject=currentAffairs",
};