import AuthLayout from '@/components/layouts/auth_layout';
import { Borrowing, Category, Item, PaginatedData } from '@/lib/types';

export default function IndexPage({ borrowings }: { borrowings: PaginatedData<Borrowing> }) {
    return (
        <AuthLayout title="Borrowings">
            <h1>{borrowings.data.toString()} Borrowings</h1>
        </AuthLayout>
    );
}
