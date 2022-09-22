import { useToast, useUser } from "hooks";
import { Link, myStyles, Text, View, Button } from "_lib/web";
import { AvatarMenu } from "../AvatarMenu";
import { ItemNav } from "./ItemNav";

type TProps = {
  hasImage?: boolean
}

interface NavbarProps extends TProps {
  showLogin: any
  showOnlyLogo: any  
}

export const Navbar = ({ showLogin, showOnlyLogo, hasImage = false }: NavbarProps) => {
  const { user } = useUser();

  if (showOnlyLogo) {
    return (
      <HeaderNavigation>
        <Link href='/'>
          <Text type='h2' style={`logo`} text='My'><strong>Look!</strong></Text>
        </Link>
        <View />
        <View />
      </HeaderNavigation>
    )
  }

  return (
    <>
      <HeaderNavigation theme={{ hasImage }}>
        <Text type='h2' style={`logo`} text='My'><strong>Look!</strong></Text>
    
        <View style={`links`}>
          <ItemNav href="/" text='Home' />
          <ItemNav href="/shop" text='Shop' />
        </View>
    
        {!showLogin ? <View /> : !user?.username ? (
          <Link style={`login`} href='/sign'>Login</Link>
        ) : <View />}
      </HeaderNavigation>

      {user.username && <AvatarMenu username={user.username} src={user.avatar} />}
    </>
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

  theme.myStyles.create('login', [
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
