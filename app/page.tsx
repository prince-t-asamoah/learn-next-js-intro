import Link from 'next/link';
import { prisma } from './db';
import TodoItem from '@/components/TodoItem';
import Header from '@/components/Header';

export default async function Home() {
    const todos = await prisma.todo.findMany();

    return (
        <main className="h-screen p-5">
            <Header title="New">
                <Link
                    href="/new"
                    className="outline outline-1 px-2 py-1 rounded-sm hover:bg-slate-100 hover:text-slate-800"
                >
                    New
                </Link>
            </Header>
            <ul className="pl-4">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </ul>
        </main>
    );
}
