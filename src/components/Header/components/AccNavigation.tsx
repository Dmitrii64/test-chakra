import { Flex, Avatar, Box, Badge } from "@chakra-ui/react"
import { MyButton } from "../../UI/MyButton"

export const AccNavigation = () => {
  return (
    <Flex gap='27px' alignItems='center'>
      <Box position='relative' height='36px'>
        <Avatar.Root width='36px' height='36px'>
          <Avatar.Fallback name='User' />
          <Avatar.Image src='/user.png' />
        </Avatar.Root>
        <Badge
          position="absolute"
          bottom="-4px"
          right="-9px"
          width="20px"
          height="20px"
          bg="bg.red"
          color="font.white"
          borderRadius="full"
          fontSize="13px"
          display="flex"
          justifyContent="center"
        >
          2
        </Badge>
      </Box>
      <MyButton display={{base:'none', md:'flex'}} text='Выйти' textColor="primary" background='primary' size='huge' icon='exit' />
    </Flex>
  )
}