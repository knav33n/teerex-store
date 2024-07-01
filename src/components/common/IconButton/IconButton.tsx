import { IconType } from 'react-icons';
import "./IconButton.scss";

interface IconButtonProps {
    icon: IconType;
    onClick?: () => void;
    className?: string;
    ariaLabel: string;
}

const IconButton: React.FC<IconButtonProps> = ({
    icon: Icon,
    onClick,
    className = '',
    ariaLabel,
}) => {
    return (
        <button
            type="button"
            className={`icon-button ${className}`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <Icon size="2.3rem" />
        </button>
    );
};

export default IconButton;
