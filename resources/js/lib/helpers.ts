export function authorizations(role: string, requiredRole: string[]): boolean {
    return requiredRole.includes(role);
}

export function formatDate(dateString: string): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error('Undifined date format');
    }

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}
