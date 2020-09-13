import React, { useMemo } from 'react'
import { currencyFormater } from '../../../../utils/currencyFormatter'
import {
  ProfitabilityLine,
  ProfitabilitySubtitle,
  ProfitabilityValues,
} from '../styles'

import {
  ExpandedBottomCard,
  PaddingBottomCard,
  ProfitabilityValuesSection,
  ToggleValuesButton,
} from './styles'
import { ExpandedTickersCardProps } from './types'

const ExpandedTickersCard: React.FC<ExpandedTickersCardProps> = ({
  avgPrice,
  quantity,
  totalValue,
  profitValue,
}) => {
  const avgPriceFormatted = useMemo(() => {
    return currencyFormater(avgPrice)
  }, [avgPrice])
  const totalValueFormatted = useMemo(() => {
    return currencyFormater(totalValue)
  }, [totalValue])

  return (
    <>
      <PaddingBottomCard />
      <ExpandedBottomCard style={{ elevation: 10 }}>
        <ProfitabilityValuesSection>
          <ToggleValuesButton />
          <ProfitabilityLine>
            <ProfitabilitySubtitle>PREÇO MÉDIO</ProfitabilitySubtitle>
            <ProfitabilitySubtitle>QTD</ProfitabilitySubtitle>
          </ProfitabilityLine>
          <ProfitabilityLine>
            <ProfitabilityValues>{avgPriceFormatted}</ProfitabilityValues>
            <ProfitabilityValues>{quantity}</ProfitabilityValues>
          </ProfitabilityLine>
          <ProfitabilityLine>
            <ProfitabilitySubtitle>TOTAL</ProfitabilitySubtitle>
            <ProfitabilitySubtitle>LUCRO</ProfitabilitySubtitle>
          </ProfitabilityLine>
          <ProfitabilityLine>
            <ProfitabilityValues>{totalValueFormatted}</ProfitabilityValues>
            <ProfitabilityValues isNegative={profitValue < 0}>
              {profitValue}
            </ProfitabilityValues>
          </ProfitabilityLine>
          <ToggleValuesButton />
        </ProfitabilityValuesSection>
      </ExpandedBottomCard>
    </>
  )
}

export default ExpandedTickersCard
