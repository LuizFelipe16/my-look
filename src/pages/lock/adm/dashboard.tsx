import { PageLocked, ProductCard, ProductCardStyles } from 'components';
import { useProducts } from 'context';
import { FaPlus } from 'react-icons/fa';
import { theme } from '_app';
import { myStyles, View, Text, Link, Spinner } from '_lib/web';

const page = 'dashboard';

export default function Dashboard() {
  const { Products } = useProducts();

  return (
    <PageLocked styles={MyStyles} title={page}>
      <View style='header'>
        {Products.looks.loading
          ? <Spinner color={theme.colors.background} />
          : <Text text='TOTAL'><strong>{Products.looks.length}</strong></Text>
        }

        <Link style='add' href='/lock/adm/product/'>
          <FaPlus color={theme.colors.primary} />
        </Link>
      </View>

      <View style='wrapper-products'>
        {Products.looks.loading ? (
          <View style='loading'>
            <Spinner color={theme.colors.primary} />
          </View>
        ) : Products.looks.data.map(l => <ProductCard product={l} />)}
      </View>
    </PageLocked>
  );
}

const ProductsStyles = myStyles.style(theme => ([
  theme.presets.fillView,
  theme.elements.spacing.size(1),
  theme.flex.breakLine,
  theme.row.centerStart,
  theme.margin.top.size(1),
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

  theme.myStyles.childClass('add', [
    theme.padding.horizontal.size(5),
    theme.padding.vertical.size(0.5),
    theme.bg.grayVeryLight,
    theme.margin.left.sm,
    theme.font.size(1),
    theme.border.rounded.circle,
    theme.effect.hover.inOwn([theme.effect.filter.glow(0.9)], 0.2)
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
    theme.myStyles.childClass('wrapper-products', [ProductsStyles], [
      theme.myStyles.childClass('loading', [theme.w.fill(), theme.centerRow]),
      theme.myStyles.childClass('product', [ProductCardStyles])
    ]),
  ])
]), 'div', true);
