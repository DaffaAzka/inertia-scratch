import AuthLayout from '@/components/layouts/auth_layout';
import { Input } from '@/components/ui/input';
import type { Category } from '@/lib/types';
import { useState } from 'react';
import CreateModal from './sections/create-modal';
import DataTable from './sections/data-table';

export default function CategoriesPage({ categories }: { categories: Category[] }) {
    const [search, setSearch] = useState('');

    function handleSearch(e: any) {
        setSearch(e.target.value);
    }

    const filteredCategories = categories.filter((cat) => cat.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <AuthLayout title="Categories">
            <div className="flex flex-row gap-4">
                <Input onChange={handleSearch} placeholder="Search Categories..." className='bg-white' />
                <CreateModal />
            </div>
            <DataTable categories={filteredCategories} />
        </AuthLayout>
    );
}
