export const APP_ROUTES = {
    index: "/",
    participants: "/participants",
};

export const CREATE_QUIZ_ROUTES = {
    quiz: "/quiz",
    createQuiz: "/quiz/create-quiz",
    selectSubjects: "/quiz/create-quiz/select-subjects",
    addQuestions: "/quiz/create-quiz/add-questions",
    selectParticipants: "/quiz/create-quiz/select-participants",
    summary: "/quiz/create-quiz/summary",
    participants: "/participants",
};

export const QUIZ_ROUTES = {
    mathematics: "/quiz?subject=mathematics",
    english: "/quiz?subject=english",
    physics: "/quiz?subject=physics",
    chemistry: "/quiz?subject=chemistry",
    currentAffairs: "/quiz?subject=currentAffairs",
};