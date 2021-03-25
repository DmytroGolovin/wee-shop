export class PaginatedResponse<T> {
    totalItems!: number;
    items!: Array<T>;
}