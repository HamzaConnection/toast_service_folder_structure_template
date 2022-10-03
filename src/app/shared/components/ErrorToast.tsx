// import { useContext, useEffect, useRef } from 'react';
// import { Toast } from 'primereact/toast';
// import { useTranslation } from 'react-i18next';
// import ToastContext from '../../core/context/toastContext';

// export function ErrorToast(): JSX.Element {
//     const { t } = useTranslation();
//     const { httpError } = useContext(ToastContext);
//     const toast: React.LegacyRef<Toast> = useRef(null);

//     useEffect(() => {
//         if (!httpError) return;

//         const serverError: boolean =
//             httpError.statusCode && httpError.statusCode < 500 ? false : true;

//         toast.current?.show({
//             severity: serverError ? 'error' : 'warn',
//             summary: serverError ? t('validation-error') : t('server-error'),
//             detail: httpError.message ? httpError.message : '',
//             ...httpError,
//         });
//     }, [httpError]);

//     return (
//         <>
//             <Toast ref={toast} position="bottom-center"></Toast>
//         </>
//     );
// }


const ErrorToast = () => {
    return (
        <div>ErrorToast</div>
    )
}

export default ErrorToast