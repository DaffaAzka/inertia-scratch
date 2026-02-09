import AuthLayout from '@/components/layouts/auth_layout';
import { Category, Item } from '@/lib/types';

export default function IndexPage({ items, categories }: { items: Item[]; categories: Category[] }) {
    return (
        <AuthLayout title="Borrowings">
            <h1>Borrowings</h1>
        </AuthLayout>
    );
}
