import { Input, InputGroup, Image } from "@chakra-ui/react"
import { icons } from "../../assets/icons"

export const SearchInput = () => {
  return (
    <InputGroup startElement={<Image src={icons.search} />}>
      <Input placeholder="Поиск по номеру или теме заявки" borderColor='borderColor.primary' ps='47px' />
    </InputGroup>
  )
}