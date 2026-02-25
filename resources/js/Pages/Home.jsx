import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import Button from '../components/shared/Button';

export default function Home() {
    const logout = () => {
        router.post(route('logout'));
    };

    return (
        <main className="mx-auto flex flex-col min-h-screen max-w-3xl items-center justify-center px-6">
            <h1 className='mb-2 text-2xl'>You are logged in!</h1>

            <Button onClick={logout}>Logout</Button>
        </main>
    );
}
