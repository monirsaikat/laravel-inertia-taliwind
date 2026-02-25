import { Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

export default function About() {
    return (
        <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6">
            <section className="w-full rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                    About Us
                </h1>
                <Link className="mt-6 inline-block text-blue-600 underline" href={route('home')}>
                    Back Home
                </Link>
            </section>
        </main>
    );
}
