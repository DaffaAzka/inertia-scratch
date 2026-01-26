import GuestLayout from '@/components/layouts/guest_layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Welcome - ONYX Storage">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex h-screen w-full content-center items-center justify-center"></div>
        </GuestLayout>
    );
}
