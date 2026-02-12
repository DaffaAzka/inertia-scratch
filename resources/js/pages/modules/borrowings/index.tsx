import AuthLayout from '@/components/layouts/auth-layout';
import { Borrowing, PaginatedData, User } from '@/lib/types';
import DataTable from './sections/data-table';

export default function IndexPage({ borrowings, user }: { borrowings: PaginatedData<Borrowing>; user: User }) {
    return (
        <AuthLayout title="Borrowings">
            <DataTable borrowings={borrowings.data} userRole={user.role} />
        </AuthLayout>
    );
}
