<script>
    import PollDetail from "./PollDetail.svelte";

    export let polls = [];

</script>

<div class="pollList">
    {#each polls as poll (poll.id)}
        <div>
            <PollDetail { poll } on:vote/>
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
