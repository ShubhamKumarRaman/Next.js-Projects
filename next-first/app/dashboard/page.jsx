"use client"

import { useRouter } from "next/navigation";

export default function DashboardPage() {

    const router = useRouter();

    function handleClick() {
        router.push('/');
    }
    return (
        <div>
            <h2>Dashboard Page</h2>
            <button onClick={handleClick}>Got to Home</button>
        </div>
    )
}