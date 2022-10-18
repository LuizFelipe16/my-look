import { View, myStyles, Text, ImgZoom, Button } from '_lib/web';
import { TLook } from 'types';
import { formatPrice } from 'utils';
import { useShoppingCart } from 'context';
import { ModalImageView } from 'components/Modals';
import { useModal } from 'hooks';

interface CardLookProps {
  look: TLook;
};

const imgHeigth = 25;
const imgHeigtUnity = 'rem';

function CardLook({ look }: CardLookProps) {
  const { CartProducts } = useShoppingCart();
  const { ModalManager } = useModal();
 
  return (
    <>
      <View key={look.id} style={'card-look'}> 
        <ImgZoom src={look.banner} h={imgHeigth} hUnity={imgHeigtUnity} seconds={0.2} style={'img-look'} description='Look One' onPress={ModalManager.open} />
        <Text style={`description`} text={look.name} />
        <View style={'tags'}>
          <Text text={formatPrice(look.price)} />
          <Button text='Buy Now!' onPress={() => CartProducts.looks.add(look.id)} />
        </View>
      </View>

      <ModalImageView isOpen={ModalManager.is} onClose={ModalManager.close} src={look?.banner} />
    </>
  );
}

const CardLookStyles = myStyles.style(theme => ([
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
      theme.bg.white
    ], [
      theme.myStyles.child('p', [theme.font.apply('md', 1.5, theme.font.typography.title, theme.colors.black)]),
      theme.myStyles.child('button', [
        theme.h.fill(),
        theme.padding.vertical.sm,
        theme.padding.horizontal.sm,
        theme.w.size(45, '%'),
        theme.border.rounded.inPositions(2, 'top', 'left'),
        theme.border.rounded.inPositions(2, 'bottom', 'left'),
        theme.bg.primary,
        theme.font.apply('rg', 0.9, theme.font.typography.title, theme.colors.background),
        theme.transition.apply(0.2),
        theme.effect.hover.inOwn([theme.effect.filter.glow(0.8)])
      ]),
    ])
  ]),
]));

export { CardLook, CardLookStyles };
