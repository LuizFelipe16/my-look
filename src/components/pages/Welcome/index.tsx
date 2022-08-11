import { theme } from '_app';
import { View, myStylesProvider, Button, Divider, Img, Text, Spinner } from '_lib/web';

function Welcome() {
  return (
    <View style={'welcome'}>
      <View data-aos="fade-right" data-aos-duration="700" style={`content`}>
        <Text type='h1' style={`subtitle`}>Welcome to <span>MyLook!</span> Mount <br /> your beautiful look.</Text>
        <Divider style={`line`} />
        <Text style={`text`} text={`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
          reprehenderit ipsa. Ut nisi possimus quaerat dolor?
          Ex dolores dolor deserunt itaque officiis non minus? Nesciunt amet ex a facilis rem!
        `}/>
        <Button style={`about`} onPress={() => null}>Start Shopping</Button>
      </View>

      <View style={`images`}>
        <Spinner wrapperStyles={wrapperStyles} color={theme.colors.primary} />
        <Img src="/girl.png" description="Girl look style" />
      </View>
    </View>
  );
};

const wrapperStyles = myStylesProvider.style(theme => ([
  theme.position.absolute,
  theme.position.top.percentage(50),
  theme.position.left.percentage(50),
]));

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
    theme.myStyles.create('subtitle', [
      theme.font.size(2.7), 
      theme.font.weight.sb
    ], theme.myStyles.child('span', [theme.textColor.primary])),

    theme.myStyles.create('line', [
      theme.margin.top.size(1.5),
      theme.w.size(40, '%'),
      theme.h.size(2, 'px'),
      theme.border.hide,
      theme.border.rounded.size(5),
      theme.bg.primary
    ]),

    theme.myStyles.create('text', [
      theme.margin.top.size(1),
      theme.font.line(1.7),
      theme.font.apply('rg', 0.9, theme.font.typography.text, theme.colors.grayLight)
    ]),
    
    theme.myStyles.create('about', [
      theme.w.size(15),
      theme.padding.horizontal.size(1.5),
      theme.padding.vertical.size(0.8),
      theme.margin.top.size(2),
      theme.border.hide,
      theme.border.rounded.size(5),
      theme.bg.primary,
      theme.transition.apply(0.2),
      theme.presets.shadow.box,
      theme.font.apply('md', 1, theme.font.typography.text, theme.colors.white),
      theme.effect.hover.inOwn([theme.effect.filter.glow(0.8)])
    ]),
  ]),
]));

const WelcomeImageGirl = myStylesProvider.style(theme => ([
  theme.myStyles.create('images', [
    theme.presets.flex(),
    theme.over.hide,
    theme.centerColumn,
    theme.position.relative,
    
    theme.animation.apply('scale_mutation_effect', 8, 'infinite'),
    theme.animation.define.full(
      'scale_mutation_effect', 
      [theme.animation.transform.apply((t) => [t.scale(1.0), t.rotate(0)])], 
      [theme.animation.transform.apply((t) => [t.scale(0.9), t.rotate(10)])], 
      [theme.animation.transform.apply((t) => [t.scale(1.0), t.rotate(-10)])], 
    )
  ], [
    theme.myStyles.child('img', [
      theme.w.size(33), 
      theme.effect.filter.objectCover(),
      theme.overlap.value(2),
      theme.responsiveness.multiple({
        phone: [theme.w.auto(), theme.w.max(25)],
        tablet: [theme.w.auto(), theme.w.max(25)],
        large: [theme.w.auto(), theme.w.max(30)],
      }),
    ]),
  ]),
]));

const WelcomeStyles = myStylesProvider.style(theme => ([
  theme.myStyles.create('welcome', [
    theme.h.min(100, 'vh'),
    theme.row.centerBetween,
    theme.responsiveness.media([theme.column.centerCenter, theme.gapEls.full.size(1)], 100, 750),
  ], [WelcomeContent, WelcomeImageGirl]),
]));

export { Welcome, WelcomeStyles };
