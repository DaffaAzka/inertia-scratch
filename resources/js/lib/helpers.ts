export function authorizations(role: string, requiredRole: string[]): boolean {
    return requiredRole.includes(role);
}
