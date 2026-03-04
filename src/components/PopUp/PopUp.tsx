import { Box, Image, Flex, Text, Button } from "@chakra-ui/react"
import { MySelect } from "../UI/MySelect"
import { icons } from "../../assets/icons"
import { MyCheckbox } from "../UI/MyCheckbox"
import { MyTextarea } from "../UI/MyTextarea"
import { MyFileLoad } from "../UI/MyFileLoad"
import { MyButton } from "../UI/MyButton"
import { MyAvatarSelect } from "../UI/MyAvatarSelect"
import { useState } from "react"
import type { TFormData } from "../../types/FormData"

interface PopUpProps {
  closePopup: () => void;
}

const initialData: TFormData = {
  pharmacy: '',
  category: '',
  isWarranty: false,
  topic: '',
  priority: 'medium',
  description: '',
}

export const PopUp = ({ closePopup }: PopUpProps) => {
  const [formData, setFormData] = useState<TFormData>(initialData)

  const isFormValid = formData.pharmacy && formData.category && formData.topic && formData.description && formData.priority

  const handleCreate = () => {
    console.log(formData)
    closePopup()
    setFormData(initialData)
  }

  const handleCancel = () => {
    setFormData(initialData)
  }
  return (
    <Box position='fixed' top='0' left='0' width='100%' height='100%' bg='rgba(0, 0, 0, 0.5)' display='flex' justifyContent='center' alignItems='center'>
      <Box bg='white' p='30px 36px 40px' borderRadius='15px' width='100%' maxWidth='1007px'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Text fontSize='24px' lineHeight='1' color='font.primary' fontWeight='500'>Создание заявки</Text>
          <Button bg="bg.white" width='32px' height='32px' p={0} onClick={closePopup}>
            <Image src={icons.close} alt="close" />
          </Button>
        </Flex>
        <Flex justifyContent="space-between" gap='32px' m='32px 0'>
          <Flex width='50%' direction='column' alignItems='flex-start'>
            <MySelect
              label='Аптека'
              placeholder='Выберите аптеку от которой исходит заявка'
              options={['Аптека 1', 'Аптека 2', 'Аптека 3']}
              height='48px'
              mb='46px'
              value={formData.pharmacy}
              onChange={(value) => setFormData({ ...formData, pharmacy: value })}
            />
            <MySelect
              label='Категория заявки'
              placeholder='Холодильники, кондиционеры или другое'
              options={['Холодильники', 'Кондиционеры', 'Другое']}
              height='40px'
              mb='16px'
              value={formData.category}
              onChange={(value) => setFormData({ ...formData, category: value })}
            />
            <MyCheckbox label="Гарантийный случай?" checked={formData.isWarranty} onChange={(e) => setFormData({ ...formData, isWarranty: e.target.checked })} />
          </Flex>
          <Flex width='50%' direction='column' alignItems='flex-start'>
            <MyTextarea
              label="Тема заявки"
              placeholder='Дайте заявке краткое название: например, сломался холодильник или не работает кондиционер'
              height='70px' mb='24px'
              value={formData.topic}
              onChange={(value) => setFormData({ ...formData, topic: value })}
            />
            <MyAvatarSelect
              label="Приоритет"
              placeholder="Выберите приоритет заявки"
              value={formData.priority}
              onChange={(value) => setFormData({ ...formData, priority: value })}
              options={[
                {
                  title: "Низкий:",
                  id: "low",
                  description: "не влияет на эффективность, не стопорит",
                  icon: icons.low,
                },
                {
                  title: "Средний:",
                  id: "medium",
                  description: "влияет на эффективность, но не стопорит",
                  icon: icons.medium,
                },
                {
                  title: "Высокий:",
                  id: "high",
                  description: "влияет на эффективность и стопорит",
                  icon: icons.high,
                },
                {
                  title: "Критич.:",
                  id: "critical",
                  description: "сильно влияет на эффективность и стопорит",
                  icon: icons.critical,
                },
              ]}
            />
            <MyTextarea
              label="Описание проблемы"
              placeholder={
                `Кратко опишите проблему:\n\n` +
                `  • что случилось?\n` +
                `  • дата и время произошедшего?\n` +
                `  • сколько длится проблема?\n` +
                `  • насколько она влияет на вашу работу?`
              }
              height='164px' mb='24px'
              value={formData.description}
              onChange={(value) => setFormData({ ...formData, description: value })}
            />
            <MyFileLoad />
          </Flex>
        </Flex>
        <Flex justifyContent='flex-start' gap='17px'>
          <MyButton text="Создать заявку" textColor="white" background="black" size="large" onClick={handleCreate} disabled={!isFormValid} />
          <MyButton text="Отмена" textColor="primary" background="white" size="small" borderColor='font.primary' onClick={handleCancel} />
        </Flex>
      </Box>
    </Box>
  )
}