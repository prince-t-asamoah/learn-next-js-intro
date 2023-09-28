import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="h-screen flex flex-col">
            <div className="py-8 px-20">
                <Link href="/" className="hover:underline">
                    Home
                </Link>
            </div>
            <div className="flex justify-center items-center flex-grow">
                <div className="w-[500px] h-fit p-5 rounded-md flex flex-col items-center gap-5">
                    <header>
                        <h1 className="p-2 text-3xl">Login to your account</h1>
                        <h2 className="text-gray-600">
                            Welcome back, login with your credentials
                        </h2>
                    </header>
                    <main className="w-full flex flex-col items-center">
                        <form className="w-9/12 pt-5 pb-2 flex flex-col gap-5">
                            <label className="text-sm flex flex-col gap-2">
                                <span className="font-semibold">Email:</span>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="text-gray-600 p-2 w-full outline outline-1 outline-gray-400 rounded-sm focus:outline-slate-950"
                                />
                            </label>
                            <label className="text-sm flex flex-col gap-2">
                                <span className="font-semibold">Password:</span>
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="text-gray-600 p-2 w-full outline outline-1 outline-gray-400 rounded-sm focus:outline-slate-950"
                                />
                            </label>
                            <button
                                type="submit"
                                className="text-gray-50 font-bold p-2 bg-slate-950 rounded-sm
                              hover:text-slate-50  hover:bg-gray-500 transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </main>
                    <footer className="text-xs">
                        Don&apos;t have an account?,{' '}
                        <Link
                            href="/register"
                            className="underline hover:text-slate-600"
                        >
                            Register
                        </Link>
                    </footer>
                </div>
            </div>
        </div>
    );
}
