import {
  Avatar,
  HStack,
  Select,
  createListCollection,
  useSelectContext,
  Text,
  Image
} from "@chakra-ui/react"
import { icons } from "../../assets/icons"

type TAvatarSelectProps = {
  label: string,
  placeholder: string,
  options: Array<{title: string, id: string, description: string, icon: string}>,
  value?: string,
  onChange?: (value: string) => void,
}

const SelectValue = ({ placeholder }: { placeholder: string }) => {
  const select = useSelectContext()
  const items = select.selectedItems as Array<{ title: string; icon: string, description: string }>
  const { title, icon, description } = items[0]
  return (
    <Select.ValueText placeholder={placeholder} maxWidth='100%'>
      <HStack gap='4px'>
        <Avatar.Root width='20px' height='20px' bg='transparent'>
          <Avatar.Image src={icon} alt={title} />
          <Avatar.Fallback name={title} />
        </Avatar.Root>
        <Text fontSize='12px' color='font.primary' fontWeight={500}>{title}</Text>
        <Text fontSize='12px' color='font.placeholder' fontWeight={400}>{description}</Text>
      </HStack>
    </Select.ValueText>
  )
}


export const MyAvatarSelect = ({ label, options, value, onChange }: TAvatarSelectProps) => {
  const optionsCollection = createListCollection({
    items: options,
    itemToString: (item) => item.title,
    itemToValue: (item) => item.id,
  })

  return (
    <Select.Root
      collection={optionsCollection}
      value={value ? [value] : ["medium"]}
      onValueChange={(details) => onChange?.(details.value[0] || 'medium')}
      positioning={{ sameWidth: true }}
      mb={'24px'}
    >
      <Select.HiddenSelect />
      <Select.Label fontSize='12px' textAlign='left' color='font.primary'>
        {label}
      </Select.Label>
      <Select.Control>
        <Select.Trigger p='0 50px 0 16px' height={'40px'} borderRadius='8px' borderColor='borderColor.select'>
          <SelectValue placeholder={""} />
        </Select.Trigger>
        <Image src={icons.options} alt="options" position='absolute' right='16px' top='50%' transform='translateY(-50%)' pointerEvents={"none"} />
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {optionsCollection.items.map((item) => (
            <Select.Item item={item} key={item.id} justifyContent="flex-start" gap='4px'>
              <Avatar.Root width='20px' height='20px' bg='transparent'>
                <Avatar.Image src={item.icon} alt={item.title} />
                <Avatar.Fallback name={item.title} />
              </Avatar.Root>
              <Text fontSize='12px' color='font.primary' fontWeight={500}>{item.title}</Text>
              <Text fontSize='12px' color='font.placeholder' fontWeight={400}>{item.description}</Text>
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}