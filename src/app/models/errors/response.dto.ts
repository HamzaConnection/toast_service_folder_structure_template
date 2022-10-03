// This is basically how you can can ask your BE to have a standard response to the FE and then you implement this method in the FE
export interface MessageResponse<T> {
    result?: T;
    errorMessage?: string;
}
