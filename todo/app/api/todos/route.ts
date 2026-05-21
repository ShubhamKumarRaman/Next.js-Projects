import { NextResponse } from "next/server";
import Todo from "@/models/todo.model";
import { connectDB } from "@/lib/db";

export async function GET() {
    await connectDB();
    const todos = await Todo.find();
    return NextResponse.json(todos);
}

export async function POST(req:Request){
    await connectDB();
    const body = await req.json();
}