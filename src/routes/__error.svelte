<script context="module">
    export async function load({ error }) {
        return {
            props: {
                message: error.message,
            },
        };
    }
</script>

<script>
    export let message;
</script>

<div class="error">
    <h2>Oops</h2>
    <p>{message}</p>
    <a href="/guides">Back to guides...</a>
</div>

<style>
    .error {
        text-align: center;
        border: 1px solid hsla(266, 55%, 88%, 0.2);
        width: 80%;
        padding: 2rem;
    }

    h2 {
        margin: 0;
    }

    a {
        text-decoration: underline;
    }
</style>
