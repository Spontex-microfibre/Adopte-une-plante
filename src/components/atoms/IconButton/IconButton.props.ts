import { IconType } from 'react-icons';

export interface IIconButtonProps {
    Icon: IconType
    onClick: () => void
    color?: string
    size?: string | number
    disabled?: boolean
    onMouseEnter?: () => void
    onMouseLeave?: () => void
  }