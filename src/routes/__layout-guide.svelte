<script>
    import "../styles/global.css";
    import Title from "$lib/title.svelte";

    let links = ["about", "guides"];
</script>

<nav>
    <header>
        <Title title="Ninja Gaming Guides" />
        <div class="links">
            {#each links as link}
                <a href="/{link}">{link}</a>
            {/each}
        </div>
    </header>
</nav>

<main>
    <slot />
</main>

<footer>
    <span>Copyright 2022 Ninja Gaming Guides</span>
</footer>

<style>
    header,
    main,
    footer {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 960px;
        margin: auto;
    }

    nav {
        background-color: rgba(0, 0, 0, 0.1);
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .links {
        display: flex;
        gap: 1rem;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
