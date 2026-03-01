import type { TMenuItems } from "../../../types/MenuItems"
import{Flex, Link, Menu} from '@chakra-ui/react'

type TMenuProps = {
  menuItems: TMenuItems[],
  activeMenuItem: string,
  setActiveMenuItem: (value: string) => void,
}

export const MenuNavigation = ({ menuItems, activeMenuItem, setActiveMenuItem }: TMenuProps) => {
  return (
    // <ul>
    //   {menuItems.map((menuItem) => (
    //     <li key={menuItem.title}>
    //       {menuItem.link ?
    //         <a href={menuItem.link} onClick={() => setActiveMenuItem(menuItem.title)}>
    //           {menuItem.title}
    //         </a> :
    //         <span>{menuItem.title}</span>
    //       }
    //       {menuItem.children &&
    //         <ul>
    //           {menuItem.children.map((child) => (
    //             <li key={child.title}>
    //               <a href={child.link} onClick={() => setActiveMenuItem(child.title)}>
    //                 {child.title}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       }
    //     </li>
    //   ))}
    // </ul>
    <Flex gap='14px'>
      {menuItems.map((menuItem) => (
        <Flex key={menuItem.title}>
          {menuItem.link ?
            <Link href={menuItem.link} onClick={() => setActiveMenuItem(menuItem.title)}>
              {menuItem.title}
            </Link> :
            <Menu.Root>
              <Menu.Trigger p={'0 0 0 21px'}>
                {menuItem.title}
              </Menu.Trigger>
              <Menu.Positioner>
                <Menu.Content>
                  {menuItem.children && menuItem.children.map((child) => (
                    <Menu.Item key={child.title} value={child.title}>
                      <Link href={child.link} onClick={() => setActiveMenuItem(child.title)}>
                        {child.title}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu.Content>
              </Menu.Positioner>
            </Menu.Root>
          }
        </Flex>
      ))}
    </Flex>
  )
}