import AuthLayout from '@/components/layouts/auth_layout';
import SelectForm from '@/components/select-form';
import { Input } from '@/components/ui/input';
import { Category, Item, PaginatedData } from '@/lib/types';
import DataCards from './sections/data-cards';

export default function DahsboardPage({ items, categories }: { items: PaginatedData<Item>; categories: Category[] }) {
    return (
        <AuthLayout title="Dashboard">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <Input placeholder="Search Items..." className="bg-white" />
                    <div className="rounded-lg bg-white">
                        <SelectForm
                            items={categories}
                            name="search-by-category"
                            text="Filters by Category"
                            handleChange={() => {}}
                            usePlaceholder={true}
                        />
                    </div>
                </div>

                <DataCards items={items.data} />
            </div>
        </AuthLayout>
    );
}
