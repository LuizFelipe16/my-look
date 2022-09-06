import { View, myStyles, Text, ImgZoom, Divider, Button } from '_lib/web';

const imgHeigth = 25
const imgHeigtUnity = 'rem'

type TLook = {
  banner: string
  name: string
  price: string
}

const looks: TLook[] = [
  { banner: 'look1.jpeg', name: 'Social Look', price: '$138,96' },
  { banner: 'look2.jpg', name: 'Fast Look', price: '$85,24' },
  { banner: 'look3.jpg', name: 'Older Look', price: '$116,70' },
  { banner: 'look4.jpeg', name: 'Minimal Look', price: '$76,70' },
];

function Shop() {
  const renderCard = (l: TLook) => (
    <View style={'card-look'}> 
      <ImgZoom src={l.banner} h={imgHeigth} hUnity={imgHeigtUnity} seconds={0.2} style={'img-look'} description='Look One' />
      <Text style={`description`} text={l.name} />
      <View style={'tags'}>
        <Text text={l.price} />
        <Button text='Buy Now!' onPress={() => null} />
      </View>
    </View>
  );

  return (
    <View style={'shop'}>
      <View style={'cards'}>
        <Text data-aos="fade-down" data-aos-duration="500" type='h1' style={`title`} text='Our best looks' />
        <View style={'looks'}>
          <Divider style={`line`} />
          {looks.map(l => renderCard(l))}
        </View>
      </View>
    </View>
  );
}

const ShopStyles = myStyles.style(theme => ([
  theme.myStyles.create('shop', [
    theme.w.fill(),
    theme.h.fill(),
    theme.column.centerCenter,
    theme.bg.primary,
    theme.responsiveness.media([theme.bg.backgroundDark], 100, 1200),

    theme.myStyles.childClass('cards', [
      theme.w.fill(),
      theme.h.min(100, 'vh'),
      theme.column.centerStart,
      theme.padding.full.lg,
      theme.border.rounded.inPositions(8, 'top', 'left'),
      theme.border.rounded.inPositions(8, 'top', 'right'),
      theme.bg.backgroundDark,

      theme.responsiveness.platforms({}, {
        comommStyle: [
          theme.column.centerCenter, 
          theme.gapEls.full.size(1), 
          theme.padding.full.sm, 
          theme.padding.bottom.size(4),
          theme.border.rounded.inPositions(0, 'top', 'left'),
          theme.border.rounded.inPositions(0, 'top', 'right'),
        ], incluide: ['m', 't']
      }),
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
          theme.over.hide('full'),
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
  ]),
]));

export { Shop, ShopStyles };
