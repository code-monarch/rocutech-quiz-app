export const APP_ROUTES = {
    index: "/",
    dashboard: "/dashboard",
    participants: "/participants",
    signIn: "/sign-in",
};

export const CREATE_QUIZ_ROUTES = {
    quiz: "/quiz",
    intro: "/quiz/intro",
    instructions: "/quiz/instructions",
    completion: "/quiz/completion",
    createQuiz: "/create-quiz",
    selectSubjects: "/create-quiz/select-subjects",
    addQuestions: "/create-quiz/add-questions",
    selectParticipants: "/create-quiz/select-participants",
    summary: "/create-quiz/summary",
    participants: "/participants",
};

export const QUIZ_ROUTES = {
    mathematics: "/create-quiz/select-subjects?subject=mathematics",
    english: "/create-quiz/select-subjects?subject=english",
    physics: "/create-quiz/select-subjects?subject=physics",
    chemistry: "/create-quiz/select-subjects?subject=chemistry",
    currentAffairs: "/create-quiz/select-subjects?subject=currentAffairs",
};