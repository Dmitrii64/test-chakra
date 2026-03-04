import { Checkbox } from "@chakra-ui/react"

interface MyCheckboxProps {
  label: string,
  checked?: boolean,
  onChange?: (e: { target: { checked: boolean } }) => void,
}

export const MyCheckbox = ({ label, checked, onChange }: MyCheckboxProps) => {
  return (
    <Checkbox.Root checked={checked} onCheckedChange={(details) => onChange?.({ target: { checked: details.checked } })}>
      <Checkbox.HiddenInput />
      <Checkbox.Control width='20px' height='20px' borderRadius='5px' borderColor='borderColor.select' />
      <Checkbox.Label fontSize='14px' color='font.primary' fontWeight={400}>{label}</Checkbox.Label>
    </Checkbox.Root>
  )
}