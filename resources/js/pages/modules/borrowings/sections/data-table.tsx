import SelectForm from '@/components/select-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { authorizations, formatDate } from '@/lib/helpers';
import { Borrowing, SelectItems } from '@/lib/types';
import { BrushCleaning, InfoIcon } from 'lucide-react';
import { useState } from 'react';
import StatusModal from './status-modal';

export default function DataTable({ borrowings, userRole }: { borrowings: Borrowing[]; userRole: string }) {
    const [statusModal, setStatusModal] = useState<{
        borrowing: Borrowing | null;
        isOpen: boolean;
        status: String | null;
    }>({
        borrowing: null,
        isOpen: false,
        status: null,
    });

    function getStatusOptions(currentStatus: string): SelectItems[] {
        const isAdminOrOfficer = authorizations(userRole, ['admin', 'officer']);

        if (isAdminOrOfficer) {
            return [
                { id: 'pending', name: 'Pending' },
                { id: 'approved', name: 'Approved' },
                { id: 'rejected', name: 'Rejected' },
                { id: 'borrowed', name: 'Borrowed' },
            ];
        }

        switch (currentStatus) {
            case 'pending':
                return [
                    { id: 'pending', name: 'Pending' },
                    { id: 'approved', name: 'Approved' },
                    { id: 'rejected', name: 'Rejected' },
                ];

            case 'approved':
                return [
                    { id: 'approved', name: 'Approved' },
                    { id: 'borrowed', name: 'Borrowed' },
                ];

            case 'rejected':
            case 'borrowed':
            default:
                return [{ id: currentStatus, name: currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1) }];
        }
    }

    function isStatusDisabled(currentStatus: string): boolean {
        const isAdminOrOfficer = authorizations(userRole, ['admin', 'officer']);

        if (!isAdminOrOfficer && currentStatus == 'approved') {
            return false;
        }

        return !isAdminOrOfficer;
    }

    function handleChange(borrowing: Borrowing, value: string) {
        if (value !== 'pending') {
            setStatusModal({
                borrowing: borrowing,
                isOpen: true,
                status: value,
            });
        }
    }

    function handleCloseModal() {
        setStatusModal({
            borrowing: null,
            isOpen: false,
            status: null,
        });
    }

    return (
        <>
            <Card>
                <CardContent>
                    {borrowings.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>No</TableHead>
                                    <TableHead>Image</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Borrowed By</TableHead>
                                    <TableHead>Borrow Date</TableHead>
                                    <TableHead className="hidden lg:table-cell">Planned Return Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {borrowings.map((borrowing, index) => (
                                    <TableRow key={borrowing.id}>
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell>
                                            <img
                                                className="h-8 w-8 object-cover"
                                                src={borrowing.item?.image_path ?? ''}
                                                alt={borrowing.item?.name ?? 'N/A'}
                                            />
                                        </TableCell>
                                        <TableCell>{borrowing.item?.name ?? 'N/A'}</TableCell>
                                        <TableCell>
                                            <div className="w-20 truncate lg:w-fit">{borrowing.borrower?.name ?? 'N/A'}</div>
                                        </TableCell>
                                        <TableCell>{formatDate(borrowing.borrow_date) ?? 'N/A'}</TableCell>
                                        <TableCell className="hidden lg:table-cell">{formatDate(borrowing.planned_return_date) ?? 'N/A'}</TableCell>
                                        <TableCell>
                                            <SelectForm
                                                items={getStatusOptions(borrowing.status)}
                                                handleChange={(value) => {
                                                    handleChange(borrowing, value);
                                                }}
                                                name="status"
                                                text="Select Status"
                                                value={borrowing.status}
                                                usePlaceholder={true}
                                                isDisabled={isStatusDisabled(borrowing.status)}
                                            />
                                        </TableCell>
                                        <TableCell className="flex flex-row justify-end gap-2">
                                            <Button variant="default" size="icon-sm">
                                                <InfoIcon />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <>
                            <div className="flex h-[70vh] flex-col items-center justify-center gap-2 text-gray-400">
                                <BrushCleaning size={32} />
                                <p className="text-md font-medium lg:text-xl">No Borrowing Records Found</p>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>

            {statusModal.isOpen == true && statusModal.borrowing ? (
                <StatusModal isOpen={true} borrowing={statusModal.borrowing} status={statusModal.status ?? ''} onClose={handleCloseModal} />
            ) : (
                <></>
            )}
        </>
    );
}
