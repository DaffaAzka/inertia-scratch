import GuestLayout from '@/components/layouts/guest_layout';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Head } from '@inertiajs/react';
export default function LoginPage() {
    return (
        <GuestLayout>
            <Head title="Login - ONYX Storage">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen w-full items-center justify-center">
                <Card className="mb-12 w-full max-w-3xl">
                    <CardHeader>
                        <CardTitle>Continue to Sign In</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </GuestLayout>
    );
}
