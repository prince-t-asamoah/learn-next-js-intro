'use client';

import Link from 'next/link';

interface TodoItemProps {
    id: string;
    itemNumber: number;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
}

export default function TodoItem({
    id,
    itemNumber,
    title,
    complete,
    toggleTodo,
}: TodoItemProps) {
    return (
        <li className="bg-slate-100 py-2 px-4 flex items-center justify-between gap-2 border-b">
            <div className="flex items-center gap-2">
                <span>{itemNumber}.</span>
                <input
                    id={id}
                    type="checkbox"
                    className="cursor-pointer peer w-4 h-4 rounded focus:ring-2 checked:ring-blue-500"
                    defaultChecked={complete}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                <label
                    htmlFor={id}
                    className="text-slate-600 peer-checked:line-through peer-checked:text-slate-400"
                >
                    {title}
                </label>
            </div>
            <div className="flex gap-2.5 items-center">
                <Link
                    href={`/edit?id=${id}`}
                    className="text-slate-700 hover:underline"
                >
                    Edit
                </Link>
                <button className="text-red-400 hover:outline hover:bg-red-400 hover:text-slate-100 py-1 px-2.5 rounded-md">
                    Delete
                </button>
            </div>
        </li>
    );
}
