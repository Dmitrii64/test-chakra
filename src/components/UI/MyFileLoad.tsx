import { Box, FileUpload, Image, Text } from "@chakra-ui/react"
import { icons } from "../../assets/icons"

export const MyFileLoad = () => {
	return (
		<>
			<Text fontSize='12px' textAlign='left' color='font.primary' mb='8px'>Прикрепите файлы</Text>
			<FileUpload.Root alignItems="stretch" maxFiles={10}>
				<FileUpload.HiddenInput />
				<FileUpload.Dropzone borderRadius='14px' borderColor='borderColor.select' borderWidth='1px' minHeight='100px'>
					<FileUpload.DropzoneContent gap='8px'>
						<Box fontSize='14px' fontWeight={300} color='font.primary'>Выберите или перетащите фото или файл</Box>
						<Image src={icons.file} alt="file" />
					</FileUpload.DropzoneContent>
				</FileUpload.Dropzone>
				<FileUpload.List />
			</FileUpload.Root>
		</>
	)
}