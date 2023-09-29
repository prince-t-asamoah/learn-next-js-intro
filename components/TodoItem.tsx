'use client';

import Link from 'next/link';

interface TodoItemProps {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
}

export default function TodoItem({
    id,
    title,
    complete,
    toggleTodo,
}: TodoItemProps) {
    return (
        <li className="text-white py-2 flex items-center justify-between gap-2">
            <div className="flex gap-2">
                <input
                    id={id}
                    type="checkbox"
                    className="cursor-pointer peer"
                    defaultChecked={complete}
                    onChange={(e) => toggleTodo(id, e.target.checked)}
                />
                <label
                    htmlFor={id}
                    className="peer-checked:line-through peer-checked:text-slate-400"
                >
                    {title}
                </label>
            </div>
            <div className="flex gap-2 items-center">
                <Link href="/edit" className="hover:underline">
                    Edit
                </Link>
                <button className="hover:bg-red-400 p-1 rounded-md">
                    Delete
                </button>
            </div>
        </li>
    );
}
