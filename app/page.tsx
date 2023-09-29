import Link from 'next/link';
import { prisma } from './db';
import TodoItem from '@/components/TodoItem';
import Header from '@/components/Header';

const toggleTodo = async (id: string, complete: boolean) => {
    'use server';
    await prisma.todo.update({ where: { id }, data: { complete } });
};

export default async function Home() {
    const todos = await prisma.todo.findMany();

    return (
        <main className="p-5">
            <Header title="All Todos">
                <Link
                    href="/new"
                    className="outline outline-1 px-2 py-1 rounded-sm hover:bg-slate-100 hover:text-slate-800"
                >
                    New
                </Link>
            </Header>
            <ul className="mt-10">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </main>
    );
}
