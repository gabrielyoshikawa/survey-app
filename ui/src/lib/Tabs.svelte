<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let items;
    export let activeItem;
</script>

<div class="tabs">
    <ul>
        {#each items as item}
            <li on:click={() => dispatch("tabChange", item)}>
                <div class:active={item === activeItem}>{item}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        width: 100%;
        min-height: 10%;
        background-color: lightblue;
        display: flex;
    }

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        margin: 0;
        padding: 0;
        justify-content: center;
        align-items: center;
    }

    li {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: rgb(94, 94, 94);
        cursor: pointer;
        transition: 300ms;
    }

    .active {
        color: orangered;
        border-bottom: 2px solid orangered;
        transition: 300ms;
    }
</style>
