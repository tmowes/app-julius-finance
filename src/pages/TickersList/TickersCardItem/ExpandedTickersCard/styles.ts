import styled, { css } from 'styled-components/native'

const ButtonDimensions = css`
  min-width: 24px;
  justify-content: center;
  align-items: center;
`

export const ProfitabilityValuesSection = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 0;
`
export const ExpandedBottomCard = styled.View`
  flex: 1;
  min-height: 48px;
  height: 48px;
  transform: translateY(-16px);
  background: #21222c;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`

export const PaddingBottomCard = styled.View`
  height: 16px;
  transform: translateY(-16px);
  background: #21222c;
`
export const ToggleValuesButton = styled.TouchableOpacity`
  ${ButtonDimensions}
`
