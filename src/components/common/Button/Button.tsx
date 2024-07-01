import { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
}

const Button = ({ children, variant = 'primary', size = 'medium', ...rest }: ButtonProps) => {
    const className = `button ${variant} ${size}`;

    return (
        <button className={`button ${className}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;