import { Button, Image, type ButtonProps } from "@chakra-ui/react"
import { icons } from "../../assets/icons"

type TButtonProps = {
  text?: string,
  textColor: 'primary' | 'white',
  background: 'primary' | 'black' | 'white',
  size: 'small' | 'medium' | 'large' | 'huge',
  icon?: keyof typeof icons,
} & ButtonProps

export const MyButton = ({ text, textColor, background, size, icon, ...rest }: TButtonProps) => {
  return (
    <Button p={{base: '6px 12px', md: `buttonsPadding.${size}`}} 
            bg={`bg.${background}`} 
            fontSize={{base: '14px', md: '16px'}}
            fontWeight={400}
            minHeight={{base: '32px', md: '40px'}}
            height='fit-content'
            color={`font.${textColor}`} 
            borderRadius='4px' 
            border='1px solid' 
            borderColor='borderColor.primary' 
            gap='4px' _hover={{opacity: 0.7}} {...rest}>
      {icon && <Image src={icons[icon]} alt={icon} />}
      {text && text}
    </Button>
  )
}