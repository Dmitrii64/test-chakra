import { Image, Select, createListCollection, Portal } from "@chakra-ui/react"
import { icons } from "../../assets/icons"

type TSelectProps = {
  label: string,
  placeholder: string,
  height?: string,
  mb?: string,
  options: string[],
  value?: string,
  onChange?: (value: string) => void,
}

export const MySelect = ({ label, placeholder, options, height, mb, value, onChange }: TSelectProps) => {
  const optionsCollection = createListCollection({ items: options })

  return (
    <Select.Root collection={optionsCollection} mb={mb} value={value ? [value] : []} onValueChange={(details) => onChange?.(details.value[0] || '')}>
      <Select.HiddenSelect />
      <Select.Label fontSize='12px' textAlign='left' color='font.primary'>{label}</Select.Label>
      <Select.Control position={"relative"}>
        <Select.Trigger p='0 50px 0 16px' height={height} borderRadius='8px' borderColor='borderColor.select' _placeholder={{color: 'borderColor.select'}}>
          <Select.ValueText placeholder={placeholder} />
        </Select.Trigger>
        <Image src={icons.options} alt="options" position='absolute' right='16px' top='50%' transform='translateY(-50%)' pointerEvents={"none"} />
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {optionsCollection.items.map((option) => (
              <Select.Item item={option} key={option}>
                {option}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}