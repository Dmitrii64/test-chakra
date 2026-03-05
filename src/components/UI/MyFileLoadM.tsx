import { FileUpload } from "@chakra-ui/react"
import { MyButton } from "./MyButton"

export const MyFileLoadM = () => {
  return (
    <FileUpload.Root>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <MyButton text='Прикрепить файлы' textColor='primary' background='primary' size='huge' icon='fileMobile' w='100%' border='none' p='13px' />
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  )
}