export interface CustomHttpResponseData<T> {
    data: T,
    status: number,
    statusText: string
}
