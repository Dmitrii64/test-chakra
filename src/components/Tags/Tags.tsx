import { Flex, Box } from "@chakra-ui/react"
import { statuses } from "../../data/Statuses"
import { MyButton } from "../UI/MyButton"

interface TagsProps {
  activeStatus: string
  setActiveStatus: (status: string) => void
  isOnlyMy: boolean
  setIsOnlyMy: (value: boolean) => void
}

export const Tags = ({
  activeStatus,
  setActiveStatus,
  isOnlyMy,
  setIsOnlyMy,
}: TagsProps) => {
  return (
    <Flex p='0 40px 21px' borderBottom='1px solid' borderColor='borderColor.primary'>
      <Flex gap='10px' pr='27px' borderRight='3px solid' borderColor='borderColor.primary'>
        {statuses.map((status) => (
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
      <Box pl='24px'>
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
    </Flex>
  )
}