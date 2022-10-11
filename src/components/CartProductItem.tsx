import { TLook } from "types";
import { ImgZoom, Text, View, Button, myStyles } from "_lib/web";
import { FaCartPlus, FaTrash } from 'react-icons/fa';
import { useShoppingCart } from "context";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { theme } from "_app";
import { formatPrice } from "utils";

interface ProductItemProps {
  product: TLook;
};

const iconSize = 22;

function CartProductItem({ product }: ProductItemProps) {
  const { CartProducts } = useShoppingCart();

  return (
    <View style={'product'} key={product.id}>
      <ImgZoom src={product?.banner} h={8} w={16} rounded={2} seconds={0.2} description={product.description} />
      
      <View style='infos w20'>
        <Text style='description ' text={product?.name} />
        <Text style='price' text={formatPrice(product.price)} />
      </View>

      <View style='infos center w10'>
        <View style='amount'>
          <Button onPress={() => CartProducts.looks.incrementAmount({ productId: product.id, amount: product.amount - 1 })}>
            <AiOutlineMinusCircle color={theme.colors.primary} size={iconSize} />
          </Button>
          <Text text={String(product.amount)} />
          <Button onPress={() => CartProducts.looks.incrementAmount({ productId: product.id, amount: product.amount + 1 })}>
            <AiOutlinePlusCircle color={theme.colors.primary} size={iconSize} />
          </Button>
        </View>
      </View>

      <View style='infos center w10'>
        <View style='subtotal'>
          <Text style='text' text='SUBTOTAL' />
          <Text style='value' text={formatPrice(Number((product.price * product.amount).toFixed(2)))} />
        </View>
      </View>

      <View style='infos center w10'>
        <Button onPress={() => CartProducts.looks.remove(product.id)}><FaTrash color={theme.colors.primary} size={iconSize} /></Button>
      </View>
    </View>
  );
}

const CartProductItemStyles = myStyles.style((theme) => ([
  theme.myStyles.childClass('product', [
    theme.w.size(100, '%'),
    theme.border.rounded.size(0.55),
    theme.bg.white,
    theme.row.centerBetween,

    theme.padding.vertical.size(1.2),
    theme.padding.horizontal.size(2),
    theme.presets.shadow.box,
  ], [
    theme.myStyles.childClass('infos', [
      theme.h.fill(),
      // theme.presets.debugger('purple'),
      theme.margin.left.xl,
      theme.column.startCenter,

      theme.myStyles.inOwnHasClass('center', [theme.centerColumn]),
      theme.myStyles.inOwnHasClass('w20', [theme.w.size(20)]),
      theme.myStyles.inOwnHasClass('w10', [theme.w.size(10)]),
    ], [
      theme.myStyles.childClass('description', [theme.font.apply('md', 1.3, theme.font.typography.text, theme.colors.primary)]),
      
      theme.myStyles.childClass('price', [theme.font.apply('sb', 1.2, theme.font.typography.text, theme.colors.black)]),

      theme.myStyles.childClass('subtotal', [
        theme.column.startCenter,
      ], [
        theme.myStyles.childClass('text', [theme.font.apply('md', 0.8, theme.font.typography.text, theme.colors.blackOverlap)]),
        theme.myStyles.childClass('value', [theme.font.apply('sb', 1.3, theme.font.typography.text, theme.colors.black)]),
      ]),

      theme.myStyles.childClass('amount', [theme.centerRow, theme.gapEls.full.size(1)])
    ]),
  ])
]));

export { CartProductItem, CartProductItemStyles };
