export const percentFormatter = (percent: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
  }).format(percent)
