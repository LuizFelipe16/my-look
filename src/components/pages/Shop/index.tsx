import { View, myStylesProvider } from '../../../_lib/web';

function Shop() {
  return (
    <View style={'shop'}>

    </View>
  );
}

const ShopStyles = myStylesProvider.style(theme => ([
  theme.myStyles.create('shop', [
    theme.h.min(100, 'vh'),
    theme.row.centerBetween,
    theme.responsiveness.media([theme.column.centerCenter, theme.gapEls.full.size(1)], 100, 750),
  ], []),
]));

export { Shop, ShopStyles };
