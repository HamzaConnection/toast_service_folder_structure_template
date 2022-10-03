import { createContext } from 'react';
import { ClientError } from '../../models/errors/ClientError';

// General example of how to use the toast error the t is the translation libaried used in one of my earlier projects 
// try {
//     const dto: LoginDTO = {
//         email: removeTrailingWhiteSpace(email),
//         password: password,
//     };

//     const response = await AuthService().authenticate(dto);
//     if (!response) {
//         toastContext.setCustom({
//             severity: 'error',
//             summary: t('error'),
//             detail: t('unknown-error'),
//         });
//         return;
//     }
//     setUser(response);
//     SessionCache().set<User>('user', response);
//     history.push(STATUS_ROUTE);
// } catch (error) {
//     if (error instanceof ClientError) {
//         if (error.statusCode === 401) {
//             toastContext.setCustom({
//                 summary: t('validation-error'),
//                 detail: t('email-and-password-missmatch'),
//                 severity: 'warn',
//                 config: {
//                     sticky: true,
//                 },
//             });
//         }
//         if (error.statusCode === 409) {
//             toastContext.setCustom({
//                 summary: t('conflict-error'),
//                 detail: t('duplicate-email'),
//                 severity: 'warn',
//                 config: {
//                     closeable: true,
//                 },
//             });
//         }
//         if (error.statusCode !== 401 && error.statusCode !== 409) {
//             toastContext.setHttpError({ ...error, persist: true });
//         }
//     } else {
//         toastContext.setError(error);
//     }
// } finally {
//     setLoading(false);
// }


export type ToastConfig = {
    sticky?: boolean;
    life?: number;
    closeable?: boolean;
    persist?: boolean;
};

export type ToastValue = {
    summary: string;
    severity: 'success' | 'warn' | 'info' | 'error';
    detail?: string;
    config?: ToastConfig;
};

type ToastContextValue = {
    httpError: (ClientError & ToastConfig) | undefined;
    setHttpError: (error: (ClientError & ToastConfig) | undefined) => void;
    custom: ToastValue | undefined;
    setCustom: (toast: ToastValue | undefined) => void;
    error: any;
    setError: (obj: any) => void;
};

const ToastContext = createContext<ToastContextValue>({
    httpError: undefined,
    setHttpError: () => {
        return null;
    },
    custom: undefined,
    setCustom: () => {
        return null;
    },
    error: undefined,
    setError: () => {
        return null;
    },
});

export default ToastContext;
