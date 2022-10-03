export class ClientError extends Error {
    data: any;
    statusCode?: number;
    constructor(message?: string, statusCode?: number, errorData?: any) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ClientError';
        this.data = errorData;
    }
}