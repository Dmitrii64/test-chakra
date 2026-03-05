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
import { MyFileLoadM } from "../UI/MyFileLoadM"

interface PopUpProps {
  closePopup: () => void;
  isMobile: boolean
}

const initialData: TFormData = {
  pharmacy: '',
  category: '',
  isWarranty: false,
  topic: '',
  priority: 'medium',
  description: '',
}

export const PopUp = ({ closePopup, isMobile }: PopUpProps) => {
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
    <Box position='fixed' top='0' left='0'
      width='100%' height='100%' bg='rgba(0, 0, 0, 0.5)'
      display='flex' justifyContent='center' alignItems='center' zIndex={5}
    >
      <Box bg='white' p={{ base: '0 16px 10px', md: '20px 16px', lg: '30px 36px 40px' }} borderRadius={{base: 0, md:'15px'}}
        width='100%' maxWidth='1007px' height={{ base: '100vh', md: 'initial' }}
        overflowY='auto'
      >
        <Flex
        position={{base:'fixed', md:'static'}}
        top={0}
        left={0}
        zIndex={2}
        bg='bg.white'
        width='100%'
        p={{base:'24px 0', md:'0'}}
        borderBottom={{base:'1px solid', md:'none'}}
        borderColor='#DDDDDD'
        justifyContent={{base:'flex-start', md:'space-between'}}
        alignItems='center' 
        gap='10px'>
          {isMobile &&
            <Button bg="bg.white" width='32px' height='32px' p={0} onClick={closePopup}>
              <Image src={icons.arrow} alt="close" />
            </Button>
          }
          <Text
            fontSize={{ base: '20px', md: '24px' }}
            lineHeight='1' color='font.primary'
            fontWeight={{ base: '600', md: '500' }}
          >
            Создание заявки
          </Text>
          {!isMobile &&
            <Button bg="bg.white" width='32px' height='32px' p={0} onClick={closePopup}>
              <Image src={icons.close} alt="close" />
            </Button>
          }
        </Flex>
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          gap={{ base: '35px', md: '16px', lg: '32px' }}
          m={{ base: '96px 0 24px', md: '32px 0' }}
        >
          <Flex width={{ base: '100%', md: '50%' }} direction='column' alignItems='flex-start'>
            <MySelect
              label='Аптека'
              placeholder='Выберите аптеку от которой исходит заявка'
              options={['Аптека 1', 'Аптека 2', 'Аптека 3']}
              height='48px'
              mb={{ base: '24px', md: '46px' }}
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
          <Flex width={{ base: '100%', md: '50%' }} direction='column' alignItems='flex-start'>
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
            {!isMobile && <MyFileLoad />}
          </Flex>
        </Flex>
        <Flex justifyContent='flex-start' gap={{ base: '10px', md: '17px' }} direction={{ base: 'column', md: 'row' }}>
          {isMobile && <MyFileLoadM />}
          <MyButton text="Создать заявку" textColor="white" background="black" size="large" onClick={handleCreate} disabled={!isFormValid} p={{ base: '13px', md: '8px 17px' }} />
          {!isMobile && <MyButton text="Отмена" textColor="primary" background="white" size="small" borderColor='font.primary' onClick={handleCancel} />}
        </Flex>
      </Box>
    </Box>
  )
}