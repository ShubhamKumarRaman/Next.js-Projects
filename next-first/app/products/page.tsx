import Link from "next/link";

interface ProductsPageProps {
    searchParams: {
        category?: string,
        sort?: string
    }
}

const products = [
    { id: 1, name: "React Course", category: "react", price: 2999 },
    { id: 2, name: "Advanced React", category: "react", price: 3999 },
    { id: 3, name: "JavaScript Mastery", category: "javascript", price: 2499 },
    { id: 4, name: "Node.js Complete Guide", category: "nodejs", price: 3499 },
    { id: 5, name: "Express.js Bootcamp", category: "nodejs", price: 1999 },
    { id: 6, name: "MongoDB for Beginners", category: "mongodb", price: 1799 },
    { id: 7, name: "MERN Stack Project", category: "mern", price: 4999 },
    { id: 8, name: "Next.js Full Course", category: "nextjs", price: 4499 },
    { id: 9, name: "TypeScript Essentials", category: "typescript", price: 2799 },
    { id: 10, name: "Python for Developers", category: "python", price: 2999 },
    { id: 11, name: "FastAPI Crash Course", category: "python", price: 3299 },
    { id: 12, name: "Machine Learning Basics", category: "ai-ml", price: 5999 },
    { id: 13, name: "Deep Learning Fundamentals", category: "ai-ml", price: 6999 },
    { id: 14, name: "Docker & Kubernetes", category: "devops", price: 5499 },
    { id: 15, name: "AWS Cloud Practitioner", category: "cloud", price: 6499 },
];

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
    const { category, sort } = await searchParams;
    let filtered = products;

    if (category) {
        filtered = filtered.filter(product => product.category === category);
    }

    if (sort === "asc") {
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }

    return (
        <div>
            <h1>Products Page</h1>

            <div style={{ display: "flex", gap: 12 }}>
                <li> <Link href="/products">All</Link> </li>
                {
                    products.map((product) => (
                        <li key={product.id}>
                            <Link href={`/products?category=${product.category}`}>
                                {product.category}
                            </Link>
                        </li>
                    ))
                }
                <li><Link href="/products?sort=asc">Sort A-Z</Link></li>
            </div>

            <p>
                Current Filter: <b>{category || "All"}</b> | Sort:{" "}
                <b>{sort || "Default"}</b>
            </p>

            <ul>
                {filtered.map(product => (
                    <li key={product.id}>{product.name} - {product.category} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}