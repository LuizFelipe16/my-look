import { styled } from '@stitches/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { theme } from '_app';

export const MenuContentStyled = styled(DropdownMenu.Content, {
  zIndex: 10000,
  minWidth: 150,
  marginTop: 10,
  backgroundColor: theme.colors.background,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 6,
  transition: '0.2s',
  boxShadow: '1px 3px 18px 5px rgba(0,0,0,0.08)'
});

export const MenuItemStyled = styled(DropdownMenu.Item, {
  all: 'unset',
  fontSize: '1rem',
  fontWeight: 500,
  fontFamily: theme.font.typography.title,
  lineHeight: 1,
  color: theme.colors.primary,
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 45,
  padding: '3px 25px',
  position: 'relative',
  cursor: 'pointer',
  paddingLeft: 25,
  transition: '0.2s',

  '&:focus': {
    backgroundColor: theme.colors.backgroundDark,
  },
});
