<script>
    import PollDetail from "./PollDetail.svelte";
    import pollStore from "../../dist/stores/pollStore.js";
</script>

<div class="pollList">
    {#each $pollStore as poll (poll.id)}
        <div>
            <PollDetail { poll } />
        </div>
    {/each}
</div>

<style>
    .pollList {
        display: flex;
        background-color: lightgreen;
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border-radius: 2%;
    }
</style>
