import { TLook } from "types";
import { ImgZoom, Text, View, Button, myStyles } from "_lib/web";
import { FaCartPlus } from 'react-icons/fa';
import { useShoppingCart } from "context";
import { formatPrice } from "utils";
import { useModal } from "hooks";
import { ModalImageView } from "./Modals";

interface LookItemProps {
  look: TLook;
};

function ShopLookItem({ look }: LookItemProps) {
  const { CartProducts } = useShoppingCart();
  const { ModalManager } = useModal();

  return (
    <>
      <View style={'item'} key={look.id}>
          <ImgZoom src={look?.banner} h={14} rounded={3} seconds={0.2} description={look.description} onPress={ModalManager.open} />
          <Text style='description' text={look?.description} />
          <Text style='price' text={formatPrice(look?.price)} />
    
          <View style='add-cart'>
            <View style='icon'><FaCartPlus size={19} /></View>
            <Button text='Add to Cart' onPress={() => CartProducts.looks.add(look.id)} />
          </View>
      </View>
      
      <ModalImageView isOpen={ModalManager.is} onClose={ModalManager.close} src={look?.banner} />
    </>
  );
}

const ShopLookItemStyles = myStyles.style((theme) => ([
  theme.myStyles.childClass('item', [
    theme.w.size(19),
    theme.h.min(28),
    theme.border.rounded.size(0.55),
    theme.bg.white,
    theme.column.startBetween,
    theme.padding.full.size(1.2),
    theme.padding.top.size(2.2),
    theme.presets.shadow.box,

    theme.responsiveness.platforms({
      mobile: [theme.w.size(21)]
    })
  ], [
    theme.myStyles.childClass('description', [
      theme.margin.top.size(1.8),
      theme.font.apply('md', 0.9, theme.font.typography.text, theme.colors.primary)
    ]),

    theme.myStyles.childClass('price', [
      theme.margin.top.size(0.2),
      theme.font.apply('sb', 1.5, theme.font.typography.text, theme.colors.black)
    ]),

    theme.myStyles.childClass('add-cart', [
      theme.margin.top.size(1.5),
      theme.margin.bottom.size(1),
      theme.w.size(100, '%'),
      theme.border.rounded.size(0.25),
      theme.bg.primary,
      theme.font.apply('md', 0.85, theme.font.typography.text, theme.colors.white),
    ], [
      theme.myStyles.childClass('icon', [
        theme.border.rounded.size(0.25),
        theme.padding.vertical.size(0.5),
        theme.padding.horizontal.size(1.5),
        theme.h.size(100, '%'),
        theme.bg.primaryDark,
        theme.centerColumn
      ]),
      
      theme.myStyles.childTag('button', [
        theme.padding.vertical.size(0.5),
        theme.w.size(100, '%'),
        theme.border.rounded.size(0.25),
        theme.transition.apply(0.2),
        theme.effect.hover.inOwn([theme.bg.primaryDark])
      ])
    ]),
  ])
]));

export { ShopLookItem, ShopLookItemStyles };
