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
                        <CardHeader className="flex-1">
                            <CardAction>
                                <Badge variant="secondary">{item.category?.name}</Badge>
                            </CardAction>
                            <CardTitle>{item.name}</CardTitle>
                            <CardDescription className="line-clamp-2">{item.description}</CardDescription>
                        </CardHeader>
                        <CardFooter className="mt-auto">
                            <Button className="w-full">Borrow Item</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
}
