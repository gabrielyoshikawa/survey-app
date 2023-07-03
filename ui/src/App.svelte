<script>
    import Tabs from "./lib/Tabs.svelte";
    import CreatePoll from "./lib/CreatePoll.svelte";
    import PollList from "./lib/PollList.svelte";

    let items = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";

    const tabChange = (event) => {
        activeItem = event.detail;
    };

    const handleAdd = (event) => {
        activeItem = "Current Polls";
    };

</script>

<div class="content">
    <div class="box">
        <Tabs {activeItem} {items} on:tabChange={tabChange} />
        {#if activeItem === "Current Polls"}
            <PollList />
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
