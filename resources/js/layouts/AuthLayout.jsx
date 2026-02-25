import { Head } from '@inertiajs/react';

export default function AuthLayout({
    children,
    title = 'Auth',
    description = 'Authentication page',
}) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
            </Head>

            <main className="min-h-screen bg-gray-100 px-4 py-10">
                <div className="mx-auto w-full max-w-md">
                    {/* <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            Inertia Todo
                        </h1>
                        <p className="mt-1 text-sm text-gray-600">Manage your account access</p>
                    </div> */}

                    <section className="rounded-2xl bg-white p-8 shadow-lg">
                        {children}
                    </section>
                </div>
            </main>
        </>
    );
}
