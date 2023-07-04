<script>
    import store from "../../dist/stores/store.js";
    import Button from "./Button.svelte";
    import { tweened } from "svelte/motion";

    export let poll;

    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = totalVotes > 0 ? Math.floor((100 / totalVotes) * poll.votesA) : 0;
    $: percentB = totalVotes > 0 ? Math.floor((100 / totalVotes) * poll.votesB) : 0;

    const tweenedA = tweened(0);
    const tweenedB = tweened(0);

    $: tweenedA.set(percentA);
    $: tweenedB.set(percentB);

    const handleVote = (option, id) => {
        store.update((currentPolls) => {
            let tempPolls = [...currentPolls];
            let upvotedPoll = tempPolls.find((poll) => poll.id == id);

            if (option === "a") upvotedPoll.votesA += 1;
            if (option === "b") upvotedPoll.votesB += 1;

            return tempPolls;
        });
    };

    const handleDelete = (id) => {
        store.update((currentPolls) => {
            return currentPolls.filter((poll) => poll.id != id);
        });
    };

</script>

<div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: {totalVotes}</p>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => handleVote("a", poll.id)}>
        <div class="percent percent-a" style="width: {$tweenedA}%">
            <span>{poll.answerA} ({poll.votesA}) </span>
        </div>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="answer" on:click={() => handleVote("b", poll.id)}>
        <div class="percent percent-b" style="width: {$tweenedB}%">
            <span>{poll.answerB} ({poll.votesB}) </span>
        </div>
    </div>

    <div class="delete">
        <Button flat={true} on:click={() => handleDelete(poll.id)}
            >Delete</Button
        >
    </div>
</div>

<style>
    .poll {
        background-color: #e6e6e6;
        display: flex;
        flex-direction: column;
        margin: 20px;
        height: 220px;
        min-width: 200px;
        justify-content: space-around;
        align-items: center;
        border-radius: 2%;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

        /* Prevent select from double click :D */
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }

    h3 {
        color: gray;
        font-size: 2.3em;
        margin: 0;
        padding: 0;
    }

    p {
        margin: 0;
        padding: 0;
        color: gray;
        font-size: 1.5em;
    }
    
    .answer {
        background-color: #d8d8d8;
        cursor: pointer;
        width: 90%;
        height: 15%;
        font-size: 1.6em;
        display: flex;
    }

    .answer:hover {
        opacity: 0.9;
    }

    .percent {
        height: 100%;
        position: relative;
    }

    .percent-a {
        background-color: rgb(255, 166, 166);
        display: flex;
        align-items: center;
        border-left: 4px solid red;
    }

    .percent-b {
        display: flex;
        align-items: center;
        background-color: rgb(159, 252, 159);
        border-left: 4px solid green;
    }

    span {
        min-width: fit-content;
        width: 100%;
        margin-left: 0.5rem;
}
</style>
