import React from 'react'
import {NumberInput, NumberInputField, NumberInputProps} from "@chakra-ui/react"

interface Props extends NumberInputProps {
  currentValue: string
  setCurrentValue: (val: any) => void
}

const CurrencyInput: React.FC<Props> = ({currentValue, setCurrentValue, ...rest}) => {

   const format = (val: string) => `R$` + val;
   const parse = (val: string) => val.replace(/^\$/, "");
  const [value, setValue] = React.useState(currentValue);
  return (
    <NumberInput onChange={(valueString) => {setValue(parse(valueString)); setCurrentValue(value)}} value={format(value)} {...rest}>
      <NumberInputField />
    </NumberInput>
  );
}

export default CurrencyInput