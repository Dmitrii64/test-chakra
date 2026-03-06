import { Box, Table, Text } from "@chakra-ui/react"
import { useState } from "react"
import { RequestsHeader } from "./components/RequestsHeader"
import { RequestsBody } from "./components/RequestsBody"
import { Tags } from "../Tags/Tags"
import { requests } from "../../data/Requests"
import { RequestsMobile } from "./components/RequestsMobile"

export const Requests = ({ isMobile }: { isMobile: boolean }) => {
  const [activeStatus, setActiveStatus] = useState<string>("all")
  const [isOnlyMy, setIsOnlyMy] = useState<boolean>(false)

  const filteredRequests = requests.filter((r) => {
    if (activeStatus !== "all" && r.status !== activeStatus) return false
    if (isOnlyMy && !r.isMy) return false
    return true
  })

  return (
    <Box>
      <Tags
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
        isOnlyMy={isOnlyMy}
        setIsOnlyMy={setIsOnlyMy}
        isMobile={isMobile}
      />

      {filteredRequests.length === 0 ? (
        <Box p={{base:'50vh 20px', md:'31px 40px'}}>
          <Text color='font.primary' textAlign='center'>
            Нет заявок, соответствующих выбранным фильтрам
          </Text>
        </Box>
      ) : (
        isMobile ?
          (
            <Box p='0 16px' display='flex' flexDirection='column' gap='10px' mt='154px'>
              <Text
                fontSize='14px'
                lineHeight='24px'
                fontWeight={600}
                color='font.primary'
                letterSpacing='1px'
                textTransform='uppercase'
                textAlign='left'
              >
                В июле 2025
              </Text>
              <RequestsMobile requests={filteredRequests} />
            </Box>
          )
          : (
            <Box p='31px 40px' overflowX='auto' scrollbar="hidden">
              <Table.Root minWidth='1620px'>
                <RequestsHeader />
                <RequestsBody requests={filteredRequests} />
              </Table.Root>
            </Box>
          )
      )}
    </Box>
  )
}