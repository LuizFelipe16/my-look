import { View, TitlePage, myStylesProvider, Text } from '_lib/web';
import { onMount, useState } from '_lib/global';
import { Loading } from 'components';

export default function Welcome() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  onMount(() => { setTimeout(() => setIsLoadingPage(false), 0) });

  if (isLoadingPage) return <Loading />;

  return (
    <MyStyles>
      <View style={`page`}>
        <TitlePage t='Welcome' />

        <View style={`page-welcome`}>
          <Text data-aos="fade-right" data-aos-duration="800" type='h1' text='MyLook Terms and Conditions of Use' />
        </View>
      </View>
    </MyStyles>
  );
}

const MyStyles = myStylesProvider.create((theme) => ([
  theme.myStyles.create('page-welcome', [
    theme.w.size(100, '%'),
    theme.h.auto(),
    theme.h.min(100, 'vh'),
    theme.column.centerStart,
    theme.padding.full.md,
    theme.bgImage.path('/welcome.jpg')
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
