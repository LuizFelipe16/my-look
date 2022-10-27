import { PageLocked } from 'components';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { TLook } from 'types';
import { formatPrice } from 'utils';
import { myStyles, View, Text, Button } from '_lib/web';

const page = 'requests'

function Product({ look }: { look: TLook }) {
  return (
    <View style={'request'} key={look.id}>
      <Text style='key-id' text={'#' + look.id} />

      <Text style='name' text={look?.name} />

      <Text style='req-tag' text={'send'} />

      <Text style='price' text={formatPrice(look?.price)} />

      <Button style='expand' onPress={() => null}>
        <FaExpandArrowsAlt size={17} />
      </Button>
    </View>
  );
}

export default function Requests() {
  return (
    <PageLocked styles={MyStyles} title={page}>
      <View style='header'>
        <Text text='TOTAL'><strong>0</strong></Text>
      </View>

      <View style='wrapper-sales'>
      </View>
    </PageLocked>
  );
}

const RequestStyles = myStyles.style(theme => ([
  theme.w.fill(),
  theme.padding.vertical.size(1.2),
  theme.padding.horizontal.size(1.5),
  theme.border.rounded.size(1),
  theme.bg.blackTransparent,
  theme.row.centerBetween,

  theme.effect.hover.inOwn([theme.presets.shadow.hover], 0.3),

  theme.myStyles.childClass('key-id', [theme.w.min(10), theme.font.apply('sb', 0.9, theme.font.typography.text, theme.colors.grayLight)]),

  theme.myStyles.childClass('name', [theme.w.min(10), theme.font.apply('sb', 1, theme.font.typography.text, theme.colors.primary)]),

  theme.myStyles.childClass('price', [theme.font.apply('md', 1, theme.font.typography.text, theme.colors.black)]),

  theme.myStyles.class('req-tag', [
    theme.font.apply('md', 0.8, theme.font.typography.text, theme.colors.success),
    theme.padding.vertical.size(0.2),
    theme.padding.horizontal.size(1),
    theme.bg.successLight,
    theme.border.fill(0.15, theme.colors.success),
    theme.border.rounded.circle,
  ]),

  theme.myStyles.childClass('expand', [
    theme.padding.horizontal.size(0.5),
    theme.padding.vertical.size(0.5),
    theme.border.rounded.size(0.5),
    theme.effect.hover.inOwn([theme.bg.blackTransparent], 0.2),
  ])
]));

const RequestsStyles = myStyles.style(theme => ([
  theme.presets.fillView,
  theme.elements.spacing.size(1),
  theme.flex.breakLine,
  theme.column.centerStart,
  theme.margin.top.size(1)
]));

const HeaderStyles = myStyles.style(theme => ([
  theme.w.fill(),
  theme.row.centerBetween,
  theme.padding.vertical.size(1),
  theme.padding.horizontal.size(2),
  theme.bg.primary,
  theme.border.rounded.size(0.5),
  theme.border.rounded.inArea(3, 'top'),

  theme.myStyles.childTag('p', [theme.font.apply('bl', 1, theme.font.typography.text, theme.colors.grayVeryLight)], [
    theme.myStyles.childTag('strong', [
      theme.margin.left.sm,
      theme.font.apply('sb', 1.5, theme.font.typography.text, theme.colors.background)
    ])
  ]),
]));

const MyStyles = myStyles.mutate.createPage((theme) => ([
  theme.myStyles.create(page, [
    theme.w.size(100, '%'),
    theme.h.min(100, 'vh'),
    theme.column.startStart,
    theme.padding.horizontal.size(3),
    theme.padding.top.size(7),
    theme.padding.bottom.size(3),
  ], [
    theme.myStyles.childClass('header', [HeaderStyles]),
    theme.myStyles.childClass('wrapper-sales', [RequestsStyles], [theme.myStyles.childClass('request', [RequestStyles])]),
  ])
]), 'div', true);
