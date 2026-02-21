import AuthLayout from '@/components/layouts/auth-layout';
import { Borrowing, PaginatedData } from '@/lib/types';
import DataCards from './sections/data-cards';
import SelectForm from '@/components/select-form';
import { Input } from '@/components/ui/input';

export default function ItemReturnPage({ borrowings }: { borrowings: PaginatedData<Borrowing> }) {
    return (
        <AuthLayout title={'Return Items'}>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <Input placeholder="Search Items..." className="bg-white" />
                </div>
                <DataCards borrowings={borrowings.data} />
            </div>
        </AuthLayout>
    );
}
