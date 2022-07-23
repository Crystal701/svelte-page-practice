export async function GET({ params }) {
    const guides = [
        { id: 1, title: "Guide 1", body: "SvelteKit is an application framework powered by Svelte. It enables you to build bigger apps with a smaller footprint." },
        { id: 2, title: "Guide 2", body: "SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing." },
        { id: 3, title: "Guide 3", body: "Unlike single-page apps, SvelteKit doesn't compromise on SEO, progressive enhancement or the initial load experience — but unlike traditional server-rendered apps, navigation is instantaneous for that app-like feel." },
        { id: 4, title: "Guide 4", body: "SvelteKit fully embraces the serverless paradigm, and will launch with support for all the major serverless providers, with an 'adapter' API for targeting any platforms that we don't officially cater to." },
        { id: 5, title: "Guide 5", body: "It will always be possible to use Svelte as a standalone package or via a bundler integration like rollup-plugin-svelte. We think it's essential that you can bend Svelte to fit your workflow, however esoteric, and use third-party app frameworks like Elder.js, Routify, Plenti, Crown, JungleJS and others." }
    ]

    const guide = guides.find((guide) => guide.id == params.id);

    if (guide) {
        return {
            status: 200,
            body: guide
        }
    }

    return {
        status: 404
    }
}