import { IInputProps } from "./Input.props";

export const Input: React.FC<IInputProps> = ({value, onChange, type = "text", placeholder, name}) => {

    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />

    )
    
}