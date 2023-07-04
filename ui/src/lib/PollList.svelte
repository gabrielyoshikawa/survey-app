<script>
    import PollDetail from "./PollDetail.svelte";
    import store from "../../dist/stores/store.js";
    import { fade, slide, scale } from "svelte/transition";
    import { flip } from "svelte/animate";
</script>

<div class="pollList">
    {#each $store as poll (poll.id)}
        <div in:fade out:scale|local={{duration: 800}} animate:flip={{duration: 800}}>
            <PollDetail { poll } />
        </div>
    {:else}
        <p>No polls to show...</p>
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

    p {
        font-size: 2em;
        color: rgb(61, 61, 61);
    }
</style>
