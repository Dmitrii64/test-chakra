import { Box, Table, Text } from "@chakra-ui/react"
import { useState } from "react"
import { RequestsHeader } from "./components/RequestsHeader"
import { RequestsBody } from "./components/RequestsBody"
import { Tags } from "../Tags/Tags"
import { applications } from "../../data/Applications"

export const Requests = () => {
  const [activeStatus, setActiveStatus] = useState<string>("all")
  const [isOnlyMy, setIsOnlyMy] = useState<boolean>(false)

  const filteredRequests = applications.filter((r) => {
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
      />

      {filteredRequests.length === 0 ? (
        <Box p='31px 40px'>
          <Text color='font.primary' textAlign='center'>
            Нет заявок, соответствующих выбранным фильтрам
          </Text>
        </Box>
      ) : (
        <Box p='31px 40px'>
          <Table.Root>
            <RequestsHeader />
            <RequestsBody requests={filteredRequests} />
          </Table.Root>
        </Box>
      )}
    </Box>
  )
}