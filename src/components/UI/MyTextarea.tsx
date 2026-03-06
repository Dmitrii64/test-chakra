import { Field, Textarea } from "@chakra-ui/react"

type TTextareaProps = {
  label: string,
  placeholder: string,
  height?: string,
  mb?: string,
  value?: string,
  onChange?: (value: string) => void,
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void,
}

export const MyTextarea = ({ label, placeholder, height, mb, value, onChange, onBlur }: TTextareaProps) => {
  return (
    <Field.Root>
      <Field.Label fontSize='12px' textAlign='left' color='font.primary'>
        {label}
      </Field.Label>
      <Textarea
        fontSize={{base:'12px', md:'14px'}}
        placeholder={placeholder}
        resize='none'
        p='13px 16px'
        height={height}
        borderRadius='8px'
        borderColor='borderColor.select'
        _placeholder={{ color: 'borderColor.select' }}
        mb={mb}
        value={value || ''}
        onChange={(e) => onChange?.(e.target.value)}
        onBlur={onBlur} />
    </Field.Root>
  )
}