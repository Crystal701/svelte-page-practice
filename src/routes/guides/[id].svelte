<script context="module">
    export async function load({ fetch, params }) {
        const id = params.id;
        const req = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const guide = await req.json();

        if (req.ok) {
            return {
                props: {
                    guide,
                },
            };
        }

        return {
            status: 301,
            redirect: "/guides",
        };
    }
</script>

<script>
    export let guide;
</script>

<div class="guide">
    <h2>{guide.title}</h2>
    <p>{guide.body}</p>
</div>

<style>
    .guide {
        display: flex;
        flex-direction: column;
        padding: 1rem 3rem;
        margin: 1rem;
        border: 1px solid hsla(266, 55%, 88%, 0.2);
    }
</style>
