import { View, TitlePage, myStylesProvider, Text } from '_lib/web';
import { onMount, useState } from '_lib/global';
import { Navigation, Loading, Footer } from 'components';
import { mylookterms } from 'data/termuse';

export default function Terms() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  onMount(() => { setTimeout(() => setIsLoadingPage(false), 0) });

  if (isLoadingPage) return <Loading />;

  return (
    <MyStyles>
      <View style={`page`}>
        <TitlePage t='Home' />
        <Navigation />

        <View style={`terms`}>
          <Text type='h1' text='MyLook Terms and Conditions of Use' />
          <Text text={mylookterms} />
        </View>

        <Footer />
      </View>
    </MyStyles>
  );
}

const MyStyles = myStylesProvider.create((theme) => ([
  theme.myStyles.create('terms', [
    theme.w.size(100, '%'),
    theme.h.auto(),
    theme.h.min(90, 'vh'),
    theme.column.centerStart,
    theme.margin.top.size(6),
    theme.padding.full.md,
    theme.padding.bottom.size(4),
  ], [
    theme.myStyles.child('h1', [
      theme.w.size(80, '%'),
      theme.font.apply('bl', 3, theme.font.typography.title, theme.colors.black),
      theme.font.style.alignLeft,
      theme.margin.top.size(3),
    ]),
    
    theme.myStyles.child('p', [
      theme.w.size(80, '%'),
      theme.font.apply('sr', 1.2, theme.font.typography.text, theme.colors.black),
      theme.font.style.alignLeft,
      theme.margin.top.size(3),
    ]),
  ])
]), 'div', true);
