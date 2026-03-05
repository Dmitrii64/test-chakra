import { Menu, Image, Link } from "@chakra-ui/react"
import type { TMenuItems } from "../../../types/MenuItems"
import { icons } from "../../../assets/icons"
import { useLocation } from "react-router-dom"

const isLinkActive = (link: string | undefined, pathname: string): boolean => {
  if (!link) return false
  if (link === '/') return pathname === '/'
  return pathname.startsWith(link)
}

export const MobileMenuNavigation = ({ menuItems }: { menuItems: TMenuItems[] }) => {
  const { pathname } = useLocation()

  let activeItem: TMenuItems | null = null
  for (const item of menuItems) {
    if (item.link && isLinkActive(item.link, pathname)) {
      activeItem = item
      break
    }
    if (item.children) {
      const activeChild = item.children.find(child => isLinkActive(child.link, pathname))
      if (activeChild) {
        activeItem = activeChild
        break
      }
    }
  }

  return (
    <Menu.Root>
      <Menu.Trigger p={'0 0 0 21px'}
        height='fit-content'
        display='flex' alignItems='center' gap="4px" 
        fontSize='20px' lineHeight='24px' color='font.primary' fontWeight={600}>
        {activeItem ? activeItem.title : menuItems[0]?.title}
        <Image src={icons.submenu} alt="submenu" pointerEvents={"none"} width='9px' />
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {menuItems.map((item) => {
            return (
              item.children ?
                <>
                  {item.children.map((child) => (
                    child !== activeItem && (
                      <Menu.Item key={child.title} value={child.title}>
                        <Link href={child.link || '/'}>
                          {child.title}
                        </Link>
                      </Menu.Item>
                    )
                  ))}
                </> :
                item !== activeItem && (
                  <Menu.Item key={item.title} value={item.title}>
                    <Link href={item.link || '/'}>
                      {item.title}
                    </Link>
                  </Menu.Item>
                )
            )
          })}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}