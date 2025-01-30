export interface IInputProps {
    type?: string
    name: string
    value: string | number
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    disabled?: boolean
}