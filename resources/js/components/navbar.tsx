import { Link } from '@inertiajs/react';
import { Button } from './ui/button';

export default function Navbar() {
    return (
        <div className="fixed flex w-full content-center items-center justify-between bg-purple-900 p-4 text-white">
            <div>
                <p className="text-xl font-bold">Onyx Storage</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
                <Button variant={'secondary'} asChild>
                    <Link href={'/login'}>Login</Link>
                </Button>
                <Button variant={'default'} asChild>
                    <Link href={'/register'}>Register</Link>
                </Button>
            </div>
        </div>
    );
}
