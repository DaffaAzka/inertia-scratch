import InputForm from '@/components/input_form';
import GuestLayout from '@/components/layouts/guest_layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export default function LoginPage() {
    return (
        <GuestLayout title="Login">
            <div className="flex min-h-screen w-full items-center justify-center">
                <Card className="mb-12 w-full max-w-xl">
                    <CardHeader>
                        <CardTitle className="text-center">Continue to Sign In</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-5">
                            <InputForm name="email" text="Email Address" type="email" />
                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                <InputForm name="password" text="Password" type="password" />
                                <InputForm name="retry_password" text="Retype Password" type="password" />
                            </div>

                            <Button>Sign In</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </GuestLayout>
    );
}
