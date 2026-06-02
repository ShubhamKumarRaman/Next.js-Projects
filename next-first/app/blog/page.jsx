import Link from "next/link"

const blogs = [
    {
        slug: "nextjs",
        title: "NextJs Basic"
    },
    {
        slug: "react",
        title: "React Basic"
    },
    {
        slug: "node",
        title: "Node Basic"
    }
]

export default function BlogPage() {
    return (
        <div>
            <h1>Blog Page</h1>
            <p>This is Blog page of our next.js application.</p>
            <ul>
                {
                    blogs.map((blog) => (
                        <li key={blog.slug}>
                            <Link href={`/blog/${blog.slug}`}>
                                {blog.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}