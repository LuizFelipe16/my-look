import { Button, Flex, Text } from '@chakra-ui/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useUser } from 'hooks';
import { useState } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Avatar, Link } from '_lib/web';
import { MenuContentStyled, MenuItemStyled } from './styles';
import { useShoppingCart } from 'context';
import { theme } from '_app';

export function AvatarMenu({ username, src, hasImage }: any) {
  const { signOut } = useUser();
  const { CartProducts } = useShoppingCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <DropdownMenu.Root open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
      <DropdownMenu.Trigger asChild>
        <Button
          bg="transparent"
          borderRadius={9999}
          w='1'
          position="absolute"
          top="7"
          right="20"
          p="0"
          m="0"
          zIndex={1000}
        >
          <Flex position='relative'>
            <Avatar size='md' name={username} src={src} aria-label="Menu" />
            {CartProducts.hasProducts && (
              <Flex 
                w='7' h='7' 
                align='center' justify='center' 
                borderRadius={9999} 
                bg={hasImage ? theme.colors.background : theme.colors.primary} position='absolute' 
                right={-3} top={0}
              >
                <Text color={hasImage ? theme.colors.primary : theme.colors.background}>{CartProducts.length}</Text>
              </Flex>
            )}
          </Flex>
        </Button>
      </DropdownMenu.Trigger>

      <MenuContentStyled sideOffset={5}>
        <Link href='/account'>
          <MenuItemStyled>Profile <AiOutlineUser size={20} /></MenuItemStyled>
        </Link>
        <Link href='/cart'>
          <MenuItemStyled>Cart {CartProducts.hasProducts ? (
            <Flex flexDirection='row'>
              <Flex w='6' h='6' align='center' justify='center' borderRadius={9999} bg={theme.colors.primary} position='absolute' right={2} top={1}>
                <Text fontSize={12} color={theme.colors.background}>{CartProducts.length}</Text>
              </Flex>
              <AiOutlineShoppingCart size={20} />
            </Flex>
          ) : <AiOutlineShoppingCart size={20} />}</MenuItemStyled>
        </Link>
        <MenuItemStyled onClick={signOut}>Logout <BiLogOutCircle size={20} /></MenuItemStyled>
      </MenuContentStyled>
    </DropdownMenu.Root>
  );
};
