interface HeaderProps {
    title: string;
    children?: React.ReactNode;
}

export default function Header({ title, children }: HeaderProps) {
    return (
        <header className="text-white flex justify-between items-center mb-4">
            <h1 className="text-2xl">{title}</h1>
            {children}
        </header>
    );
}
