import { Box, Text, Flex } from "@chakra-ui/react"

export const AnotherPage = () => {
  return (
    <Flex width='100%' height='100vh' justifyContent='center' alignItems='center' bg='bg.white'>
      <Box textAlign='center'>
        <Text fontSize='38px' color='font.primary'>
          Страница находится в разработке
        </Text>
      </Box>
    </Flex>
  )
}
