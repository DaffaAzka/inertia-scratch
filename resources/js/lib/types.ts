export type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
};

export type Category = {
    id: number;
    name: string;
    description: string;
    user?: User;
    created_at: Date;
    updated_at: Date;
};
