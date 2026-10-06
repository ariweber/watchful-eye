import { isAxiosError } from "axios";

export function getError(error: unknown) {
    if (isAxiosError(error)) return error.response?.data?.message ?? error.message;
    return "Request failed";
}
