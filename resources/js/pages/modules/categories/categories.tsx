import AuthLayout from '@/components/layouts/auth_layout';
import type { Category } from '@/lib/types';
import CreateModal from './sections/create-modal';
import DataTable from './sections/data-table';

export default function CategoriesPage({ categories }: { categories: Category[] }) {
    return (
        <AuthLayout title="Categories">
            <div className="flex flex-row-reverse">
                <CreateModal />
            </div>
            <DataTable categories={categories} />
        </AuthLayout>
    );
}
