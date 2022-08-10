import { View, myStylesProvider, Text, ImgZoom, Divider, Button } from '../../../_lib/web';

const imgHeigth = 25
const imgHeigtUnity = 'rem'

function Shop() {
  return (
    <View style={'shop'}>
      <Text data-aos="fade-down" data-aos-duration="500" type='h1' style={`title`} text='Our best looks' />
      <View style={'looks'}>
        <Divider style={`line`} />
        <View style={'card-look'}> 
          <ImgZoom src='look1.jpeg' h={imgHeigth} hUnity={imgHeigtUnity} seconds={0.2} style={'img-look'} description='Look One' />
          <Text style={`description`} text='Social Look' />
          <View style={'tags'}>
            <Text text='$138,96' />
            <Button text='Buy Now!' onPress={() => null} />
          </View>
        </View>
        <View style={'card-look'}> 
          <ImgZoom src='look2.jpg' h={imgHeigth} hUnity={imgHeigtUnity} seconds={0.2} style={'img-look'} description='Look One' />
          <Text style={`description`} text='Fast Look' />
          <View style={'tags'}>
            <Text text='$85,24' />
            <Button text='Buy Now!' onPress={() => null} />
          </View>
        </View>
        <View style={'card-look'}> 
          <ImgZoom src='look3.jpg' h={imgHeigth} hUnity={imgHeigtUnity} seconds={0.2} style={'img-look'} description='Look One' />
          <Text style={`description`} text='Older Look' />
          <View style={'tags'}>
            <Text text='$116,70' />
            <Button text='Buy Now!' onPress={() => null} />
          </View>
        </View>
        <View style={'card-look'}> 
          <ImgZoom src='look4.jpeg' h={imgHeigth} hUnity={imgHeigtUnity} seconds={0.2} style={'img-look'} description='Look One' />
          <Text style={`description`} text='Minimal Look' />
          <View style={'tags'}>
            <Text text='$76,70' />
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
    theme.padding.full.lg,
    theme.bg.background,

    theme.responsiveness.media([], 100, 750),

    theme.responsiveness.platforms({}, {
      comommStyle: [theme.column.centerCenter, theme.gapEls.full.size(1), theme.padding.full.sm, theme.padding.bottom.size(4)], incluide: ['m', 't']
    })
  ], [
    theme.myStyles.child('title', [
      theme.font.apply('sb', 2, theme.font.typography.title, theme.colors.primary),
      theme.margin.top.xl,
    ], true),
    
    theme.myStyles.create('looks', [
      theme.w.size(95, '%'),
      theme.h.size(65, '%'),
      theme.row.centerBetween,
      theme.margin.top.size(4),
      theme.position.relative,
      theme.gapEls.full.size(1.8),
      
      theme.responsiveness.platforms({
        mobile: [theme.h.auto(), theme.column.centerCenter, theme.w.size(100, '%'), theme.gapEls.full.size(3)],
        tablet: [theme.h.auto(), theme.column.centerCenter, theme.w.size(100, '%'), theme.gapEls.full.size(3)],
      })
    ], [
      theme.myStyles.childClass('line', [
        theme.w.size(150, '%'),
        theme.h.size(4),
        theme.border.hide,
        theme.position.absolute,
        theme.position.top.value(7),
        theme.position.right.value(-12),
        theme.border.rounded.size(5),
        theme.bg.primary,
        theme.overlap.value(1),

        theme.responsiveness.platforms({}, { comommStyle: [theme.presets.hide()], incluide: ['m', 't'] })
      ]),

      theme.myStyles.childClass('card-look', [
        theme.w.size(30, '%'),
        theme.h.size(25, 'rem'),
        theme.column.startBetween,
        theme.presets.shadow.hover,
        theme.border.rounded.size(1),
        theme.over.hide,
        theme.position.relative,
        theme.overlap.value(2),
        theme.transition.apply(0.3),
        `transform: rotate(-1deg);`,
        theme.effect.hover.inOwn([`transform: rotate(0deg);`]),

        theme.responsiveness.platforms({
          mobile: [theme.w.size(90, '%'), theme.h.min(30, 'rem'), theme.h.auto(), `transform: rotate(0deg);`],
          tablet: [theme.w.size(70, '%'), theme.h.min(30, 'rem'), theme.h.auto(), `transform: rotate(0deg);`],
        })
      ], [
        theme.myStyles.childClass('img-look', [
          theme.h.size(25, 'rem')
        ]),

        theme.myStyles.childClass('description', [
          theme.margin.left.size(0.5),
          theme.margin.top.size(0.5),
          theme.effect.filter.opacity(0.85),
          theme.position.absolute,
          theme.padding.full.in(0.5, 2, 0.5, 2),
          theme.border.rounded.size(1),
          theme.bg.white,
          theme.font.apply('md', 1, theme.font.typography.title, theme.colors.black)
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
            theme.bg.primary,
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
