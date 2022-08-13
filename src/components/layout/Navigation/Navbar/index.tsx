import { useToast, useUser } from "hooks";
import { Link, myStylesProvider, Text, View, Avatar, Button } from "_lib/web";
import { ItemNav } from "./ItemNav";

export const Navbar = ({ showLogin, showOnlyLogo }: any) => {
  const { user, signOut } = useUser();
  const { successToast } = useToast();

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
    <HeaderNavigation>
      <Text type='h2' style={`logo`} text='My'><strong>Look!</strong></Text>
  
      <View style={`links`}>
        <ItemNav href="/" text='Home' />
        <ItemNav href="/shop" text='Shop' />
      </View>
  
      {!showLogin ? <View /> : !user?.username ? (
        <Link style={`login`} href='/sign'>Login</Link>
      ) : (
        <Button onPress={signOut}>
          <Avatar style={`user-avatar`} size='md' name={user?.username} />
        </Button>
      ) }
    </HeaderNavigation>
  );
}

const HeaderNavigation = myStylesProvider.create((theme) => [
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
  ], theme.myStyles.child('strong', [theme.textColor.primary])),

  theme.myStyles.create('links', [
    theme.w.auto(),
    theme.centerRow,
    theme.gapEls.full.size(2)
  ], [
    theme.myStyles.child('a', [
      theme.transition.apply(0.2),
      theme.font.size(1.1),
      theme.font.weight.md,
      theme.effect.hover.inOwn([theme.textColor.primary]),
    ])
  ]),

  theme.myStyles.create('login', [
    theme.w.size(8.5),
    theme.centerRow,
    theme.border.rounded.size(1.5),
    theme.bg.blackTransparent,
    theme.padding.vertical.size(0.45),
    theme.padding.horizontal.size(1.25),
    theme.font.apply('sb', 0.9, theme.font.typography.title, theme.colors.black),
    theme.presets.shadow.box,
      
    theme.transition.apply(0.2),
    theme.effect.hover.inOwn([theme.bg.primary, theme.textColor.background])
  ]),

  theme.myStyles.childClass('user-avatar', [
    // theme.border.fill(0.15, theme.colors.primary)
  ])
], 'header', false)
