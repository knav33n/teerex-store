import { ReactNode } from "react";
import { CartProvider } from "./Cart/CartContext";
import { ToastProvider } from "./Toast/ToastContext";

const AppProviders = ({ children }: { children: ReactNode }) => {
    return (
        <CartProvider>
            <ToastProvider>
                {children}
            </ToastProvider>
        </CartProvider>
    );
};

export default AppProviders;
