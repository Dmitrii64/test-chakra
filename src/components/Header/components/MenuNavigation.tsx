import type { TMenuItems } from "../../../types/MenuItems"
import { Flex, Menu, Image } from '@chakra-ui/react'
import { Link, useLocation } from "react-router-dom"
import { icons } from "../../../assets/icons"

type TMenuProps = {
  menuItems: TMenuItems[],
  activeMenuItem?: string,
  setActiveMenuItem?: (value: string) => void,
}

const isLinkActive = (link: string | undefined, pathname: string): boolean => {
  if (!link) return false
  if (link === '/') return pathname === '/'
  return pathname.startsWith(link)
}

export const MenuNavigation = ({ menuItems, setActiveMenuItem }: TMenuProps) => {
  const { pathname } = useLocation()

  return (
    <Flex gap='14px'>
      {menuItems.map((menuItem) => {
        const isActive = menuItem.link ? isLinkActive(menuItem.link, pathname) : menuItem.children?.some(child => isLinkActive(child.link, pathname))

        return (
          <Flex key={menuItem.title} color={isActive ? 'font.primary' : 'font.secondary'}>
            {menuItem.link ?
              <Link to={menuItem.link} onClick={() => setActiveMenuItem?.(menuItem.title)} color={isActive ? 'font.primary' : 'font.secondary'}>
                {menuItem.title}
              </Link> :
              <Menu.Root>
                <Menu.Trigger p={'0 0 0 21px'}
                  height='fit-content'
                  color={isActive ? 'font.primary' : 'font.secondary'}
                  display='flex' alignItems='center' gap="4px">
                  {menuItem.title}
                  <Image src={icons.submenu} alt="submenu" pointerEvents={"none"} />
                </Menu.Trigger>
                <Menu.Positioner>
                  <Menu.Content>
                    {menuItem.children && menuItem.children.map((child) => {
                      const isChildActive = isLinkActive(child.link, pathname)
                      return (
                        <Menu.Item key={child.title} value={child.title} color={isChildActive ? 'font.primary' : 'font.secondary'}>
                          <Link to={child.link || '/'}
                            onClick={() => setActiveMenuItem?.(child.title)}
                            color={isChildActive ? 'font.primary' : 'font.secondary'}>
                            {child.title}
                          </Link>
                        </Menu.Item>
                      )
                    })}
                  </Menu.Content>
                </Menu.Positioner>
              </Menu.Root>
            }
          </Flex>
        )
      })}
    </Flex>
  )
}