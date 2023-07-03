<script>
    import Tabs from "./lib/Tabs.svelte";
    import CreatePoll from "./lib/CreatePoll.svelte";
    import PollList from "./lib/PollList.svelte";

    let items = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";

    const tabChange = (event) => {
        activeItem = event.detail;
    };

    let polls = [
        {
            id: 1,
            question: "A or B?",
            answerA: "A",
            answerB: "B",
            votesA: 9,
            votesB: 12,
        },
    ];

    const handleAdd = (event) => {
        const poll = event.detail;
        polls = [poll, ...polls];
        console.log(polls);
        activeItem = "Current Polls";
    };

    const handleVote = (event) => {
        const { option, id } = event.detail;
        
        let tempPolls = [...polls];
        let upvotedPoll = tempPolls.find((poll) => poll.id == id);

        if (option === "a") upvotedPoll.votesA += 1;
        if (option === "b") upvotedPoll.votesB += 1;

        polls = tempPolls;

    }

</script>

<div class="content">
    <div class="box">
        <Tabs {activeItem} {items} on:tabChange={tabChange} />
        {#if activeItem === "Current Polls"}
            <PollList polls={polls} on:vote={handleVote} />
        {:else if activeItem === "Add New Poll"}
            <CreatePoll on:add={handleAdd} />
        {/if}
    </div>
</div>

<style>
    .content {
        width: 100vw;
        height: 100vh;
        background-color: blanchedalmond;
        display: flex;
        justify-content: center;
        overflow-x: hidden;
    }

    .box {
        width: 32%;
        height: 85%;
        background-color: lightgreen;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 2%;
        margin-top: 2rem;
    }

</style>
