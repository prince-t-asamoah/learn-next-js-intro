import Link from 'next/link';

export default function Home() {
    return (
        <main className="h-screen flex justify-center items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold">Welcome,</h1>
                <h2>This is my first NextJS 13 Demo Project.</h2>
                <div className="mt-10">
                    <Link
                        href="/login"
                        className="py-2 px-4 w-fit outline outline-1 outline-slate-500 rounded-sm hover:bg-slate-900 hover:text-slate-50 transition-colors"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </main>
    );
}
