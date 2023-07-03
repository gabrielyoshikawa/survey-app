<script>
    export let type = "primary";
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
    <slot />
</button>

<style>
    button {
        width: 20%;
        height: 7%;
        margin-top: 1.5rem;
        cursor: pointer;
        border: 0;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
        border-radius: 5%;
    }

    .primary {
        background-color: orangered;
        color: white;
    }

    .secondary {
        background-color: aquamarine;
        color: white;
    }

    .flat {
        box-shadow: none;
    }

    .primary.inverse {
        color: orangered;
        background-color: white;
        border: 2px solid orangered;
    }

    .secondary.inverse {
        color: aquamarine;
        background-color: white;
        border: 2px solid aquamarine;
    }
</style>
