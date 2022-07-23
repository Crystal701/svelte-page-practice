<script>
    export let title = "Ninja Gaming";
</script>

<a href="/" class="logo">
    <img src="/controller.svg" alt="site logo" />
    <h1>{title}</h1>
</a>

<style>
    .logo {
        display: flex;
        gap: 1rem;
    }

    img {
        filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg)
            brightness(100%) contrast(90%);
        width: 1.5rem;
    }

    h1 {
        margin: 0;
    }
</style>
