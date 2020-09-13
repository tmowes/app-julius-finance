import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #21222c;
`
export const Header = styled.View`
  height: 48px;
  background-color: #21222c;
  justify-content: center;
`

export const Title = styled.Text`
  color: #f4ede8;
  text-align: center;
  font-size: 22px;
`

export const FormContainer = styled.View``

export const PortifolioContainer = styled.ScrollView`
  padding: 0 8px;
  margin-bottom: 48px;
`

export const Footer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #21222c;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-color: #5ac6efaa;
  height: 48px;
  padding: 16px 0 8px;
`
