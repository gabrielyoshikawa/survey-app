<script>
    import Button from "./Button.svelte";
    import { createEventDispatcher } from "svelte";
    import pollStore from "../../dist/stores/pollStore.js";

    let dispatch = createEventDispatcher();

    let fields = { question: "", answerA: "", answerB: "" };
    let errors = { question: "", answerA: "", answerB: "" };
    let valid = false;

    const submitHandler = () => {
        valid = true;

        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = "Questions must be at least 5 characters long";
        } else {
            errors.question = "";
        }

        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = "Answer A cannot be empty";
        } else {
            errors.answerA = "";
        }

        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = "Answer B cannot be empty";
        } else {
            errors.answerB = "";
        }

        if (valid) {
            let poll = {...fields, votesA: 0, votesB: 0, id: Math.random()}
            pollStore.update(currentPolls => {
                return [poll, ...currentPolls];
            })
            dispatch("add");
        }
    };
</script>

<form on:submit|preventDefault={submitHandler}>
    <div class="form-field">
        <label for="question">Poll Question</label><br />
        <input type="text" id="question" bind:value={fields.question} />
        <div class="error">{errors.question}</div>
    </div>

    <div class="form-field">
        <label for="answer-a">Answer A</label><br />
        <input type="text" id="answer-a" bind:value={fields.answerA} />
        <div class="error">{errors.answerA}</div>
    </div>

    <div class="form-field">
        <label for="answer-b">Answer B</label><br />
        <input type="text" id="answer-b" bind:value={fields.answerB} />
        <div class="error">{errors.answerB}</div>
    </div>

    <Button type="secondary" flat={true} inverse={false}>Add Poll</Button>
</form>

<style>
    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .form-field {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        width: 75%;
    }

    label {
        font-size: 2em;
        color: rgb(94, 94, 94);
    }

    input {
        font-size: 2em;
        border: none;
    }

    .error {
        font-size: 1.5em;
        color: red;
        font-weight: 500;
        margin-top: 0.3rem;
        text-align: center;
    }
</style>
