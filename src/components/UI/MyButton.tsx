import { Button, Image, type ButtonProps } from "@chakra-ui/react"
import { icons } from "../../assets/icons"

type TButtonProps = {
  text: string,
  textColor: 'primary' | 'white',
  background: 'primary' | 'black' | 'white',
  size: 'small' | 'medium' | 'large' | 'huge',
  icon?: keyof typeof icons,
} & ButtonProps

export const MyButton = ({ text, textColor, background, size, icon, ...rest }: TButtonProps) => {
  return (
    <Button p={`buttonsPadding.${size}`} 
            bg={`bg.${background}`} 
            fontSize='16px' 
            color={`font.${textColor}`} 
            borderRadius='4px' 
            border='1px solid' 
            borderColor='borderColor.primary' 
            gap='4px' {...rest}>
      {icon && <Image src={icons[icon]} alt={icon} />}
      {text}
    </Button>
  )
}