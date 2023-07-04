import { writable } from "svelte/store";

const store = writable([
    {
        id: 1,
        question: "A or B?",
        answerA: "A",
        answerB: "B",
        votesA: 9,
        votesB: 12,
    }
]);

export default store;