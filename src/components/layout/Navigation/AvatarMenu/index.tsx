import { Button } from '@chakra-ui/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useUser } from 'hooks';
import { useState } from 'react';
import { Avatar, Link } from '_lib/web';
import { MenuContentStyled, MenuItemStyled } from './styles';

export function AvatarMenu({ username, src }: any) {
  const { signOut } = useUser();
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
          <Avatar size='md' name={username} src={src} aria-label="Menu" />
        </Button>
      </DropdownMenu.Trigger>

      <MenuContentStyled sideOffset={5}>
        <Link href='/account'>
          <MenuItemStyled>Profile</MenuItemStyled>
        </Link>
        <MenuItemStyled onClick={signOut}>Logout</MenuItemStyled>
      </MenuContentStyled>
    </DropdownMenu.Root>
  );
};
