import { useState } from "react"
import type { TMenuItems } from "../../types/MenuItems"
import { MenuNavigation } from "./components/MenuNavigation";
import { Flex } from "@chakra-ui/react";
import { AccNavigation } from "./components/AccNavigation";

export const Header = () => {
  const menuItems: TMenuItems[] = [
    {
      title: 'Заявки',
      link: '#',
    },
    {
      title: 'Отчеты',
      link: '#',
    },
    {
      title: 'Справочники',
      children: [
        {
          title: 'Справочник 1',
          link: '#',
        },
        {
          title: 'Справочник 2',
          link: '#',
        },
      ]
    }
  ]

  const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0].title);

  return (
    <Flex justify='space-between' p={['22px 40px 24px 130px']} borderBottom='1px solid' borderColor='borderColor.primary'>
      <MenuNavigation menuItems={menuItems} activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
      <AccNavigation />
    </Flex>
  )
}