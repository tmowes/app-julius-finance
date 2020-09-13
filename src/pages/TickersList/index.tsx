import React, { useCallback, useEffect, useRef, useState } from 'react'
import { TextInput } from 'react-native'
import axios from 'axios'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

import {
  ENV_SPREADSHEET_URL,
  ENV_GOOGLE_KEY,
  ENV_SPREADSHEET_ID,
} from '../../secrets/env.json'

import {
  Container,
  Header,
  Title,
  FormContainer,
  PortifolioContainer,
  Footer,
} from './styles'
import { SheetProps } from './types'
import FilterInput from '../../components/FilterInput'
import TickersCardItem from './TickersCardItem'

const TickersList: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const tickerInputRef = useRef<TextInput>(null)

  const [sheetData, setSheetData] = useState<SheetProps[]>([])
  const [openedItems, setOpenedItems] = useState<string[]>([])

  useEffect(() => {
    async function loadData() {
      const sheetName = 'AppData'
      const sheetRange = 'A5:P24'
      const { data } = await axios.get(
        `${ENV_SPREADSHEET_URL}/${ENV_SPREADSHEET_ID}/values/${sheetName}!${sheetRange}?key=${ENV_GOOGLE_KEY}`,
      )
      const result = await data.values.map((item: SheetProps[]) => {
        return {
          id: `${item[0]}${item[1]}`,
          ticker: item[1],
          priceNow: Number(item[2]).toFixed(2),
          priceYesterday: Number(item[3]).toFixed(2),
          dayDiffPercentage: Number(item[4]).toFixed(4),
          dayDiffValue: Number(item[5]).toFixed(2),
          priceLastMonth: Number(item[6]).toFixed(2),
          monthDiffPercentage: Number(item[7]).toFixed(4),
          monthDiffValue: Number(item[8]).toFixed(2),
          quantity: Number(item[9]),
          avgPrice: Number(item[10]).toFixed(2),
          totalCost: Number(item[11]).toFixed(2),
          totalValue: Number(item[12]).toFixed(2),
          profitPercentage: Number(item[13]).toFixed(4),
          profitValue: Number(item[14]).toFixed(2),
          walletShare: Number(item[15]).toFixed(4),
        }
      })
      setSheetData(result)
    }
    loadData()
  }, [])

  const handlePrivacyToggle = useCallback(
    (id: string) => {
      const alreadyOpen = openedItems.includes(id)
      if (alreadyOpen) {
        const filteredItems = openedItems.filter(item => item !== id)
        setOpenedItems(filteredItems)
      } else {
        setOpenedItems([...openedItems, id])
      }
    },
    [openedItems],
  )
  return (
    <Container>
      <Header>
        <Title>JULIUS da BOLSA</Title>
      </Header>
      <FormContainer style={{ backgroundColor: '#343746', paddingVertical: 8 }}>
        <Form ref={formRef} onSubmit={() => true}>
          <FilterInput
            ref={tickerInputRef}
            autoCorrect={false}
            autoCapitalize="characters"
            name="ticker"
            placeholder="FILTRAR / ADICIONAR ATIVO..."
            icon="plus"
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm()
            }}
          />
        </Form>
      </FormContainer>
      <PortifolioContainer>
        {sheetData.map(
          ({
            id,
            ticker,
            priceNow,
            priceYesterday,
            dayDiffPercentage,
            dayDiffValue,
            priceLastMonth,
            monthDiffPercentage,
            monthDiffValue,
            quantity,
            avgPrice,
            totalCost,
            totalValue,
            profitPercentage,
            profitValue,
            walletShare,
          }) => (
            <TickersCardItem
              key={id}
              privacyToggle={cardId => handlePrivacyToggle(cardId)}
              isOpen={!!openedItems.includes(id)}
              {...{
                id,
                ticker,
                priceNow,
                priceYesterday,
                dayDiffPercentage,
                dayDiffValue,
                priceLastMonth,
                monthDiffPercentage,
                monthDiffValue,
                quantity,
                avgPrice,
                totalCost,
                totalValue,
                profitPercentage,
                profitValue,
                walletShare,
              }}
            />
          ),
        )}
      </PortifolioContainer>
      <Footer />
    </Container>
  )
}

export default TickersList
