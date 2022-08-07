import { View, myStylesProvider, Text, ImgZoom, Divider, Button } from '../../../_lib/web';

const imgHeigth = 18

function Shop() {
  return (
    <View style={'shop'}>
      <Text data-aos="fade-down" data-aos-duration="1000" type='h1' style={`title`} text='Our best looks' />
      <View style={'looks'}>
        <Divider style={`line`} />
        <View style={'card-look'}> 
          <ImgZoom src='look1.jpeg' h={imgHeigth} seconds={0.2} style={'img-look'} description='Look One' />
          <Text style={`description`} text='Social Look' />
          <View style={'tags'}>
            <Text text='$128,96' />
            <Button text='Buy Now!' onPress={() => null} />
          </View>
        </View>
        <View style={'card-look'}> 
          <ImgZoom src='look2.jpg' h={imgHeigth} seconds={0.2} style={'img-look'} description='Look One' />
          <Text style={`description`} text='Fast Look' />
          <View style={'tags'}>
            <Text text='$85,24' />
            <Button text='Buy Now!' onPress={() => null} />
          </View>
        </View>
        <View style={'card-look'}> 
          <ImgZoom src='look3.jpg' h={imgHeigth} seconds={0.2} style={'img-look'} description='Look One' />
          <Text style={`description`} text='Older Look' />
          <View style={'tags'}>
            <Text text='$96,70' />
            <Button text='Buy Now!' onPress={() => null} />
          </View>
        </View>
      </View>
    </View>
  );
}

const ShopStyles = myStylesProvider.style(theme => ([
  theme.myStyles.create('shop', [
    theme.w.fill(),
    theme.h.min(100, 'vh'),
    theme.column.centerStart,
    theme.responsiveness.media([theme.column.centerCenter, theme.gapEls.full.size(1)], 100, 750),
    theme.padding.full.lg,
  ], [
    theme.myStyles.child('title', [
      theme.font.apply('sb', 2, theme.font.typography.title, theme.colors.primary),
      theme.margin.top.xl,
    ], true),
    
    theme.myStyles.create('looks', [
      theme.w.size(90, '%'),
      theme.h.size(70, '%'),
      theme.row.centerBetween,
      theme.margin.top.xl,
      theme.position.relative,
      theme.responsiveness.notWeb([theme.column.centerStart, theme.gapEls.full.size(1)]),
    ], [
      theme.myStyles.childClass('line', [
        theme.w.size(120, '%'),
        theme.h.size(4),
        theme.border.hide,
        theme.position.absolute,
        theme.position.top.value(7),
        theme.position.left.value(-2.5),
        theme.border.rounded.size(5),
        theme.bg.primary,
        theme.overlap.value(-10),
      ]),

      theme.myStyles.childClass('card-look', [
        theme.w.size(30, '%'),
        theme.h.fill(),
        theme.column.startBetween,
        theme.presets.shadow.hover,
        theme.border.rounded.size(1),
        theme.over.hide,
        theme.transition.apply(0.3),
        `transform: rotate(-1deg);`,
        theme.effect.hover.inOwn([`transform: rotate(0deg);`])
      ], [
        theme.myStyles.create('img-look', [theme.border.rounded.inPositions(6, 'bottom', 'left')]),

        theme.myStyles.childClass('description', [
          theme.margin.left.size(1.4),
          theme.font.apply('md', 1.1, theme.font.typography.title, theme.colors.black)
        ]),
        
        theme.myStyles.childClass('tags', [
          theme.w.fill(),
          theme.row.centerBetween,
          theme.padding.left.lg,
          theme.padding.bottom.xl,
          theme.padding.top.lg,
          theme.bg.blackTransparent
        ], [
          theme.myStyles.child('p', [theme.font.apply('md', 1.5, theme.font.typography.title, theme.colors.black)]),
          theme.myStyles.child('button', [
            theme.h.fill(),
            theme.padding.vertical.sm,
            theme.padding.horizontal.sm,
            theme.w.size(55, '%'),
            theme.border.rounded.inPositions(2, 'top', 'left'),
            theme.border.rounded.inPositions(2, 'bottom', 'left'),
            theme.bg.black,
            theme.font.apply('rg', 1, theme.font.typography.title, theme.colors.background),
            theme.transition.apply(0.2),
            theme.effect.hover.inOwn([theme.effect.filter.glow(0.8)])
          ]),
        ])
      ]),
    ]),
  ]),
]));

export { Shop, ShopStyles };
