import type { TMenuItems } from "../../types/MenuItems"
import { MenuNavigation } from "./components/MenuNavigation";
import { Flex } from "@chakra-ui/react";
import { AccNavigation } from "./components/AccNavigation";
import { MobileMenuNavigation } from "./components/MobileMenuNavigation";

export const Header = ({ isMobile }: { isMobile: boolean }) => {
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
    <Flex
      justify='space-between'
      position={{base: 'fixed', md: 'static'}}
      top={0}
      bg='bg.white'
      zIndex={3}
      width='100%'
      p={{ base: '16px 16px 20px 16px', md: '22px 40px 24px 40px', lg: '22px 40px 24px 130px' }}
      borderBottom='1px solid'
      borderColor='borderColor.primary'
    >
      {isMobile ?
        <MobileMenuNavigation menuItems={menuItems} /> :
        <MenuNavigation menuItems={menuItems} />
      }
      <AccNavigation />
    </Flex>
  )
}