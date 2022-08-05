import { View, myStylesProvider, Button, Divider, Img, Text } from '../../../_lib/web';

function Welcome() {
  return (
    <View style={'welcome'}>
      <View style={`content`}>
        <Text type='h1' style={`subtitle`}>Welcome to <span>MyLook!</span> Mount <br /> your beautiful look.</Text>
        <Divider style={`line`} />
        <Text style={`text`} text={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          reprehenderit ipsa. Ut nisi possimus quaerat dolor?
          Ex dolores dolor deserunt itaque officiis non minus? Nesciunt amet ex a facilis rem!
        `}/>
        <Button style={`about`} onPress={() => null}>About more</Button>

        <Img style={'element'} src="/element.png" description="Element" />
      </View>

      <View style={`images`}>
        <Img src="/girl.png" description="Girl look style" />
      </View>
    </View>
  );
};

const WelcomeContent = myStylesProvider.style(theme => ([
  theme.myStyles.create('content', [
    theme.h.fill(),
    theme.w.size(55, '%'),
    theme.column.startCenter,
    theme.position.relative,
    theme.over.hide,
    theme.padding.full.in(1, 3.65, 2, 3.65),

    theme.responsiveness.notWeb([theme.w.fill(), theme.h.auto(), theme.padding.full.size(2.5), theme.margin.top.size(3.5)])
  ], [
    theme.myStyles.create('subtitle', [theme.font.size(2.5)], theme.myStyles.child('span', [theme.textColor.primary])),

    theme.myStyles.create('line', [
      theme.margin.top.size(1.5),
      theme.w.size(40, '%'),
      theme.h.size(2, 'px'),
      theme.border.hide,
      theme.border.rounded.size(5),
      theme.bg.primary
    ]),

    theme.myStyles.create('text', [
      theme.font.weight.rg,
      theme.textColor.gray,
      theme.margin.top.size(1),
      theme.font.line(1.7)
    ]),
    
    theme.myStyles.create('about', [
      theme.w.size(10),
      theme.padding.full.size(1),
      theme.margin.top.size(2),
      theme.border.hide,
      theme.border.rounded.size(5),
      theme.bg.primary,
      theme.textColor.white,
      theme.transition.apply(0.2),
      theme.presets.shadow.box,
      theme.effect.hover('&', [theme.effect.filter.glow(0.8)])
    ]),

    theme.myStyles.create('element', [
      theme.w.size(18),
      theme.position.absolute,
      theme.position.left.value(-180, 'px'),
      theme.position.bottom.value(-100, 'px'),

      theme.responsiveness.notWeb([theme.presets.hide()])
    ]),
  ]),
]));

const WelcomeImageGirl = myStylesProvider.style(theme => ([
  theme.myStyles.create('images', [
    theme.presets.flex(),
    theme.over.hide,
    theme.centerColumn,
    
    theme.animation.apply('scale_mutation_effect', 8, 'infinite'),
    theme.animation.define.full(
      'scale_mutation_effect', 
      [theme.animation.transform.apply((t) => [t.scale(1.0), t.rotate(0)])], 
      [theme.animation.transform.apply((t) => [t.scale(0.9), t.rotate(10)])], 
      [theme.animation.transform.apply((t) => [t.scale(1.0), t.rotate(-10)])], 
    )
  ], theme.myStyles.child('img', [
    theme.w.size(33), 
    theme.effect.filter.objectCover(),
    theme.responsiveness.multiple({
      phone: [theme.w.auto(), theme.w.max(16)],
      tablet: [theme.w.auto(), theme.w.max(25)],
      large: [theme.w.auto(), theme.w.max(30)],
    }),
  ])),
]));

const WelcomeStyles = myStylesProvider.style(theme => ([
  theme.myStyles.create('welcome', [
    theme.h.min(100, 'vh'),
    theme.row.centerBetween,
    theme.responsiveness.media([theme.column.centerCenter, theme.gapEls.full.size(1)], 100, 750),
  ], [WelcomeContent, WelcomeImageGirl]),
]));

export { Welcome, WelcomeStyles };
