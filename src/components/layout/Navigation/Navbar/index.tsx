import { Button, myStylesProvider, Text, View } from "_lib/web";
import { ItemNav } from "./ItemNav";

export const Navbar = () => (
  <HeaderNavigation>
    <Text type='h2' style={`logo`} text='My'><strong>Look!</strong></Text>

    <View style={`links`}>
      <ItemNav href="#" text='Home' />
      <ItemNav href="#" text='Services' />
      <ItemNav href="#" text='Contact' />
    </View>

    <Button style={`login`} onPress={() => null}>Login</Button>
  </HeaderNavigation>
);

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
    theme.border.fill(0.12, theme.colors.primary),
    theme.border.rounded.size(1.5),
    theme.textColor.primary,
    theme.bg.background,
    theme.font.size(1),
    theme.padding.vertical.size(0.25),
    theme.padding.horizontal.size(1.25),
      
    theme.transition.apply(0.2),
    theme.effect.hover.inOwn([theme.bg.primary, theme.textColor.background, theme.presets.shadow.box])
  ])
], 'header', false)
