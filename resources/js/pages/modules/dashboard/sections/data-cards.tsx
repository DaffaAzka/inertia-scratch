import { Item } from '@/lib/types';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function DataCards({ items }: { items: Item[] }) {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((item) => (
                    <Card key={item.id} className="relative mx-auto flex w-full flex-col pt-0">
                        <img
                            src={item.image_path || '/images/default-event.jpg'}
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full rounded-tl-xl rounded-tr-xl object-cover brightness-80 dark:brightness-80"
                        />
                        <div className="mx-6 grid grid-cols-2 items-center justify-between gap-4">
                            <div className="rounded-md bg-green-200 py-2 text-center">
                                <div className="flex flex-col">
                                    <p className="text-xs font-bold">Total</p>
                                    <p className="text-xs font-semibold">{item.quantity}</p>
                                </div>
                            </div>
                            <div className="rounded-md bg-yellow-200 py-2 text-center">
                                <div className="flex flex-col">
                                    <p className="text-xs font-bold">Available</p>
                                    <p className="text-xs font-semibold">{item.evailable_quantity}</p>
                                </div>
                            </div>
                        </div>
                        <CardHeader className="flex-1">
                            <CardAction>
                                <Badge variant="secondary">{item.category?.name}</Badge>
                            </CardAction>
                            <CardTitle>{item.name}</CardTitle>
                            <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="mt-auto">
                            <Button className="w-full" disabled={item.evailable_quantity === 0}>Borrow Item</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
}
