import { View, myStylesProvider, Text, ImgZoom } from '../../../_lib/web';

function Shop() {
  return (
    <View style={'shop'}>
      <Text type='h1' style={`title`} text='Our best looks' />
      <View style={'looks'}>
        <View style={'card-look'}> 
          <ImgZoom src='look1.jpeg' h={13} seconds={0.2} style={'img-look'} description='Look One' />
        </View>
        <View style={'card-look'}> 
          <ImgZoom src='look2.jpg' h={13} seconds={0.2} style={'img-look'} description='Look One' />

        </View>
        <View style={'card-look'}> 
          <ImgZoom src='look3.jpg' h={13} seconds={0.2} style={'img-look'} description='Look One' />

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
      theme.w.size(95, '%'),
      theme.h.size(75, '%'),
      theme.row.centerBetween,
      theme.margin.top.xl,
      theme.responsiveness.notWeb([theme.column.centerStart, theme.gapEls.full.size(1)]),
    ], [
      theme.myStyles.childClass('card-look', [
        theme.w.size(29, '%'),
        theme.h.fill(),
        theme.presets.shadow.hover,
        theme.border.rounded.size(1),
        theme.over.hide,
      ], [
        theme.myStyles.create('img-look', [theme.border.rounded.inPositions(6, 'bottom', 'left')])
      ]),
    ]),
  ]),
]));

export { Shop, ShopStyles };
