export async function GET() {
    const guides = [
        { id: 1, title: "Guide 1" },
        { id: 2, title: "Guide 2" },
        { id: 3, title: "Guide 3" },
        { id: 4, title: "Guide 4" },
        { id: 5, title: "Guide 5" }
    ]

    return {
        status: 200,
        body: guides
    }
}