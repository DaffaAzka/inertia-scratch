import { Borrowing } from '@/lib/types';

import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function DataCards({ borrowings }: { borrowings: Borrowing[] }) {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {borrowings.map((borrowing) => (
                    <Card key={borrowing.id} className="relative mx-auto flex w-full flex-col pt-0">
                        <img
                            src={borrowing.item?.image_url || '/images/default-event.jpg'}
                            alt="Event cover"
                            className="relative z-20 aspect-video w-full rounded-tl-xl rounded-tr-xl object-cover brightness-80 dark:brightness-80"
                        />
                        {/* <div className="borrowings-center mx-6 grid grid-cols-2 justify-between gap-4">
                            <div className="rounded-md bg-green-200 py-2 text-center">
                                <div className="flex flex-col">
                                    <p className="text-xs font-bold">Total</p>
                                    <p className="text-xs font-semibold">{borrowing.quantity}</p>
                                </div>
                            </div>
                            <div className="rounded-md bg-yellow-200 py-2 text-center">
                                <div className="flex flex-col">
                                    <p className="text-xs font-bold">Available</p>
                                    <p className="text-xs font-semibold">{borrowing.item?.evailable_quantity}</p>
                                </div>
                            </div>
                        </div> */}

                        <div className="">
                            <CardHeader className="borrowings-center flex justify-between pb-3">
                                <CardTitle className="text-lg">{borrowing.item?.name}</CardTitle>
                                <CardAction>
                                    <Badge variant="secondary">{borrowing.item?.category?.name}</Badge>
                                </CardAction>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <CardDescription className="line-clamp-2">{borrowing.item?.description}</CardDescription>
                            </CardContent>
                        </div>
                        <CardFooter className="mt-auto">
                            <Button
                                className="w-full"
                            >
                                Returned
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    );
}
