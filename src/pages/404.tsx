import { View, TitlePage, myStylesProvider, Text, Link } from '_lib/web';
import { onMount, useState } from '_lib/global';
import { Loading } from 'components';

export default function MyPageNotFound() {
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  onMount(() => { setTimeout(() => setIsLoadingPage(false), 0) });

  if (isLoadingPage) return <Loading />;

  return (
    <MyStyles>
      <View style={`page`}>
        <TitlePage t='Ops...' />
        <View style={'not-found'}>
          <Text type='h1' text='Ops... página não encontrada' />
          <Link href='/'>
            <Text text='voltar para página principal' />
          </Link>
        </View>
      </View>
    </MyStyles>
  );
}

const MyStyles = myStylesProvider.create((theme) => ([
  theme.myStyles.create('not-found', [
    theme.w.size(100, '%'),
    theme.h.min(100, 'vh'),
    theme.centerColumn,
    theme.gapEls.full.size(2.5),
    theme.bg.primary,
    theme.textColor.white
  ], [
    theme.myStyles.child('h1', [theme.font.apply('sb', 2, theme.font.typography.title, theme.colors.white)]),
    theme.myStyles.child('a', [
      theme.font.apply('rg', 1, theme.font.typography.text, theme.colors.white),
      theme.font.style.underline,
      theme.transition.apply(0.2),
      theme.effect.hover.inOwn([theme.effect.filter.glow(0.8)])
    ]),
  ])
]), 'div', true);
