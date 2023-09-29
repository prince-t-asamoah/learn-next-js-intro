'use client';

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
        <li className="text-white flex items-center gap-2">
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
        </li>
    );
}
