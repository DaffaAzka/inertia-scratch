import InputForm from '@/components/input_form';
import TextareaForm from '@/components/textarea_form';
import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog';
import { Category } from '@/lib/types';
import { DialogTitle } from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';

export default function DetailModal({ category, isOpen, onClose }: { category: Category; isOpen: boolean; onClose: () => void }) {
    const [values, setValues] = useState({
        name: '',
        description: '',
    });

    useEffect(() => {
        if (category) {
            setValues({
                name: category.name,
                description: category.description,
            });
        }
    }, [category.id]);

    function handleChange(e: { target: { name: string; value: string } }) {
        setValues((values) => ({
            ...values,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-sm overflow-hidden md:max-w-md lg:max-w-lg">
                <DialogHeader className="flex flex-col gap-5">
                    <DialogTitle>Detail new category</DialogTitle>
                    <DialogDescription asChild>
                        <form className="flex flex-col gap-5 overflow-hidden">
                            <InputForm
                                name="name"
                                text="Name Category"
                                type="text"
                                handleChange={handleChange}
                                usePlaceholder={true}
                                value={values.name}
                                isDisabled={true}
                            />
                            <TextareaForm
                                name="description"
                                text="Description Category"
                                handleChange={handleChange}
                                usePlaceholder={true}
                                value={values.description}
                                isDisabled={true}
                            />
                        </form>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
