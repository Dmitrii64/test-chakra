import { Table, Badge, Flex, Text, Image } from "@chakra-ui/react"
import type { TApplications } from "../../../types/Applications"
import { icons } from "../../../assets/icons"

interface RequestsBodyProps {
  requests: TApplications[]
}

export const RequestsBody = ({ requests }: RequestsBodyProps) => {

  const requestStatusTitle: Record<TApplications['status'], { text: string; bg: string }> = {
    new: { text: 'Новая', bg: 'statusBg.new' },
    atWork: { text: 'В работе', bg: 'statusBg.atWork' },
    done: { text: 'Готово', bg: 'statusBg.done' },
    closed: { text: 'Закрыто', bg: 'statusBg.closed' },
    rejected: { text: 'Отклонена', bg: 'statusBg.rejected' },
    inspection: { text: 'На рассмотрении', bg: 'statusBg.inspection' },
    waiting: { text: 'Ожидает запчасти', bg: 'statusBg.waiting' }
  }

  const requestPriorityIcon: Record<TApplications['priority'], string> = {
    'Низкий': icons.low,
    'Средний': icons.medium,
    'Высокий': icons.high,
    'Критич.': icons.critical
  }

  const requestTimeReaction: Record<TApplications['reactionStatus'], { icon: string; color: string }> = {
    'accepted': {
      icon: icons.check,
      color: 'font.green'
    },
    'pending': {
      icon: icons.clock,
      color: 'font.primary'
    }
  }

  const requestResolutionStatus: Record<TApplications['resolutionStatus'], { icon?: string; color: string }> = {
    'accepted': {
      icon: icons.check,
      color: 'font.green'
    },
    'pending': {
      icon: icons.clock,
      color: 'font.primary'
    },
    'returned': {
      icon: icons.error,
      color: 'font.red'
    },
    'empty': {
      color: 'font.primary'
    }
  }

  return (
    <Table.Body>
      {requests.map((request: TApplications) => (
        <Table.Row key={request.number} borderBottom='1px solid' borderColor='borderColor.primary' color='font.primary'>
          <Table.Cell p='8px 10px'>{request.number}</Table.Cell>
          <Table.Cell p='8px 10px'>
            <Flex gap='10px' align='center'>
              <Badge p='1px 3px' bg='bg.primary' borderRadius='4px' fontSize='12px' lineHeight='24px' fontWeight='600' height='20px' letterSpacing='8%' color='font.primary'>
                {request.pharmacyId}
              </Badge>
              {request.pharmacyAddress}
            </Flex>
          </Table.Cell>
          <Table.Cell p='8px 10px'>
            <Flex gap='6px' align='center'>
              {request.creationDate}
              <Text opacity={0.3}>{request.creationTime}</Text>
            </Flex>
          </Table.Cell>
          <Table.Cell p='8px 10px'>
            <Flex gap='6px' align='center'>
              <Image src={requestPriorityIcon[request.priority]} alt="Priority" />
              <Text opacity={0.4} fontWeight='500'>{request.priority}</Text>
            </Flex>
          </Table.Cell>
          <Table.Cell p='8px 10px'>{request.title}</Table.Cell>
          <Table.Cell p='8px 10px'>{request.category}</Table.Cell>
          <Table.Cell p='8px 10px'>{request.specialist || <Text color='font.primary' lineHeight='20px' letterSpacing='2%' opacity='0.3'>—</Text>}</Table.Cell>
          <Table.Cell p='8px 10px'>
            <Flex gap='4px' align='center'>
              <Image src={requestTimeReaction[request.reactionStatus].icon} alt="Reaction Status" />
              <Text color={requestTimeReaction[request.reactionStatus].color} lineHeight='20px' letterSpacing='2%'>{request.reactionTime}</Text>
            </Flex>
          </Table.Cell>
          <Table.Cell p='8px 10px'>
            {request.resolutionStatus !== 'empty' ?
              <Flex gap='4px' align='center'>
                <Image src={requestResolutionStatus[request.resolutionStatus].icon} alt="Resolution Status" />
                <Text color={requestResolutionStatus[request.resolutionStatus].color} lineHeight='20px' letterSpacing='2%'>{request.resolutionTime}</Text>
              </Flex>
              : <Text color='font.primary' lineHeight='20px' letterSpacing='2%' opacity='0.3'>—</Text>}
          </Table.Cell>
          <Table.Cell p='8px 10px'>
            <Badge p='2px 6px' bg={requestStatusTitle[request.status].bg} borderRadius='4px' height='24px' fontSize='14px' lineHeight='20px' fontWeight='400' color='font.primary'>
              {requestStatusTitle[request.status].text}
            </Badge>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}