import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { StyledCounter } from './styles'

interface SelectQuantityProps {
  onValueChange: (value: number) => void
}
export function SelectQuantity({ onValueChange }: SelectQuantityProps) {
  const [value, setValue] = useState(0)

  const handleValueUpdate = (addValue: number): void => {
    const newValue = Math.max(0, value + addValue)
    setValue(newValue)

    onValueChange(newValue)
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
