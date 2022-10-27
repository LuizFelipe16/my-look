import { myStyles, Text, View, Button } from "_lib/web";
import { ItemNav } from "./ItemNav";

type TProps = {
  hasImage?: boolean
}

interface NavbarProps extends TProps {
  showLogin: any
  showOnlyLogo: any
}

export const Navbar = ({ hasImage = false }: NavbarProps) => {
  return (
    <HeaderNavigation theme={{ hasImage }}>
      <Text type='h2' style={`logo`} text='My'><strong>Admin!</strong></Text>

      <View style={`links`}>
        <ItemNav href="/lock/adm/dashboard" text='Dashboard' />
        <ItemNav href="/lock/adm/requests" text='Requests' />
      </View>

      <Button style={`logout`} onPress={() => null}>Logout</Button>
    </HeaderNavigation>
  );
}

const HeaderNavigation = myStyles.mutate.create((theme, props: TProps) => ([
  theme.w.fill(),
  theme.h.size(5),

  theme.font.size(1),
  theme.textColor.gray,

  theme.padding.vertical.size(1),
  theme.padding.horizontal.size(3.25),
  theme.overlap.value(100),
  theme.position.absolute,
  theme.position.top.value(10, 'px'),
  theme.position.left.value(0),

  theme.row.centerBetween,

  theme.myStyles.create('logo', [
    theme.font.apply('sb', 1.8, theme.font.typography.title, theme.colors.black)
  ], theme.myStyles.child('strong', [theme.compare.prop(props.hasImage, theme.textColor.background, theme.textColor.primary)])),

  theme.myStyles.create('links', [
    theme.w.auto(),
    theme.centerRow,
    theme.gapEls.full.size(2)
  ], [
    theme.myStyles.child('a', [
      theme.transition.apply(0.2),
      theme.font.size(1.1),
      theme.font.weight.md,
      theme.effect.hover.inOwn([
        theme.margin.top.size(0.3),
        theme.compare.prop(props.hasImage, '', theme.textColor.primary)
      ]),
      theme.compare.prop(props.hasImage, theme.textColor.white, theme.textColor.black)
    ])
  ]),

  theme.myStyles.create('logout', [
    theme.w.size(8.5),
    theme.centerRow,
    theme.border.rounded.size(1.5),
    theme.bg.blackTransparent,
    theme.padding.vertical.size(0.45),
    theme.padding.horizontal.size(1.25),
    theme.font.apply('sb', 0.9, theme.font.typography.title, props.hasImage ? theme.colors.background : theme.colors.black),
    theme.presets.shadow.box,

    theme.transition.apply(0.2),
    theme.effect.hover.inOwn([theme.bg.background, theme.textColor.primary])
  ]),
]), 'header');
