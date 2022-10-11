import { View, myStyles, Text, Button } from '_lib/web';
import { Page, CartProductItem, CartProductItemStyles } from 'components';
import { useShoppingCart } from 'context';
import { formatPrice } from 'utils';

export default function ShopCart() {
  const { cart, CartProducts, goToCheckout } = useShoppingCart();

  return (
    <Page styles={MyStyles} title={'Shopping Cart'}>
      <View style={'cart'}>
        <View style='cart-header'>
          <Text type='h1' text='Shop Cart' />

          <View style='informations'>
            <Button style='checkout' onPress={goToCheckout} text='FINALIZE ORDER' />

            <View style='total'>
              <Text style='text-total' text='TOTAL' />
              <Text text={formatPrice(CartProducts.total)} />
            </View>
          </View>
        </View>
        
        <View style={'products'}>
          {cart.map(p => <CartProductItem key={p.id} product={p} />)}
        </View>
      </View>
    </Page>
  );
}

const HeaderStyles = myStyles.style((theme) => ([
  theme.myStyles.childClass('cart-header', [
    theme.margin.full.in(7, 0, 1, 0),
    theme.w.size(100, '%'),
    theme.gapEls.full.size(1.5),
    theme.row.centerBetween,

    theme.myStyles.childTag('h1', [theme.font.apply('bl', 2, theme.font.typography.text, theme.colors.black)]),
    
    theme.myStyles.childClass('informations', [
      theme.row.centerEnd, 
      theme.gapEls.full.size(1)
    ], [
      theme.myStyles.childClass('checkout', [
        theme.bg.blackTransparent,
        theme.margin.right.xl,
        theme.padding.horizontal.size(2.5),
        theme.padding.vertical.size(0.4),
        theme.font.apply('sb', 0.9, theme.font.typography.text, theme.colors.black),
        theme.border.rounded.circle,
        theme.transition.apply(0.2),
        theme.effect.hover.inOwn([theme.bg.primary, theme.textColor.background])
      ]),

      theme.myStyles.childClass('total', [
        theme.row.endStart,
        theme.gapEls.full.size(0.5)
      ], [
        theme.myStyles.childTag('p', [theme.font.apply('sb', 1.4, theme.font.typography.text, theme.colors.black)]),
        
        theme.myStyles.childClass('text-total', [
          theme.margin.bottom.size(0.2),
          theme.font.apply('bl', 0.8, theme.font.typography.text, theme.colors.blackOverlap)
        ]),
      ])
    ])
  ]),
]));

const MyStyles = myStyles.mutate.createPage((theme, props) => ([
  theme.myStyles.create('cart', [
    theme.w.size(100, '%'),
    theme.h.min(100, 'vh'),
    theme.column.startStart,
    theme.padding.bottom.size(3),
    theme.padding.horizontal.size(3)
  ], [
    HeaderStyles,

    theme.myStyles.childClass('products', [
      theme.w.size(100, '%'), 
      theme.h.fill(), 
      theme.gapEls.full.size(1), 
      theme.flex.breakLine,
      theme.column.centerStart,
    ], [CartProductItemStyles]),
  ])
]), 'div', true);
