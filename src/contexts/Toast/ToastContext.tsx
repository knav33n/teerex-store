import { ReactNode, createContext, useState } from 'react';

export const ToastContext = createContext({
    showToast: () => { },
    hideToast: () => { }
});

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const showToast = (message: string) => {
        setToastMessage(message);
        setToastVisible(true);

        setTimeout(() => {
            setToastVisible(false);
        }, 3000);
    };

    const hideToast = () => {
        setToastVisible(false);
    };

    const contextValue = {
        showToast,
        hideToast,
    };

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
        </ToastContext.Provider>
    );
};
