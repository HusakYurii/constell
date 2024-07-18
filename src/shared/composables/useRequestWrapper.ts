import { toast } from "vue3-toastify";
import { useLoading } from "vue3-loading-overlay";

type Middleware<T extends Promise<any>> = (data: Awaited<T>) => Promise<any>;

export const useRequestWrapper = (successMessage: string, failMessage: string) => {
    const loader = useLoading();

    const wrap = async <T extends Promise<any>>(isGetCall: boolean, promise: T, middleware: Middleware<T>) => {
        loader.show();
        try {
            const result = await promise
            await middleware(result);
            loader.hide();
            if (!isGetCall) {
                toast.success(successMessage, { autoClose: 1000 });
            }
            return result
        } catch (error) {
            toast.error(failMessage);
        }
        return null
    }

    const wrapCall = <T extends Promise<any>>(promise: T, middleware: Middleware<T> = () => Promise.resolve()) => {
        return wrap(false, promise, middleware)
    }

    const wrapGetCall = <T extends Promise<any>>(promise: T, middleware: Middleware<T> = () => Promise.resolve()) => {
        return wrap(true, promise, middleware)
    }

    return {
        wrapCall,
        wrapGetCall
    }
}