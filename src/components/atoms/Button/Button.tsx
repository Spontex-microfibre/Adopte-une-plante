import { IButtonProps } from "./Button.props";
import './Button.css';

export const Button: React.FC<IButtonProps> = ({ label, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            className="my-button"
            disabled={disabled}>
            {label}</button>
    )
}