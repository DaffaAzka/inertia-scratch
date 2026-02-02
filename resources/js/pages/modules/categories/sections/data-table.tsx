import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Category } from '@/lib/types';
import { InfoIcon, PencilIcon, TrashIcon } from 'lucide-react';

export default function DataTable({ categories }: { categories: Category[] }) {
    return (
        <>
            <Card>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="">No</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="w-12.5 text-ellipsis lg:w-fit">Description</TableHead>
                                <TableHead>Items</TableHead>
                                <TableHead className="hidden lg:table-cell">Created By</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {categories.map((category, index) => (
                                <>
                                    <TableRow>
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell>{category.name}</TableCell>
                                        <TableCell className="">
                                            <div className="w-20 truncate lg:w-fit">{category.description}</div>
                                        </TableCell>
                                        <TableCell>0</TableCell>
                                        <TableCell className="hidden lg:table-cell">{category.user?.name ?? 'N/A'}</TableCell>
                                        <TableCell className="flex flex-row justify-end gap-2">
                                            <Button variant={'default'} size={'icon-sm'}>
                                                <PencilIcon />
                                            </Button>
                                            <Button variant={'outline'} size={'icon-sm'}>
                                                <InfoIcon />
                                            </Button>
                                            <Button variant={'destructive'} size={'icon-sm'}>
                                                <TrashIcon />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </>
                            ))}
                        </TableBody>
                    </Table>{' '}
                </CardContent>
            </Card>
        </>
    );
}
