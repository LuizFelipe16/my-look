import { View, myStyles, Text, Button, Spinner, Link } from '_lib/web';
import { Page, ShopLookItem, ShopLookItemStyles } from 'components';
import { filters } from 'data';
import { TLookType } from 'types';
import { theme } from '_app';
import { useProducts, useShoppingCart } from 'context';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Flex, Text as CText, Tooltip } from '@chakra-ui/react';
import { useProfile } from 'hooks';

export default function Shop() {
  const { Products } = useProducts();
  const { CartProducts } = useShoppingCart();
  const { Session } = useProfile();

  const handleFilterLooks = (type: TLookType) => {
    if (type === 'none') {
      Products.setLooks(Products.looks.data);
      Products.looks.setSelectedFilter(type);
      return;
    }

    const oldData = [...Products.looks.data];
    const filteredLooks = oldData.filter(l => l.type === type);

    Products.looks.setSelectedFilter(type);
    Products.setLooks(() => [...filteredLooks]);
  }

  const renderFilter = (filter: TLookType) => (
    <Button 
      key={filter}
      style={`filter ${Products.looks.selectedFilter === filter && 'selected'}`} 
      text={filter === 'none' ? 'All Looks' : filter} 
      onPress={() => handleFilterLooks(filter)} 
    />
  );

  return (
    <Page styles={MyStyles} stylesProps={{ imgHeigth: 14, imgUnity: '%' }} title={'Shop'}>
      <View style={'shop'}>
        <View style='header'>
          <Text type='h1' text='All Looks' />

          <View style='filters-looks'>
            <View style='wrapper-filters'>
              {filters.map(f => renderFilter(f))}
            </View>

            <Link href='/cart'>
              <Tooltip label='Go to Cart' bg={theme.colors.primary}>
                <Flex flexDirection='row' position='relative' mr='2'>
                  {!Session.isActivated() && (
                    <Flex w='6' h='6' align='center' justify='center' borderRadius={9999} bg={theme.colors.primary} position='absolute' right={-3} top={-2}>
                      <CText fontSize={12} color={theme.colors.background}>{CartProducts.length}</CText>
                    </Flex>
                  )}
                  <AiOutlineShoppingCart color={theme.colors.primary} size={28} />
                </Flex>
              </Tooltip>
            </Link>
          </View>
        </View>
        
        <View style={'items'}>
          {!Products.looks.data || Products.looks.loading ? (
            <View style='loading'>
              <Spinner color={theme.colors.primary} />
            </View>
          ) : Products.looks.data.map(l => <ShopLookItem key={l.id} look={l} />)}
        </View>
      </View>
    </Page>
  );
}

const LookFilters = myStyles.style((theme) => ([
  theme.myStyles.childClass('header', [
    theme.margin.full.in(7, 0, 1, 0),
    theme.w.size(100, '%'),
    theme.gapEls.full.size(1.5),
    theme.row.centerBetween,

    theme.myStyles.childTag('h1', [theme.font.apply('bl', 2, theme.font.typography.text, theme.colors.black)]),

    theme.myStyles.childClass('filters-looks', [theme.row.centerBetween, theme.w.size(80, '%')], [
      theme.myStyles.childClass('wrapper-filters', [
        theme.w.auto(),
        theme.row.centerStart, 
        theme.gapEls.full.size(1),
      ], [
        theme.myStyles.childClass('filter', [
          theme.padding.horizontal.size(1.5),
          theme.padding.vertical.size(0.3),
          theme.bg.grayVeryLight,
          theme.border.rounded.circle,
          theme.border.fill(0.14, theme.colors.blackTransparent),
          theme.font.apply('md', 0.8, theme.font.typography.text, theme.colors.black),
          theme.transition.apply(0.2),
          theme.effect.hover.inOwn([theme.effect.filter.glow(0.9)]),
  
          theme.myStyles.inOwnHasClass('selected', [
            theme.bg.primary,
            theme.border.fill(0.14, theme.colors.primaryDark),
            theme.textColor.white,
          ])
        ])
      ])
    ])
  ]),
]));

const MyStyles = myStyles.mutate.createPage((theme, props) => ([
  theme.myStyles.create('shop', [
    theme.w.size(100, '%'),
    theme.h.min(100, 'vh'),
    theme.column.startStart,
    theme.padding.horizontal.size(3),
    theme.padding.bottom.size(3)
  ], [
    LookFilters,

    theme.myStyles.childClass('items', [
      theme.w.size(100, '%'), 
      theme.h.fill(), 
      theme.gapEls.full.size(1), 
      theme.flex.breakLine,
      theme.row.centerStart,
    ], [
      ShopLookItemStyles,

      theme.myStyles.childClass('loading', [theme.w.fill(), theme.centerRow])
    ]),
  ])
]), 'div', true);
