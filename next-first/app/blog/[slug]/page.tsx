interface BlogPageProps {
    params: {
        slug: string;
    }
}

const blogData: Record<string, { title: string, content: string }> = {
    "nextjs": {
        title: "NextJs Basic",
        content: "NextJs is a react framework for production. It makes building full stack application"
    },
    "react": {
        title: "React Basic",
        content: "React is a frontend library. It makes building frontend application."
    },
    "node": {
        title: "Node Basic",
        content: "Node is backend library. It make building backend application."
    }
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
    const { slug } = await params;

    const blog = blogData[slug];

    if (!blog) {
        return <h1>Blog not found</h1>
    }

    return (
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p>
                Slug url:{slug}
            </p>
        </div>
    )
}