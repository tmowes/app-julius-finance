import styled, { css } from 'styled-components/native'
import { NegativeStyleProps } from './types'

const negativeStyle = css`
  color: #bf3635;
  opacity: 1;
`

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  min-height: 80px;
  height: 80px;
  margin-top: 8px;
  background-color: #282a36;
  border-radius: 16px;
  z-index: 2;
`
const ButtonDimensions = css`
  min-width: 24px;
  justify-content: center;
  align-items: center;
`
export const RefreshButton = styled.TouchableOpacity`
  ${ButtonDimensions}
  background: #5AC6EF;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
`
export const CloseValuesButton = styled.TouchableOpacity`
  ${ButtonDimensions}
`
export const ToggleDownValuesButton = styled.TouchableOpacity`
  ${ButtonDimensions}
  background: #E55838;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`
export const TickerSection = styled.View`
  align-items: center;
  justify-content: space-around;
  padding: 6px 0;
  z-index: 2;
`
export const TickerPrice = styled.Text`
  font-size: 16px;
  color: #47ed78;
  opacity: 0.77;
`
export const TickerTitle = styled.Text`
  font-size: 20px;
  color: #f2f3f8;
  opacity: 0.77;
`
export const TickerDiff = styled.Text<NegativeStyleProps>`
  font-size: 16px;
  color: #47ed78;
  opacity: 0.77;
  ${({ isNegative }) =>
    isNegative &&
    css`
      ${negativeStyle}
    `}
`
export const ProfitabilitySection = styled.View`
  flex: 0.65;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px;
`
export const ProfitabilityLine = styled.View`
  align-items: center;
  justify-content: space-around;
`

export const ProfitabilityValues = styled.Text<NegativeStyleProps>`
  font-size: 14px;
  color: #47ed78;
  opacity: 0.77;
  ${({ isNegative }) =>
    isNegative &&
    css`
      ${negativeStyle}
    `}
`
export const ProfitabilitySubtitle = styled.Text`
  font-size: 12px;
  color: #f2f3f8;
  opacity: 0.77;
  margin: 0 4px;
`
export const ToggleUpValuesButton = styled.TouchableOpacity`
  ${ButtonDimensions}
`
