import { IIconButtonProps } from "./IconButton.props";
import "./IconButton.css"

export const IconButton: React.FC<IIconButtonProps> = ({ Icon, onClick, color = 'black', size = 24, disabled = false }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="iconbutton"
            style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
        >
            <Icon color={color} size={size} />
        </button>
    );
};