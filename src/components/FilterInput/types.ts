import { TextInputProps } from 'react-native'

export interface InputProps extends TextInputProps {
  name: string
  icon: string
  containerStyle?: Record<string, unknown>
}
export interface InputValueRefProps {
  value: string
}
export interface InputRef {
  focus(): void
}
export interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}
