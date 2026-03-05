import { Input, InputGroup, Image } from "@chakra-ui/react"
import { icons } from "../../assets/icons"

export const SearchInput = ({ isMobile }: { isMobile: boolean }) => {
  return (
    isMobile ? (
      <InputGroup startElement={<Image src={icons.mobileSearch} width='20px' />} width='fit-content'>
        <Input
          placeholder="Поиск"
          borderWidth='2px'
          borderColor='bg.black'
          bg='bg.white'
          ps='34px'
          width='100px'
          _focus={{ width: '230px' }}
          _placeholder={{ color: 'bg.black', fontWeight: '500', fontSize: '16px', lineHeight: '24px' }}
        />
      </InputGroup>
    ) : (
      <InputGroup startElement={<Image src={icons.search} />}>
        <Input placeholder="Поиск по номеру или теме заявки" borderColor='borderColor.primary' ps='47px' />
      </InputGroup>
    )
  )
}