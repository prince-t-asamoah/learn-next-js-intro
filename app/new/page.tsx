import Header from '@/components/Header';
import Link from 'next/link';
import { prisma } from '../db';
import { redirect } from 'next/navigation';

const createTodo = async (data: FormData) => {
    'use server';
    const title = data.get('title')?.valueOf();
    if (typeof title !== 'string' || title.length === 0) {
        throw new Error('Invalid title');
    }
    const newTodo = await prisma.todo.create({
        data: { title, complete: false },
    });
    if (newTodo) redirect('/');
};

export default function NewTodo() {
    return (
        <div className="p-5 flex flex-col items-center">
            <Header title="New Todo" />
            <form action={createTodo} className="flex flex-col gap-5 w-5/12">
                <input
                    type="text"
                    name="title"
                    className="text-slate-100 p-2 w-full bg-slate-800 border border-1 border-slate-100 outline-none rounded-md"
                    placeholder="Enter your todo title"
                />
                <div className="flex items-center justify-end gap-4">
                    <Link
                        href="/"
                        className="px-4 py-1.5 text-slate-100 hover:underline"
                    >
                        View todos
                    </Link>
                    <button className="font-semibold px-4 py-1.5 bg-slate-100 rounded-md hover:bg-slate-300">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
