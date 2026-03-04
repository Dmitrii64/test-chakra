import { Flex } from "@chakra-ui/react";
import { SearchInput } from "../UI/SearchInput";
import { MyButton } from "../UI/MyButton";

interface SearchPanelProps {
  openPopup: () => void;
}

export const SearchPanel = ({ openPopup }: SearchPanelProps) => {
  return (
    <Flex p={['21px 40px']} gap='13px'>
      <SearchInput />
      <MyButton text="Экспорт" textColor='primary' background='primary' size='small' icon='export' gap='12px' />
      <MyButton text="Создать новую заявку" textColor='white' background='black' size='medium' icon='new' border='none' gap='10px' onClick={openPopup} />
    </Flex>
  )
}