import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { StyledCounter } from './styles'

interface SelectQuantityProps {
  onValueChange: (value: number) => void
}
export function SelectQuantity({ onValueChange }: SelectQuantityProps) {
  const [value, setValue] = useState(1)

  const handleValueUpdate = (value: number): void => {
    setValue((val) => Math.max(0, val + value))

    onValueChange(value)
  }
  return (
    <StyledCounter>
      <button type="button" onClick={() => handleValueUpdate(-1)}>
        <Minus weight="bold" />
      </button>
      <span>{value}</span>
      <button type="button" onClick={() => handleValueUpdate(+1)}>
        <Plus weight="bold" />
      </button>
    </StyledCounter>
  )
}
