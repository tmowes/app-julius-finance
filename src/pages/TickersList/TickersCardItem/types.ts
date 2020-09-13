export interface TickerProps {
  id: string
  ticker: string
  priceNow: number
  priceYesterday: number
  dayDiffPercentage: number
  dayDiffValue: number
  priceLastMonth: number
  monthDiffPercentage: number
  monthDiffValue: number
  quantity: number
  avgPrice: number
  totalCost: number
  totalValue: number
  profitPercentage: number
  profitValue: number
  walletShare: number
  privacyToggle: (id: string) => void
  isOpen: boolean
}

export interface NegativeStyleProps {
  isNegative?: boolean
}
