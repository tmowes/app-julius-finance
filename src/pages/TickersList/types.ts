export interface SheetProps {
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
}
