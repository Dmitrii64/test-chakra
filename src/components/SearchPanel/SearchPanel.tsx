import { Flex } from "@chakra-ui/react";
import { SearchInput } from "../UI/SearchInput";
import { MyButton } from "../UI/MyButton";

interface SearchPanelProps {
  isMobile: boolean;
  openPopup: () => void;
}

export const SearchPanel = ({ openPopup, isMobile }: SearchPanelProps) => {
  return (
    <Flex p={{ base: '30px 16px', md: '21px 40px' }}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems='flex-end'
      justifyContent='flex-end'
      gap='13px'
      position={{ base: 'fixed', md: 'static' }}
      bg={{base: 'linear-gradient(180deg, rgba(235, 235, 235, 0) 76.92%, #EBEBEB 100%);', md:'transparent'}}
      width={{base: '100vw', md:'initial'}}
      height={{base: '100vh', md:'initial'}}
      right='0' bottom='0'
    >
      <SearchInput isMobile={isMobile} />
      <MyButton
        display={{ base: 'none', md: 'flex' }}
        text="Экспорт"
        textColor='primary'
        background='primary'
        size='small'
        icon='export'
        gap='12px'
      />
      <MyButton
        p='8px 15px'
        fontSize='16px'
        lineHeight='24px'
        text="Создать новую заявку"
        textColor='white'
        background='black'
        size='medium'
        icon='new'
        border='none'
        gap='10px'
        onClick={openPopup}
      />
    </Flex>
  )
}