<script context="module">
    export async function load({ fetch }) {
        try {
            const req = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const guides = await req.json();
            return {
                props: {
                    guides,
                },
            };
        } catch (e) {
            return `${e}, Couldn't fetch guides`;
        }
    }
</script>

<script>
    export let guides;
</script>

<div class="guides">
    {#each guides as guide}
        <a sveltekit:prefetch href={`/guides/${guide.id}`}>{guide.title}</a>
    {/each}
</div>

<style>
    .guides {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 0;
    }

    a {
        border: 1px solid hsla(266, 55%, 88%, 0.2);
        padding: 0.5rem;
    }
</style>
