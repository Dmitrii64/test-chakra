import { Flex, Text, Image, Badge } from "@chakra-ui/react"
import type { TRequests } from "../../../types/Requests"
import { icons } from "../../../assets/icons"

interface RequestsMobileProps {
  requests: TRequests[]
}

export const RequestsMobile = ({ requests }: RequestsMobileProps) => {
  const requestStatusTitle: Record<TRequests['status'], { text: string; bg: string }> = {
    new: { text: 'Новая', bg: 'statusBg.new' },
    atWork: { text: 'В работе', bg: 'statusBg.atWorkMobile' },
    done: { text: 'Готово', bg: 'statusBg.done' },
    closed: { text: 'Закрыто', bg: 'statusBg.closed' },
    rejected: { text: 'Отклонена', bg: 'statusBg.rejected' },
    inspection: { text: 'На рассмотрении', bg: 'statusBg.inspection' },
    waiting: { text: 'Ожидает запчасти', bg: 'statusBg.waiting' }
  }

  const requestPriorityIcon: Record<TRequests['priority'], string> = {
    'Низкий': icons.low,
    'Средний': icons.medium,
    'Высокий': icons.high,
    'Критич.': icons.critical
  }

  const requestResolutionStatus: Record<TRequests['resolutionStatus'], { icon?: string; color: string }> = {
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
    <Flex flexDirection='column' gap='10px'>
      {requests.map((request: TRequests) => (
        <Flex key={request.number} p='15px' border='1px solid' borderColor='#DDD' borderRadius='8px' flexDirection='column' gap='16px'>
          <Flex justifyContent='space-between'>
            <Text fontSize='14px' lineHeight='24px' color='font.primary'>
              {request.title}
            </Text>
            <Flex gap='4px' align='center'>
              <Image src={requestPriorityIcon[request.priority]} alt="Priority" />
              <Badge
                p='2px 6px'
                bg={requestStatusTitle[request.status].bg}
                borderRadius='4px' height='24px'
                fontSize='14px' lineHeight='20px' fontWeight='500'
                color='font.primary'
              >
                {requestStatusTitle[request.status].text}
              </Badge>
            </Flex>
          </Flex>
          <Flex gap='6px' justifyContent='space-between'>
            <Flex gap='6px' align='center'>
              <Badge
                p='3px 5px'
                bg='bg.primary'
                borderRadius='4px'
                fontSize='14px'
                lineHeight='1'
                fontWeight='500'
                height='24px'
                letterSpacing='5%'
                color='font.primary'
              >
                {request.number}
              </Badge>
              <Text fontSize='12px' lineHeight='20px' color='#A4A4A4'>
                {request.pharmacyAddress}
              </Text>
            </Flex>
            <>
              {request.resolutionStatus !== 'empty' ?
              <Flex gap='4px' align='center'>
                <Image src={requestResolutionStatus[request.resolutionStatus].icon} alt="Resolution Status" />
                <Text color={requestResolutionStatus[request.resolutionStatus].color} fontSize='14px' lineHeight='20px' letterSpacing='2%'>
                  {request.resolutionTime}
                </Text>
              </Flex>
              : <Text color='font.primary' lineHeight='20px' letterSpacing='2%' opacity='0.3'>—</Text>}
            </>
          </Flex>
        </Flex>
      ))}
    </Flex>
  )
}