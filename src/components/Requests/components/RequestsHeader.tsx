import { Flex, Table, Text, Image } from "@chakra-ui/react"
import { icons } from "../../../assets/icons"

const HeaderCell = ({ title }: { title: string }) => (
  <Flex align='center' justify='space-between'>
    <Text fontSize='14px' lineHeight='24px' color='font.primary' fontWeight='400'>
      {title}
    </Text>
    <Image src={icons.filter} alt="Filter" />
  </Flex>
)

export const RequestsHeader = () => {
  return (
    <Table.Header>
      <Table.Row background='bg.primary' borderBottom='1px solid' borderColor='borderColor.primary'>
        <Table.ColumnHeader w='90px' p='8px 11px'>
          <HeaderCell title='№' />
        </Table.ColumnHeader>
        <Table.ColumnHeader w='260px' p='8px 10px'>
          <HeaderCell title='Аптека' />
        </Table.ColumnHeader>
        <Table.ColumnHeader w='160px' p='8px 10px'>
          <HeaderCell title='Создана' />
        </Table.ColumnHeader>
        <Table.ColumnHeader w='120px' p='8px 10px'>
          <HeaderCell title='Приоритет' />
        </Table.ColumnHeader>
        <Table.ColumnHeader w='300px' p='8px 10px'>
          <HeaderCell title='Тема' />
        </Table.ColumnHeader>
        <Table.ColumnHeader w='200px' p='8px 10px'>
          <HeaderCell title='Категория' />
        </Table.ColumnHeader>
        <Table.ColumnHeader w='180px' p='8px 10px'>
          <HeaderCell title='Техник' />
        </Table.ColumnHeader>
        <Table.ColumnHeader w='120px' p='8px 10px'>
          <HeaderCell title='Реакция' />
        </Table.ColumnHeader>
        <Table.ColumnHeader w='120px' p='8px 10px'>
          <HeaderCell title='Решение' />
        </Table.ColumnHeader>
        <Table.ColumnHeader w='290px' p='8px 10px'>
          <HeaderCell title='Статус' />
        </Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
  )
}