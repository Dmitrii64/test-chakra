import type { TMenuItems } from "../../types/MenuItems"
import { MenuNavigation } from "./components/MenuNavigation";
import { Flex } from "@chakra-ui/react";
import { AccNavigation } from "./components/AccNavigation";

export const Header = () => {
  const menuItems: TMenuItems[] = [
    {
      title: 'Заявки',
      link: '/',
    },
    {
      title: 'Отчеты',
      link: '/reports',
    },
    {
      title: 'Справочники',
      children: [
        {
          title: 'Справочник 1',
          link: '/references/1',
        },
        {
          title: 'Справочник 2',
          link: '/references/2',
        },
      ]
    }
  ]

  return (
    <Flex justify='space-between' p={['22px 40px 24px 130px']} borderBottom='1px solid' borderColor='borderColor.primary'>
      <MenuNavigation menuItems={menuItems} />
      <AccNavigation />
    </Flex>
  )
}