import styled, { css } from 'styled-components/native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { ContainerProps } from './types'

export const Container = styled.View<ContainerProps>`
  height: 48px;
  background: #343746;
  flex-direction: row;
  padding-left: 8px;
  align-items: center;
  justify-content: center;
  margin: 0 32px;
  border-radius: 12px;
  border-width: 1px;
  border-color: #343746;
  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `}
  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #e55838;
    `}
`
export const TextInput = styled.TextInput`
  flex: 1;
  color: #f4ede8;
  font-size: 16px;
`
export const Icon = styled(FeatherIcon)``

export const IconContainer = styled.View`
  height: 48px;
  width: 32px;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  background: #e55838;
`
