interface TodoItemProps {
    id: string;
    title: string;
    complete: boolean;
}

export default function TodoItem({ id, title, complete }: TodoItemProps) {
    return (
        <li className="text-white flex items-center gap-2">
            <input id={id} type="checkbox" className="cursor-pointer peer" />
            <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-400">
                {title}
            </label>
        </li>
    );
}
