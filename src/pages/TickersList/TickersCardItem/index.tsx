import React, { useMemo } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { currencyFormater } from '../../../utils/currencyFormatter'
import { percentFormatter } from '../../../utils/percentFormatter'
import ExpandedTickersCard from './ExpandedTickersCard'

import {
  Container,
  ProfitabilityLine,
  ProfitabilitySection,
  ProfitabilitySubtitle,
  ProfitabilityValues,
  RefreshButton,
  TickerDiff,
  TickerPrice,
  TickerSection,
  TickerTitle,
  ToggleDownValuesButton,
} from './styles'
import { TickerProps } from './types'

const TickersCardItem: React.FC<TickerProps> = ({
  id,
  ticker,
  priceNow,
  dayDiffPercentage,
  dayDiffValue,
  monthDiffPercentage,
  quantity,
  avgPrice,
  totalValue,
  profitPercentage,
  profitValue,
  walletShare,
  isOpen,
  privacyToggle,
}) => {
  const priceNowFormatted = useMemo(() => {
    return currencyFormater(priceNow)
  }, [priceNow])
  const dayDiffPercentageFormatted = useMemo(() => {
    return percentFormatter(dayDiffPercentage)
  }, [dayDiffPercentage])
  const monthDiffPercentageFormatted = useMemo(() => {
    return percentFormatter(monthDiffPercentage)
  }, [monthDiffPercentage])
  const profitPercentageFormatted = useMemo(() => {
    return percentFormatter(profitPercentage)
  }, [profitPercentage])
  const walletShareFormatted = useMemo(() => {
    return percentFormatter(walletShare)
  }, [walletShare])

  return (
    <>
      <Container style={{ elevation: 16 }}>
        <RefreshButton style={{ elevation: 16 }}>
          <Icon name="refresh-cw" size={20} color="#21222c" />
        </RefreshButton>
        <TickerSection>
          <TickerPrice>{priceNowFormatted}</TickerPrice>
          <TickerTitle>{ticker}</TickerTitle>
          <TickerDiff isNegative={dayDiffValue < 0}>
            {`${dayDiffValue}`}
          </TickerDiff>
        </TickerSection>
        <ProfitabilitySection>
          <ProfitabilityLine>
            <ProfitabilitySubtitle>HOJE</ProfitabilitySubtitle>
            <ProfitabilityValues isNegative={dayDiffPercentage < 0}>
              {dayDiffPercentageFormatted}
            </ProfitabilityValues>
            <ProfitabilitySubtitle>MÊS</ProfitabilitySubtitle>
            <ProfitabilityValues isNegative={monthDiffPercentage < 0}>
              {monthDiffPercentageFormatted}
            </ProfitabilityValues>
          </ProfitabilityLine>
          <ProfitabilityLine>
            <ProfitabilitySubtitle>ACUMULADA</ProfitabilitySubtitle>
            <ProfitabilityValues isNegative={profitPercentage < 0}>
              {profitPercentageFormatted}
            </ProfitabilityValues>
            <ProfitabilitySubtitle>CARTEIRA</ProfitabilitySubtitle>
            <ProfitabilityValues>{walletShareFormatted}</ProfitabilityValues>
          </ProfitabilityLine>
        </ProfitabilitySection>
        <ToggleDownValuesButton
          style={{ elevation: 16 }}
          onPress={() => privacyToggle(id)}
        >
          <Icon name="chevron-down" size={20} color="#f4ede8" />
        </ToggleDownValuesButton>
      </Container>
      {isOpen && (
        <ExpandedTickersCard
          {...{ avgPrice, quantity, totalValue, profitValue }}
        />
      )}
    </>
  )
}

export default TickersCardItem
