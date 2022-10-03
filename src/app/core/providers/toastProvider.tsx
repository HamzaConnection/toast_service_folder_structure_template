import { useMemo, useState } from 'react';
import { ClientError } from '../../models/errors/ClientError';
import ToastContext, { ToastConfig, ToastValue } from '../context/toastContext';

type ErrorProviderProps = {
    children: React.ReactNode;
};

const ToastProvider = ({ children }: ErrorProviderProps) => {
    const [error, setError] = useState<any | undefined>(undefined);
    const [httpError, setHttpError] = useState<
        (ClientError & ToastConfig) | undefined
    >(undefined);
    const [custom, setCustom] = useState<ToastValue | undefined>(undefined);
    const context = useMemo(
        () => ({ error, setError, httpError, setHttpError, custom, setCustom }),
        [error, httpError, custom],
    );

    return (
        <ToastContext.Provider value={context}>{children}</ToastContext.Provider>
    );
};

export default ToastProvider;
