import { Flex, Box } from "@chakra-ui/react"
import { statuses } from "../../data/Statuses"
import { MyButton } from "../UI/MyButton"

interface TagsProps {
  activeStatus: string
  setActiveStatus: (status: string) => void
  isOnlyMy: boolean
  setIsOnlyMy: (value: boolean) => void,
  isMobile: boolean
}

export const Tags = ({
  activeStatus,
  setActiveStatus,
  isOnlyMy,
  setIsOnlyMy,
  isMobile
}: TagsProps) => {
  const mobileStatuses = [{ statusValue: 'all', statusTitle: 'Все статусы' }, ...statuses.filter(s => s.statusValue !== 'all')];
  const statusesToDisplay = isMobile ? mobileStatuses : statuses;

  return (
    <Flex
      p={{ base: '25px 19px', md: '0 40px 21px' }}
      position={{base: 'fixed', md: 'static'}}
      top='72px'
      width='100%'
      zIndex={2}
      bg='bg.white'
      borderBottom={{ base: 'none', md: '1px solid' }}
      borderColor={{ base: 'none', md: 'borderColor.primary' }}
      overflowX='auto'
      scrollbar="hidden"
    >
      {isMobile && (
        <Box pr='10px'>
          <MyButton
            textColor={isOnlyMy ? "white" : "primary"}
            size="large"
            background={isOnlyMy ? "black" : "primary"}
            border='none'
            icon={isOnlyMy ? 'filterWhite' : 'filterBlack'}
            onClick={() => setIsOnlyMy(!isOnlyMy)} />
        </Box>
      )}
      <Flex gap='10px' pr={{base:'0', md:'27px'}}>
        {statusesToDisplay.map((status) => (
          <MyButton
            key={status.statusValue}
            text={status.statusTitle}
            textColor={activeStatus === status.statusValue ? "white" : "primary"}
            size="large"
            background={activeStatus === status.statusValue ? "black" : "primary"}
            border='none'
            onClick={() => setActiveStatus(status.statusValue)}
          />
        ))}
      </Flex>
      {!isMobile && (
        <Box pl='24px' borderLeft='3px solid' borderColor='borderColor.primary'>
          <MyButton
            text="Показать только мои"
            textColor={isOnlyMy ? "white" : "primary"}
            size="large"
            background={isOnlyMy ? "black" : "primary"}
            border='none'
            gap='10px'
            icon={isOnlyMy ? 'filterWhite' : 'filterBlack'}
            onClick={() => setIsOnlyMy(!isOnlyMy)} />
        </Box>
      )}
    </Flex>
  )
}