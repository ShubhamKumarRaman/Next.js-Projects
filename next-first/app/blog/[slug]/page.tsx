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