import { ReactNode } from 'react';
import Navbar from '../navbar';

export default function GuestLayout({ children }: { children: ReactNode }) {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
}
