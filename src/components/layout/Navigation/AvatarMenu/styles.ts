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

  //   'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
});

export const MenuItemStyled = styled(DropdownMenu.Item, {
  all: 'unset',
  fontSize: '0.9rem',
  fontWeight: 500,
  fontFamily: theme.font.typography.text,
  lineHeight: 1,
  color: theme.colors.primary,
  borderRadius: 5,
  display: 'flex',
  alignItems: 'center',
  height: 45,
  padding: '0 5px',
  position: 'relative',
  cursor: 'pointer',
  paddingLeft: 25,
  transition: '0.2s',

  '&:focus': {
    backgroundColor: theme.colors.backgroundDark,
  },
});
