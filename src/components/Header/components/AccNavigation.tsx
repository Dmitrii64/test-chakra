import { Button, Flex, Image } from "@chakra-ui/react"
import userIcon from "../../../assets/icons/menu/user.png"

export const AccNavigation = () => {
  return (
    <Flex gap='27px'>
      <Image src={userIcon} alt="User" />
      <Button p='buttonsPadding.huge' bg='bg.primary' color='font.primary' borderRadius='4px' border='1px solid' borderColor='borderColor.primary'>Выйти</Button>
    </Flex>
  )
}