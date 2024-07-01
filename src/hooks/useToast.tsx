import { useState } from 'react';
import './Toast.scss'; // Import your CSS file for styling

const useToast = () => {
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

    const ToastComponent = () => {
        return (
            <div className={`toast ${toastVisible ? 'show' : ''}`}>
                <div className="toast-message">{toastMessage}</div>
            </div>
        );
    };

    return {
        showToast,
        hideToast,
        ToastComponent,
    };
};

export default useToast;
