import { APIClientTypes } from "types";
import { ImgZoom, Text, View, Button, myStyles, Link } from "_lib/web";
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { formatPrice } from "utils";
import { useModal } from "hooks";
import { ModalImageView } from "./Modals";

function ProductCard({ product }: { product: APIClientTypes.TProduct }) {
  const { ModalManager } = useModal();

  return (
    <>
      <View style={'product'} key={product.id}>
        <Text style='key-id' text={product.id} />
        <ImgZoom src={'/' + product?.banner} h={18} rounded={0.5} seconds={0.2} description={product.description} onPress={ModalManager.open} />

        <View style='wrapper-content'>
          <Text style='name' text={product?.name} />

          <Text style='description' text={product?.description} />

          <View variant='my-center-row my-gap-0_5'>
            <Text style='dash-tag' text={`Stock ${product.stock}`} />
            <Text style='dash-tag' text={product?.type} />
          </View>

          <Text style='price' text={formatPrice(product?.price)} />

            <Link style='link' href={'/lock/adm/product/' + product.id}>
          <View style='add-cart'>
              <View style='icon'><FaExpandArrowsAlt size={19} /></View>
              <Button text='View product' onPress={() => null} />
          </View>
            </Link>
        </View>
      </View>

      <ModalImageView isOpen={ModalManager.is} onClose={ModalManager.close} src={'/' + product?.banner} />
    </>
  )
}

const ProductCardStyles = myStyles.style(theme => ([
  theme.w.size(19),
  theme.h.min(20),
  theme.border.rounded.size(0.5),
  theme.bg.white,
  theme.column.centerStart,
  theme.presets.shadow.box,
  theme.position.relative,

  theme.responsiveness.platforms({ mobile: [theme.w.size(21)] }),

  theme.effect.hover.inOwn([theme.presets.shadow.hover], 0.5),
  theme.effect.hover.inOwnChild('key-id', [theme.effect.filter.opacity(1)], true, 0.2),

  theme.myStyles.childClass('key-id', [
    theme.w.size(90, '%'),
    theme.font.apply('sb', 0.9, theme.font.typography.text, theme.colors.background),
    theme.position.values({ top: 10, left: 0, right: 0 }),
    theme.position.absolute,
    theme.bg.primary,
    theme.border.rounded.circle,
    theme.padding.vertical.size(0.3),
    theme.padding.horizontal.size(1),
    theme.overlap.value(10),
    theme.textColor.background,
    theme.centerRow,
    theme.presets.shadow.hover,
    theme.effect.filter.opacity(0.7),
    theme.transition.apply(0.2)
  ]),

  theme.myStyles.childClass('wrapper-content', [
    theme.presets.fillView,
    theme.padding.full.size(1),
    theme.column.startStart,
    theme.elements.spacing.size(0.8),
  ], [
    theme.myStyles.childClass('name', [theme.font.apply('bl', 1.2, theme.font.typography.text, theme.colors.primary)]),

    theme.myStyles.childClass('description', [theme.font.apply('md', 0.9, theme.font.typography.text, theme.colors.black)]),

    theme.myStyles.childClass('price', [theme.font.apply('sb', 1.3, theme.font.typography.text, theme.colors.black)]),

    theme.myStyles.class('dash-tag', [
      theme.font.apply('sb', 0.75, theme.font.typography.text, theme.colors.black),
      theme.padding.vertical.size(0.2),
      theme.padding.horizontal.size(1),
      theme.bg.blackTransparent,
      theme.border.fill(0.15, '#60616340'),
      theme.border.rounded.circle,
    ]),

    theme.myStyles.childClass('link', [theme.w.fill()], [
      theme.myStyles.childClass('add-cart', [
        theme.w.fill(),
        theme.border.rounded.size(0.25),
        theme.bg.primary,
        theme.font.apply('md', 0.85, theme.font.typography.text, theme.colors.white),
      ], [
        theme.myStyles.childClass('icon', [
          theme.border.rounded.size(0.25),
          theme.padding.vertical.size(0.5),
          theme.padding.horizontal.size(1.5),
          theme.h.fill(),
          theme.bg.primaryDark,
          theme.centerColumn
        ]),

        theme.myStyles.childTag('button', [
          theme.padding.vertical.size(0.5),
          theme.w.fill(),
          theme.border.rounded.size(0.25),
          theme.effect.hover.inOwn([theme.bg.primaryDark], 0.2)
        ])
      ]),
    ]),
  ])
]));

export { ProductCard, ProductCardStyles };
