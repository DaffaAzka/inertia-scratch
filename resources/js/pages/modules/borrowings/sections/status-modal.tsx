import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Borrowing } from '@/lib/types';
import { ArrowRight, FileText, Package, User } from 'lucide-react';
import { useEffect, useState } from 'react';

const statusConfig: Record<string, { color: string; bgColor: string }> = {
    pending: { color: 'bg-yellow-100 text-yellow-800', bgColor: 'bg-yellow-50' },
    approved: { color: 'bg-blue-100 text-blue-800', bgColor: 'bg-blue-50' },
    rejected: { color: 'bg-red-100 text-red-800', bgColor: 'bg-red-50' },
    borrowed: { color: 'bg-purple-100 text-purple-800', bgColor: 'bg-purple-50' },
    returned: { color: 'bg-green-100 text-green-800', bgColor: 'bg-green-50' },
};

export default function StatusModal({
    borrowing,
    status,
    isOpen,
    onClose,
}: {
    borrowing: Borrowing | null;
    isOpen: boolean;
    status: String;
    onClose: () => void;
}) {
    const [value, setValue] = useState<{
        borrowing: Borrowing | null;
        status_from: String;
        status_to: String;
    }>({
        borrowing: null,
        status_from: '',
        status_to: '',
    });

    useEffect(() => {
        if (borrowing) {
            setValue({
                borrowing: borrowing,
                status_from: borrowing.status,
                status_to: status,
            });
        }
    }, [status, borrowing]);

    const getStatusLabel = (statusKey: string) => {
        return statusKey.charAt(0).toUpperCase() + statusKey.slice(1);
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="max-w-sx max-h-[90vh] overflow-x-hidden md:max-w-md lg:max-w-xl xl:max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-lg">Confirm Status Change</DialogTitle>
                        <DialogDescription className="text-sm">Please review the details before changing the status</DialogDescription>
                    </DialogHeader>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900">Item Details</h3>
                            <div className="space-y-3 rounded-lg bg-gray-50 p-4">
                                <div className="overflow-hidden rounded-md bg-white">
                                    <img src={value.borrowing?.item?.image_path ?? ''} alt="Item Preview" className="h-40 w-full object-contain" />
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-gray-500">Item Name</p>
                                    <p className="mt-1 text-sm font-semibold text-gray-900">{value.borrowing?.item?.name ?? 'N/A'}</p>
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-gray-500">Category</p>
                                    <p className="mt-1 text-sm text-gray-700">{value.borrowing?.item?.category?.name ?? 'N/A'}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Package className="h-4 w-4 text-gray-400" />
                                    <div>
                                        <p className="text-xs font-medium text-gray-500">Item Code</p>
                                        <p className="text-sm text-gray-700">{value.borrowing?.item?.code ?? 'N/A'}</p>
                                    </div>
                                </div>

                                {/* Item Status */}
                                <div>
                                    <p className="text-xs font-medium text-gray-500">Item Condition</p>
                                    <div className="mt-1">
                                        <Badge className={statusConfig[value.borrowing?.item?.status || 'fair']?.color}>
                                            {getStatusLabel(value.borrowing?.item?.status || 'fair')}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Quantity */}
                                <div>
                                    <p className="text-xs font-medium text-gray-500">Quantity Borrowed</p>
                                    <p className="mt-1 text-sm font-semibold text-gray-900">{value.borrowing?.quantity ?? 0} unit(s)</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Borrowing Status Information */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold text-gray-900">Borrowing Details</h3>
                            <div className="space-y-3 rounded-lg bg-gray-50 p-4">
                                {/* Borrower Info */}
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-gray-400" />
                                    <div className="flex-1">
                                        <p className="text-xs font-medium text-gray-500">Borrower</p>
                                        <p className="text-sm text-gray-700">{value.borrowing?.borrower?.name ?? 'N/A'}</p>
                                    </div>
                                </div>

                                {/* <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <div className="flex-1">
                                        <p className="text-xs font-medium text-gray-500">Borrow Date</p>
                                        <p className="text-sm text-gray-700">{formatDate(value.borrowing?.borrow_date ?? '') ?? 'N/A'}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-gray-400" />
                                    <div className="flex-1">
                                        <p className="text-xs font-medium text-gray-500">Planned Return</p>
                                        <p className="text-sm text-gray-700">{formatDate(value.borrowing?.planned_return_date ?? '') ?? 'N/A'}</p>
                                    </div>
                                </div> */}

                                {/* Status Transition */}
                                <div className="rounded-md bg-white p-3">
                                    <p className="mb-2 text-xs font-medium text-gray-500">Status Change</p>
                                    <div className="flex items-center justify-between">
                                        <Badge className={statusConfig[value.status_from as string]?.color}>
                                            {getStatusLabel(value.status_from as string)}
                                        </Badge>
                                        <ArrowRight className="h-4 w-4 text-gray-400" />
                                        <Badge className={statusConfig[value.status_to as string]?.color}>
                                            {getStatusLabel(value.status_to as string)}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Notes */}
                                {value.borrowing?.notes && (
                                    <div className="flex gap-2 rounded-md bg-blue-50 p-3">
                                        <FileText className="h-4 w-4 flex-shrink-0 text-blue-600" />
                                        <div className="flex-1">
                                            <p className="text-xs font-medium text-gray-500">Notes</p>
                                            <p className="mt-1 text-sm text-gray-700">{value.borrowing.notes}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 pt-2">
                                <Button variant="outline" onClick={onClose} className="flex-1">
                                    Cancel
                                </Button>
                                <Button className="flex-1">Confirm Change</Button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
