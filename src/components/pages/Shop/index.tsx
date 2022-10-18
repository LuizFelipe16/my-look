import { View, myStyles, Text, Divider } from '_lib/web';
import { looks } from 'data/looks';
import { CardLook, CardLookStyles } from './CardLook';

function Shop() {
  return (
    <View style={'shop'}>
      <View style={'cards'}>
        <Text data-aos="fade-down" data-aos-duration="500" type='h1' style={`title`} text='Our best looks' />
        <View style={'looks'}>
          <Divider style={`line`} />
          {looks.map(l => <CardLook key={l.id} look={l} />)}
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
  
        CardLookStyles
      ]),
    ]),
  ]),
]));

export { Shop, ShopStyles };
