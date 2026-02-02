import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Category } from '@/lib/types';

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
                                        <TableCell className="text-right">
                                            <Badge>Badge</Badge>
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
