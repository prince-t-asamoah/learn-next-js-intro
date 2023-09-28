import Link from 'next/link';
import { prisma } from './db';

export default async function Home() {
    const todos = await prisma.todo.findMany();

    return (
        <main className="h-screen p-5">
            <header className="text-white flex justify-between items-center mb-4">
                <h1 className="text-2xl">Todos</h1>
                <Link
                    href="/"
                    className="outline outline-1 px-2 py-1 rounded-sm hover:bg-slate-100 hover:text-slate-800"
                >
                    New
                </Link>
            </header>
            <ul className="pl-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="text-white">
                        {todo.title}
                    </li>
                ))}
            </ul>
        </main>
    );
}
